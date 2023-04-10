import heroImage from "../assets/heroPlant.jpg";

export const Hero = () => {
    return (
        <div>
            <img src={heroImage} width="400px" style={{ borderRadius: "150px", marginBottom: "30px", position: "relative", left: "700px", marginTop: "30px" }} />
        </div>
    )
}