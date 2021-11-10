import axios from 'axios';

const loadWeather = async (dispatch) =>{

    
    let res = await axios.get(
        `/api/weather/getZipCode/?userId=${sessionStorage.getItem('userId')?sessionStorage.getItem('userId'):1}`
      );
  
      let userZipCode = res.data;

 
  
      let response = await axios.get(
        `http://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_WEATHERAPI_KEY}&q=${userZipCode}&days=3&aqi=yes&alerts=no`
      );
  
      let weatherInfo = [
        {
          country: response.data.location.country,
          state: response.data.location.region,
          city: response.data.location.name,
        },
        {
          condition: response.data.current.condition.text,
          icon: response.data.current.condition.icon,
          temp_actual: response.data.current.temp_f,
          temp_feelsLike: response.data.current.feelslike_f,
          gust: response.data.current.gust_mph,
          humidity: response.data.current.humidity,
          rain: response.data.current.precip_in,
        },
        {
          date: response.data.forecast.forecastday[0].date,
          condition: response.data.forecast.forecastday[0].day.condition.text,
          icon: response.data.forecast.forecastday[0].day.condition.icon,
          temp_average: response.data.forecast.forecastday[0].day.avgtemp_f,
          temp_max: response.data.forecast.forecastday[0].day.maxtemp_f,
          temp_min: response.data.forecast.forecastday[0].day.mintemp_f,
          humidity_avg: response.data.forecast.forecastday[0].day.avghumidity,
          maxwind: response.data.forecast.forecastday[0].day.maxwind_mph,
          rain: response.data.forecast.forecastday[0].day.totalprecip_in,
        },
        {
          date: response.data.forecast.forecastday[1].date,
          condition: response.data.forecast.forecastday[1].day.condition.text,
          icon: response.data.forecast.forecastday[1].day.condition.icon,
          temp_average: response.data.forecast.forecastday[1].day.avgtemp_f,
          temp_max: response.data.forecast.forecastday[1].day.maxtemp_f,
          temp_min: response.data.forecast.forecastday[1].day.mintemp_f,
          humidity_avg: response.data.forecast.forecastday[1].day.avghumidity,
          maxwind: response.data.forecast.forecastday[1].day.maxwind_mph,
          rain: response.data.forecast.forecastday[1].day.totalprecip_in,
        },
        {
          date: response.data.forecast.forecastday[2].date,
          condition: response.data.forecast.forecastday[2].day.condition.text,
          icon: response.data.forecast.forecastday[2].day.condition.icon,
          temp_average: response.data.forecast.forecastday[2].day.avgtemp_f,
          temp_max: response.data.forecast.forecastday[2].day.maxtemp_f,
          temp_min: response.data.forecast.forecastday[2].day.mintemp_f,
          humidity_avg: response.data.forecast.forecastday[2].day.avghumidity,
          maxwind: response.data.forecast.forecastday[2].day.maxwind_mph,
          rain: response.data.forecast.forecastday[2].day.totalprecip_in,
        }
      ];

 

    for(let i=0; i < weatherInfo.length; i++){
       if(i === 0){
          
        dispatch({
            type: 'loadWeather/loadLocation',
            payload: weatherInfo[i]
        })
        
       }
       if(i === 1){
           
        dispatch({
            type: 'loadWeather/loadCurrent',
            payload: weatherInfo[i]
        })
     
       }
       if(i === 2){
       
        dispatch({
            type: 'loadWeather/loadDay1',
            payload: weatherInfo[i]
        })
        }
        if(i === 3){
          
            dispatch({
                type: 'loadWeather/loadDay2',
                payload: weatherInfo[i]
            })
        }
        if(i===4){
          dispatch({
            type: 'loadWeather/loadDay3',
            payload: weatherInfo[i]
        })
        }
    }

}

export default loadWeather;