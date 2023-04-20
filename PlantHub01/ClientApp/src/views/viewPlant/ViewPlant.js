import * as React from 'react';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ToggleAvailable } from './ToggleAvailable';
import './ViewPlant.css';
import DeviceThermostat from '@mui/icons-material/DeviceThermostat';
import WbSunny from '@mui/icons-material/WbSunny';
import Coronavirus from '@mui/icons-material/Coronavirus';
import PestControl from '@mui/icons-material/PestControl';
import WaterDrop from '@mui/icons-material/WaterDrop';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';

export const ViewPlant = () => {
    useEffect(() => {
        fetchPlantData();
    }, []);

    const [plantData, setPlantData] = useState({});
    const [plantInfo, setPlantInfo] = useState(null);

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
                    console.log("Name from fetchPlantData:", data.plantName);
                    await fetchPlantInfo(data.plantName);
                });
        }
    };
    return (
        <div className="view-plant">
            <Box display="flex">
                <Box className="plant-details-container" flexGrow={1}>
                    <CardMedia
                        sx={{ height: 150 }}
                        image={`${window.location.origin}/images/${plant.userId}/${plant.image}`}
                        title={plant.name}
                    />
                    <CardContent>
                        <Typography>How to take care of {plantData.name}</Typography>
                        <div className="plant-info-box">
                            <Typography>You're {plantData.plantname} Plant</Typography>
                            <div className="plant-price-toggle">
                                <Typography>Price: {plantData.price}</Typography>
                                <Typography>
                                    Make available means it will be visible to other users for purchase
                                </Typography>
                                <ToggleAvailable />
                            </div>
                        </div>
                    </CardContent>
                </Box>
                <Box className="plant-info-grid" flexGrow={1}>
                    {plantInfo ? (
                        <>
                            <Typography>
                                <img src={WaterDrop} style={{ fill: '#00FF00' }} alt="watering" className="icon" />
                                Watering: {plantInfo.watering}
                            </Typography>
                            <Typography>
                                <img src={DeviceThermostat} style={{ fill: '#187bcd' }} alt="min temperature" className="icon" />
                                Min Temperature: {plantInfo.tempmin.celsius}°C
                            </Typography>
                            <Typography>
                                <img src={DeviceThermostat} style={{ fill: '#FF0000' }} alt="max temperature" className="icon" />
                                Max Temperature: {plantInfo.tempmax.celsius}°C
                            </Typography>
                            <Typography>
                                <img src={WbSunny} style={{ fill: '#00FF00' }} alt="ideal light" className="icon" />
                                Ideal Light: {plantInfo.ideallight}
                            </Typography>
                            <Typography>
                                <img src={PestControl} style={{ fill: '#00FF00' }} alt="insects" className="icon" />
                                Insects: {plantInfo.insects}
                            </Typography>
                            <Typography>
                                <img src={Coronavirus} style={{ fill: '#00FF00' }} alt="diseases" className="icon" />
                                Diseases: {plantInfo.diseases}
                            </Typography>
                        </>
                    ) : (
                        <Typography>Loading plant information...</Typography>
                    )}
                </Box>
            </Box>
        </div>
    );
};



//import * as React from 'react';
//import { useEffect, useState } from 'react';
//import { useLocation } from 'react-router-dom';
//import { ToggleAvailable } from './ToggleAvailable';
//import './ViewPlant.css';
//import Temperature from '@mui/icons-material/DeviceThermostat';
//import Light from '@mui/icons-material/WbSunny';
//import Disease from '@mui/icons-material/Coronavirus';
//import Bug from '@mui/icons-material/PestControl';
//import Water from '@mui/icons-material/WaterDrop';
//import Typography from '@mui/material/Typography';
//import CardMedia from '@mui/material/CardMedia';
//import CardContent from '@mui/material/CardContent';



//// link til rapidapisiden. Kun 40 calls/month
//// https://rapidapi.com/rosoemawd/api/house-plants

//export const ViewPlant = () => {
//    useEffect(() => {
//        fetchPlantData();
//    }, []);
//    //const [plantInfo, setPlantInfo] = useState(null);
//    const [plantData, setPlantData] = useState({});

//    // Location is used for storing PlantID
//    const plant = useLocation();

//    const fetchPlantInfo = async (commonName) => {
//        const response = await fetch(
//            `https://house-plants.p.rapidapi.com/common/${commonName}`,
//            {
//                method: 'GET',
//                headers: {
//                    'X-RapidAPI-Key': `${process.env.REACT_APP_PLANT_API_KEY}`,
//                    'X-RapidAPI-Host': 'house-plants.p.rapidapi.com',
//                },
//            },
//        );
//        if (response.ok) {
//            const data = await response.json();
//            setPlantInfo(data[0]);
//        } else {
//            console.error('Error fetching plant info:', response.status, response.statusText);
//        }
//    };

//    const fetchPlantData = async () => {
//        if (!plant.state.id) {
//            return;
//        } else {
//            await fetch("https://localhost:7062/api/Plants/" + plant.state.id)
//                .then((response) => response.json())
//                .then(async (data) => {
//                    setPlantData({
//                        name: data.name,
//                        plantname: data.plantName,
//                        price: data.price
//                    });
//                    console.log("Name from fetchPlantData:", data.plantName);
//                    await fetchPlantInfo(data.plantName);
//                });
//        }
//    };
//    return (
//        <div className="view-plant">
//            <card className="plant-details-container">
//                <CardMedia
//                    sx={{ height: 150 }}
//                    image={`${window.location.origin}/images/${plant.userId}/${plant.image}`}
//                    title={plant.name}
//                />
//                <CardContent>
//                    <Typography>How to take care of {plantData.name}</Typography>
//                    <div className="plant-info-box">
//                        <Typography>You're {plantData.plantname} Plant</Typography>
//                        <div className="plant-price-toggle">
//                            <Typography>Price: {plantData.price}</Typography>
//                            <ToggleAvailable />
//                        </div>
//                    </div>
//                </CardContent>
//            </card>

