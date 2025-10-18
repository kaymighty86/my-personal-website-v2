import styles from "./Input.module.css";

import { useState } from "react";

export default function Input({label, name, className, onFocus, onBlur, ...others}){

    const inputClasses = `${styles.input}${className != undefined? " "+className : ""}`;

    const [inFocus, setFocus] = useState(false);

    function handleFocusSwitch(event){
        if(!inFocus){
            setFocus(true);
            onFocus && onFocus(event);//in case it was passed (doing this so that it doesn't overide the onFocus and onBlur passed)
        }
        else{
            setFocus(false);
            onBlur && onBlur(event);//in case it was passed
        }
    }

    return (
        <span className={styles.inputContainer}>
            {label && <label htmlFor={name} className={`${styles.label}${inFocus?" "+styles.labelInFocus:""}`}>{label}</label>}
            <input className={inputClasses} onFocus={handleFocusSwitch} onBlur={handleFocusSwitch} {...others}/>
        </span>
    );
}