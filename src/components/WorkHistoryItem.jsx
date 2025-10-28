import styles from "./WorkHistoryItem.module.css";
import Card from "./UI/Card";
import UnstackedList from "./UI/UnstackedList";
import ActiveLink from "./UI/ActiveLink";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function WorkHistoryItem({className, dateRange="", companyName = "", companyURL="", jobRole = "", workDescription = "", skillsetList = []}){

    const classes = `${styles.workHistoryItem} ${className != undefined? className : ""}`;

    return(
        <Card className={classes}>
            <p>{dateRange}</p>
            <h2>{jobRole}</h2>
            {companyURL != ""? <ActiveLink className={styles.companyName} href={companyURL} target="blank" underline>{companyName} <FaExternalLinkAlt /></ActiveLink> : 
                <p className={styles.companyName}>{companyName}</p>}
            <p className={styles.workDescription}>{workDescription}</p>
            {skillsetList.length > 0 && <div className={styles.skillsetList}><UnstackedList list={skillsetList}/></div>}
        </Card>
    );
}