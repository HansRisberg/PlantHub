import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Profile.css';
import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { UserPlantCard } from './UserPlantCard.js';

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

    // When clicking logout, we remove current "userId" from localStorage and navigate to index
    const handleLogout = () => {
        localStorage.removeItem("userId");
        navigate("/");
    }

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
            <div className="user-data">
                <h3> Hello {userData.name}</h3>
                <p>{userData.bio}</p>
                <Stack direction="row" spacing={2}>
                    <Button variant="outlined" onClick={() => navigate('/create-plant')}>Register plant</Button>
                    <Button variant="outlined" onClick={() => navigate('/all-requests')}>Messages</Button>
                    <Button variant="outlined" onClick={handleLogout}>Log out</Button>
                </Stack>
            </div>
            <div className="user-plants">
                <h3>My Plants</h3>
                <div className="plant-view">
                    {plantList.length ?
                        plantList.map((plant, index) => {
                            return (
                                <div key={index}>
                                    <UserPlantCard plant={plant} />
                                </div>
                            )
                        })
                        : "I have no plants, but I would love to get my hand on a good stem"
                    }
                </div>
            </div>
        </div>
    )
}
