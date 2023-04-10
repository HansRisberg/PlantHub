import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export const PlantCard = ({ plant }) => {
    return (
        <Card sx={{ width: 200 }}>
            <CardMedia
                sx={{ height: 140 }}
                image={plant.image}
                title={plant.nickname}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {plant.nickname}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {plant.species} - {plant.price} NOK
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" style={{ color: "#40513B"}}>Get cutting</Button>
            </CardActions>
        </Card>
    )
}
