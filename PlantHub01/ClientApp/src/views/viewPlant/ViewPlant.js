import * as React from 'react';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ToggleAvailable } from './ToggleAvailable';

export const ViewPlant = () => {
    useEffect(() => {
        fetchPlantData();
    }, []);

    const [plantData, setPlantData] = useState({});

    // Location is used for storing PlantID
    const plant = useLocation();


    const fetchPlantData = async () => {
        if (!plant.state.id) {
            return;
        } else {
            await fetch("https://localhost:7062/api/Plants/" + plant.state.id)
                .then((response) => response.json())
                .then((data) => setPlantData(data))
        }
    }

    return (
        <div>
            <h1>Plant</h1>
            <p>{plantData.name}</p>
            <p>{plantData.price}</p>
            <ToggleAvailable availableForSale={plantData.available} />
        </div>
    )
}