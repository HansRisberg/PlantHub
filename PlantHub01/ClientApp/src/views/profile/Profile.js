import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PlantCard } from "../../components/PlantCard";
import './Profile.css';

export const Profile = () => {
    // This will ensure logged in user sees their plants when visiting profile page
    useEffect(() => {
        fetchUserData();
        fetchUsersPlants();
    }, []);

    // Used for setting which plants current logged in user has
    const [plantList, setPlantList] = useState([]);

    const [userData, setUserData] = useState("");

    const navigate = useNavigate();

    // When clicking logout, we remove current "userId" from localStorage and navigate to index
    const handleLogout = () => {
        localStorage.removeItem("userId");
        navigate("/");
    }

    // Fetches current logged in user plants
    // Fetch is not executed if user is not logged in
    const fetchUsersPlants = async () => {
        const userId = localStorage.getItem("userId");

        if (!userId) {
            return;
        } else {
            await fetch("https://localhost:7062/api/Plants/UserId/" + userId)
                .then((response) => response.json())
                .then((data) => setPlantList(data));
        }
    }

    // Fetches current logged in user data
    // Fetch is not executed if user is not logged in
    const fetchUserData = async () => {
        const userId = localStorage.getItem("userId");

        if (!userId) {
            return;
        } else {
            await fetch("https://localhost:7062/api/Users/" + localStorage.getItem("userId"))
                .then((response) => response.json())
                .then((data) => setUserData(data))
        }
    }

    return (
        <div className="container">
            <h1>{userData.name}</h1>
            <button onClick={handleLogout}>Logout</button>
            <button onClick={() => navigate('/create-plant')}>Create Plant</button>
            <button onClick={() => navigate('/all-requests')}>Messages</button>
            <div className="profile" style={{ display: "flex", flexDirection: "row", wordWrap: "break-word" }}>
                <div style={{ width: "600px" }}>
                    {userData.bio}
                </div>
            </div>
            <h1>My Plants:</h1>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
                {plantList.length ?
                    plantList.map((plant, index) => {
                        return (
                            <div key={index}>
                                <PlantCard plant={plant} />
                            </div>
                        )
                    })
                    : "I have no plants, but I would love to get my hand on a good stem"
                }
            </div>
        </div>
    )
}
