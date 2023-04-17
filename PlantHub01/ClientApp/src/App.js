import { Route, Routes } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import { Layout } from './components/Layout';
import './custom.css';
import React, { useEffect, useState } from 'react';

const App = () => {
    const [mapsLoaded, setMapsLoaded] = useState(false);

    useEffect(() => {
        window.initMap = () => {
            setMapsLoaded(true);
        };

        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBrJ6gX3EB3u_5aLxYsKT1EH_PMmA3z3rU&libraries=geometry&callback=initMap`;
        script.async = true;
        script.defer = true;
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

export default App;
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