import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import profileImage from "../../assets/BellaProfile.png";
import { PlantCard } from "../../components/PlantCard";
import plant1 from "../../assets/stikling03.JPG";
import plant2 from "../../assets/stikling08.JPG";
import plant3 from "../../assets/stikling09.jpeg";
import plant4 from "../../assets/stikling11.jpeg";
import './Profile.css';

//Testdata for dummy user
const data = [
    {
        nickname: "Teemo",
        species: "Herb",
        price: "100",
        image: plant1
    },
    {
        nickname: "Janna",
        species: "Vine",
        price: "50",
        image: plant2
    },
    {
        nickname: "Nami",
        species: "Bush",
        price: "0",
        image: plant3
    },
    {
        nickname: "Lulu",
        species: "Vine",
        price: "300",
        image: plant4
    }
];

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
        <div className="container">
  <h1>Bella Delfi</h1>
  <button onClick={handleLogout}>Logout</button>
  <div className="profile" style={{ display: "flex", flexDirection: "row", wordWrap: "break-word"}}>
    <div style={{ width: "600px" }}>
      Hiee, my name is Bella, and I'm an ESFJ, Libra, plantmommy and knitlover! I recently went through a break-up, and though it was sad I am now ready to mingle with all you other plant people and expand my collection.
    </div>
    <div style={{ marginLeft: "10px", position: "relative", width: "400px", height: "600px"}}>
      <img alt="Bella" src={profileImage} style={{ width: "100%", maxHeight: "100%", position: "absolute", top: 0, left: 0}} />
    </div>
  </div>
            <h1>My Plants:</h1>
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
                {data.map((plant) => {
                    return (
                        <div>
                            <PlantCard plant={plant} />
                        </div>
                    )
                })}
        </div>
        </div>
        )
}