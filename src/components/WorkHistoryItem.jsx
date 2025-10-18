import styles from "./WorkHistoryItem.module.css";
import Card from "./UI/card";
import UnstackedList from "./UI/UnstackedList";

export default function WorkHistoryItem({dateRange="", companyName = "", jobRole = "", workDescription = "", skillsetList = []}){
    return(
        <Card className={styles.workHistoryItem}>
            <p>{dateRange}</p>
            <h3>{jobRole}</h3>
            <h3>{"- "+companyName}</h3>
            <p>{workDescription}</p>
            {skillsetList.length > 0 && <div className={styles.skillsetList}><UnstackedList list={skillsetList}/></div>}
        </Card>
    );
}