import React from "react";

import Day from "./Day";

class DaysList extends React.Component {
    render() {
        const { city, error, list, days } = this.props.weather;
        console.log(days)

        if (days === 'за 3 дня') {
            return (
                <div>
                    {city ?
                        <div className='main'>
                            {list.filter((el, index) => (index < 25)).map(day => <div> <Day chooseDay={this.props.weather} lists={day} /> </div>)}
                        </div> : <p>{error}</p>
                    }
                </div>

            )
        } else if (days === 'за 1 день') {
            return (
                <div>
                    {city ?
                        <div className='main'>
                            {list.filter((el, index) => (index < 39)).map(day => <div> <Day chooseDay={this.props.weather} lists={day} /> </div>)}
                        </div> : <p>{error}</p>
                    }
                </div>


            )
        } else if (days === 'за 5 дней') {
            return (
                <div>
                    {city ?
                        <div className='main'>
                            {list.filter((el, index) => (index < 17)).map(day => <div> <Day chooseDay={this.props.weather} lists={day} /> </div>)}
                        </div> : <p>{error}</p>
                    }
                </div>

            )
        }





    }






};

export default DaysList;




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