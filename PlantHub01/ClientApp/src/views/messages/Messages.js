import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import SnackbarContent from '@mui/material/SnackbarContent';
import { SendRequest } from '../sendRequest/SendRequest';

export const Messages = () => {
    const conversation = useLocation();

    const [messages, setMessages] = useState([]);

    useEffect(() => {
        fetchMessages();
    }, []);

    const fetchMessages = async () => {
        await fetch("https://localhost:7062/api/Conversations/Messages/" + conversation.state.id)
            .then((response) => response.json())
            .then((data) => setMessages(data))
    }

    return (
        <div>
            <h1>Messages</h1>
            <Stack spacing={2} sx={{ maxWidth: 600 }}>
                {messages.map((message, index) => {
                    return (
                        <div key={index}>
                            <SnackbarContent message={message.messageText} />
                        </div>
                    )
                })}
            </Stack>

        </div>
    )
}