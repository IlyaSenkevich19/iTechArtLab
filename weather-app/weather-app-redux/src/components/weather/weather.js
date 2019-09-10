import React, { Component } from "react";

class Weather extends Component {
    render() {
        const city = this.props.city;
        const { temp, description, icon  } = this.props.forecast[0];
        const iconURL = `http://openweathermap.org/img/w/${icon}.png`;
        const t = Math.floor(temp);
        return (
            <div className='mainInfo'>
                {city ?
                    <div className='weather'>
                        <div className='mainCont'>

                            <p className='city'>{city}</p>
                            <div className='date'>
                                <img className='icon' src={iconURL} alt={description} />
                                <p className='temp'>{t}*C</p>
                            </div>
                            <div className="date2">
                                <p className='desc'>{description}</p>
                            </div>
                        </div>
                        <div>

                        </div>
                    </div> : <p className='error'>Enter the correct city</p>
                }
            </div>
        )
    }
};

export default Weather;