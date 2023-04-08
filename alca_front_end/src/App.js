 import React from "react";
 import Hero from "./components/Hero";
 import Navbar from "./components/Navbar";
 import Furniture from "./components/Furniture";
 import Kitchen from "./components/Kitchen";
 import Kitchen_Accessory from './components/Kitchen_Accessory';
 import Footer from "./components/Footer";
 import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FurnitureNobilia from "./furniture_pages/FurnitureNobilia";

 function App() {
   return (

    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Hero />
              <Furniture />
              <Kitchen />
              <Kitchen_Accessory />
              <Footer />
            </>
          }
        />
        <Route
          path="/furniture_pages/FurnitureNobilia"
          element={
            <>
              {/*<Navbar />*/}
              <FurnitureNobilia />
              <Footer />
            </>
          }
        />
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

