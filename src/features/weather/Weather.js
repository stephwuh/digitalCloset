import axios from 'axios';
import React, { useState } from 'react';

import NavBar from '../navbar/NavBar.js';
import SideNav from '../navbar/SideNav.js';


import WeatherPresentational from './WeatherPresentational.js';
import Api from './Api.js';

import './weather.css';

const Weather = () => {
  const [input, setInput] = useState('');

  const handleInputOnChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (!input) return;
    await axios.post('/api/weather/updateZipCode', {
      userId: sessionStorage.getItem('userId'),
      zipCode: input,
    });
    setInput('');
    window.location.reload();
  };

  return (
    <div className="page-container">
      <NavBar />
      <SideNav />
      <div className="page-content">
      <WeatherPresentational
        handleInputOnChange={handleInputOnChange}
        handleSubmit={handleSubmit}
        input={input}
      />
      <Api />
      </div>
    </div>
  );
};

export default Weather;
