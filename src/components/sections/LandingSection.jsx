import styles from "./LandingSection.module.css";
import landingImageFallback from "../../assets/pictures/tech particles pic.png"
import landingVideo from "../../assets/video/landing-section-video.mp4"
import squarePattern from "../../assets/textures/tiny squares pattern corrected.svg"

import { FaCircleCheck } from "react-icons/fa6";

import { Suspense } from "react";
import Card from "../UI/card";
import Socials from "../communication/Socials";

export default function LandingSection(){

    return (
      <section className={styles.landingSection}>
        <Suspense fallback={<img className={styles.landingSectionMedia} src={landingImageFallback} alt="techy particles image"/>}>
            <video className={styles.landingSectionMedia} autoPlay muted loop>
                <source src={landingVideo} type="video/mp4"/>
            </video>
        </Suspense>
        <span className={styles.fullsreenSquarePattern} style={{backgroundImage: `url(${squarePattern})`}}></span>
        <div className={styles.landingSectionUpperLayer}>
            <div className={styles.dataSegment}>
                <h1><b>Simeon</b> Adeoye</h1>
                <h3>Front End Web Developer & UX/UI Designer</h3>
                <Socials />
                <Card>
                    {/* <p>Do you need a multi disciplined frontend web developer?</p> */}
                    <ul className={styles.valuesList}>
                        <li><span><FaCircleCheck/></span><p>Do you need a new web application or product developed?</p></li>
                        <li><span><FaCircleCheck/></span><p>Do you need help maintaining and enhancing your existing web solutions or products?</p></li>
                        <li><span><FaCircleCheck/></span><p>Do you need a frontend developer to join your team on your exciting projects?</p></li>
                    </ul>
                </Card>
            </div>
        </div>
      </section>
    );
}