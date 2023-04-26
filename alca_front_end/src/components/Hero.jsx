import React, { useState } from 'react';
import {AiOutlineSearch } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import Autosuggest from 'react-autosuggest';
import main_page_furniture_video from '../assets/main_page_furniture_video.mp4';

const suggestion = [
'electrolux','miele','aeg','bosch',
'neff','whirlpool','konyhamalac',
'mosogatótálcák','csaptelepek','mosogatószer adagolók',
'víztisztitók','beépített szemméttárolók','nobilia','aran',
'lube','creo','vertex']

const Hero = ()  => {

    const [value, setValue] = useState('');
    const navigate = useNavigate();

    const handleInputChange = (event, {newValue}) => {
      setValue(newValue.toLowerCase());
    };

    const handleSearch = (event) => {
      event.preventDefault();
      switch (value) {
        case 'nobilia':
          navigate('/FurniturePageComponents/FurnitureNavbarMainNobiliaComponent');
          break;
        case 'aran':
          navigate('/FurniturePageComponents/FurnitureNavbarMainAranComponent');
          break;
        case 'lube':
          navigate('/FurniturePageComponents/FurnitureNavbarMainLubeComponent');
          break;
        case 'creo':
          navigate('/FurniturePageComponents/FurnitureNavbarMainCreoComponent');
          break;
        case 'vertex':
          navigate('/FurniturePageComponents/FurnitureNavbarMainVertexComponent');
          break;
        case 'mosogatótálcák':
          navigate('/KitchenAccessorysPageComponents/KitchenAccessorysNavbarMainMosogatoMedenceComponent');
          break;
        case 'csaptelepek':
          navigate('/KitchenAccessorysPageComponents/KitchenAccessorysNavbarMainCsaptelepComponent');
          break;
        case 'mosogatószer adagolók':
          navigate('/KitchenAccessorysPageComponents/KitchenAccessorysNavbarMainMosogatoszerAdagoloComponent');
          break;
        case 'víztisztitók':
          navigate('/KitchenAccessorysPageComponents/KitchenAccessorysNavbarMainViztisztitoComponent');
          break;
        case 'beépített szemméttárolók':
          navigate('/KitchenAccessorysPageComponents/KitchenAccessorysNavbarMainBeepitettSzemettaroloComponent');
          break;
        case 'konyhamalac':
          navigate('/KitchenAccessorysPageComponents/KitchenAccessorysNavbarMainKonyhamalacComponent');
          break;
        case 'vertex':
          navigate('/furniture_pages/FurnitureVertex')
          break
        case 'aeg':
          navigate('/kitchen_pages/KitchenAeg')
          break
        case 'bosch':
          navigate('/kitchen_pages/KitchenBosch')
          break
        case 'electrolux':
          navigate('/kitchen_pages/KitchenElectrolux')
          break
        case 'miele':
          navigate('/kitchen_pages/KitchenMiele')
          break
        case 'neff':
          navigate('/kitchen_pages/KitchenNeff')
          break
        case 'whirlpool':
          navigate('/kitchen_pages/KitchenWhirlpool')
          break
        default:
          break;
      }
    };

    const getSuggestions = (value ) => {
      const inputValue = value.toLowerCase();
      const inputLength = inputValue.length;
      
    return inputLength === 0 ? [] : suggestion.filter(
      (suggestion) => suggestion.toLocaleLowerCase().slice(0,inputLength) === inputValue);
    };

    const getSuggestionValue = (suggestion) => suggestion;

    const renderSuggestion = (suggestion) => (
      <div>
        {suggestion}
      </div>
    );

    const inputProps = {
      placeholder: 'Keress a katalógusból',
      value,
      onChange: handleInputChange,
      className: 'p-4 rounded-full w-[300px] sm:w-[400px] text-black text-sm focus:outline-none',
    };
  
    const [display, setDisplay] = useState(false);
    const handleHero = () => {
        setDisplay(!display)
    }

  return (
    <div
    className='w-full h-96vh relative'>
    <video className='w-full object-cover' style={{ height: '50rem'}}
     src={main_page_furniture_video}
      autoPlay
       loop
        muted/>
    <div className='absolute w-full h-full top-0 left-0 bg-gray-900/30'></div>
    <div onClick={handleHero} className='absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-6'>
        <h1>Legjobb választék</h1>
        <h2 className='py-2'>Minőség, megbízhatóság és odafigyelés</h2>
        <form className='flex justify-center items-center max-w-[700px] mx-auto w-full p-3 rounded-md'>
          <Autosuggest
          suggestions={getSuggestions(value)}
          onSuggestionsClearRequested={() => {}}
          onSuggestionsFetchRequested={() => {}}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          inputProps={inputProps}
        />
          <div>
            <button id='search_button_hero_page' type='submit' onClick={handleSearch} ><AiOutlineSearch size={20} className='icon'/></button>
          </div>
        </form>
    </div>
    </div>
    
  )
}

export default Hero