import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';

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

    return (
        <div>
            {Number(localStorage.getItem("userId")) === conversation.senderUserId 
                ?

                <Card className="myCard"
                    sx={{
                    minWidth: 275,
                    maxWidth: 325,
                }}>
                    <CardContent>
                        <Avatar
                            alt="Plant Image"
                            src={`${window.location.origin}/images/${conversation.plant.userId}/${conversation.plant.image}`}
                            sx={{
                                width: 100,
                                height: 100,
                                margin: "auto"
                            }}
                        />
                        <Typography sx={{ fontSize: 14, marginTop: "10px" }} color="text.secondary" gutterBottom>
                            I asked for a cutting on a plant named
                        </Typography>
                        <Typography variant="h5" component="div">
                            {conversation.plant.name}
                        </Typography>
                        <Typography variant="body2">
                            Accept and reject options here
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button onClick={() => navigate('/messages', { state: { id: conversation.id, plantId: conversation.plantId, conversation: conversation } })}
                            style={{ color: "#4CACBC" }}
                        >
                            See messages
                        </Button>
                    </CardActions>
                </Card>

                :

                <Card className="otherCard"
                    sx={{
                    minWidth: 275,
                    maxWidth: 325,
                }}>
                    <CardContent>
                        <Avatar
                            alt="Plant Image"
                            src={`${window.location.origin}/images/${conversation.plant.userId}/${conversation.plant.image}`}
                            sx={{
                                width: 100,
                                height: 100,
                                margin: "auto"
                            }}
                        />
                        <Typography sx={{ fontSize: 14, marginTop: "10px",}} color="text.secondary" gutterBottom>
                            {userData.name} asked for a cutting of
                        </Typography>
                        <Typography variant="h5" component="div">
                            {conversation.plant.name}
                        </Typography>
                        <Typography variant="body2">
                            Accept and reject options should go here
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button onClick={() => navigate('/messages', { state: { id: conversation.id, plantId: conversation.plantId, conversation: conversation } })}
                            style={{ color: "#4CACBC" }}
                        >
                            See messages
                        </Button>
                    </CardActions>
                </Card>

            }
        </div>
    )
}