import React, { Component } from "react";

import Day from '../Day'


class WeatherList extends Component {
    render() {
        const days = this.props.data;
        const { list, city, error } = this.props.infoData;

        if (days === 'за 3 дня') {
            return (
                <div className='listDay'>
                    {city ?
                        <div className='main'>
                            {list.filter((el, index) => (index < 27)).map(day => <div key={day.dt} className='oneDay'> <Day chooseDay={this.props.weather} lists={day} /> </div>)}
                        </div> : <p className='error'>{error}</p>
                    }
                </div>
            )
        } else if (days === 'за 1 день') {
            return (
                <div className='listDay'>
                    {city ?
                        <div className='main'>
                            {list.filter((el, index) => (index < 11)).map(day => <div key={day.dt} className='oneDay'> <Day chooseDay={this.props.weather} lists={day} /> </div>)}
                        </div> : <p className='error'>{error}</p>
                    }
                </div>

            )
        } else if (days === 'за 5 дней') {
            return (
                <div className='listDay'>
                    {city ?
                        <div className='main'>
                            {list.filter((el, index) => (index < 39)).map(day => <div key={day.dt} className='oneDay'> <Day chooseDay={this.props.weather} lists={day} /> </div>)}
                        </div> : <p className='error'>{error}</p>
                    }
                </div>

            )
        } else { return (<p className='error'>{error}</p>) }

    }
};

export default WeatherList;