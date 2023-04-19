import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export const PlantCard = ({ plant, plantLocation }) => {
    const navigate = useNavigate();

    return (
            <Card sx={{ width: 250, borderRadius: "5px" }}>
                <CardMedia
                    sx={{ height: 160 }}
                    image={`${window.location.origin}/images/${plant.userId}/${plant.image}`}
                    title={plant.name}
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary" style={{ textAlign: "center" }}>
                        {plant.plantName}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div" style={{ textAlign: "center" }}>
                        {plant.name}
                    </Typography>

                    {plant.price > 0 ? (
                        <Typography variant="body2" color="text.secondary">
                            {plant.price} NOK per cutting
                        </Typography>) :
                        <Typography variant="body2" color="text.secondary">
                            Give away
                        </Typography>}

                    <Typography variant="body2" color="text.secondary" style={{ marginTop: "5px" }}>
                        <LocationOnIcon style={{ fill: '#609966' }} />{plantLocation} {plant.distance && `${Math.round(plant.distance / 1000)} km`}
                    </Typography>

                    <Button
                        onClick={() => navigate('/send-request', { state: { id: plant.id } })}
                        size="small"
                        style={{ color: "#40513B", marginTop: "5px" }}
                    >Get cutting</Button>

                </CardContent>
                {/*<CardActions>*/}
                {/*</CardActions>*/}
            </Card>
    )
}
