import styles from "./FooterSection.module.css";
import footerBackground from "../../assets/pictures/happy communication.jpg";
import tinySquaresPattern from "../../assets/textures/tiny squares pattern corrected.svg";

import ContactForm from "../ContactForm";
import Card from "../UI/card";
import Highlighter from "../UI/Highlighter";

export default function FooterSection(){
    return(
        <section className={styles.footerSection} style={{backgroundImage: `url(${footerBackground})`}}>
            <span className={styles.fullsreenSquarePattern} style={{backgroundImage: `url(${tinySquaresPattern})`}}></span>
            <div className={styles.landingSectionUpperLayer}>
                <Card type="elevated" className={styles.contactFormCard}>
                    <h1>Reach <Highlighter>Out</Highlighter></h1>
                    <ContactForm />
                </Card>
            </div>
        </section>
    );
}