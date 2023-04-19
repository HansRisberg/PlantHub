import * as React from 'react';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ToggleAvailable } from './ToggleAvailable';

// link til rapidapisiden. Kun 40 calls/month
// https://rapidapi.com/rosoemawd/api/house-plants

export const ViewPlant = () => {
    useEffect(() => {
        fetchPlantData();
    }, []);
    const [plantInfo, setPlantInfo] = useState(null);
    const [plantData, setPlantData] = useState({});

    // Location is used for storing PlantID
    const plant = useLocation();

    const fetchPlantInfo = async (commonName) => {
        const response = await fetch(
            `https://house-plants.p.rapidapi.com/common/${commonName}`,
            {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': `${process.env.REACT_APP_PLANT_API_KEY}`,
                    'X-RapidAPI-Host': 'house-plants.p.rapidapi.com',
                },
            },
        );
        if (response.ok) {
            const data = await response.json();
            setPlantInfo(data[0]);
        } else {
            console.error('Error fetching plant info:', response.status, response.statusText);
        }
    };

    const fetchPlantData = async () => {
        if (!plant.state.id) {
            return;
        } else {
            await fetch("https://localhost:7062/api/Plants/" + plant.state.id)
                .then((response) => response.json())
                .then(async (data) => {
                    setPlantData({
                        name: data.name,
                        plantname: data.plantName,
                        price: data.price
                    });
                    console.log("Name from fetchPlantData:", plantData.plantname);
                    await fetchPlantInfo(data.plantName);
                });
        }
    };
    return (
        <div>
            <h1>Plant:</h1>
            <p>{plantData.plantname}</p>
            <p>Hello I'm called: {plantData.name}</p>
            <p>Price: {plantData.price}</p>

            {plantInfo && (
                <div className="plant-info-grid">
                    <div>Latin Name: {plantInfo.latin}</div>
                    <div>Category: {plantInfo.category}</div>
                    <div>Origin: {plantInfo.origin}</div>
                    <div>Climate: {plantInfo.climate}</div>
                    <div>Max Temperature: {plantInfo.tempmax.celsius}°C</div>
                    <div>Min Temperature: {plantInfo.tempmin.celsius}°C</div>
                    <div>Ideal Light: {plantInfo.ideallight}</div>
                    <div>Tolerated Light: {plantInfo.toleratedlight}</div>
                    <div>Watering: {plantInfo.watering}</div>
                    <div>Insects: {plantInfo.insects}</div>
                    <div>Diseases: {plantInfo.diseases}</div>
                </div>
            )}
            <ToggleAvailable />
        </div>
    );
}