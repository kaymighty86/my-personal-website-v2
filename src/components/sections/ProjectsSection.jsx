import sectionImage from "../../assets/pictures/toon computer transparent bg.png";
import styles from "./ProjectsSection.module.css";

import SplitSection from "../UI/SplitSection";
import Section from "../UI/Section";
import Highlighter from "../UI/Highlighter";
import ProjectItem from "../ProjectItem";

//REMOVE CODE BEFORE DEPLOY
import tempImage from "../../assets/pictures/temp_projs/tic-tac-toe-screenshot.png";

export default function ProjectsSection(){
    return (
        <SplitSection className={styles.projectsSection}>
            <section className={styles.artSection}>
                <img src={sectionImage} alt="3D Image of a computer" />
            </section>
            <Section type="focus" className={styles.dataSection}>
                <h1>Past <Highlighter>Works</Highlighter></h1>
                <ProjectItem 
                projectTitle="Tic Tac Toe Game"
                projectDescription="Play the classic turn-based game with a partner and enjoy!"
                thumbnail={tempImage}
                skillsetList={[
                    "React",
                    "Javascript",
                    "css",
                    "Figma",
                    "Photoshop"
                ]} />
                
                <ProjectItem 
                projectTitle="Tic Tac Toe Game"
                projectDescription="Play the classic turn-based game with a partner and enjoy!"
                thumbnail={tempImage}
                skillsetList={[
                    "React",
                    "Javascript",
                    "css",
                    "Figma",
                    "Photoshop"
                ]} />
            </Section>
        </SplitSection>
    );
}