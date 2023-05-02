import React from 'react';
import kitchen_miele from '../../assets/kitchen_miele.mp4';
import { useNavigate } from 'react-router-dom';
import Autosuggest from 'react-autosuggest';
import { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

const suggestion = [
  'sütő','hűtő','főzőlap']

export default function KitchenMiele() {

  const [value, setValue] = useState('');
    const navigate = useNavigate();

    const handleInputChange = (event, {newValue}) => {
      setValue(newValue.toLowerCase());
    };

    const handleSearch = (event) => {
      event.preventDefault();
      switch (value) {
        case 'sütő':
          navigate('/kitchen_pages/KitchenMiele#miele_oven');
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

    <div className='w-full h-96vh relative'>
    <video className='w-full object-cover' style={{ height: '40rem'}}
        src={kitchen_miele}
          autoPlay
            loop
              muted/>
              <div className='absolute w-full h-full top-0 left-0 bg-gray-900/30'></div>
    <div onClick={handleHero} className='absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-6'>
        <h1>Válassz a Miele készülékei közül a számodra valót</h1>
        <form className='flex justify-center items-center max-w-[700px] mx-auto w-full p-3 rounded-md mt-6'>
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

