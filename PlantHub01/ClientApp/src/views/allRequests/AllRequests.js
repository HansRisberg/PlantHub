import { useEffect, useState } from 'react';
import { RequestCard } from './RequestCard';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';

export const AllRequests = () => {
    const [conversations, setConversations] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchConversations()        
    }, []);

    const fetchConversations = async () => {
        const userId = localStorage.getItem("userId");

        if (!userId) {
            return;
        } else {
            const res = await fetch("https://localhost:7062/api/Conversations/" + userId)
            const data = await res.json();
            setConversations(data);
            console.log(data);
        }
    }

    return (
        <div>
            <h1>Conversations</h1>
            <Button onClick={() => navigate('/profile')} size="small" variant="outlined">Back to profile</Button>
            <div>
                {conversations.length ?
                    conversations.map((conversation, index) => {
                        return (
                            <div key={index}>
                                <h1>{Number(localStorage.getItem("userId")) === conversation.senderUserId ? "Sent request" : "Received request"}</h1>
                                <RequestCard conversation={conversation} />
                            </div>
                        )
                    })
                    : "No conversations available"
                }
            </div>
        </div>
    )
}