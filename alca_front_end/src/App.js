import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Furniture from "./components/Furniture";
import Kitchen from "./components/Kitchen";
import Kitchen_Accessory from './components/Kitchen_Accessory';
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FurnitureNobilia from "./furniture_pages/FurnitureNobilia";
import FurnitureAran from "./furniture_pages/FurnitureAran";
import FurnitureLube from './furniture_pages/FurnitureLube';
import FurnitureVertex from "./furniture_pages/FurnitureVertex";
import FurnitureNobiliaNavbarComponent from "./furniture_navbar_components/FurnitureNobiliaNavbarComponent";
import FurnitureLubeNavbarComponent from "./furniture_navbar_components/FurnitureLubeNavbarComponent";
import FurnitureVertexNavbarComponent from "./furniture_navbar_components/FurnitureVertexNavbarComponent";
import FurnitureAranNavbarComponent from "./furniture_navbar_components/FurnitureAranNavbarComponent";

 function App() {
   return (

    <Router>
      <Routes>
        <Route path="/" element={<><Navbar /> <Hero /> <Furniture /> <Kitchen /> <Kitchen_Accessory /> <Footer /></>} />
        <Route path="/furniture_pages/FurnitureNobilia" element={<> <FurnitureNobiliaNavbarComponent/> <FurnitureNobilia /> <Footer /></>}/>
        <Route path="/furniture_pages/FurnitureAran" element={<> <FurnitureAranNavbarComponent /> <FurnitureAran /><Footer /> </>}/>
        <Route path="/furniture_pages/FurnitureLube" element={<> <FurnitureLubeNavbarComponent /><FurnitureLube /><Footer /></>}/>
        <Route path="/furniture_pages/FurnitureVertex" element={<> <FurnitureVertexNavbarComponent /><FurnitureVertex /><Footer /></>}/>
      </Routes>
    </Router>

       );

      }


      //  <Router>
      //    <Routes> 
      //     <Route path="/pages/FurnitureNobilia" element={<FurnitureNobilia/>}/>
      //    </Routes>
      //    <Navbar/>
      //    <Hero/>
      //    <Furniture/>
      //    <Kitchen/>
      //    <Kitchen_Accessory/>
      //    <Footer />
      //  </Router>
 

        /* <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/furniture" element={<Furniture />} />
        <Route path="/kitchen" element={<Kitchen />} />
        <Route path="/kitchen-accessory" element={<Kitchen_Accessory />} />
        </Routes> */



export default App;

