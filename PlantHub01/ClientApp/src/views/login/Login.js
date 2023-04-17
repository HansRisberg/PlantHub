import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
    const [user, setUser] = useState("");

    // Allows navigation to another page
    const navigate = useNavigate();

    async function handleLogin(event) {
        event.preventDefault();

        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ "Username": user })
        }

        // Sends a POST to check if users exists in database
        try {
            let res = await fetch("https://localhost:7062/login", requestOptions);

            if (res.status !== 200) {
                console.log("Something went wrong. Status code: " + res.status)
            }

            if (res.status === 200) {
                // JSON response if not used for anything, but leaving it here in case needed later
                const response = await res.json();
                console.log(response.id);

                // Setting locaStorage, so we know user is logged in
                localStorage.setItem("userId", response.id);

                // Navigates to profile page after successful login
                navigate("/profile");
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "60px" }}>
            <h1>Login</h1>
            <Box
                component="form"
                onSubmit={handleLogin}
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField id="outlined-basic" label="Username" variant="outlined" onChange={(event) => setUser(event.target.value)}
                    sx={{
                        width: "75%", opacity: 0.9,

                        "& .MuiOutlinedInput-root": {
                            "&.Mui-focused fieldset": {
                                borderColor: "#609966"
                            }
                        },

                        "& label.Mui-focused": {

                            color: "#609966"

                        }
                    }} />
                <Stack direction="column" spacing={2}>
                    <Button type="submit" variant="contained" style={{ backgroundColor: "#609966"}}>Login</Button>
                    <Link href="/register" variant="body2" style={{ color: "#40513B", textDecorationColor: "#40513B"}}>
                        Don't have an account? Register
                    </Link>
                </Stack>
            </Box>
        </div>
    )
}