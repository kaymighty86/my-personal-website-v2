import styles from "./Highlighter.module.css";
import { useEffect, useRef } from "react";

export default function Highlighter({children}){

    const elementSpan = useRef();
    const highlightSpan = useRef();

    useEffect(()=>{
        //make sure the width of the highlight matches the span of the text it wraps
        const highlightWidth = elementSpan.current.getBoundingClientRect().width + 5;//make it overlap a bit by 5px
        highlightSpan.current.style.width = `${highlightWidth}px`;//set the new width of the highlight span
    },[]);

    return (
        <span ref={elementSpan} className={styles.highlighter}>
            <span ref={highlightSpan} className={styles.highlightSpan}></span>
            <span>{children}</span>
        </span>
    );
}