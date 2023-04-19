import { useState } from 'react';
import Button from '@mui/material/Button';
import * as React from 'react';

// This component handles the action to accept a request for your plant

export const AcceptRequest = ({ conversation }) => {
    const [accept, setAccept] = useState(conversation.isAccepted);

    const handleAccept = async () => {
        const requestOptions = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            }
        }

        if (!conversation.id) {
            return;
        } else {
            await fetch("https://localhost:7062/api/Conversations/Accepted/" + conversation.id, requestOptions)
                .then((response) => response.json())
                .then((data) => setAccept(data));
        }
    }

    return (
        <Button onClick={handleAccept}
            /*style={{ color: "#4CACBC" }}*/
            disabled={accept}
            >
                { accept ? "Sold" : "Accept"}
            </Button>
    )
}