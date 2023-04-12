import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Furniture from "./components/Furniture";
import Kitchen from "./components/Kitchen";
import Kitchen_Accessory from './components/Kitchen_Accessory';
import Footer from "./components/Footer";
import Carousel from "./components/Carousel";
import FurniturePartnerSliderComponent from "./partner_components/FurniturePartner/FurniturePartnerSliderComponent";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FurnitureNobilia from "./furniture_pages/FurnitureNobilia";
import FurnitureAran from "./furniture_pages/FurnitureAran";
import FurnitureLube from './furniture_pages/FurnitureLube';
import FurnitureVertex from "./furniture_pages/FurnitureVertex";
import FurnitureNobiliaNavbarComponent from "./furniture_navbar_components/FurnitureNobiliaNavbarComponent";
import FurnitureLubeNavbarComponent from "./furniture_navbar_components/FurnitureLubeNavbarComponent";
import FurnitureVertexNavbarComponent from "./furniture_navbar_components/FurnitureVertexNavbarComponent";
import FurnitureAranNavbarComponent from "./furniture_navbar_components/FurnitureAranNavbarComponent";
import KitchenAegNavbarComponent from "./kitchen_navbar_components/KitchenAegNavbarComponent";
import KitchenBoschNavbarComponent from "./kitchen_navbar_components/KitchenBoschNavbarComponent";
import KitchenElectroluxNavbarComponent from './kitchen_navbar_components/KitchenElectroluxNavbarComponent';
import KitchenNeffNavbarComponent from './kitchen_navbar_components/KitchenNeffNavbarComponent';
import KitchenWhirlpoolNavbarComponent from './kitchen_navbar_components/KitchenWhirlpoolNavbarComponent';
import KitchenMieleNavbarComponent from './kitchen_navbar_components/KithcenMieleNavbarComponent';
import KitchenAeg from './kitchen_pages/KitchenAeg';
import KitchenBosch from './kitchen_pages/KitchenBosch';
import KitchenElectrolux from './kitchen_pages/KitchenElectrolux';
import KitchenMiele from "./kitchen_pages/KitchenMiele";
import KitchenNeff from './kitchen_pages/KitchenNeff';
import KitchenWhirlpool from "./kitchen_pages/KitchenWhirlpool";
import Privacy from "./footer_pages_components/Privacy";
import FooterPrivacyNavbar from "./footer_pages_components/FooterPrivacyNavbar";
import KitchenAccessorysBlanco from "./kitchen_accessorys_page/KitchenAccessorysBlanco";
import KitchenAccessorysDyson from "./kitchen_accessorys_page/KitchenAccessorysDyson";
import KitchenAccessorysGrohe from "./kitchen_accessorys_page/KitchenAccessorysGrohe";
import KitchenAccessorysSchock from "./kitchen_accessorys_page/KitchenAccessorysSchock";
import KitchenAccessorysTekaGlobal from "./kitchen_accessorys_page/KitchenAccessorysTekaGlobal";
import KitchenAccessorysBlancoNavbarComponent from "./kithcen_accessorys_navbar_components/KitchenAccessorysBlancoNavbarComponent";
import KitchenAccessorysDysonNavbarComponent from "./kithcen_accessorys_navbar_components/KitchenAccessorysDysonNavbarComponent";
import KitchenAccessorysGroheNavbarComponent from "./kithcen_accessorys_navbar_components/KitchenAccessorysGroheNavbarComponent";
import KitchenAccessorysSchockNavbarComponent from "./kithcen_accessorys_navbar_components/KitchenAccessorysSchockNavbarComponent";
import KitchenAccessorysTekaGlobalNavbarComponent from "./kithcen_accessorys_navbar_components/KitchenAccessorysTekaGlobalNavbarComponent";


 function App() {
   return (

    <Router>
      <Routes>

        <Route path="/" element={<><Navbar /> <Hero /> <Furniture /> <Kitchen /> <Kitchen_Accessory /> <FurniturePartnerSliderComponent/>  <Footer /></>} /> 

        <Route path="/footer_pages_components/privacy" element={<> <FooterPrivacyNavbar/> <Privacy /> <Footer /></>} />

        <Route path="/furniture_pages/FurnitureNobilia" element={<> <FurnitureNobiliaNavbarComponent/> <FurnitureNobilia /> <Footer /></>}/>
        <Route path="/furniture_pages/FurnitureAran" element={<> <FurnitureAranNavbarComponent /> <FurnitureAran /><Footer /> </>}/>
        <Route path="/furniture_pages/FurnitureLube" element={<> <FurnitureLubeNavbarComponent /><FurnitureLube /><Footer /></>}/>
        <Route path="/furniture_pages/FurnitureVertex" element={<> <FurnitureVertexNavbarComponent /><FurnitureVertex /><Footer /></>}/>

        <Route path="/kitchen_pages/KitchenAeg" element={<> <KitchenAegNavbarComponent /><KitchenAeg /><Footer /></>}/>
        <Route path="/kitchen_pages/KitchenBosch" element={<> <KitchenBoschNavbarComponent /><KitchenBosch /><Footer /></>}/>
        <Route path="/kitchen_pages/KitchenElectrolux" element={<> <KitchenElectroluxNavbarComponent /><KitchenElectrolux /><Footer /></>}/>
        <Route path="/kitchen_pages/KitchenMiele" element={<> <KitchenMieleNavbarComponent /><KitchenMiele /><Footer /></>}/>
        <Route path="/kitchen_pages/KitchenNeff" element={<> <KitchenNeffNavbarComponent /><KitchenNeff /><Footer /></>}/>
        <Route path="/kitchen_pages/KitchenWhirlpool" element={<> <KitchenWhirlpoolNavbarComponent /><KitchenWhirlpool /><Footer /> </> }/>

        <Route path="/kitchen_accessorys_page/KitchenAccessorysBlanco" element={<> <KitchenAccessorysBlancoNavbarComponent/> <KitchenAccessorysBlanco/> <Footer/> </>}/>
        <Route path="/kitchen_accessorys_page/KitchenAccessorysDyson" element={<> <KitchenAccessorysDysonNavbarComponent/> <KitchenAccessorysDyson/> <Footer/> </>}/>
        <Route path="/kitchen_accessorys_page/KitchenAccessorysGrohe" element={<> <KitchenAccessorysGroheNavbarComponent/> <KitchenAccessorysGrohe/> <Footer/> </>}/>
        <Route path="/kitchen_accessorys_page/KitchenAccessorysSchock" element={<> <KitchenAccessorysSchockNavbarComponent/> <KitchenAccessorysSchock/> <Footer/> </>}/>
        <Route path="/kitchen_accessorys_page/KitchenAccessorysTekaGlobal" element={<> <KitchenAccessorysTekaGlobalNavbarComponent/> <KitchenAccessorysTekaGlobal/> <Footer/> </>}/>

      </Routes>
    </Router>

       );
      }

export default App;

