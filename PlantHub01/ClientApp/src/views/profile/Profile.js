import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const Profile = () => {
    useEffect(() => {
        console.log(localStorage.getItem("username"));
    }, [])

    // Allows navigation to another page
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("username");
        navigate("/");
    }

    return (
        <div>
            <h1>Profile</h1>
            <button onClick={handleLogout}>Logout</button>
        </div>
        )
}