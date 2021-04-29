import React, { useEffect } from 'react';

const UseEscape = onEscape => {
    useEffect(() => {
        const handleEsc = event => {
            if (event.keyCode === 27) 
                //console.log("keycode is 27: esc")
                onEscape();
        };
        window.addEventListener('keydown', handleEsc);

        return () => {
            window.removeEventListener('keydown', handleEsc);
        };
    });
}

export default UseEscape