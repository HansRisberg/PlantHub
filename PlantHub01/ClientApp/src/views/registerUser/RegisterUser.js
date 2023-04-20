import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router-dom';
import Autocomplete from '@mui/material/Autocomplete';
import Typography from '@mui/material/Typography';
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
                "Location": `${formData.get('city')}, ${formData.get('address')}`,
            })
        }

        // Send POST request to create a new user in database
        try {
            let res = await fetch("https://localhost:7062/api/Users", requestOptions);

            if (res.status !== 201) {
                console.log("Something went wrong. Status code: " + res.status)
            }

            if (res.status === 201) {
                const response = await res.json();
                // Navigates to login page after successful creation of user
                navigate("/login");
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Container component="main" maxWidth="xs">
            <Box
                xs={{
                    marginTop: 6,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <h1 style={{ textAlign: "center" }}>Sign up</h1>
                <Box component="form" noValidate onSubmit={handleSubmit}>
                    <Grid item xs={12} sm={6} style={{ marginTop: "10px" }}>
                        <TextField
                            name="name"
                            required
                            fullWidth
                            id="name"
                            label="Username"
                            autoFocus
                            sx={{
                                opacity: 0.9,

                                "& .MuiOutlinedInput-root": {
                                    "&.Mui-focused fieldset": {
                                        borderColor: "#609966"
                                    }
                                },

                                "& label.Mui-focused": {

                                    color: "#609966"

                                }
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} style={{ marginTop: "10px" }}>
                        <Autocomplete
                            id="city"
                            options={cities}
                            style={{ fontSize: "6px" }}
                            sx={{
                                opacity: 0.9,

                                "& .MuiOutlinedInput-root": {
                                    "&.Mui-focused fieldset": {
                                        borderColor: "#609966"
                                    }
                                },

                                "& label.Mui-focused": {

                                    color: "#609966"

                                }
                            }}
                            renderOption={(props, option, index) => (
                                <li key={`${option.city}-${index}`} {...props}>
                                    <Typography style={{ fontSize: "14px" }}>{option.city}</Typography>
                                </li>
                            )}
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
                    <Grid item xs={12} sm={6} style={{ marginTop: "10px" }}>
                        <TextField
                            required
                            fullWidth
                            id="address"
                            label="Address"
                            name="address"
                            sx={{
                                opacity: 0.9,

                                "& .MuiOutlinedInput-root": {
                                    "&.Mui-focused fieldset": {
                                        borderColor: "#609966"
                                    }
                                },

                                "& label.Mui-focused": {

                                    color: "#609966"

                                }
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} style={{ marginTop: "10px" }}>
                        <TextField
                            fullWidth
                            id="email"
                            label="Email"
                            name="email"
                            sx={{
                                opacity: 0.9,

                                "& .MuiOutlinedInput-root": {
                                    "&.Mui-focused fieldset": {
                                        borderColor: "#609966"
                                    }
                                },

                                "& label.Mui-focused": {

                                    color: "#609966"

                                }
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} style={{ marginTop: "10px" }}>
                        <TextField
                            fullWidth
                            name="bio"
                            label="Tell us about you"
                            type="bio"
                            id="bio"
                            sx={{
                                opacity: 0.9,

                                "& .MuiOutlinedInput-root": {
                                    "&.Mui-focused fieldset": {
                                        borderColor: "#609966"
                                    }
                                },

                                "& label.Mui-focused": {

                                    color: "#609966"

                                }
                            }}
                        />
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        style={{ backgroundColor: "#609966"}}
                    >
                        Sign Up
                    </Button>
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Link href="/login" variant="body2" style={{ color: "#40513B", textDecorationColor: "#40513B" }}>
                                Already have an account? Sign in
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
}
