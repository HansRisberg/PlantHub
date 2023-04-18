import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import * as React from 'react';
import Stack from '@mui/material/Stack';
import { SendMessage } from './SendMessage';
import { Avatar } from "@mui/material";
import { ChatBox, ReceiverMessage, SenderMessage } from "mui-chat-box";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

// TODO: If we implement db structure for seeing who sent a message, we can use chat
// Installation guide: https://www.npmjs.com/package/mui-chat-box

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
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "40px" }}>
            <h1>Messages</h1>
            <Stack spacing={2} sx={{ maxWidth: 900 }}>
                {messages.map((message, index) => {
                    return (
                        <div key={index}>
                            <ChatBox>
                                {
                                    message.senderUserId === Number(localStorage.getItem("UserId")) ?
                                        <SenderMessage
                                            avatar={<Avatar>Me</Avatar>}
                                        >
                                            {message.messageText}
                                        </SenderMessage>
                                        :
                                        <ReceiverMessage avatar={<Avatar></Avatar>} >
                                            {message.messageText}
                                        </ReceiverMessage>
                                }
                            </ChatBox>
                        </div>
                    )
                })}
            <SendMessage conversation={conversation} />
            </Stack>
        </div>
    )
}