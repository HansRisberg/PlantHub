import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Profile.css';
import * as React from 'react';
import Button from '@mui/material/Button';
import { UserPlantCard } from './UserPlantCard.js';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import heroImage from "../../assets/dogPlant.png";
import Avatar from '@mui/material/Avatar';

export const Profile = () => {
    // This will ensure logged in user sees their plants when visiting profile page
    useEffect(() => {
        fetchUserData();
        fetchUsersPlants();
    }, []);

    // Used for setting which plants current logged in user has
    const [plantList, setPlantList] = useState([]);

    const [userData, setUserData] = useState("");

    const navigate = useNavigate();

    // Fetches current logged in user plants
    // Fetch is not executed if user is not logged in
    const fetchUsersPlants = async () => {
        const userId = localStorage.getItem("userId");

        if (!userId) {
            return;
        } else {
            await fetch("https://localhost:7062/api/Plants/UserId/" + userId)
                .then((response) => response.json())
                .then((data) => setPlantList(data));
        }
    }

    // Fetches current logged in user data
    // Fetch is not executed if user is not logged in
    const fetchUserData = async () => {
        const userId = localStorage.getItem("userId");

        if (!userId) {
            return;
        } else {
            await fetch("https://localhost:7062/api/Users/" + localStorage.getItem("userId"))
                .then((response) => response.json())
                .then((data) => setUserData(data))
        }
    }

    return (
        <div className="profile-container">
            <div style={{position: "relative" }}>
                <Card sx={{
                    minWidth: 350,
                    minHeight: 400,
                    marginTop: "50px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                    <CardContent>
                        <Avatar
                            alt="Profile Image"
                            src={heroImage}
                            sx={{
                                width: 150,
                                height: 150,
                                margin: "auto"
                            }}
                        />
                        <Typography
                            variant="h4"
                            component="div"
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                                marginTop: "7px"
                            }}
                        >
                            {userData.name}
                        </Typography>
                        <Typography
                            sx={{
                                mb: 1.5,
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                                marginTop: "10px"
                            }}
                            color="text.secondary">
                            {userData.location}
                        </Typography>
                        <Typography variant="body2"
                            sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                        }}>
                            {userData.bio}
                        </Typography>
                        <CardActions sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            marginTop: "20px"
                        }}>
                            <Button
                                variant="outlined"
                                onClick={() => navigate('/all-requests')}
                                style={{ color: "#40513B", borderColor: "#40513B" }}
                            >Messages
                            </Button>
                        </CardActions>
                    </CardContent>
                </Card>
            </div>
            <div className="my-plants-container">
                <div className="user-plants-header" style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', marginTop: "-10px" }}>
                    <h3 style={{ margin: 0 }}>My plants</h3>
                    <Button variant="contained" onClick={() => navigate('/create-plant')} style={{ backgroundColor: "#609966", marginLeft: '10px' }}>New plant</Button>
                </div>
                <div className="plant-view">
                    {plantList.length ?
                        plantList.map((plant, index) => {
                            return (
                                <div key={index} style={{ flexBasis: "25%", marginTop: "23px" }} className="plant-card">
                                    <UserPlantCard plant={plant} />
                                </div>
                            )
                        })
                        : "I don't have any plants yet"
                    }
                </div>
            </div>
        </div>
    )
}
