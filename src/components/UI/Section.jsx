import styles from "./Section.module.css";
import { useState } from "react";

export default function Section({type = "normal", className, children, ...others}){
    //type: normal | focus

    const [inFocus, setFocus] = useState(false)

    const classes = `${styles.customSection}${className != undefined ? " "+className : ""}${inFocus? " "+styles.focus : ""}`;
    
    function handleFocusOn(){//only handle this state change operation if this section is a focusable section
        type === "focus" && setFocus(true);
    }

    function handleFocusOff(){
        type === "focus" && setFocus(false);
    }

    return (
        <section className={classes} {...others}>
            <span onMouseEnter={handleFocusOn} onMouseLeave={handleFocusOff}>
                {children}
            </span>
        </section>
    );
}