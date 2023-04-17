import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

export const UserPlantCard = ({ plant }) => {
    const navigate = useNavigate();
    return (
        <Card sx={{ width: 150, borderRadius: "5px" }}>
            <CardMedia
                sx={{ height: 150 }}
                image={`${window.location.origin}/images/${plant.userId}/${plant.image}`}
                title={plant.name}
            />
            <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                    {plant.name}
                </Typography>
                {plant.price > 0 ? (
                    <Typography variant="body2" color="text.secondary">
                        {plant.plantName} - {plant.price} NOK
                    </Typography>) :
                    <Typography variant="body2" color="text.secondary">
                        {plant.plantName}
                    </Typography>}
            </CardContent>
            <CardActions>
                <Button variant="text" onClick={() => navigate('/edit-plant', { state: { id: plant.id } })}>Edit</Button>
            </CardActions>
        </Card>
    )
}