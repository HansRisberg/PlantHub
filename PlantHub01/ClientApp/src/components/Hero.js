import heroImage from "../assets/plantimg.png";

export const Hero = () => {
    return (
        <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ flexDirection: "column" }}>
              <h1>Share your plants</h1>
                <h1>Propagate your passion</h1>
            </div>
            <img src={heroImage} width="650px" style={{ borderRadius: "20px", marginBottom: "30px", marginTop: "30px" }} />
        </div>
    )
}