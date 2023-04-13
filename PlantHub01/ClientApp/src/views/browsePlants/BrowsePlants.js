import { useState, useEffect } from 'react';
import { ApiQueries } from "../../components/ApiQueries";
import { Hero } from "../../components/Hero";
import { PlantCard } from "../../components/PlantCard";

// This is test data for the frontend for landing page in order to see how it will look like after we get data from db
// Variable "data" can be deleted after we have seeded db with actual data

export const BrowsePlants = () => {
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
            {/*This will show the plants that users can browse through on the home page*/}
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", flexWrap: "wrap" }}>
                {plants
                    .sort((a, b) => new Date(a.Added) - new Date(b.Added))
                    .map((plant) => {
                        return (
                            <div style={{ flexBasis: "25%", marginBottom: "30px" }}>
                                <PlantCard plant={plant} />
                            </div>
                        )
                    })}
            </div>
        </div>
    );
}