// ClientApp/src/hooks/useGeolocation.js

import { useState, useEffect } from 'react';

// This custom hook handles geolocation and returns latitude and longitude
const useGeolocation = () => {
    const [location, setLocation] = useState({ latitude: null, longitude: null });
    const [error, setError] = useState(null);

    useEffect(() => {
        // This function is called when the geolocation request is successful
        const handleSuccess = (position) => {
            const { latitude, longitude } = position.coords;
            setLocation({ latitude, longitude });
        };

        // This function is called when the geolocation request encounters an error
        const handleError = (error) => {
            setError(error.message);
        };

        // Geolocation options
        const options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0,
        };

        // Check if the browser supports geolocation
        if ('geolocation' in navigator) {
            // Get the current position using the browser's geolocation API
            navigator.geolocation.getCurrentPosition(handleSuccess, handleError, options);
        } else {
            setError('Geolocation not available');
        }
    }, []);

    // Return the location object and any error message
    return { location, error };
};

export default useGeolocation;

