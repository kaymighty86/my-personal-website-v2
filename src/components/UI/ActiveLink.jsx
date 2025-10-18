import styles from "./ActiveLink.module.css";

export default function ActiveLink({Icon, underline = false, className, children, ...others}){
    const classes = `${styles.activeLink}${className != undefined? " "+className : ""}${underline? " "+styles.underline : ""}`;

    return (
        <a className={classes} {...others}>
            <span className={styles.text}>{children}</span>
            {Icon && " "}{Icon && <Icon className = {styles.linkIcon}/>}
        </a>
    );
}