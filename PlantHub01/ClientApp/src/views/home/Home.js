import plant from "../../assets/plant1.jpg";
import { Hero } from "../../components/Hero";
import { PlantCard } from "../../components/PlantCard";

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
    },
    {
        nickname: "Nami",
        species: "Bush",
        price: "0",
        image: plant
    },
];

export const Home = () => {
    return (
        <div>
            <Hero />
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
                {data.map((plant) => {
                    return (
                        <div>
                            <PlantCard plant={plant} />
                        </div>
                        )
                }) }
            </div>
      </div>
    );
}
