import styles from "./FooterSection.module.css";
import footerBackground from "../../assets/pictures/happy communication.jpg";
import tinySquaresPattern from "../../assets/textures/tiny squares pattern corrected.svg";

import ContactForm from "../ContactForm";

export default function FooterSection(){
    return(
        <section className={styles.footerSection} style={{backgroundImage: `url(${footerBackground})`}}>
            <span className={styles.fullsreenSquarePattern} style={{backgroundImage: `url(${tinySquaresPattern})`}}></span>
            <div className={styles.landingSectionUpperLayer}>
                <ContactForm />
            </div>
        </section>
    );
}