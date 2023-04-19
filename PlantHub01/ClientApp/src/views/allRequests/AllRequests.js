import { useEffect, useState } from 'react';
import { RequestCard } from './RequestCard';
import './AllRequests.css';
import Link from '@mui/material/Link';

export const AllRequests = () => {
    const [myRequests, setMyRequests] = useState([]);
    const [receivedRequests, setReceivedRequests] = useState([]);

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
            await setMyRequests(data.filter(data => data.senderUserId === Number(localStorage.getItem("userId"))));
            await setReceivedRequests(data.filter(data => data.senderUserId != Number(localStorage.getItem("userId"))));
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

            <div className="requestWrapper">
                <div className="myRequests">
                    {myRequests.length ?
                        myRequests.map((conversation, index) => {
                            return (
                                <div key={index}>
                                    <RequestCard conversation={conversation} />
                                </div>
                            )
                        })
                        : "No conversations available"
                    }
                </div>

                <div className="receivedRequests">
                    {receivedRequests ?
                        receivedRequests.map((conversation, index) => {
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
        </div>
    )
}