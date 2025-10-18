import styles from "./UnstackedList.module.css";

export default function UnstackedList({className, list=[]}){

    const classes = `${styles.unstackedList}${className != undefined? " "+className : ""}`;

    return (
        <ul className={classes}>
            {
                list.map((info, id)=>(<li key={id}>{info}</li>))
            }
        </ul>
    );
}