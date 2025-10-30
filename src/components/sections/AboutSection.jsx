import styles from "./AboutSection.module.css";
import Highlighter from "../UI/Highlighter";
import Section from "../UI/Section";
import SplitSection from "../UI/SplitSection";
import WorkHistoryItem from "../WorkHistoryItem";
import ActiveLink from "../UI/ActiveLink";
import ActiveLink_Router from "../UI/ActiveLink_Router";
import { FaArrowRight } from "react-icons/fa";

import sectionImage from "../../assets/pictures/team work.jpg"

import workHistoryData from "../../data/work_history.json";

export default function AboutSection(){
    return (
        <SplitSection id="about" className={styles.aboutSection}>
            <Section className={styles.dataSection}>
                <div className={styles.biography}>
                    <h1><Highlighter>Seasoned</Highlighter> Frontend Engineer</h1>
                    <p>Passionate about designing and developing fully functional, accessible, and scalable 
                        frontend applications combining thoughtful design with sophisticated engineering for providing great user experiences.</p>

                    <p>He currently works at <ActiveLink href="https://www.etranzact.com/" target="blank" showDefaultIcon>eTranzact</ActiveLink> as a Senior Product Engineer, where he has built extensive experience in the FinTech industry, contributing 
                        to the development of innovative and reliable financial technology solutions built for accessibility, performance and usability accross various sectors including financial institutions and e-Commerce Businesses. He works with a team that 
                        drove over a 65% increase in the company's revenue during the 2024 financial year by developing thoughtful, customer-centric software products 
                        with progressive interfaces, built through agile methodologies to enhance engagement and customer satisfaction.</p>

                    <p>Before that, He handled development of web products and solutions at Orion Centuro Ltd (Software Solution Provider), Ariwo 
                        Digital (Brand Management Agency), and freelanced for companies and businesses where he developed frontend applications that contributed 
                        to their achievement of huge profit margins.</p>

                    <p>He enjoys researching on the next exciting technology and team bonding activities.</p>
                </div>
                {
                    workHistoryData.workHistory.map((work, id) => (
                        <WorkHistoryItem key={id} 
                        dateRange={work.dateRange} 
                        jobRole={work.jobRole} 
                        companyName={work.companyName} 
                        companyURL={work.companyURL} 
                        workDescription={work.workDescription}
                        skillsetList={work.skillsetList}/>
                    ))
                }
                
                <ActiveLink href="Resume-Simeon-Adeoye-Frontend-Dev.pdf" target="blank" className={styles.viewMoreLink} Icon={FaArrowRight} underline>View Full Resume</ActiveLink>
            </Section>
            <section className={styles.artSection}>
                <div>
                    <img src={sectionImage} alt="3D Image of co-workers planning the design of an app" />
                </div>
            </section>
        </SplitSection>
    );
}