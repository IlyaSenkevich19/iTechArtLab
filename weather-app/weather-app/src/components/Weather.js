import React from "react";

const Weather = props => {
    const { temperature, city, country, description, humidity, error, icon } = props.weather;
    const iconURL = `http://openweathermap.org/img/w/${icon}.png`;
    return (
        <div>
            {city ?
                <div>
                    <img src={iconURL} alt={description}/>
                    <p>Temperature: {temperature}</p>
                    <p>City: {city}</p>
                    <p>Country: {country}</p>
                    <p>Description: {description}</p>
                    <p>Humidity: {humidity} </p>
                </div> : <p>{error}</p>
            }
        </div>
    )
};

export default Weather;