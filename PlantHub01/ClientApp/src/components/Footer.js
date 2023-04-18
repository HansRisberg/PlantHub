import * as React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

export const Footer = () => {
    return (
        <Paper sx={{
            height: "40px",
            bottom: 0,
            position: "fixed",
            width: "100%",
            zIndex: 1300
        }} component="footer" square>
            <Container maxWidth="lg">
                <Box
                    sx={{
                        justifyContent: "center",
                        display: "flex",
                        mb: 2,
                    }}
                >
                    <Typography
                        variant="caption"
                        sx={{ mt: 1.5}}
                        >
                        PlantHub 2023 
                    </Typography>
                </Box>
            </Container>
        </Paper>
    )
}