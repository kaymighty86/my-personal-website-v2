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
        <header className={styles.landingSection}>
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
                    <Card>
                        <StackedList list ={[
                            "Do you need a new web application or product developed?",
                            "Do you need help maintaining and enhancing your existing web solutions or products?",
                            "Do you need a frontend developer to join your team on your exciting projects?",
                        ]} />
                    </Card>
                </div>
            </div>
        </header>
    </>
    );
}