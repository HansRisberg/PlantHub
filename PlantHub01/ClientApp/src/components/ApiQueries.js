export function ApiQueries() {
    const apiPlants = "https://localhost:7062/api/plants";
    const apiUsers = "https://localhost:7062/api/users";

    async function fetchPlants() {
        const response = await fetch(apiPlants);
        const data = await response.json();
        return data;
    }

    async function fetchUsers() {
        const response = await fetch(apiUsers);
        const data = await response.json();
        return data;
    }

    return { fetchPlants, fetchUsers };
}