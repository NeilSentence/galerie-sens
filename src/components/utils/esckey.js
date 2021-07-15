import React, { useEffect } from 'react';

const UseEscape = onEscape => {
    useEffect(() => {
        
        const handleEsc = event => {
            if (event.keyCode === 27) 
            {
                //console.log("keycode is 27: esc")
                onEscape()
            }
            if (event.keyCode === 32)
            {
                alert("SPACE!")
                //onSpace()
            }  
        };

        window.addEventListener('keydown', handleEsc);

        return () => {
            window.removeEventListener('keydown', handleEsc);
        };
    });
}

export default UseEscape