import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
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

	// Get plant data to edit
	const fetchPlant = async () => {

		if (!plantId.state.id) {
			return;
		} else {
			await fetch("https://localhost:7062/api/Plants/" + plantId.state.id)
				.then((response) => response.json())
				.then((data) => setPlantData(data));
		}
	}

    return (
        <div>
			<Container component="main" maxWidth="xs">
				<CssBaseline />
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
					<Box component="form" noValidate sx={{ mt: 3 }}>
						<Grid container spacing={2}>
							<Grid item xs={12}>
									<TextField
										fullWidth
										id="name"
										name="name"
										label="Name"
										value={plantData.name}
										onChange={(event) => { setPlantData({ name: event.target.value })}}
									/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									fullWidth
									id="about"
									label="About"
									name="about"
									multiline
									rows={2}
									value={plantData.about}
									onChange={(event) => { setPlantData({ about: event.target.value }) }}
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									fullWidth
									id="plantName"
									label="Plant Name"
									name="plantName"
									value={plantData.about}
									onChange={(event) => { setPlantData({ plantName: event.target.value }) }}
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									fullWidth
									id="price"
									label="Price"
									name="price"
									value={plantData.price}
									onChange={(event) => { setPlantData({ price: event.target.value }) }}
								/>
							</Grid>

						</Grid>
						<Button
							type="submit"
							fullWidth
							variant="contained"
							sx={{ mt: 3, mb: 2 }}
						>
							Save
						</Button>
						<Button onClick={() => navigate('/profile')}>Cancel</Button>
					</Box>
				</Box>
			</Container>
        </div>
    )
}