export function ApiQueries() {
    const apiLibrary = "https://localhost:7062/api/plants";

    async function fetchPlants() {
        const response = await fetch(apiLibrary);
        const data = await response.json();
        return(data);
    }

    return { fetchPlants };
}

