import * as React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import TextField from '@mui/material/TextField';
import logo from '../assets/PlantHubLogo2.png';

export const Footer = () => {
    return (
        <Paper
            sx={{
                marginTop: "20px",
                height: "300px",
                bottom: 0,
                width: "100%",
                zIndex: 1300,
                backgroundColor: "#9DC08B",
            }}
            component="footer"
            square
        >
            <Container maxWidth="lg">
                <Box
                    sx={{
                        justifyContent: "center",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        marginTop: "120px",
                    }}
                >       
                    <Box sx={{ height: "36px" }} />
                    <h2>Sign up for our newsletters!</h2>
                    <Typography variant="caption" sx={{ mt: 1.5, marginTop: "2px" }}>
                        Get monthly updates with plant tips, invitations to events and other fun stuff
                    </Typography>
                    <TextField
                        placeholder="Enter email here"
                        size="small"
                        sx={{
                            marginTop: "7px",
                            width: "30%",
                            opacity: 0.9,
                            "& .MuiOutlinedInput-root": {
                                "&.Mui-focused fieldset": {
                                    borderColor: "#40513B"
                                }
                            },

                            "& label.Mui-focused": {

                                color: "#609966"

                            }
                        }}
                    />

                    <Typography variant="caption" sx={{ mt: 1.5, marginTop: "10px" }}>
                        Contact us at heyheyhey@planthub.no
                    </Typography>
                     e.g., input field, submit button 
                    <Typography variant="caption" sx={{ mt: 1.5 }}>
                        PlantHub 2023
                    </Typography>
                    <Box style={{ marginTop: "7px"}}><img src={logo} width="170px" /></Box>

                </Box>
            </Container>
        </Paper>
    );
};
