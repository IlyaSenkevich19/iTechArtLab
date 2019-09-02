import React from "react";

class Weather extends React.Component {

    
    render() {
        const { temperature, city, country, description, humidity, error } = this.props.weather;
        return (
            <div>
               <div>Temperature: {temperature}</div> 
               <div>City: {city}</div>
               <div>Country: {country}</div>
               <div>Description: {description}</div>
               <div>Humidity: {humidity} </div>
               <div>Error: {error}</div>
            </div>
        )
    }
};

export default Weather;