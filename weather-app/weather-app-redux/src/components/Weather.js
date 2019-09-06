import React from "react";

const Weather = props => {
    const data = props.weather;

    console.log(data)


    // const iconURL = `http://openweathermap.org/img/w/${icon}.png`;
    return (
        <div className='mainInfo'>
            {/* {city ?
                <div className='weather'>
                    <div className='mainCont'>

                        <p className='city'>{city}, {country}</p>
                        <div className='date'>
                            <img className='icon' src={iconURL} alt={description} />
                            <p className='temp'>{Math.floor(temperature)}*C</p>
                        </div>
                        <div className="date2">
                            <p className='desc'>{description}</p>
                            <p className='humidity'>Humidity: {humidity}</p>
                        </div>
                    </div>
                    <div>

                    </div>
                </div> : <p className='error'>{error}</p>
            } */}
            hello
        </div>
    )
};

export default Weather;