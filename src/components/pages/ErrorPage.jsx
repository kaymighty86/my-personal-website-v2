import styles from "./ErrorPage.module.css";

import { useRouteError } from "react-router"
import Section from "../UI/Section";
import Card from "../UI/Card";
import Highlighter from "../UI/Highlighter";
import { FaRegFrown, FaArrowRight } from "react-icons/fa";
import ActiveLink_Router from "../UI/ActiveLink_Router";
import Button from "../UI/Button";

export default function ErrorPage(){
    const error = useRouteError();

    const errorMessage = error.status == 404? <p>The Page you're trying to access either does not exist or has been moved.</p> : 
        <p>{error.data}</p>

    return (
        <Section>
            <div className={styles.header}>
                <h1><Highlighter>Simeon</Highlighter> Adeoye</h1>
                <h3>Front End Developer</h3>
            </div>
            <section className={styles.mainSection}>
                <Card className={styles.messageBoard}>
                    <h1>Sorry <FaRegFrown /></h1>
                    {errorMessage}
                    <ActiveLink_Router to="/"><Button>Home <FaArrowRight /></Button></ActiveLink_Router>
                </Card>
            </section>
        </Section>
    )
}