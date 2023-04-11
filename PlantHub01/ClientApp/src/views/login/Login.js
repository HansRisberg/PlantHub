import * as React from 'react';
import { useState } from 'react'; 
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export const Login = () => {
    const [user, setUser] = useState("");

    async function handleLogin(event) {
        event.preventDefault();

        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({ "Username": user })
        }

        let response = await fetch("https://localhost:7062/login", requestOptions);
        console.log(response);
        let jsonResponse = response.json();
        console.log(jsonResponse);

        //const data = await response.json();
        //console.log(data);

        //if (data.message)
        //    .then((response) => response.json())
        //    .then((result) => {
        //        if (result.message === "OK") {
        //            alert("you are logged in")
        //        } else {
        //            alert("Wrong username")
        //        }
        //    })
    }

    return (
        <div>
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
                {/*TODO: These are two types of input fields we can use, decide which one*/}
                <TextField id="outlined-basic" label="Username" variant="outlined" onChange={(event) => setUser(event.target.value)} />
                <Stack direction="row" spacing={2}>
                    <Button type="submit" variant="contained">Login</Button>
                </Stack>
            </Box>
        </div>
    )
}