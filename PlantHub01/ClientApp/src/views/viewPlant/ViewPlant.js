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
import DeviceThermostat from '@mui/icons-material/DeviceThermostat';
import WbSunny from '@mui/icons-material/WbSunny';
import Coronavirus from '@mui/icons-material/Coronavirus';
import PestControl from '@mui/icons-material/PestControl';
import WaterDrop from '@mui/icons-material/WaterDrop';
import Link from '@mui/material/Link';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

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

    const fetchPlantData = async () => {
        if (!plant.state.id) {
            return;
        } else {
            await fetch("https://localhost:7062/api/Plants/" + plant.state.id)
                .then((response) => response.json())
                .then(async (data) => {
                    setPlantData(data);
                    await fetchPlantInfo(data.plantName);
                });
        }
    };

    const fetchPlantInfo = async (commonName) => {
        console.log(commonName);
        //console.log(`${process.env.REACT_APP_PLANT_API_KEY}`);
        const response = await fetch(
            `https://house-plants.p.rapidapi.com/common/${commonName}`,
            {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': "dd434f6346msh493f02848f34a7fp1c9865jsn8cfd93ae63b3",
                    'X-RapidAPI-Host': 'house-plants.p.rapidapi.com',
                },
            },
        );
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            setPlantInfo(data[0]);
        } else {
            console.error('Error fetching plant info:', response.status, response.statusText);
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
                <Link href="/profile"
                    variant="body2"
                    style={{ color: "#40513B", textDecorationColor: "#40513B", marginTop: "8px", textDecoration: "none" }}>
                    <ArrowBackIcon style={{ fill: "#40513B", fontSize: "medium" }} />
                    Back to profile
                </Link>
            </div>

            <div className="plant-info-container">
                <div className="plant-info-box">
                    <Typography variant="h4" style={{ marginBottom: "10px"}}>
                        Plant care
                    </Typography>
                    <Typography variant="body2" color="text.secondary" style={{ marginBottom: "10px" }}>
                        Your plant has the beautiful latin name {plantInfo ? plantInfo.latin : "[No latin data]"} and originates from {plantInfo ? plantInfo.origin : "[No origin data]"}.
                        <br></br>
                        It thrives in a {plantInfo ? plantInfo.climate : "[No climate data]"} climate, and as all plant need care and love from it owner.
                    </Typography>
                    <Typography variant="h6" color="text.secondary" style={{ marginBottom: "10px" }}>
                        Here's some tips on how to take well care of me
                    </Typography>

                    <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", width: "350px" }}>
                        <Typography variant="body1">
                            <DeviceThermostat style={{ fill: "rgb(235, 110, 110)" }} />
                            Max temperature is {plantInfo ? plantInfo.tempmax.celsius : "[No temp data]"} celsius
                            <Typography variant="body2" color="text.secondary">
                                You shouldn't expose your plant of higher temperatures than this.
                            </Typography>
                        </Typography>
                    </div>

                    <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", width: "350px" }}>
                        <Typography variant="body1">
                            <DeviceThermostat style={{ fill: "rgb(129, 129, 218)" }} />
                            Min temperature {plantInfo ? plantInfo.tempmin.celsius : "[No temp data]"} celsius
                            <Typography variant="body2" color="text.secondary">
                                You shouldn't expose your plant of lower temperatures than this.
                            </Typography>
                        </Typography>
                    </div>

                    <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", width: "350px" }}>
                        <Typography variant="body1">
                            <WbSunny style={{ fill: "rgb(215, 215, 125)" }} />
                            Ideal light is {plantInfo ? plantInfo.ideallight : "[No light data]"}
                            <Typography variant="body2" color="text.secondary">
                                This is the perfect light for a happy plant.
                            </Typography>
                        </Typography>
                    </div>

                    <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", width: "350px" }}>
                        <Typography variant="body1">
                            <WbSunny style={{ fill: "rgb(215, 215, 125)" }} />
                            Tolerated light is {plantInfo ? plantInfo.toleratedlight : "[No light data]"}
                            <Typography variant="body2" color="text.secondary">
                                You shouldn't expose your plant of more light than this.
                            </Typography>
                        </Typography>
                    </div>

                    <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", width: "350px" }}>
                        <Typography variant="body1">
                            <WaterDrop style={{ fill: "rgb(129, 129, 218)" }} />
                            {plantInfo ? plantInfo.watering : "[No water data]"}
                            <Typography variant="body2" color="text.secondary">
                                Make sure to plant your water the correct amount. Too much, and it dies. Too little, and it dies.
                            </Typography>
                        </Typography>
                    </div>

                    <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", width: "350px" }}>
                        <Typography variant="body1">
                            <PestControl style={{ fill: "rgb(94, 165, 94)"}} />
                            Insects {plantInfo ? plantInfo.insects : "[No insect data]"}
                            <Typography variant="body2" color="text.secondary">
                                Avoid these buggy bugs.
                            </Typography>
                        </Typography>
                    </div>

                    <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", width: "350px" }}>
                        <Typography variant="body1">
                            <Coronavirus style={{ fill: "grey" }} />
                            Diseases {plantInfo ? plantInfo.diseases : "[No light data]"}
                            <Typography variant="body2" color="text.secondary">
                                ..and look out for these diseases!
                            </Typography>
                        </Typography>
                    </div>

                </div>
            </div>
        </div>
    )
}