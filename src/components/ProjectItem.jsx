import styles from "./projectItem.module.css";
import Card from "./UI/card";
import UnstackedList from "./UI/UnstackedList";
import ActiveLink from "./UI/ActiveLink";

import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export default function ProjectItem({projectTitle = "", projectDescription = "", codeURL = "", websiteURL = "", thumbnail, skillsetList = []}){
    
    return(
        <Card className={styles.projectItem}>
            <ActiveLink>
                <div className={styles.projectHeaderRow}><h3>{projectTitle}</h3><FaExternalLinkAlt /></div>
                <p>{projectDescription}</p>
                {skillsetList.length > 0 && <UnstackedList list={skillsetList} className={styles.skillsetList}/>}
                <img src={thumbnail} alt={projectTitle}/>
            </ActiveLink>
            <div className={styles.actionsRow}>
                <ActiveLink Icon = {FaGithub} underline>View Code</ActiveLink>
                <ActiveLink Icon = {FaExternalLinkAlt} underline>Visit Website</ActiveLink>
            </div>
        </Card>
    );
}