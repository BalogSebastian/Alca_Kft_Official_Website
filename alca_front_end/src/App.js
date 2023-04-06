import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Furniture from "./components/Furniture";
import Kitchen from "./components/Kitchen";
import Kitchen_Accessory from './components/Kitchen_Accessory';
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Furniture/>
      <Kitchen/>
      <Kitchen_Accessory/>
      <Footer/>
    </div>
  );
}

export default App;
