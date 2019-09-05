import React from "react";

const Day = props => {
    const temp = props.lists.main.temp;
    const description = props.lists.weather[0].description;
    const humidity = props.lists.main.humidity;
    const icon = props.lists.weather[0].icon;
    const iconURL = `http://openweathermap.org/img/w/${icon}.png`;
    const date = props.lists.dt_txt;

    const parseDate = (date) => {
        const split = date.split(' ');
        const time = split[1].split(':');
        const newTime = [time[0], time[1]].join(':');
        const day = split[0].split('-').reverse().join('-');
        const newDate = [day, newTime].join(' ');
        return newDate;
    }

    return (
        <div>
            <p className='date'>{parseDate(date)}</p>
            <img className='small-icon' src={iconURL} alt={description} />
            <p className='info'>Temperature: {temp}</p>
            <p className='info'>Description: {description}</p>
            <p className='info'>Humidity: {humidity}</p>
        </div>
    );

}

export default Day;