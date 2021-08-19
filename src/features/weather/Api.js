import React from 'react';
import Carousel from 'react-elastic-carousel';
import { useSelector} from 'react-redux';


const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 300, itemsToShow: 2 },
  { width: 450, itemsToShow: 3 },
  { width: 600, itemsToShow: 4 },
  { width: 750, itemsToShow: 5 },

];

const Api = () => {

  const weather = useSelector((state) => state.weather)


  if(weather.location.length === 0 || weather.current.length === 0 || weather.day1.length === 0 || weather.day2.length === 0 || weather.day3.length === 0){
    return <h3>Weather Loading...</h3>
  } 

  return (
    <div className="category-container">
    <h3 className="category-title">3 Day Weather {`(${weather.location.city}, ${weather.location.state})`}</h3>
      <div className="content">
        <Carousel breakPoints={breakPoints}>
          <div className="day">
            <h3>
              Current{' '}
              
            </h3>
            <img src={weather.current.icon}></img>
            <p>{`${weather.current.condition}`}</p>
            <p>temp : {`${weather.current.temp_actual} (f)`}</p>
            <p>temp(feelsLike) : {`${weather.current.temp_feelsLike} (r)`}</p>
            <p>humdity : {`${weather.current.humidity} (%)`}</p>
            <p>rain: {`${weather.current.rain} (in)`}</p>
            <p>wind: {`${weather.current.gust} (mph)`}</p>
          </div>
          <div className="day">
            <h3>{`${weather.day1.date}`}</h3>
            <img src={weather.day1.icon}></img>
            <p>{`${weather.day1.condition}`}</p>
            <p>temp (avg): {`${weather.day1.temp_average} (f)`}</p>
            <p>temp (max) : {`${weather.day1.temp_max} (f)`}</p>
            <p>temp (min) : {`${weather.day1.temp_min} (f)`}</p>
            <p>humdity : {`${weather.day1.humidity_avg} (%)`}</p>
            <p>rain: {`${weather.day1.rain} (in)`}</p>
            <p>wind: {`${weather.day1.maxwind} (mph)`}</p>
          </div>
          <div className="day">
            <h3>{`${weather.day2.date}`}</h3>
            <img src={weather.day2.icon}></img>
            <p>{`${weather.day2.condition}`}</p>
            <p>temp (avg): {`${weather.day2.temp_average} (f)`}</p>
            <p>temp (max) : {`${weather.day2.temp_max} (f)`}</p>
            <p>temp (min) : {`${weather.day2.temp_min} (f)`}</p>
            <p>humdity : {`${weather.day2.humidity_avg} (%)`}</p>
            <p>rain: {`${weather.day2.rain} (in)`}</p>
            <p>wind: {`${weather.day2.maxwind} (mph)`}</p>
          </div>
          <div className="day">
            <h3>{`${weather.day3.date}`}</h3>
            <img src={weather.day3.icon}></img>
            <p>{`${weather.day3.condition}`}</p>
            <p>temp (avg): {`${weather.day3.temp_average} (f)`}</p>
            <p>temp (max) : {`${weather.day3.temp_max} (f)`}</p>
            <p>temp (min) : {`${weather.day3.temp_min} (f)`}</p>
            <p>humdity : {`${weather.day3.humidity_avg} (%)`}</p>
            <p>rain: {`${weather.day3.rain} (in)`}</p>
            <p>wind: {`${weather.day3.maxwind} (mph)`}</p>
          </div>
        </Carousel>
      </div>
    </div>
  );


};

export default Api;
