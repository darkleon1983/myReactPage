import React, { useState } from 'react';


const Button = () => {
    const [counter, setCounter] = useState(0);
    const handlerClick = (event) => {
        setCounter(counter + 1);
    }
    return (
        <button onClick={handlerClick}>
            I was pressed { counter } times.
        </button>
    );
}

export default Button;