import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router-dom';
import Autocomplete from '@mui/material/Autocomplete';
import cities from './cities.json';

export const RegisterUser = () => {

    // Allows navigation to another page
    const navigate = useNavigate();

    async function handleSubmit(event) {
        event.preventDefault();

        // Get data from form
        const formData = new FormData(event.currentTarget);

        // Create requestOptions with data that from formData
        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "Name": formData.get('name'),
                "Bio": formData.get('bio'),
                "Email": formData.get('email'),
                "Location": `${formData.get('city')}, ${formData.get('adress')}`,
            })
        }


        console.log(requestOptions);

        // Send POST request to create a new user in database
        try {
            let res = await fetch("https://localhost:7062/api/Users", requestOptions);

            if (res.status !== 201) {
                console.log("Something went wrong. Status code: " + res.status)
            }

            if (res.status === 201) {
                const response = await res.json();
                console.log(response);
                // Navigates to login page after successful creation of user
                navigate("/login");
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                        <TextField
                            name="name"
                            required
                            fullWidth
                            id="name"
                            label="Username"
                            autoFocus
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Autocomplete
                            id="city"
                            options={cities}
                            getOptionLabel={(option) => option.city}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    required
                                    fullWidth
                                    label="City"
                                    name="city"
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            fullWidth
                            id="adress"
                            label="Adress"
                            name="adress"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            id="email"
                            label="Email"
                            name="email"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            name="bio"
                            label="Tell the world who you are"
                            type="bio"
                            id="bio"
                        />
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign Up
                    </Button>
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Link href="/login" variant="body2">
                                Already have an account? Sign in
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
}
