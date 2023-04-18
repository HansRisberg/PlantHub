import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export const ToggleAvailable = () => {
    useEffect(() => {
        fetchAvailableStatus();
    }, []);

    const [available, setAvailable] = useState(false);

    // Location is used for storing PlantID
    const plant = useLocation();

    const fetchAvailableStatus = async () => {
        if (!plant.state.id) {
            return;
        } else {
            await fetch("https://localhost:7062/api/Plants/" + plant.state.id)
                .then((response) => response.json())
                .then((data) => setAvailable(data.available))
        }
    }

    const handleChange = async () => {
        // Create requestOptions with data that from formData
        const requestOptions = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            }
        }

        if (!plant.state.id) {
            return;
        } else {
            await fetch("https://localhost:7062/api/Plants/Available/" + plant.state.id, requestOptions)
                .then((response) => response.json())
                .then((data) => setAvailable(data));
        }
    }
    return (
        <FormGroup>
            <FormControlLabel control={<Switch
                checked={available}
                size="small"
                onChange={handleChange}
            />} label="Available for sale" />
        </FormGroup>
    )
}