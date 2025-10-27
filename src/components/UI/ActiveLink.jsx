import styles from "./ActiveLink.module.css";
import { Link } from "react-router";

export default function ActiveLink({Icon, showDefaultIcon = false, underline = false, className, children, ...others}){
    const classes = `${styles.activeLink}${className != undefined? " "+className : ""}${underline? " "+styles.underline : ""}${showDefaultIcon? " showDefaultIcon":""}`;

    return (
        <a className={classes} {...others}>
            <span className={styles.text}>{children}</span>
            {Icon && " "}{Icon && <Icon className = {styles.linkIcon}/>}
        </a>
    );
}