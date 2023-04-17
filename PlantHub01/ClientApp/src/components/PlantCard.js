import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

export const PlantCard = ({ plant, plantLocation }) => {
    const navigate = useNavigate();
    return (
        <Card sx={{ width: 250, borderRadius: "5px" }}>
            <CardMedia
                sx={{ height: 180 }}
                image={plant.image}
                title={plant.name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {plant.name}
                </Typography>
                {plant.price > 0 ? (
                <Typography variant="body2" color="text.secondary">
                    {plant.plantName} - {plant.price} NOK
                    </Typography>) :
                    <Typography variant="body2" color="text.secondary">
                        {plant.plantName}
                    </Typography>}
                    <Typography variant="body2" color="text.secondary">
                        {`Location: ${plantLocation}`}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {plant.distance && `Distance: ${Math.round(plant.distance / 1000)} km`}
                    </Typography>
            </CardContent>
            <CardActions>
                <Button onClick={() => navigate('/send-request', { state: { id: plant.id} })} size="small" style={{ color: "#40513B"}}>Get cutting</Button>
            </CardActions>
        </Card>
    )
}
