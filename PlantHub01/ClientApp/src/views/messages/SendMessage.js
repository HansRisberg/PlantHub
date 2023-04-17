import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const SendMessage = ({ conversation }) => {
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleMessage = async (event) => {
        event.preventDefault();
        // Create message
        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "ConversationId": conversation.state.id,
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
                // Reloads page after message is created to show new message
                window.location.reload(false);
            }
        } catch (error) {
            console.log(error);
        }

    }
    return (
        <div>
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
                    <Button variant="outlined" onClick={() => navigate('/all-requests')}>Back to all messages</Button>
                    <Button type="submit" variant="contained">Send</Button>
                </Stack>
            </Box>

        </div>
    )
}