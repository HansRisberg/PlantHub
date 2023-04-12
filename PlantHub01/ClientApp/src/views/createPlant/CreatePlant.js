import * as React from 'react';
import { useState } from 'react';

export const CreatePlant = () => {
    const [formData, setFormData] = useState({
        name: '',
        about: '',
        plantFamily: '',
        plantName: '',
        motherPlant: '',
        price: 0,
    });

//    const handleChange = (e) => {
//        setFormData({
//            ...formData,
//            [e.target.name]: e.target.value,
//        });
//    };

//    const handleSubmit = (e) => {
//        e.preventDefault();
//        // TODO: Handle form submission
//    };

    return (
        <div>
            <h1>Create Plant</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} />
                </div>
                <div>
                    <label>About:</label>
                    <textarea name="about" value={formData.about} onChange={handleChange}></textarea>
                </div>
                <div>
                    <label>Plant Family:</label>
                    <input type="text" name="plantFamily" value={formData.plantFamily} onChange={handleChange} />
                </div>
                <div>
                    <label>Plant Name:</label>
                    <input type="text" name="plantName" value={formData.plantName} onChange={handleChange} />
                </div>
                <div>
                    <label>Mother Plant:</label>
                    <input type="text" name="motherPlant" value={formData.motherPlant} onChange={handleChange} />
                </div>
                <div>
                    <label>Price:</label>
                    <input type="number" name="price" value={formData.price} onChange={handleChange} />
                </div>
                <button type="submit">Create Plant</button>
            </form>
        </div>
    );
}
