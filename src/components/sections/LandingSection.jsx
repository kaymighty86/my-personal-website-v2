import styles from "./LandingSection.module.css";
import landingImageFallback from "../../assets/pictures/landing page pic.png"
import landingVideo from "../../assets/video/landing-section-video.mp4"
import squarePattern from "../../assets/textures/tiny squares pattern corrected.svg"

import { Suspense } from "react";
import Highlighter from "../UI/Highlighter";
import Card from "../UI/card";
import Socials from "../Socials";
import StackedList from "../UI/StackedList";

export default function LandingSection(){

    return (
    <>
        <header id="landing" className={styles.landingSection}>
            <Suspense fallback={<img className={styles.landingSectionMedia} src={landingImageFallback} alt="techy image"/>}>
                <video className={styles.landingSectionMedia} autoPlay muted loop>
                    <source src={landingVideo} type="video/mp4"/>
                </video>
            </Suspense>
            <span className={styles.fullsreenSquarePattern} style={{backgroundImage: `url(${squarePattern})`}}></span>
            <div className={styles.landingSectionUpperLayer}>
                <div className={styles.dataSegment}>
                    <h1><Highlighter>Simeon</Highlighter> Adeoye</h1>
                    <h3>Front End Web Developer & UI/UX Designer</h3>
                    <Socials />
                    <Card className={styles.valuesList}>
                        <StackedList list ={[
                            "Expert multidisciplined Frontend Engineer who enjoys developing fully functional web applications / web solutions / websites",
                            "Excels at maintaining and enhancing existing web solutions or products",
                            "Frontend developer who enjoys working on exciting team projects",
                        ]} />
                    </Card>
                </div>
            </div>
        </header>
    </>
    );
}