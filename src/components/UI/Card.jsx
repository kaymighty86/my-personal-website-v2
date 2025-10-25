import styles from "./Card.module.css";

export default function Card({elevated = false,className, children}){
    //type: elevated or flat

    const classNames = `${styles.card} ${styles[elevated?"elevated":""]} ${className != undefined? className : ""}`;

    return (
        <section className={classNames}>
            {children}
        </section>
    );
}