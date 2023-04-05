import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Furniture from "./components/Furniture";
import Kitchen from "./components/Kitchen";

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Furniture/>
      <Kitchen/>
    </div>
  );
}

export default App;
