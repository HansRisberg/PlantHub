import { useState, useEffect, useRef } from 'react';
import { ApiQueries } from "../../components/ApiQueries";
import { Hero } from "../../components/Hero";
import { PlantCard } from "../../components/PlantCard";

// This is test data for the frontend for landing page in order to see how it will look like after we get data from db
// Variable "data" can be deleted after we have seeded db with actual data

export const Home = ({ mapsLoaded }) => {
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

    //Test code to get coordinates of dummy address
    useEffect(() => {
        if (mapsLoaded) {
            const testAddress = '1600 Amphitheatre Parkway, Mountain View, CA';
            getPlantCoordinates(testAddress)
                .then((coordinates) => {
                    console.log('Dummy address coordinates:', coordinates);
                })
                .catch((error) => {
                    console.error('Error getting coordinates:', error);
                });
        }
    }, [mapsLoaded]);

    // Add geocode function to convert address to coordinates
    const getPlantCoordinates = async (address) => {
        console.log(window.google.maps); // Check if the object is properly loaded
        return new Promise((resolve, reject) => {
            const geocoder = new window.google.maps.Geocoder();
            geocoder.geocode({ address: address }, (results, status) => {
                if (status === "OK") {
                    const latitude = results[0].geometry.location.lat();
                    const longitude = results[0].geometry.location.lng();
                    resolve({ lat: latitude, lng: longitude });
                } else {
                    reject(status);
                }
            });
        });
    };
    async function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    // Update getLocation function to call getPlantCoordinates
    const getLocation = async () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(async (position) => {
                userLocation.current = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                };
                const updatedPlants = await Promise.all(
                    plants.map(async (plant, index) => {
                        await sleep(index * 400);
                        const plantLocation = getCity(plant.userId);
                        try {
                            const plantCoordinates = await getPlantCoordinates(plantLocation);
                            console.log(plant.name + ' coordinates:', plantCoordinates); // Log plant coordinates
                            const distance = calculateDistance(userLocation.current, plantCoordinates);
                            return { ...plant, distance };
                        } catch (error) {
                            console.error('Error fetching plant coordinates or calculating distance:', error);
                            return plant;
                        }
                    })
                );
                console.log("Before sorting:", updatedPlants);
                setPlants(updatedPlants.sort((a, b) => a.distance - b.distance));
            }); console.log("After sorting:", updatedPlants);
        } else {
            alert("Geolocation is not supported by this browser.");
        }
    };

    // Function to calculate distance between two coordinates
    const calculateDistance = (pointA, pointB) => {
        console.log(window.google.maps); // Check if the object is properly loaded
        const latLngA = new window.google.maps.LatLng(pointA.lat, pointA.lng);
        const latLngB = new window.google.maps.LatLng(pointB.lat, pointB.lng);
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

    return (
        <div>
            <Hero />
            {/*This will show the plants that users can browse through on the home page*/}
            <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
                <button style={{ marginRight: "30px" }} onClick={() => getLocation()}>Nearby</button>
                <input type="text" placeholder="Search by town" />
            </div>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", flexWrap: "wrap" }}>
                {plants.map((plant) => {
                    const plantLocation = getCity(plant.userId);
                    return (
                        <div key={plant.id} style={{ flexBasis: "25%", marginBottom: "30px" }}>
                            <PlantCard plant={plant} plantLocation={plantLocation} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}