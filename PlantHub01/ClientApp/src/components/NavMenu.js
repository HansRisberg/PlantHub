import './NavMenu.css';
import * as React from 'react';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/PlantHubLogo2.png';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Logout from '@mui/icons-material/Logout';


export const NavMenu = () => {
    const navigate = useNavigate();

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const isLoggedIn = !!localStorage.getItem("userId");
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    // When clicking logout, we remove current "userId" from localStorage and navigate to index
    const handleLogout = () => {
        localStorage.removeItem("userId");
        navigate("/");
    }

    return (
        <header className="navBar">
            <Box sx={{ flexGrow: 1 }} color="white">
                <AppBar position="static" style={{ backgroundColor: "transparent" } }>
                    <Toolbar>
                        <Typography style={{cursor: "pointer"}} variant="h6" component="div" onClick={() => navigate('/')}>
                            <img src={logo} width="170px" />
                        </Typography>
                        <div style={{ marginLeft: "auto" }}>
                            <Button color="inherit" onClick={() => navigate('/browse-plants')}>Browse</Button>
                  
                            {/*<Button color="inherit" onClick={() => navigate('/login')}>Login</Button>*/}
                            <Button color="inherit" onClick={() => navigate('/how-it-works')}>How it works</Button>

                            {/*Show the avatar when logged in and shows log int when not logged int*/}
                            {isLoggedIn ? (
                                <Tooltip title="Account settings">
                                    <IconButton
                                        onClick={handleClick}
                                        size="small"
                                        sx={{ ml: 2 }}
                                        aria-controls={open ? 'account-menu' : undefined}
                                        aria-haspopup="true"
                                        aria-expanded={open ? 'true' : undefined}
                                    >
                                        <Avatar sx={{ width: 32, height: 32 }}></Avatar>
                                    </IconButton>
                                </Tooltip>
                            ) : (
                                <Button color="inherit" onClick={() => navigate('/login')}>Login</Button>
                            )}

                            {/*<Tooltip title="Account settings">*/}
                            {/*    <IconButton*/}
                            {/*        onClick={handleClick}*/}
                            {/*        size="small"*/}
                            {/*        sx={{ ml: 2 }}*/}
                            {/*        aria-controls={open ? 'account-menu' : undefined}*/}
                            {/*        aria-haspopup="true"*/}
                            {/*        aria-expanded={open ? 'true' : undefined}*/}
                            {/*    >*/}
                            {/*        <Avatar sx={{ width: 32, height: 32 }}></Avatar>*/}
                            {/*    </IconButton>*/}
                            {/*</Tooltip>*/}

                            <Menu
                                anchorEl={anchorEl}
                                id="account-menu"
                                open={open}
                                onClose={handleClose}
                                onClick={handleClose}
                                PaperProps={{
                                    elevation: 0,
                                    sx: {
                                        overflow: 'visible',
                                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                        mt: 1.5,
                                        '& .MuiAvatar-root': {
                                            width: 32,
                                            height: 32,
                                            ml: -0.5,
                                            mr: 1,
                                        },
                                        '&:before': {
                                            content: '""',
                                            display: 'block',
                                            position: 'absolute',
                                            top: 0,
                                            right: 14,
                                            width: 10,
                                            height: 10,
                                            bgcolor: 'background.paper',
                                            transform: 'translateY(-50%) rotate(45deg)',
                                            zIndex: 0,
                                        },
                                    },
                                }}
                                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                            >
                                <MenuItem onClick={() => navigate('/profile')}>
                                    <Avatar /> Profile
                                </MenuItem>
                                <Divider />
                                <MenuItem onClick={handleLogout}>
                                    <ListItemIcon>
                                        <Logout fontSize="small" />
                                    </ListItemIcon>
                                    Logout
                                </MenuItem>
                            </Menu>
                        </div>
                </Toolbar>
            </AppBar>
            </Box>
        </header>
    );
}