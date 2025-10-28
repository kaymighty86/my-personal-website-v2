import sectionImage from "../../assets/pictures/team work 3d.jpg";
import styles from "./ProjectsSection.module.css";

import SplitSection from "../UI/SplitSection";
import Section from "../UI/Section";
import Highlighter from "../UI/Highlighter";
import ProjectItem from "../ProjectItem";
import ActiveLink_Router from "../UI/ActiveLink_Router";
import { FaArrowRight } from "react-icons/fa";

import { useRouteLoaderData, Await } from "react-router";
import { Suspense } from "react";

//REMOVE CODE BEFORE DEPLOY
// import tempImage from "../../assets/pictures/temp_projs/tic-tac-toe-screenshot.png";

export default function ProjectsSection(){

    const loaderData = useRouteLoaderData("root");

    return (
        <SplitSection className={styles.projectsSection}>
            <section className={styles.artSection}>
                <div>
                    <img src={sectionImage} alt="3D Image of a team discussing" />
                </div>
            </section>
            <Section type="focus" className={styles.dataSection}>
                <h1>His <Highlighter>Projects</Highlighter></h1>
                <Suspense fallback={
                    <p>Loading projects list. Please wait...</p>
                }>
                    <Await resolve={loaderData.projectsResponse}>
                        {(projects)=>(
                            projects.filter((project, id)=>(id <= 2)).map(project => (
                                <ProjectItem 
                                    className={styles.projectItem}
                                    key={project.name}
                                    projectTitle={project.name}
                                    projectDescription={project.description}
                                    thumbnail={project.thumbnail}
                                    websiteURL={project.websiteURL}
                                    codeURL={project.codeURL}
                                    skillsetList={project.skillsetList} />
                            ))
                        )}
                    </Await>
                </Suspense>
                <ActiveLink_Router to="projects" className={styles.viewMoreLink} Icon={FaArrowRight} underline>View all projects</ActiveLink_Router>
            </Section>
        </SplitSection>
    );
}