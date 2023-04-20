import * as React from 'react';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ToggleAvailable } from './ToggleAvailable';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './ViewPlant.css';

// link til rapidapisiden. Kun 40 calls/month
// https://rapidapi.com/rosoemawd/api/house-plants

export const ViewPlant = () => {
    //const [plantInfo, setPlantInfo] = useState(null);
    const [plantData, setPlantData] = useState({});

    useEffect(() => {
        fetchPlantData();
    }, []);


    // Location is used for storing PlantID
    const plant = useLocation();

    const fetchPlantData = async () => {
        if (!plant.state.id) {
            return;
        } else {
            await fetch("https://localhost:7062/api/Plants/" + plant.state.id)
                .then((response) => response.json())
                .then(async (data) => setPlantData(data));

            await console.log(plantData);
        }
};


    return (
        <div className="view-plant-container">
            <div className="plant-card-info">
                <Card sx={{ width: 250, borderRadius: "5px" }}>
                    <CardMedia
                        sx={{ height: 300 }}
                        image={`${window.location.origin}/images/${plantData.userId}/${plantData.image}`}
                        title={plantData.name}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                            {plantData.name}
                        </Typography>
                        {plant.price > 0 ? (
                            <Typography variant="body2" color="text.secondary">
                                {plantData.price} NOK
                            </Typography>) :
                            <Typography variant="body2" color="text.secondary">
                                {plantData.plantName}
                            </Typography>}
                        <Typography variant="body2" color="text.secondary">
                            {plantData.plantFamily}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <ToggleAvailable />
                    </CardActions>
                </Card>
            </div>

            <div className="plant-info-container">
                <div>
                    <Typography variant="h5">
                        Latin name
                    </Typography>
                    <Typography variant="h5">
                        Origin
                    </Typography>
                    <Typography variant="h5">
                        Climate
                    </Typography>
                    <Typography variant="h5">
                        Max temperature
                    </Typography>
                    <Typography variant="h5">
                        Min temperature
                    </Typography>
                    <Typography variant="h5">
                        Ideal light
                    </Typography>
                    <Typography variant="h5">
                        Tolerated light
                    </Typography>
                    <Typography variant="h5">
                        Watering
                    </Typography>
                    <Typography variant="h5">
                        Insects
                    </Typography>
                    <Typography variant="h5">
                        Diseases
                    </Typography>
                </div>
            </div>
        </div>
    )
}