import {useState, useEffect} from "react";

export function Plantation() {
    const [plants, setPlants] = useState([]);

    const apiLibrary = "https://localhost:7042/api/plants";

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(apiLibrary);
            const data = await response.json();
            setPlants(data);
        }
        fetchData();
    }, []);

    console.log(plants);
}
