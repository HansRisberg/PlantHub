import { useState, useEffect } from 'react';
import { ApiQueries } from "../../components/ApiQueries";
import { Hero } from "../../components/Hero";
import { PlantCard } from "../../components/PlantCard";

// This is test data for the frontend for landing page in order to see how it will look like after we get data from db
// Variable "data" can be deleted after we have seeded db with actual data

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
            {/*This will show the plants that users can browse through on the home page*/}
            <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
                <button style={{ marginRight: "30px" }} onClick={() => getLocation()}>Nearby</button>
                <input type="text" placeholder="Search by town" />
            </div>
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
