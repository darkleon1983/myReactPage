// import React, { useState } from 'react';
// import Button from './Button';
// import { useState } from 'react';

// const Button = () => {
//     const [counter, setCounter] = useState(0);
//     const handlerClick = (event) => {
//         setCounter(counter + 1);
//     }

//     return (
//         <button onClick={handlerClick}>
//             They've been pressed on me {counter} times
//         </button>
//     );
// }

// export default Button;



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