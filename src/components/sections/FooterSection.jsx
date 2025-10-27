import styles from "./FooterSection.module.css";
import footerBackground from "../../assets/pictures/happy communication.jpg";
import tinySquaresPattern from "../../assets/textures/tiny squares pattern corrected.svg";

import ContactForm from "../ContactForm";
import Card from "../UI/card";
import Highlighter from "../UI/Highlighter";
import ActiveLink from "../UI/ActiveLink";
import Socials from "../Socials";

export default function FooterSection(){
    return(
        <footer id="contact" className={styles.footerSection}>
            <div className={styles.contactSection} style={{backgroundImage: `url(${footerBackground})`}}>
                <span className={styles.fullsreenSquarePattern} style={{backgroundImage: `url(${tinySquaresPattern})`}}></span>
                <div className={styles.SectionUpperLayer}>
                    <Card type="elevated" className={styles.contactFormCard}>
                        <h1>Reach <Highlighter>Out</Highlighter></h1>
                        <ContactForm />
                    </Card>
                </div>
            </div>
            <section className={styles.creditsSection}>
                <p>Designed and developed by yours truly.</p>
                <p>Developed with React.JS, React Router, Javascript and CSS. The pictures were sourced from <ActiveLink href="https://www.freepik.com" target="blank" showDefaultIcon>FreePik</ActiveLink> and video from <ActiveLink href="https://www.pexels.com/" target="blank" showDefaultIcon>Pexels</ActiveLink></p>
                <Socials />
            </section>
        </footer>
    );
}