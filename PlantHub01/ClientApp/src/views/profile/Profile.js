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

    return (
        <div className="container">
        <div className="profile">
            <h1>Bella Delfi</h1>
            <img src={profileImage} width="400px" />
            <p width="600px" text>Hiee, my name is Bella, and I'm an ESFJ, Libra, plantmommy and knitlover! I recently went through a break-up, and though it was sad I am now ready to mingle with all you other plant people and expand my collection.</p>
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