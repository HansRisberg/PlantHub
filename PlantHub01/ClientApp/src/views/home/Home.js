import plant from "../../assets/plant1.jpg";
import { Hero } from "../../components/Hero";
import { PlantCard } from "../../components/PlantCard";

// Test data

const data = [
    {
        nickname: "Teemo",
        species: "Herb",
        price: "100",
        image: plant
    },
    {
        nickname: "Janna",
        species: "Vine",
        price: "50",
        image: plant
    }
]

export const Home = () => {
    return (
        <div>
            <Hero />
            This will show the plants that users can browse through on the home page
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
    );
}