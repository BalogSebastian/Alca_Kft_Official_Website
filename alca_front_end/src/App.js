import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Furniture from "./components/Furniture";
import Kitchen from "./components/Kitchen";
import Kitchen_Accessory from './components/Kitchen_Accessory';
import Footer from "./components/Footer";
import AboutPage from "./components/AboutPage";
import Navbar_Header from "./components/Navbar_Header";

import FurniturePartnerSliderComponent from "./partner_components/FurniturePartner/FurniturePartnerSliderComponent";
import KitchenAccessorysSliderComponent from "./partner_components/KitchenAccessorysSliderBaseComponent.jsx/KitchenAccessorysSliderComponent";

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

//KitchenAccessorysViewPage
import KitchenAccessorysNavbarMainCsaptelepComponent from "./KitchenAccessorysPageComponents/KitchenAccessorysNavbarMainCsaptelepComponent";
import KitchenAccessorysNavbarMainMosogatoMedenceComponent from "./KitchenAccessorysPageComponents/KitchenAccessorysNavbarMainMosogatoMedenceComponent";
import KitchenAccessorysNavbarMainMosogatoszerAdagoloComponent from "./KitchenAccessorysPageComponents/KitchenAccessorysNavbarMainMosogatoszerAdagoloComponent";
import KitchenAccessorysNavbarMainViztisztitoComponent from "./KitchenAccessorysPageComponents/KitchenAccessorysNavbarMainViztisztitoComponent";
import KitchenAccessorysNavbarMainBeepitettSzemettaroloComponent from "./KitchenAccessorysPageComponents/KitchenAccessorysNavbarMainBeepitettSzemettaroloComponent";
import KitchenAccessorysNavbarMainKonyhamalacComponent from "./KitchenAccessorysPageComponents/KitchenAccessorysNavbarMainKonyhamalacComponent";
import KitchenAccessorysNavbarMainFooterComponent from "./KitchenAccessorysPageComponents/KitchenAccessorysNavbarMainFooterComponent";
import KitchenAccessorysNavbarSecondMainComponent from "./KitchenAccessorysPageComponents/KitchenAccessorysNavbarSecondMainComponent";
import KitchenAccessorysMainMosogatomedenceComponent from "./KitchenAccessorysPageComponents/KitchenAccessorysMainMosogatomedenceComponent";
import KitchenAccessorysMainCsaptelepComponent from "./KitchenAccessorysPageComponents/KitchenAccessorysMainCsaptelepComponent";
import KitchenAccessorysMainMosogatoszerAdagolokComponent from "./KitchenAccessorysPageComponents/KitchenAccessorysMainMosogatoszerAdagolokComponent";
import KitchenAccessorysMainViztisztitokComponent from "./KitchenAccessorysPageComponents/KitchenAccessorysMainViztisztitokComponent";
import KitchenAccessorysMainBeepitettSzemmettarolokComponent from "./KitchenAccessorysPageComponents/KitchenAccessorysMainBeepitettSzemmettarolokComponent";
import KitchenAccessorysMainKonyhamalacComponent from "./KitchenAccessorysPageComponents/KitchenAccessorysMainKonyhamalacComponent";

