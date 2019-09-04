import React from "react";

const Day = props => {
    const temp = props.lists.main.temp;
    const description = props.lists.weather[0].description;
    const humidity = props.lists.main.humidity;
    const icon = props.lists.weather[0].icon;
    const iconURL = `http://openweathermap.org/img/w/${icon}.png`;
    return (
        <div>
            <img src={iconURL} alt={description} />
            <p>Temperature: {temp}</p>
            <p>Description: {description}</p>
            <p>Humidity: {humidity}</p>
        </div>
    );

}

export default Day;