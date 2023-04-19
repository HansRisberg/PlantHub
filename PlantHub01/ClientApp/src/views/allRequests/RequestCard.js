import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import { AcceptRequest } from './AcceptRequest';

export const RequestCard = ({ conversation }) => {
    const [userData, setUserData] = useState("");

    useEffect(() => {
        fetchUserData();
    }, []);

    const navigate = useNavigate();

    const fetchUserData = async () => {
        const currentUserId = Number(localStorage.getItem("userId"));
        const userId = conversation.senderUserId;

        if (currentUserId === userId) {
            return;
        }

        if (!userId) {
            return;

        } else {
            await fetch("https://localhost:7062/api/Users/" + userId)
                .then((response) => response.json())
                .then((data) => setUserData(data))
        }
    }

    const handleAddToYourPlants = async (event) => {
        event.preventDefault();

        // Create requestOptions with data from conversation object
        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "UserId": localStorage.getItem("userId"),
                "Name": conversation.plant.name,
                "About": conversation.plant.about,
                "PlantFamily": conversation.plant.plantFamily,
                "PlantName": conversation.plant.plantName,
                "MotherPlant": conversation.plant.name,
                "Image": conversation.plant.image,
                "Price": "0"
            })
        }

        // Send POST request to create a new user in database
        try {
            let res = await fetch("https://localhost:7062/api/Plants/Duplicate", requestOptions);

            if (res.status !== 204) {
                console.log("Something went wrong. Status code: " + res.status)
            }

            if (res.status === 204) {
                // Navigates to login page after successful creation of duplicate plant
                navigate("/profile");
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            {Number(localStorage.getItem("userId")) === conversation.senderUserId 
                ?

                <Card
                    sx={{
                    minWidth: 460,
                    maxWidth: 460,
                    minHeight: 180,
                    maxHeight: 180,
                    margin: "10px",
                        
                }}>
                    <CardContent sx={{ display: "flex", flexDirection: "row", maxHeight: 130 }}>
                        <div>
                        <Typography sx={{ fontSize: 14, marginTop: "5px" }} color="text.secondary" gutterBottom>
                            I asked for a plant
                        </Typography>
                        <Typography variant="h5" component="div">
                            {conversation.plant.name}
                        </Typography>
                        <>
                            {conversation.isAccepted
                                ?
                                <div>
                                    <Typography sx={{ fontSize: 12 }} component="div">Owner has accepted your request for this plant!</Typography>

                                </div>
                                :
                                <Typography sx={{ fontSize: 12 }} component="div">Waiting for reply</Typography>}
                            </>
                        </div>
                        <Avatar
                            alt="Plant Image"
                            src={`${window.location.origin}/images/${conversation.plant.userId}/${conversation.plant.image}`}
                            sx={{
                                marginLeft: "auto",
                                width: 130,
                                height: 130,
                                alignSelf: "flex-start",
                            }}
                        />

                    </CardContent>
                    <CardActions sx={{ backgroundColor: "", justifyContent: "" }}>
                        <Button onClick={() => navigate('/messages', { state: { id: conversation.id, plantId: conversation.plantId, conversation: conversation } })}
                            style={{ color: "#4CACBC" }}
                        >
                            Messages
                        </Button>
                        {conversation.isAccepted ?
                            <Button
                                style={{ color: "#4CACBC" }}
                                onClick={handleAddToYourPlants}
                            >
                                Add to Your Plants?
                            </Button> : ""}
                    </CardActions>
                </Card>

                :

                <Card 
                    sx={{
                    minWidth: 460,
                    maxWidth: 460,
                    minHeight: 180,
                    maxHeight: 180,
                    margin: "10px"

                }}>
                    <CardContent sx={{ display: "flex", flexDirection: "row", maxHeight: 130 }}>
                    <div>
                        <Typography sx={{ fontSize: 14, marginTop: "5px",}} color="text.secondary" gutterBottom>
                            {userData.name} asked for a cutting of
                        </Typography>
                        <Typography variant="h5" component="div">
                            {conversation.plant.name}
                            </Typography>
                        </div>
                        <Avatar
                            alt="Plant Image"
                            src={`${window.location.origin}/images/${conversation.plant.userId}/${conversation.plant.image}`}
                            sx={{
                                marginLeft: "auto",
                                width: 120,
                                height: 120,
                                alignSelf: "flex-start",
                            }}
                        />
                    </CardContent>
                    <CardActions>
                        <Button onClick={() => navigate('/messages', { state: { id: conversation.id, plantId: conversation.plantId, conversation: conversation } })}
                            style={{ color: "#4CACBC" }}
                        >
                            Messages
                        </Button>
                        <AcceptRequest conversation={conversation} />
                    </CardActions>
                </Card>

            }
        </div>
    )
}