import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export const Login = () => {
    return (
        <div>
            <h1>Login</h1>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                {/*TODO: These are two types of input fields we can use, decide which one*/}
                <TextField id="outlined-basic" label="Username" variant="outlined" />
                <TextField id="standard-basic" label="Username" variant="standard" />
            </Box>
            <Stack direction="row" spacing={2}>
                <Button variant="contained">Contained</Button>
            </Stack>
        </div>
    )
}