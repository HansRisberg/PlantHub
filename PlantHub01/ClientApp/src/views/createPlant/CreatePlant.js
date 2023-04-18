import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Input from '@mui/material/Input';

export const CreatePlant = () => {

	// Allows navigation to another page
	const navigate = useNavigate();

	// State variable to store the image file
	const [image, setImage] = React.useState(null);

	async function handleSubmit(event) {
		event.preventDefault();

		// Get data from form
		const formData = new FormData(event.currentTarget);
		formData.append("UserId", localStorage.getItem("userId"));
		formData.append("Image", image);
		

		axios.post("https://localhost:7062/api/Plants", formData)
		.then((response) => console.log(response))

		navigate('/profile');
	};

	return (
		<Container component="main" maxWidth="xs">
			<Box
				sx={{
					marginTop: 4,
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}
			>
				<Typography component="h1" variant="h4">
					Add a plant
				</Typography>
				<Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<TextField
								required
								fullWidth
								id="name"
								label="Name"
								name="name"
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								required
								fullWidth
								id="about"
								label="About"
								name="about"
								multiline
								rows={4}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								required
								fullWidth
								id="plantName"
								label="Plant Name"
								name="plantName"
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								required
								fullWidth
								id="motherPlant"
								label="Mother Plant"
								name="motherPlant"
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								required
								fullWidth
								id="plantFamily"
								label="Plant Family"
								name="plantFamily"
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								required
								fullWidth
								id="price"
								label="Price"
								name="price"
							/>
						</Grid>
						<Grid>
							<Input type="file" onChange={e => setImage(e.target.files[0])} ></Input>
						</Grid>
					</Grid>
					<Button
						type="submit"
						fullWidth
						style={{ backgroundColor: "#609966" }}
						variant="contained"
						sx={{ mt: 3, mb: 2 }}
					>
						Create Plant
					</Button>
				</Box>
			</Box>
		</Container>
	);
}
