import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

export const PlantCard = ({ plant }) => {
    const navigate = useNavigate();

    return (
        <Card sx={{ width: 200 }}>
            <CardMedia
                sx={{ height: 140 }}
                image={plant.image}
                title={plant.name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {plant.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {plant.plantName} - {plant.price} NOK
                </Typography>
            </CardContent>
            <CardActions>
                <Button onClick={() => navigate('/send-request', { state: { id: plant.id} })} size="small" style={{ color: "#40513B"}}>Get cutting</Button>
            </CardActions>
        </Card>
    )
}
