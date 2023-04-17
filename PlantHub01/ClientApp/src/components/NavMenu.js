import './NavMenu.css';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';


export const NavMenu = () => {
    const navigate = useNavigate();

    return (
        <header className="navBar">
            <Box sx={{ flexGrow: 1 }} color="white">
                <AppBar position="static" style={{ backgroundColor: "transparent" } }>
                    <Toolbar>
                        <Typography style={{cursor: "pointer"}} variant="h6" component="div" onClick={() => navigate('/')}>
                        PlantHub
                        </Typography>
                        <div style={{ marginLeft: "auto" }}>
                            <Button color="inherit" onClick={() => navigate('/browse-plants')}>Browse</Button>
                            <Button color="inherit" onClick={() => navigate('/login')}>Login</Button>
                            <Button color="inherit" onClick={() => navigate('/profile')}>Profile</Button>
                            <Button color="inherit" onClick={() => navigate('/how-it-works')}>How it works</Button>
                        </div>
                </Toolbar>
            </AppBar>
            </Box>
        </header>
    );
}