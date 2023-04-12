//import React, { useState } from 'react';
//import plant from '../../assets/plant1.jpg';
//import { Hero } from '../../components/Hero';
//import { PlantCard } from '../../components/PlantCard';
//import useGeolocation from '../../components/useGeolocation'; // Import the custom hook

//// Test data
//const data = [
//    {
//        nickname: "Teemo",
//        species: "Herb",
//        price: "100",
//        image: plant
//    },
//    {
//        nickname: "Janna",
//        species: "Vine",
//        price: "50",
//        image: plant
//    },
//    {
//        nickname: "Nami",
//        species: "Bush",
//        price: "0",
//        image: plant
//    },
//    {
//        nickname: "Lulu",
//        species: "Vine",
//        price: "300",
//        image: plant
//    }

//];
//export const Home = () => {
//    const { location, error } = useGeolocation(); // Use the custom hook to get the user's location
//    const [plants, setPlants] = useState(data); // Initialize the state with test data

//    // Function to handle the "Search Nearby" button click
//    const searchNearby = () => {
//        if (location.latitude && location.longitude) {
//            // Fetch data from the server-side API using the latitude and longitude
//            fetch(`/api/plants/nearby?latitude=${location.latitude}&longitude=${location.longitude}`)
//                .then((response) => response.json())
//                // Update the 'plants' state with the received data
//                .then((data) => setPlants(data));
//        }
//    };

//    export const Home = () => {
//        return (
//            <div>
//                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>
//                    <button
//                        type="button"
//                        id="searchNearbyBtn"
//                        style={{ marginRight: "30px" }}
//                        onClick={() => {
//                            if (navigator.geolocation) {
//                                navigator.geolocation.getCurrentPosition((position) => {
//                                    console.log("Latitude: " + position.coords.latitude + ", Longitude: " + position.coords.longitude);
//                                    // Call API to fetch plants near the user's location.
//                                });
//                            } else {
//                                alert("Geolocation is not supported by this browser.");
//                            }
//                        }}
//                    >
//                        Search Nearby
//                    </button>
//                    <div>
//                        <input type='text' id='searchAddress' placeholder='Enter an address' />
//                        <button
//                            type="button"
//                            id="searchAddressBtn"
//                            onClick={() => {
//                                const address = document.getElementById("searchAddress").value;
//                                // Geocode the address using Google Maps API, then call the API to fetch plants near the provided location.
//                            }}
//                        >
//                            Search
//                        </button>
//                    </div>
//                </div>
//                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
//                    {plants.map((plant) => (
//                        <div>
//                            <PlantCard plant={plant} />
//                        </div>
//                    ))}
//                </div>
//            </div>
//        )
//    };

////export const Home = () => {
////    return (
////        <div>
////            <Hero />
////            {/*This will show the plants that users can browse through on the home page*/}
////            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
////                {data.map((plant) => {
////                    return (
////                        <div>
////                            <PlantCard plant={plant} />
////                        </div>
////                    )
////                })}
////            </div>
////        </div>
////    );
////}