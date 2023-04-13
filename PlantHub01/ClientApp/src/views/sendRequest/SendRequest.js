import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
/*import * as React from 'react';*/
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

export const SendRequest = () => {
    const [message, setMessage] = useState("");

    // Location is used for storing PlantID
    const plantId = useLocation();

    const handleMessage = async (event) => {
        event.preventDefault();
        console.log(message);

        // Create conversation in database

        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "PlantID": plantId.state.id,
                "SenderUserId": localStorage.getItem("userId")
            })
        }
        console.log(requestOptions);
        // Send POST request to create a new conversation in database
        try {
            let res = await fetch("https://localhost:7062/api/Conversations", requestOptions);

            if (res.status !== 200) {
                console.log("Something went wrong. Status code: " + res.status)
            }

            if (res.status === 200) {
                const response = await res.json();
                console.log(response);
                // TODO: Navigate to all messages page
            }
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div>
            <h1>Send cutting request</h1>
            <Box
                component="form"
                onSubmit={handleMessage}
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <div>
                    <TextField
                        id="outlined-multiline-static"
                        label="Message"
                        multiline
                        rows={6}
                        onChange={(event) => setMessage(event.target.value)}
                    />
                </div>
            <Stack direction="row" spacing={2}>
                <Button type="submit" variant="contained">Send</Button>
                </Stack>
            </Box>

        </div>
    )
}