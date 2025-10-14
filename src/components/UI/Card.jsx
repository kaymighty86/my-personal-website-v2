import styles from "./Card.module.css";

export default function Card({type = "flat", className, children}){
    //type: elevated or flat

    const classNames = `${styles.card} ${styles[type]} ${className != undefined? className : ""}`;

    return (
        <div className={classNames}>
            {children}
        </div>
    );
}