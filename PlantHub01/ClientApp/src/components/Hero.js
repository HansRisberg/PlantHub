import { useState, useEffect } from "react";
import heroImage1 from "../assets/plantimg.png";
import heroImage2 from "../assets/stiklingscape11.jpeg";
import heroImage3 from "../assets/dogPlant.png";

export const Hero = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const images = [heroImage1, heroImage2, heroImage3];

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImage(currentImage === images.length - 1 ? 0 : currentImage + 1);
        }, 6500);
        return () => clearInterval(intervalId);
    }, [currentImage]);

    //const handleNext = () => {
    //    setCurrentImage(currentImage === images.length - 1 ? 0 : currentImage + 1);
    //};

    //const handlePrev = () => {
    //    setCurrentImage(currentImage === 0 ? images.length - 1 : currentImage - 1);
    //};

    return (
        <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ flexDirection: "column" }}>
                <h1>Share your plants</h1>
                <h1>Propagate your passion</h1>
            </div>
            <div style={{ position: "relative" }}>
                <img src={images[currentImage]} style={{ width: "450px", height: "450px", objectFit: "cover", borderRadius: "20px", marginBottom: "30px", marginTop: "30px" }} />
                {/*<button onClick={handlePrev} style={{ position: "absolute", top: "50%", left: "10px", transform: "translateY(-50%)", fontSize: "24px" }}>*/}
                    
                {/*</button>*/}
                {/*<button onClick={handleNext} style={{ position: "absolute", top: "50%", right: "10px", transform: "translateY(-50%)", fontSize: "24px" }}>*/}
                    
                {/*</button>*/}
            </div>
        </div>
    );
};




//import heroImage from "../assets/plantimg.png";

//export const Hero = () => {
//    return (
//        <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
//            <div style={{ flexDirection: "column" }}>
//              <h1>Share your plants</h1>
//                <h1>Propagate your passion</h1>
//            </div>
//            <img src={heroImage} width="650px" style={{ borderRadius: "20px", marginBottom: "30px", marginTop: "30px" }} />
//        </div>
//    )
//}