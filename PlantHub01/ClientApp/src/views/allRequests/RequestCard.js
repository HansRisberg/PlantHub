import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
        console.log(userData);
    }

    return (
        <Card sx={{ minWidth: 275, maxWidth: 325 }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Sent this message: {userData.name}
                </Typography>
                <Typography variant="h5" component="div">
                    Name of plant: {conversation.plant.name}
                </Typography>
                <Typography variant="body2">
                Accept and reject options here
                </Typography>
            </CardContent>
            <CardActions>
                <Button onClick={() => navigate('/messages', { state: { id: conversation.id } })} size="small">See messages</Button>
            </CardActions>
        </Card>
    )
}