import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Furniture from "./components/Furniture";
import Kitchen from "./components/Kitchen";
import Kitchen_Accessory from './components/Kitchen_Accessory';

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Furniture/>
      <Kitchen/>
      <Kitchen_Accessory/>
    </div>
  );
}

export default App;
