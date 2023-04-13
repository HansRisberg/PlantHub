import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router-dom';

export const CreatePlant = () => {

	// Allows navigation to another page
	const navigate = useNavigate();

	async function handleSubmit(event) {
		event.preventDefault();

		// Get data from form
		const formData = new FormData(event.currentTarget);

		// Create requestOptions with data that from formData
		const requestOptions = {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				"UserId": localStorage.getItem("userId"),
				"Name": formData.get('name'),
				"About": formData.get('about'),
				"PlantFamily": formData.get('plantFamily'),
				"PlantName": formData.get('plantName'),
				"MotherPlant": formData.get('motherPlant'),
				"Price": formData.get('price')
			})
		}

		console.log(requestOptions);

		// Send POST request to create a new plant in database
		try {
			let res = await fetch("https://localhost:7062/api/Plants", requestOptions);

			if (res.status !== 201) {
				console.log("Something went wrong. Status code: " + res.status)
			}

			if (res.status === 201) {
				const response = await res.json();
				console.log(response);
				// Navigates to plant page after successful creation of plant
				navigate(`/plant/${response.id}`);
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<Box
				sx={{
					marginTop: 8,
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}
			>
				<Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography component="h1" variant="h5">
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
						
					</Grid>
					<Button
						type="submit"
						fullWidth
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


//import * as React from 'react';
//import { useState } from 'react';

//export const CreatePlant = () => {
//    const [formData, setFormData] = useState({
//        name: '',
//        about: '',
//        plantFamily: '',
//        plantName: '',
//        motherPlant: '',
//        price: 0,
//    });


//    const handleChange = (e) => {
//        setFormData({
//            ...formData,
//            [e.target.name]: e.target.value,
//        });
//    };

//    const handleSubmit = async (e) => {
//        e.preventDefault();
//        try {
//            const response = await fetch('https://localhost:7062/api/Plants', {
//                method: 'POST',
//                headers: {
//                    'Content-Type': 'application/json',
//                },
//                body: JSON.stringify(formData),
//            });
//            const data = await response.json();
//            console.log(data);

//        } catch (error) {
//            console.error(error);
//        }
//    };



//    return (
//        <div>
//            <h1>Create Plant</h1>
//            <form onSubmit={handleSubmit}>
//                <div>
//                    <label>Name:</label>
//                    <input type="text" name="name" value={formData.name} onChange={handleChange} />
//                </div>
//                <div>
//                    <label>About:</label>
//                    <textarea name="about" value={formData.about} onChange={handleChange}></textarea>
//                </div>
//                <div>
//                    <label>Plant Family:</label>
//                    <input type="text" name="plantFamily" value={formData.plantFamily} onChange={handleChange} />
//                </div>
//                <div>
//                    <label>Plant Name:</label>
//                    <input type="text" name="plantName" value={formData.plantName} onChange={handleChange} />
//                </div>
//                <div>
//                    <label>Mother Plant:</label>
//                    <input type="text" name="motherPlant" value={formData.motherPlant} onChange={handleChange} />
//                </div>
//                <div>
//                    <label>Price:</label>
//                    <input type="number" name="price" value={formData.price} onChange={handleChange} />
//                </div>
//                <button type="submit">Add Plant</button>
//            </form>
//        </div>
//    );
//}
