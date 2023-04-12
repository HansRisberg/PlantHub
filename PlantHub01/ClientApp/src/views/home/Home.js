import { useState, useEffect } from 'react';
import { ApiQueries } from "../../components/ApiQueries";
import { Hero } from "../../components/Hero";
import { PlantCard } from "../../components/PlantCard";

// This is test data for the frontend for landing page in order to see how it will look like after we get data from db
// Variable "data" can be deleted after we have seeded db with actual data

export const Home = () => {
    const [plants, setPlants] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await ApiQueries().fetchPlants();
            setPlants(data);
        }
        fetchData();
    }, [])

    return (
        <div>
            <Hero />
            This will show the plants that users can browse through on the home page
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
                {plants.map((plant) => {
                    return (
                        <div>
                            <PlantCard plant={plant} />
                        </div>
                    )
                })}
            </div>
        </div>
    );
}
