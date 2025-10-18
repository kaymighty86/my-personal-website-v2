import styles from "./SplitSection.module.css";

export default function SplitSection({className, children, ...others}){
    const classes = `${styles.splitSection}${className != undefined? " "+className : ""}`;
    
    return (
        <section className={classes} {...others}>
            {children}
        </section>
    );
}