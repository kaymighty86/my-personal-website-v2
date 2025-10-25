import styles from "./AboutSection.module.css";
import Highlighter from "../UI/Highlighter";
import Section from "../UI/Section";
import SplitSection from "../UI/SplitSection";
import WorkHistoryItem from "../WorkHistoryItem";

import toonDeskImage from "../../assets/pictures/toon desk with keyboard.jpg"

export default function AboutSection(){
    return (
        <SplitSection id="about" className={styles.aboutSection}>
            <Section className={styles.dataSection}>
                <h1>Something <Highlighter>About Him</Highlighter></h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras convallis odio id risus placerat congue. Proin nisl ante, gravida at nibh ut, 
                    posuere sagittis est. Sed eget elit nec nisl ultricies maximus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
                    Maecenas scelerisque nulla neque, ut faucibus urna dapibus sit amet. Nulla id libero a sapien dapibus auctor tincidunt non velit. Nulla facilisi.</p>
                
                <WorkHistoryItem dateRange="2018 - Present" 
                jobRole="Solution Designer & Implementation Strategist" 
                companyName="eTranzact" 
                workDescription ="Posuere sagittis est. Sed eget elit nec nisl ultricies maximus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
                skillsetList={[
                    "Figma",
                    "Adobe Illustrator",
                    "GitHub",
                    "Microsoft Office Suite",
                ]} />
                
                <WorkHistoryItem dateRange="2018 - Present" 
                jobRole="Solution Designer & Implementation Strategist" 
                companyName="eTranzact" 
                workDescription ="Posuere sagittis est. Sed eget elit nec nisl ultricies maximus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus." 
                skillsetList={[
                    "Figma",
                    "Adobe Illustrator",
                    "GitHub",
                    "Microsoft Office Suite",
                ]} 
                />
            </Section>
            <section className={styles.artSection}>
                <img src={toonDeskImage} alt="3D Image of a desk with work tools scattered on it" />
            </section>
        </SplitSection>
    );
}