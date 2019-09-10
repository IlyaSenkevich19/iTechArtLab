import React from "react";

import Day from "./Day";

class DaysList extends React.Component {
    render() {
        const { city, error, list, days } = this.props.weather;
        
        if (days === 3) {
            return (
                <div className='listDay'>
                    {city ?
                        <div className='main'>
                            {list.filter((el, index) => (index < 27)).map(day => <div key={day.dt} className='oneDay'> <Day  chooseDay={this.props.weather} lists={day} /> </div>)}
                        </div> : <p>{error}</p>
                    }
                </div>
            )
        } else if (days === 1) {
            return (
                <div className='listDay'>
                    {city ?
                        <div className='main'>
                            {list.filter((el, index) => (index < 11)).map(day => <div key={day.dt}  className='oneDay'> <Day chooseDay={this.props.weather} lists={day} /> </div>)}
                        </div> : <p>{error}</p>
                    }
                </div>
            )
        } else if (days === 5) {
            return (
                <div className='listDay'>
                    {city ?
                        <div className='main'>
                            {list.filter((el, index) => (index < 39)).map(day => <div key={day.dt} className='oneDay'> <Day  chooseDay={this.props.weather} lists={day} /> </div>)}
                        </div> : <p>{error}</p>
                    }
                </div>
            )
        } else { return (<div className='error'>{error}</div>) }
    }
};

export default DaysList;
