import * as React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";


export const Footer = () => {
    return (
        <Paper
            sx={{
                marginTop: "20px",
                height: "200px",
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
                        marginTop: "40px",
                    }}
                >
                <h1>Sign up for our newsletter!</h1>
                    <Typography variant="caption" sx={{ mt: 1.5 }}>
                        Contact us at heyheyhey@planthub.no

                    </Typography>
                    {/* e.g., input field, submit button */}
                    <Typography variant="caption" sx={{ mt: 1.5 }}>
                        PlantHub 2023
                    </Typography>
                </Box>
            </Container>
        </Paper>
    );
};
