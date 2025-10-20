import styles from "./Button.module.css";

export default function Button({className, children, ...others}){

    const classes = `${styles.button}${className != undefined? " "+className : ""}`;

    return (
        <button className={classes} {...others}>{children}</button>
    );
}