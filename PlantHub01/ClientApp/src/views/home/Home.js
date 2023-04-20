import { useState, useEffect, useRef } from 'react';
import { ApiQueries } from "../../components/ApiQueries";
import { Hero } from "../../components/Hero";
import { PlantCard } from "../../components/PlantCard";
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';

export const Home = ({ mapsLoaded }) => {
    const [plants, setPlants] = useState([]);
    const [users, setUsers] = useState([]);
    const userLocation = useRef(null);
    const [searchInput, setSearchInput] = useState('');

    
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
                        await sleep(index * 100);
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
                setPlants(updatedPlants.sort((a, b) => a.distance - b.distance));
            });
        } else {
            alert("Geolocation is not supported by this browser.");
        }
    };

    //Search by town
    const searchByTown = async () => {
        try {
            const townCoordinates = await getPlantCoordinates(searchInput);
            const updatedPlants = await Promise.all(
                plants.map(async (plant) => {
                    const plantLocation = getCity(plant.userId);
                    try {
                        const plantCoordinates = await getPlantCoordinates(plantLocation);
                        const distance = calculateDistance(townCoordinates, plantCoordinates);
                        return { ...plant, distance };
                    } catch (error) {
                        console.error('Error fetching plant coordinates or calculating distance:', error);
                        return plant;
                    }
                })
            );
            setPlants(updatedPlants.sort((a, b) => a.distance - b.distance));
        } catch (error) {
            console.error('Error fetching town coordinates:', error);
        }
    };


    // Function to calculate distance between two coordinates
    const calculateDistance = (pointA, pointB) => {
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
            <Divider />
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "start", marginTop: "-90px" }}>
                <TextField
                    size="small"
                    id="outlined-basic"
                    label="Search by town"
                    variant="outlined"
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    sx={{
                        opacity: 0.9,

                        "& .MuiOutlinedInput-root": {
                            "&.Mui-focused fieldset": {
                                borderColor: "#609966"
                            }
                        },

                        "& label.Mui-focused": {

                            color: "#609966"

                        }
                    }}
                />
                <Button variant="contained" onClick={searchByTown} style={{ marginLeft: "15px", backgroundColor: "#609966" }}>
                    Search
                </Button>
                <Button variant="contained" onClick={() => getLocation()} style={{ marginLeft: "15px", backgroundColor: "#609966" }}>Nearby</Button>

            </div>
            {/*This will show the plants that users can browse through on the home page*/}
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", flexWrap: "wrap", marginTop: "90px" }}>
                {plants.map((plant) => {
                    const plantLocation = getCity(plant.userId);
                    return (
                        plant.available && (
                            <div key={plant.id} style={{ flexBasis: "25%", marginBottom: "30px" }}>
                                <PlantCard plant={plant} plantLocation={plantLocation} />
                            </div>
                        )
                    );
                })}
            </div>
        </div>
    );
}

//old plant map code. this genereated a error
//{plants.map((plant) => {
//        const plantLocation = getCity(plant.userId);
//        return (
//            <>
//                {
//                    plant.available
//                        ?
//                        <div key={plant.id} style={{ flexBasis: "25%", marginBottom: "30px" }}>
//                            <PlantCard plant={plant} plantLocation={plantLocation} />
//                        </div>
//                        :
//                        null
//                }
//            </>
//        );
//    })}