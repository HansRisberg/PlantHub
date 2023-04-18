import React from 'react';
import pic1 from '../../assets/ByComputer.png';
import pic2 from '../../assets/Plants.png';
import pic3 from '../../assets/Monstera.png';
import pic4 from '../../assets/Cutting.png';




export const HowItWorks = () => {
    const steps = [
        {
            title: 'Step 1: Register',
            description: 'Register a profile and let your personality shine!',
            imageSrc: pic1,
            altText: 'Step 1 Image',
            imagePlacement: 'right',
        },
        {
            title: 'Step 2: Browse',
            description: 'Browse through a variety of plants, added by the community',
            imageSrc: pic2,
            altText: 'Step 2 Image',
            imagePlacement: 'left',
        },
        {
            title: 'Step 3: Upload',
            description: 'Upload your own plants, for the world to admire, and desire..',
            imageSrc: pic3,
            altText: 'Step 3 Image',
            imagePlacement: 'right',
        },
        {
            title: 'Step 4: Share',
            description: 'Share plants with other users! Make a wishlist and get cuttings of your favorite plants!',
            imageSrc: pic4,
            altText: 'Step 4 Image',
            imagePlacement: 'left',
        },
    ];

    return (

        <div style={{ textAlign: 'center', maxWidth: '70ch', margin: '0 auto' }}>
            <h1 style={{ marginTop: '50px' }}> How It Works</h1>
            {steps.map((step, index) => (
                <div
                    key={index}
                    style={{
                        display: 'flex',
                        flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
                        alignItems: 'center',
                        marginTop: '1rem',
                    }}
                >
                    <div style={{ flex: 1 }}>
                        <h2>{step.title}</h2>
                        <p>{step.description}</p>
                    </div>
                    <div style={{ flex: 1 }}>
                        <img
                            src={step.imageSrc}
                            alt={step.altText}
                            style={{
                                maxWidth: '100%',
                                maxHeight: '200px',
                                marginLeft: index % 2 === 0 ? '1rem' : '0',
                                marginRight: index % 2 === 0 ? '0' : '1rem',
                            }}
                        />
                    </div>
                </div>
            ))}
        </div>
    );
};  