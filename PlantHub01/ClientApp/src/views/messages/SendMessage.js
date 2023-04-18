import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Link from '@mui/material/Link';

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
                    '& .MuiTextField-root': { m: 1, width: '30ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <div>
                    <TextField
                        id="outlined-multiline-static"
                        label="Write your message here..."
                        multiline
                        rows={2}
                        onChange={(event) => setMessage(event.target.value)}
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
                        }}
                    />
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <Stack direction="row" spacing={2}>
                        <Link href="/all-requests"
                            variant="body2"
                            style={{ color: "#40513B", textDecorationColor: "#40513B", marginTop: "8px", textDecoration: "none" }}>
                            Back
                        </Link>
                        <Button type="submit"
                            variant="contained"
                            style={{ backgroundColor: "#609966" }}
                        >Send</Button>
                    </Stack>
                </div>
            </Box>

        </div>
    )
}