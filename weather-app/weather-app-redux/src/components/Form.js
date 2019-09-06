import React from "react";

const Form = props => {
    return (
        <div className='form'>
            <input className='input' name='city' placeholder='City' onChange={props.changeCity} />
        </div>
    )
};

export default Form;