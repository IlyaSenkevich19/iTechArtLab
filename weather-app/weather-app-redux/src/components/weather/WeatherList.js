import React from "react";

import Day from '../Day';
import Loading from '../Loading';

class WeatherList extends React.PureComponent {
    render() {
        let days = this.props.data;
        const { list, city, error } = this.props.infoData;
        days = days.replace(/\D+/g, "");

        const objDays = {
            1: 11,
            3: 27,
            5: 39
        }

        if (list === undefined) {
            return (<Loading />)
        } else {
            const newList = list.filter((el, index) => (index < objDays[days])).map(day => <div key={day.dt} className='oneDay'> <Day chooseDay={this.props.weather} lists={day} /> </div>)
            return (<div className='listDay'>
                {city ?
                    <div className='main'>
                        {newList}
                    </div> : <p className='error'>{error}</p>
                }
            </div>)
        }
    }
};

export default WeatherList;