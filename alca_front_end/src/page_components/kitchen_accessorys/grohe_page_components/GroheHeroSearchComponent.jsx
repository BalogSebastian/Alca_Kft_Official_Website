import React, { useState } from 'react';
import {AiOutlineSearch } from 'react-icons/ai';
//import furniture from "../../../assets/furniture.mp4";
import { useNavigate } from 'react-router-dom';
import Autosuggest from 'react-autosuggest';
import kitchen_accessorys_grohe from '../../../assets/kitchen_accessorys_grohe.mp4';

const suggestion = ['FALSÍKON BELÜLI (REJTETT) ZUHANYRENDSZER TERMÉKEK','Termosztátok',
'FALSÍKON KÍVÜLI ZUHANYRENDSZER TERMÉKEK','KÉZIZUHANYOK ÉS ZUHANYSZETTEK','GROHE ZUHANYOK, A VÍZSZÓRÁS','GROHE SPA KOLLEKCIÓK',
'FÜRDŐSZOBAI CSAPTELEPEK COSMOPOLITAN DESIGN-NAL','FÜRDŐSZOBAI CSAPTELEPEK KORTÁRS DESIGN-NAL','FÜRDŐSZOBAI KIEGÉSZÍTŐK','GROHE KERÁMIÁK',
'ZUHANYTÁLCÁK','ESSENCE FÜRDŐKÁDAINK',
'Grohe vízszűrő rendszerek','GROHE PREMIUM LIFESTYLE KOLLEKCIÓK','GROHE PERFORMANCE TERMÉKCSALÁDOK']

export default function  GroheHeroSearchComponent() {

    const [value, setValue] = useState('');
    const navigate = useNavigate();

    const handleInputChange = (event, {newValue}) => {
      setValue(newValue.toLowerCase());
    };

    const handleSearch = (event) => {
      event.preventDefault();
      switch (value) {
        case 'FALSÍKON BELÜLI (REJTETT) ZUHANYRENDSZER TERMÉKEK':
          navigate('/furniture_pages/FurnitureAran');
          break;
        case 'Termosztátok':
          navigate('/furniture_pages/FurnitureNobilia');
          break;
          case 'FALSÍKON KÍVÜLI ZUHANYRENDSZER TERMÉKEK':
          navigate('/furniture_pages/FurnitureNobilia');
          break;
          case 'KÉZIZUHANYOK ÉS ZUHANYSZETTEK':
          navigate('/furniture_pages/FurnitureNobilia');
          break;
          case 'GROHE ZUHANYOK, A VÍZSZÓRÁS':
          navigate('/furniture_pages/FurnitureNobilia');
          break;
          case 'GROHE SPA KOLLEKCIÓK':
          navigate('/furniture_pages/FurnitureNobilia');
          break;
          case 'FÜRDŐSZOBAI CSAPTELEPEK COSMOPOLITAN DESIGN-NAL':
          navigate('/furniture_pages/FurnitureNobilia');
          break;
          case 'FÜRDŐSZOBAI CSAPTELEPEK KORTÁRS DESIGN-NAL':
          navigate('/furniture_pages/FurnitureNobilia');
          break;
          case 'GROHE KERÁMIÁK':
          navigate('/furniture_pages/FurnitureNobilia');
          break;
          case 'ZUHANYTÁLCÁK':
          navigate('/furniture_pages/FurnitureNobilia');
          break;
          case 'ESSENCE FÜRDŐKÁDAINK':
          navigate('/furniture_pages/FurnitureNobilia');
          break;
          case 'Grohe vízszűrő rendszerek':
          navigate('/furniture_pages/FurnitureNobilia');
          break;
          case 'GROHE PREMIUM LIFESTYLE KOLLEKCIÓK':
          navigate('/furniture_pages/FurnitureNobilia');
          break;
          case 'GROHE PERFORMANCE TERMÉKCSALÁDOK':
          navigate('/furniture_pages/FurnitureNobilia');
          break;
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
    className='w-full h-screen relative'>
      <video className='w-full h-full object-cover'
        src={kitchen_accessorys_grohe}
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
    
  );
};
