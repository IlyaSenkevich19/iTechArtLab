import React from "react";

const Form = props => {
    return (
        <div className='form'>
            <form  id='data' onSubmit={props.getApiWeather}>
                <input className='input' name='city' placeholder='City' />
                <button>Get Weather</button>
            </form>
            <select className='select' form='data'>
                <option name='one'>за 1 день</option>
                <option name='three'>за 3 дня</option>
                <option name='five'>за 5 дней</option>
            </select>
        </div>
    )
};

export default Form;