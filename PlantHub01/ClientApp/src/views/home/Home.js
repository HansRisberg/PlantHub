import plant from "../../assets/plant1.jpg";
import { Hero } from "../../components/Hero";
import { PlantCard } from "../../components/PlantCard";

// This is test data for the frontend for landing page in order to see how it will look like after we get data from db
// Variable "data" can be deleted after we have seeded db with actual data

//TestData
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
    {
        nickname: "Lulu",
        species: "Vine",
        price: "300",
        image: plant
    }
];
export const Home = () => {
    return (
        <div>
            <Hero />
            {/*This will show the plants that users can browse through on the home page*/}
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

