import React from "react";

import Day from "./Day";

class DaysList extends React.Component {
    render() {
        const { city, error, list, days } = this.props.weather;
        const day = days.replace(/\D+/g,"");

        const obj = {
            1: 11,
            3: 27,
            5: 39
        }
        
        
        return ( <div className='listDay'>
        {city ?
             <div className='main'>
                 {list.filter((el, index) => (index < obj[day])).map(day => <div key={day.dt} className='oneDay'> <Day chooseDay={this.props.weather} lists={day} /> </div>)}
             </div> : <p className='error'>{error}</p>
         }
     </div>)
    }
};

export default DaysList;

