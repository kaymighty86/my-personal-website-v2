import styles from "./projectItem.module.css";
import Card from "./UI/Card";
import UnstackedList from "./UI/UnstackedList";
import ActiveLink from "./UI/ActiveLink";

import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export default function ProjectItem({projectTitle = "", projectDescription = "", codeURL = "", websiteURL = "", thumbnail, skillsetList = [], className}){
    
    const classes = `${styles.projectItem}${className != undefined? " "+className:""}`;

    //description should not be more than 100 characters long. If its longer, truncate it
    const truncatedDescription = projectDescription.length > 100? projectDescription.slice(0,100)+"..." : projectDescription;

    return(
        <Card className={classes} elevated>
            <ActiveLink href={websiteURL} target="blank">
                <div className={styles.projectHeaderRow}><h3>{projectTitle}</h3><FaExternalLinkAlt /></div>
                <p className={styles.projectDescription}>{truncatedDescription}</p>
                {skillsetList.length > 0 && <UnstackedList list={skillsetList} className={styles.skillsetList}/>}
                <img src={thumbnail} alt={projectTitle}/>
            </ActiveLink>
            <div className={styles.actionsRow}>
                <ActiveLink href={codeURL} target="blank" Icon = {FaGithub} underline>View Code</ActiveLink>
                <ActiveLink href={websiteURL} target="blank" Icon = {FaExternalLinkAlt} underline>Visit Website</ActiveLink>
            </div>
        </Card>
    );
}