//            <div className="plant-info-grid">
//                {plantInfo ? (
//                    <>
//                        <Typography>
//                            <img src={Water} style={{ fill: '#00FF00' }} alt="watering" className="icon" />
//                            Watering: {plantInfo.watering}
//                        </Typography>
//                        <Typography>
//                            <img src={Temperature} style={{ fill: '#187bcd' }} alt="min temperature" className="icon" />
//                            Min Temperature: {plantInfo.tempmin.celsius}°C
//                        </Typography>
//                        <Typography>
//                            <img src={Temperature} style={{ fill: '#FF0000' }} alt="max temperature" className="icon" />
//                            Max Temperature: {plantInfo.tempmax.celsius}°C
//                        </Typography>
//                        <Typography>
//                            <img src={Light} style={{ fill: '#00FF00' }} alt="ideal light" className="icon" />
//                            Ideal Light: {plantInfo.ideallight}
//                        </Typography>
//                        <Typography>
//                            <img src={Bug} style={{ fill: '#00FF00' }} alt="insects" className="icon" />
//                            Insects: {plantInfo.insects}
//                        </Typography>
//                        <Typography>
//                            <img src={Disease} dstyle={{ fill: '#00FF00' }} alt="diseases" className="icon" />
//                            Diseases: {plantInfo.diseases}
//                        </Typography>
//                    </>
//                ) : (
//                    <Typography>Loading plant information...</Typography>
//                )}
//            </div>
//        </div>
//    );

//    //return (
//    //    <div className="view-plant">
//    //        <card className="plant-details-container">
//    //            <CardMedia
//    //                sx={{ height: 150 }}
//    //                image={`${window.location.origin}/images/${plant.userId}/${plant.image}`}
//    //                title={plant.name}
//    //            />
//    //            <CardContent>
//    //                <Typography>How to take care of {plantData.name}</Typography>
//    //                <div className="plant-info-box">
//    //                    <Typography>You're {plantData.plantname} Plant</Typography>
//    //                    <div className="plant-price-toggle">
//    //                        <Typography>Price: {plantData.price}</Typography>
//    //                        <ToggleAvailable />
//    //                    </div>
//    //                </div>
//    //            </CardContent>              
//    //        </card>
//    //        {/* Modify the plant-info-grid div 
//    //        <Typography variant="body2" color="text.secondary" style={{ marginTop: "5px" }}>
//    //            <LocationOnIcon style={{ fill: '#609966' }} />{plantLocation} {plant.distance && `${Math.round(plant.distance / 1000)} km`}
//    //        </Typography> */}

//    //        <div className="plant-info-grid">
//    //            {/* Add icons and modify the divs accordingly */}
//    //            <Typography>
//    //                <img src={Water} style={{ fill: '#00FF00'}} alt="watering" className="icon" />
//    //                Watering: {plantInfo.watering}
//    //            </Typography>
//    //            <Typography>
//    //                <img src={Temperature} style={{ fill: '#187bcd'}} alt="min temperature" className="icon" />
//    //                Min Temperature: {plantInfo.tempmin.celsius}°C
//    //            </Typography>
//    //            <Typography>
//    //                <img src={Temperature} style={{ fill: '#FF0000'}} alt="max temperature" className="icon" />
//    //                Max Temperature: {plantInfo.tempmax.celsius}°C
//    //            </Typography>
//    //            <Typography>
//    //                <img src={Light} style={{fill:'#00FF00' }} alt="ideal light" className="icon" />
//    //                Ideal Light: {plantInfo.ideallight}
//    //            </Typography>
//    //            <Typography>
//    //                <img src={Bug} style={{fill:'#00FF00'}} alt="insects" className="icon" />
//    //                Insects: {plantInfo.insects}
//    //            </Typography>
//    //            <Typography>
//    //                <img src={Disease} style={{fill:'#00FF00'}} alt="diseases" className="icon" />
//    //                Diseases: {plantInfo.diseases}
//    //            </Typography>
//    //        </div>
//    //    </div>
//    //);

//    //old working return
//    //return (
//    //    <div>
//    //        <h1>Plant:</h1>
//    //        <p>{plantData.plantname}</p>
//    //        <p>Hello I'm called: {plantData.name}</p>
//    //        <p>Price: {plantData.price}</p>

//    //        {plantInfo && (
//    //            <div className="plant-info-grid">
//    //                <div>Latin Name: {plantInfo.latin}</div>
//    //                <div>Category: {plantInfo.category}</div>
//    //                <div>Origin: {plantInfo.origin}</div>
//    //                <div>Climate: {plantInfo.climate}</div>
//    //                <div>Max Temperature: {plantInfo.tempmax.celsius}°C</div>
//    //                <div>Min Temperature: {plantInfo.tempmin.celsius}°C</div>
//    //                <div>Ideal Light: {plantInfo.ideallight}</div>
//    //                <div>Tolerated Light: {plantInfo.toleratedlight}</div>
//    //                <div>Watering: {plantInfo.watering}</div>
//    //                <div>Insects: {plantInfo.insects}</div>
//    //                <div>Diseases: {plantInfo.diseases}</div>
//    //            </div>
//    //        )}
//    //        <ToggleAvailable />
//    //    </div>
//    //);
//}