//Furniture Pages
import FurnitureMainNobiliaComponent from "./FurniturePageComponents/FurnitureMainNobiliaComponent";
import FurnitureNavbarMainNobiliaComponent from "./FurniturePageComponents/FurnitureNavbarMainNobiliaComponent";
import FurnitureNavbarSecondMainComponent from "./FurniturePageComponents/FurnitureNavbarSecondMainComponent";
import FurnitureMainAranComponent from "./FurniturePageComponents/FurnitureMainAranComponent";
import FurnitureNavbarMainAranComponent from "./FurniturePageComponents/FurnitureNavbarMainAranComponent";
import FurnitureNavbarMainLubeComponent from "./FurniturePageComponents/FurnitureNavbarMainLubeComponent";
import FurnitureMainLubeComponent from "./FurniturePageComponents/FurnitureMainLubeComponent";
import FurnitureNavbarMainCreoComponent from "./FurniturePageComponents/FurnitureNavbarMainCreoComponent";
import FurnitureMainCreoComponent from "./FurniturePageComponents/FurnitureMainCreoComponent";
import FurnitureMainVertexComponent from "./FurniturePageComponents/FurnitureMainVertexComponent";
import FurnitureNavbarMainVertexComponent from "./FurniturePageComponents/FurnitureNavbarMainVertexComponent";
import FurnitureFooterElement from "./FurniturePageComponents/FurnitureFooterElement";



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
import GroheFirstPhotoBlock from './page_components/kitchen_accessorys/grohe_page_components/GroheFirstPhotoBlock';
import GrogeSecondPhotoBlock from "./page_components/kitchen_accessorys/grohe_page_components/GrogeSecondPhotoBlock";
import GroheHeroSearchComponent from "./page_components/kitchen_accessorys/grohe_page_components/GroheHeroSearchComponent";



 function App() {
   return (

    <Router>
      <Routes>

        <Route path="/" element={<> <Navbar_Header/>
          <Navbar />
            <Hero /> 
              <Furniture />
                 <Kitchen />
                    <Kitchen_Accessory />
                       <AboutPage/> 
                        <FurniturePartnerSliderComponent/>
                          <Footer /></>} /> 
        <Route path="/footer_pages_components/privacy" element={<> <FooterPrivacyNavbar/> <Privacy /> <Footer /></>} />




        {/* Furniture Pages */}
        <Route path="/FurniturePageComponents/FurnitureNavbarMainNobiliaComponent" element={<>
          <Navbar_Header/> 
            <FurnitureNavbarMainNobiliaComponent/>
              <FurnitureNavbarSecondMainComponent/> 
                <FurnitureMainNobiliaComponent
                  id="nobilia"
                    />
                     <FurnitureMainAranComponent/>
                      <FurnitureMainLubeComponent/>
                        <FurnitureMainCreoComponent/>
                        <FurnitureMainVertexComponent
                        />
                      </>}/>

        <Route path="/FurniturePageComponents/FurnitureNavbarMainAranComponent" element={<>
          <Navbar_Header/> 
            <FurnitureNavbarMainAranComponent/>
              <FurnitureNavbarSecondMainComponent/> 
                <FurnitureMainNobiliaComponent/>
                        <FurnitureMainAranComponent
                        id="aran"/>
                          <FurnitureMainLubeComponent/>
                            <FurnitureMainCreoComponent/>
                            <FurnitureMainVertexComponent
                        />
                      </>}/>
        <Route path="/FurniturePageComponents/FurnitureNavbarMainLubeComponent" element={<>
          <Navbar_Header/> 
            <FurnitureNavbarMainLubeComponent/>
              <FurnitureNavbarSecondMainComponent/> 
                <FurnitureMainNobiliaComponent/>
                  <FurnitureMainAranComponent/>
                    <FurnitureMainLubeComponent
                      id="lube"
                       />
                       <FurnitureMainCreoComponent/>
                       <FurnitureMainVertexComponent
                        />
                        </>}/>
        <Route path="/FurniturePageComponents/FurnitureNavbarMainCreoComponent" element={<>
          <Navbar_Header/> 
            <FurnitureNavbarMainCreoComponent/>
              <FurnitureNavbarSecondMainComponent/> 
                <FurnitureMainNobiliaComponent/>
                  <FurnitureMainAranComponent/>
                    <FurnitureMainLubeComponent/>
                      <FurnitureMainCreoComponent
                      id="creo"
                      />
                      <FurnitureMainVertexComponent
                        />
                        </>}/>

          <Route path="/FurniturePageComponents/FurnitureNavbarMainVertexComponent" element={<>
          <Navbar_Header/> 
            <FurnitureNavbarMainVertexComponent/>
              <FurnitureNavbarSecondMainComponent/> 
                <FurnitureMainNobiliaComponent/>
                  <FurnitureMainAranComponent/>
                    <FurnitureMainLubeComponent/>
                      <FurnitureMainCreoComponent/>
                        <FurnitureMainVertexComponent
                        id="vertex"
                        />
                          </>}/>


          {/* Here are the kitchen Accessorys components */}
          <Route path="/KitchenAccessorysPageComponents/KitchenAccessorysNavbarMainMosogatoMedenceComponent" element={<> 
          <Navbar_Header/>  
            <KitchenAccessorysNavbarMainMosogatoMedenceComponent />
              <KitchenAccessorysNavbarSecondMainComponent/>
                <KitchenAccessorysMainMosogatomedenceComponent 
                  id="mosogatomedence"/>
                   <KitchenAccessorysMainCsaptelepComponent/>
                    <KitchenAccessorysMainMosogatoszerAdagolokComponent/>
                      <KitchenAccessorysMainViztisztitokComponent/>
                        <KitchenAccessorysMainBeepitettSzemmettarolokComponent/>
                          <KitchenAccessorysMainKonyhamalacComponent/>
                            <KitchenAccessorysSliderComponent/>
                              <Footer/> </>} />
            <Route path="/KitchenAccessorysPageComponents/KitchenAccessorysNavbarMainCsaptelepComponent" element={<> 
              <Navbar_Header/>  
                <KitchenAccessorysNavbarMainCsaptelepComponent />
                  <KitchenAccessorysNavbarSecondMainComponent/>
                    <KitchenAccessorysMainMosogatomedenceComponent />
                      <KitchenAccessorysMainCsaptelepComponent
                        id="csaptelep"/>
                        <KitchenAccessorysMainMosogatoszerAdagolokComponent/>
                          <KitchenAccessorysMainViztisztitokComponent/>
                            <KitchenAccessorysMainBeepitettSzemmettarolokComponent/>
                              <KitchenAccessorysMainKonyhamalacComponent/>
                                <KitchenAccessorysSliderComponent/>
                                  <Footer/> </>} />
            <Route path="/KitchenAccessorysPageComponents/KitchenAccessorysNavbarMainMosogatoszerAdagoloComponent" element={<> 
              <Navbar_Header/>  
                <KitchenAccessorysNavbarMainMosogatoszerAdagoloComponent />
                  <KitchenAccessorysNavbarSecondMainComponent/>
                    <KitchenAccessorysMainMosogatomedenceComponent />
                      <KitchenAccessorysMainCsaptelepComponent/>
                        <KitchenAccessorysMainMosogatoszerAdagolokComponent 
                        id="mosogatoszeradagolo"/>
                          <KitchenAccessorysMainViztisztitokComponent/>
                            <KitchenAccessorysMainBeepitettSzemmettarolokComponent/>
                              <KitchenAccessorysMainKonyhamalacComponent/>
                                <KitchenAccessorysSliderComponent/>
                                  <Footer/> </>} />
              <Route path="/KitchenAccessorysPageComponents/KitchenAccessorysNavbarMainViztisztitoComponent" element={<> 
                <Navbar_Header/>  
                  <KitchenAccessorysNavbarMainViztisztitoComponent />
                    <KitchenAccessorysNavbarSecondMainComponent/>
                      <KitchenAccessorysMainMosogatomedenceComponent />
                        <KitchenAccessorysMainCsaptelepComponent/>
                          <KitchenAccessorysMainMosogatoszerAdagolokComponent/>
                            <KitchenAccessorysMainViztisztitokComponent
                              id="viztisztito"/>
                                <KitchenAccessorysMainBeepitettSzemmettarolokComponent/>
                                  <KitchenAccessorysMainKonyhamalacComponent/>
                                    <KitchenAccessorysSliderComponent/>
                                      <Footer/> </>} /> 
              <Route path="/KitchenAccessorysPageComponents/KitchenAccessorysNavbarMainBeepitettSzemettaroloComponent" element={<> 
                <Navbar_Header/>  
                  <KitchenAccessorysNavbarMainBeepitettSzemettaroloComponent />
                    <KitchenAccessorysNavbarSecondMainComponent/>
                      <KitchenAccessorysMainMosogatomedenceComponent />
                        <KitchenAccessorysMainCsaptelepComponent/>
                          <KitchenAccessorysMainMosogatoszerAdagolokComponent/>
                            <KitchenAccessorysMainViztisztitokComponent/>
                              <KitchenAccessorysMainBeepitettSzemmettarolokComponent
                                id="beepitettszemettarolo"/>
                                  <KitchenAccessorysMainKonyhamalacComponent/>
                                    <KitchenAccessorysSliderComponent/>
                                      <Footer/> </>} />
              <Route path="/KitchenAccessorysPageComponents/KitchenAccessorysNavbarMainKonyhamalacComponent" element={<> 
                <Navbar_Header/>  
                  <KitchenAccessorysNavbarMainKonyhamalacComponent />
                    <KitchenAccessorysNavbarSecondMainComponent/>
                      <KitchenAccessorysMainMosogatomedenceComponent />
                        <KitchenAccessorysMainCsaptelepComponent/>
                          <KitchenAccessorysMainMosogatoszerAdagolokComponent/>
                            <KitchenAccessorysMainViztisztitokComponent/>
                              <KitchenAccessorysMainBeepitettSzemmettarolokComponent/>
                                <KitchenAccessorysMainKonyhamalacComponent
                                  id="konyhamalac"/>
                                    <KitchenAccessorysSliderComponent/>
                                      <Footer/> </>} />
              {/*This is the KitchenAccessorys FooterPage button */}
              <Route path="/KitchenAccessorysPageComponents/KitchenAccessorysNavbarMainFooterComponent" element={<> 
                <Navbar_Header/>  
                  <KitchenAccessorysNavbarMainFooterComponent />
                    <KitchenAccessorysNavbarSecondMainComponent/>
                      <KitchenAccessorysMainMosogatomedenceComponent />
                        <KitchenAccessorysMainCsaptelepComponent/>
                          <KitchenAccessorysMainMosogatoszerAdagolokComponent/>
                            <KitchenAccessorysMainViztisztitokComponent/>
                              <KitchenAccessorysMainBeepitettSzemmettarolokComponent/>
                                <KitchenAccessorysMainKonyhamalacComponent/>
                                  <KitchenAccessorysSliderComponent/>
                                    <Footer/> </>} />
              

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

      </Routes>
    </Router>

       );
      }

export default App;

