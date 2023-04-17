import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

export const EditPlant = () => {
	const navigate = useNavigate();
	const plantId = useLocation();

	useEffect(() => {
		fetchPlant();
	}, []);

	const [plantData, setPlantData] = useState({});

	const [name, setName] = useState("");
	const [about, setAbout] = useState("");
	const [price, setPrice] = useState("");
	const [available, setAvailable] = useState("");
	const [plantName, setPlantName] = useState("");
	const [plantFamily, setPlantFamily] = useState("");

	// Get plant data to edit
	const fetchPlant = async () => {

		if (!plantId.state.id) {
			return;
		} else {
			await fetch("https://localhost:7062/api/Plants/" + plantId.state.id)
				.then((response) => response.json())
				.then((data) => setPlantData(data));

			setName(plantData.name);
			setAbout(plantData.about);
			setPrice(plantData.price);
			setAvailable(plantData.available);
			setPlantName(plantData.plantName);
			setPlantFamily(plantData.plantFamily);
		}

	}

	const handleSubmit = (event) => {
		event.preventDefault();

		const requestOptions = {
			method: "PUT",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				"Name": name,
				"About": about,
				"PlantName": plantName,
				"PlantFamily": plantFamily,
				"Price": price,
				"Available": available,
			})
		}

		console.log(plantId.state.id);
		console.log(requestOptions);

		// Send PUT request to update plant in database
		//try {
		//	let res = await fetch("https://localhost:7062/api/Plants/" + plantId, requestOptions);

		//	if (res.status !== 201) {
		//		console.log("Something went wrong. Status code: " + res.status)
		//	}

		//	if (res.status === 201) {
		//		const response = await res.json();
		//		// Navigates to login page after successful creation of user
		//		navigate("/login");
		//	}
		//} catch (error) {
		//	console.log(error);
		//}
	}

    return (
        <div>
			<Container component="main" maxWidth="xs">
				<Box
					sx={{
						marginTop: 4,
						display: 'flex',
						flexDirection: 'column',
					}}
				>
					<Typography component="h1" variant="h3">
						Edit plant
					</Typography>
					<Box component="form" noValidate sx={{ mt: 3 }} onClick={handleSubmit}>
						<Grid container spacing={2}>
							<Grid item xs={12}>
									<TextField
										fullWidth
										id="name"
										name="name"
										label="name"
										value={name}
										onChange={(event) => { setName(event.target.value)}}
									/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									fullWidth
									id="about"
									label="about"
									name="about"
									multiline
									rows={2}
									value={about}
									onChange={(event) => { setAbout(event.target.value) }}
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									fullWidth
									id="price"
									label="price"
									name="price"
									value={price}
									onChange={(event) => { setPrice(event.target.value) }}
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									fullWidth
									id="available"
									label="available"
									name="available"
									value={available}
									onChange={(event) => { setAvailable(event.target.value) }}
								/>
							</Grid>
						</Grid>
						<Button
							type="submit"
							fullWidth
							variant="contained"
							style={{ backgroundColor: "#609966" }}
							sx={{ mt: 3, mb: 2 }}
						>
							Save
						</Button>
						<Button onClick={() => navigate('/profile')} style={{ color: "#40513B" }}>Cancel</Button>
					</Box>
				</Box>
			</Container>
        </div>
    )
}