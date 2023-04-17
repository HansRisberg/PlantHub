import { Route, Routes } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import { Layout } from './components/Layout';
import './custom.css';
import React, { useEffect } from 'react';

const App = () => {
    useEffect(() => {
    // Create a script element to load the Google Maps API
    const script = document.createElement('script');
    //process.env henter API key fra .env.local filen i Data folder.
    // Fetch the API key from the .env.local file in the Data folder
        script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBrJ6gX3EB3u_5aLxYsKT1EH_PMmA3z3rU&libraries=geometry&callback=initMap`;
    // Load the script asynchronously and defer its execution
    script.async = true;
    script.defer = true;
    // Add the script element to the document head
    document.head.appendChild(script);
}, []);

  return (
    <Layout>
      <Routes>
        {AppRoutes.map((route, index) => {
          const { element, ...rest } = route;
          return <Route key={index} {...rest} element={element} />;
        })}
      </Routes>
    </Layout>
  );
};


//old app.js code
//const App = () => {
//    return (
//        <Layout>
//            <Routes>
//                {AppRoutes.map((route, index) => {
//                    const { element, ...rest } = route;
//                    return <Route key={index} {...rest} element={element} />;
//                })}
//            </Routes>
//        </Layout>
//    );
//}

export default App;
