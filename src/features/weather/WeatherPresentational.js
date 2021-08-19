import React from 'react';



const WeatherPresentational = props => {
  return (
    <>
      <div className="category-container-weather">
        <h3 className="category-title">Weather Settings</h3>

        <form>
          <input
            className="content-input-field"
            type="number"
            placeholder="Enter Zip Code"
            value={props.input}
            onChange={props.handleInputOnChange}
            required
          ></input>
        </form>
      </div>
      <div className="button-container">
        <button onClick={props.handleSubmit} className="weather-update">
          Change Location
        </button>
      </div>
    </>
  );
};

export default WeatherPresentational;
