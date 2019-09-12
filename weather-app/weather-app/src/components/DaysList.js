import React from "react";

import Day from "./Day";
import Loading from './Loading';

class DaysList extends React.Component {
    render() {
        const { city, error, list, days } = this.props.weather;
        const day = days.replace(/\D+/g, "");

        const obj = {
            1: 11,
            3: 27,
            5: 39
        }

        if (list === undefined) {
            return (<Loading />)
        } else {
            const newList = list.filter((el, index) => (index < obj[day])).map(day => <div key={day.dt} className='oneDay'> <Day chooseDay={this.props.weather} lists={day} /> </div>);
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

export default DaysList;

