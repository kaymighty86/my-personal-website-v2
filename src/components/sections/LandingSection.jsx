import styles from "./LandingSection.module.css";
import landingImageFallback from "../../assets/pictures/landing page pic.png"
import landingVideo from "../../assets/video/landing-section-video.mp4"
import squarePattern from "../../assets/textures/tiny squares pattern corrected.svg"

import Highlighter from "../UI/Highlighter";
import Card from "../UI/Card";
import Socials from "../Socials";
import StackedList from "../UI/StackedList";

export default function LandingSection(){

    return (
    <>
        <header id="landing" className={styles.landingSection}>
            <video className={styles.landingSectionMedia} poster={landingImageFallback} autoPlay muted loop playsInline preload="auto" disablePictureInPicture disableRemotePlayback >
                <source src={landingVideo} type="video/mp4"/>
            </video>
            <span className={styles.fullsreenSquarePattern} style={{backgroundImage: `url(${squarePattern})`}}></span>
            <div className={styles.landingSectionUpperLayer}>
                <div className={styles.dataSegment}>
                    <h1><Highlighter>Simeon</Highlighter> Adeoye</h1>
                    <h3>Front End Developer & UI/UX Designer</h3>
                    <Socials />
                    <Card className={styles.valuesList}>
                        <StackedList list ={[
                            "Experienced multidisciplined Frontend Engineer dedicated to developing fully functional products and solutions that provide the best user experience and greatly contribute to business growth.",
                            "Excels at maintaining and enhancing existing web solutions or products.",
                            "Enjoys working on exciting team projects.",
                        ]} />
                    </Card>
                </div>
            </div>
        </header>
    </>
    );
}