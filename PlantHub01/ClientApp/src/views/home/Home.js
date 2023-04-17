import { useState, useEffect } from 'react';
import { ApiQueries } from "../../components/ApiQueries";
import { Hero } from "../../components/Hero";
import { PlantCard } from "../../components/PlantCard";
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';

export const Home = () => {
    const [plants, setPlants] = useState([]);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const plantsData = await ApiQueries().fetchPlants();
            const usersData = await ApiQueries().fetchUsers();
            setPlants(plantsData);
            setUsers(usersData);
        };
        fetchData();
    }, []);

    //Gets the users location
    var x = document.getElementById("demo");
    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            x.innerHTML = "Geolocation is not supported by this browser.";
        }
    }
    //does something with the location of the user
    function showPosition(position) {
        // Add your code to handle the position data, e.g. display it or use it to filter plants by location
    }

    function getCity(userId) {
        const user = users.find((user) => user.id === userId);
        if (user) {
            for (const key in user) {
                if (key.toLowerCase() === "location") {
                    const locationArray = user[key].split(',');
                    const city = locationArray[0].trim();
                    return city;
                }
            }
        }
        return '';
    }

    return (
        <div>
            <Hero />
            <Divider />
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", margin: "20px" }}>
                <Button variant="outlined" onClick={() => getLocation()} style={{ marginRight: "15px"}}>Nearby</Button>
                <TextField id="outlined-basic" label="Search by town" variant="outlined" />
            </div>
            {/*This will show the plants that users can browse through on the home page*/}
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", flexWrap: "wrap" }}>
                {plants
                    .sort((a, b) => new Date(a.Added) - new Date(b.Added))
                    .map((plant) => {
                        const plantLocation = getCity(plant.userId);
                        return (
                            <div style={{ flexBasis: "25%", marginBottom: "30px" }}>
                                <PlantCard plant={plant} plantLocation={plantLocation} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

//<div style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", flexWrap: "wrap" }}>
//    {plants.map((plant) => {
//        return (
//            <div style={{ flexBasis: "33.33%" }}>
//                <PlantCard plant={plant} />
//            </div>
//        )
//    })}
//</div>
