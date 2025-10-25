import styles from "./ActiveLink.module.css";
import { Link, NavLink } from "react-router";

/**
 * This is the same as the "ActiveLink" element, but the link element is the React Router "Link" component instead of the "a" element
 */
export default function ActiveLink_Router({Icon, underline = false, className, children, ...others}){
    const classes = `${styles.activeLink}${className != undefined? " "+className : ""}${underline? " "+styles.underline : ""}`;

    return (
        <NavLink className={classes} {...others}>
            <span className={styles.text}>{children}</span>
            {Icon && " "}{Icon && <Icon className = {styles.linkIcon}/>}
        </NavLink>
    );
}