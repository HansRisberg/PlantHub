import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
/*import * as React from 'react';*/
import { useLocation } from 'react-router-dom';

export const SendRequest = () => {

    const location = useLocation();
    console.log(location);

    //const handleMessage = async () => {

    //    const requestOptions = {
    //        method: "POST",
    //        headers: {
    //            "Content-Type": "application/json"
    //        },
    //        body: JSON.stringify({ "Username": user })
    //    }
    //}
    return (
        <div>
            <h1>Send cutting request</h1>
            <Box
                component="form"
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
                    />
                </div>
                <Stack direction="row" spacing={2}>
                    <Button variant="contained">Send</Button>
                </Stack>
            </Box>

        </div>
    )
}