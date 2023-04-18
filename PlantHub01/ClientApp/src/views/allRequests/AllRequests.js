import { useEffect, useState } from 'react';
import { RequestCard } from './RequestCard';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import './AllRequests.css';
import Link from '@mui/material/Link';

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
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "30px" }}>
            <h1>My conversations</h1>
            <Link href="/profile"
                variant="body2"
                style={{ color: "#40513B", textDecorationColor: "#40513B", marginTop: "5px", marginBottom: "20px" }}>
                Back to profile
            </Link>
            {/*<Button onClick={() => navigate('/profile')} size="small" variant="outlined">Back to profile</Button>*/}
            <div>
                {conversations.length ?
                    conversations.map((conversation, index) => {
                        return (
                            <div key={index}>
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