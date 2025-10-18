import styles from "./StackedList.module.css";
import { FaCircleCheck } from "react-icons/fa6";

export default function StackedList({ListItemSymbol=<FaCircleCheck/>, list=[]}){
    return (
        <ul className={styles.infoList}>
            {
                list.map((info, id) => <li key={id}><span>{ListItemSymbol}</span><p>{info}</p></li>)
            }
        </ul>
    );
}