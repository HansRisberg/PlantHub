import { useState, useEffect, useRef } from 'react';
import { ApiQueries } from "../../components/ApiQueries";
import { Hero } from "../../components/Hero";
import { PlantCard } from "../../components/PlantCard";

// This is test data for the frontend for landing page in order to see how it will look like after we get data from db
// Variable "data" can be deleted after we have seeded db with actual data

let initMap = () => {
    // Put your initialization logic here, if needed
};

window.initMap = () => {
    initMap();
};

export const Home = () => {
    const [plants, setPlants] = useState([]);
    const [users, setUsers] = useState([]);
    const userLocation = useRef(null);

    useEffect(() => {
        const fetchData = async () => {
            const plantsData = await ApiQueries().fetchPlants();
            const usersData = await ApiQueries().fetchUsers();
            setPlants(plantsData);
            setUsers(usersData);
        };
        fetchData();
    }, []);

    // Add geocode function to convert address to coordinates
    const getPlantCoordinates = async (address) => {
        console.log(window.google.maps); // Check if the object is properly loaded
        return new Promise((resolve, reject) => {
            const geocoder = new window.google.maps.Geocoder();
            geocoder.geocode({ address: address }, (results, status) => {
                if (status === "OK") {
                    resolve(results[0].geometry.location);
                } else {
                    reject(status);
                }
            });
        });
    };

    // Update getLocation function to call getPlantCoordinates
    const getLocation = async () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(async (position) => {
                userLocation.current = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                };

                const updatedPlants = await Promise.all(
                    plants.map(async (plant) => {
                        const plantLocation = getCity(plant.userId);
                        const plantCoordinates = await getPlantCoordinates(
                            plantLocation
                        );
                        const distance = calculateDistance(
                            userLocation.current,
                            plantCoordinates
                        );
                        return { ...plant, distance };
                    })
                );

                setPlants(updatedPlants);
            });
        } else {
            alert("Geolocation is not supported by this browser.");
        }
    };
    // Function to calculate distance between two coordinates
    const calculateDistance = (pointA, pointB) => {
        console.log(window.google.maps); // Check if the object is properly loaded
        const latLngA = new window.google.maps.LatLng(pointA.lat, pointA.lng);
        const latLngB = new window.google.maps.LatLng(pointB.lat(), pointB.lng());
        return window.google.maps.geometry.spherical.computeDistanceBetween(
            latLngA,
            latLngB
        );
    };

    function getCity(userId) {
        const user = users.find((user) => user.id === userId);
        if (user) {
            for (const key in user) {
                if (key.toLowerCase() === "location") {
                    const locationArray = user[key].split(',');
                    const city = locationArray[0].trim();
                    return city;
                }
            }
        }
        return '';
    }

    function showPosition(position) {
        console.log("User's location:", position.coords.latitude, position.coords.longitude);
    }

    return (
        <div>
            <Hero />
            {/*This will show the plants that users can browse through on the home page*/}
            <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
                <button style={{ marginRight: "30px" }} onClick={() => getLocation()}>Nearby</button>
                <input type="text" placeholder="Search by town" />
            </div>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", flexWrap: "wrap" }}>
                {plants
                    .sort((a, b) => new Date(a.Added) - new Date(b.Added))
                    .map((plant) => {
                        const plantLocation = getCity(plant.userId);
                        return (
                            <div key={plant.id} style={{ flexBasis: "25%", marginBottom: "30px" }}>
                                <PlantCard plant={plant} plantLocation={plantLocation} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

//<div style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", flexWrap: "wrap" }}>
//    {plants.map((plant) => {
//        return (
//            <div style={{ flexBasis: "33.33%" }}>
//                <PlantCard plant={plant} />
//            </div>
//        )
//    })}
//</div>
