import React from 'react';
import s from './Button.module.css'
function Button({children,onClick, type}) {
    return (
        <button onClick={onClick} className={`${s.btn} ${s[`${type}`]}`}>
            {children}
        </button>
    );
}

export default Button;