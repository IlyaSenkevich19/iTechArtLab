import React from "react";

import Day from "./Day";

class DaysList extends React.Component {





    render() {
        const { city, error, list, days } = this.props.weather;


        switch (days) {
            case "за 3 день": return (
                <div>
                    {city ?
                        <div className='main'>
                            {list.map((day, index = 25) => {
                                (day < index) ?
                                    <div><Day chooseDay={this.props.weather} lists={day} /></div> : null
                            })}
                        </div> : <p>{error}</p>
                    }
                </div>

            );
            case "за 1 дня": return (
                <div>
                    {city ?
                        <div className='main'>
                            {list.map((day, index = 39) => {
                                (day < index) ?
                                    <div><Day chooseDay={this.props.weather} lists={day} /></div> : null
                            })}
                        </div> : <p>{error}</p>
                    }
                </div>

            );;
            case "за 5 дней": return (
                <div>
                    {city ?
                        <div className='main'>
                            {list.map((day, index = 17) => {
                                (day < index) ?
                                    <div><Day chooseDay={this.props.weather} lists={day} /></div> : null
                            })}
                        </div> : <p>{error}</p>
                    }
                </div>

            );;
            default: ;
        }




        // return (
        //     <div>
        //         {city ?
        //             <div className='main'>
        //                 {list.map(day =>
        //                     <div key={day.id}><Day chooseDay={this.props.weather} lists={day} /></div>
        //                 )}
        //             </div> : <p>{error}</p>
        //         }
        //     </div>
        // )
    }
};

export default DaysList;
