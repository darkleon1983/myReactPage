import React, { useState} from 'react';



const Button = () => {

    const [count, countActive] = useState(0);

    const toggleButton = () => {
        countActive(count + 1);
        if (count > 15) {
            alert('Stop fucking clicking, you motherfucker');
        }
    }
    return (
        <div>
            <button onClick={toggleButton}>You press me {count} times</button>
        </div>
    );
}

export default Button;
