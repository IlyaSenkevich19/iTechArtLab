import React from "react";

const Form = props => {
    return (
        <div>
            <form id='data' onSubmit={props.getApiWeather}>
                <input name='city' placeholder='City' />
                <button>Get Weather</button>
            </form>
            <select form='data'>
                <option name='one'>за 1 день</option>
                <option name='three'>за 3 дня</option>
                <option name='five'>за 5 дней</option>
            </select>
        </div>
    )
};

export default Form;