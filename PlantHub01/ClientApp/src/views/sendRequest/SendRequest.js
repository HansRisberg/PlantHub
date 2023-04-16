import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const SendRequest = () => {
    const [message, setMessage] = useState("");

    // Location is used for storing PlantID
    const plantId = useLocation();

    // Used for navigation
    const navigate = useNavigate();


    const handleMessage = async (event) => {
        event.preventDefault();

        // Create conversation in database

        let requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "PlantID": plantId.state.id,
                "SenderUserId": localStorage.getItem("userId")
            })
        }

        // Variable for storing conversation data for later use
        let conversationResponse;

        // Send POST request to create a new conversation in database
        try {
            let res = await fetch("https://localhost:7062/api/Conversations", requestOptions);

            if (res.status !== 200) {
                console.log("Something went wrong. Status code: " + res.status)
            }

            if (res.status === 200) {
                conversationResponse = await res.json();
                console.log(conversationResponse);
            }
        } catch (error) {
            console.log(error);
        }

        // Create message

        requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "ConversationId": conversationResponse.id,
                "MessageText": message
            })
        }

        // Send POST request to create new message in created conversation
        try {
            let response = await fetch("https://localhost:7062/api/Conversations/Message", requestOptions);

            if (response.status !== 200) {
                console.log("Something went wrong. Status code: " + response.status)
            }

            if (response.status === 200) {
                const messageResponse = await response.json();
                console.log(messageResponse);
                // Navigate to all messages page
                navigate("/all-requests");
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