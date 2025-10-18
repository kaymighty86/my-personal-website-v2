import styles from "./Highlighter.module.css";
import { useState } from "react";

export default function Highlighter({children}){

    const [inFocus, setFocus] = useState(false);

    function handleMouseEnter(){
        setFocus(true);
        console.log("triggered");
    }

    function handleMouseExit(){
        setFocus(false);
    }

    return (
        <span className={`${styles.highlighter}${inFocus? " "+styles.inFocus : ""}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseExit}>
            {children}
        </span>
    );
}