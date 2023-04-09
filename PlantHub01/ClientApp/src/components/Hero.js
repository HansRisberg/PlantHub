import heroImage from "../assets/cover.jpg";

export const Hero = () => {
    return (
        <div>
            <img src={heroImage} width="100%" style={{ borderRadius: "5px", marginBottom: "30px" }} />
        </div>
    )
}