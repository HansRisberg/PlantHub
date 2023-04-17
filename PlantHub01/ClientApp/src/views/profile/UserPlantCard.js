import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export const UserPlantCard = ({ plant }) => {
    return (
        <Card sx={{ width: 150, borderRadius: "5px" }}>
            <CardMedia
                sx={{ height: 150 }}
                image={plant.image}
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
            {/* Any buttons/actions we want to add can be added in here*/}
            </CardActions>
        </Card>
    )
}