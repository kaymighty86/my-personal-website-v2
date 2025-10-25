import Styles from "./ProjectsPage.module.css";
import Page from "./Page";

import Highlighter from "../UI/Highlighter";
import ProjectItem from "../ProjectItem";

import { Await, useRouteLoaderData } from "react-router";
import { Suspense } from "react";

export default function ProjectsPage(){

    const loaderData = useRouteLoaderData("root");

    return (
        <Page>
            <section className={Styles.projectsPage}>
                <h1><Highlighter>Simeon</Highlighter> Adeoye</h1>
                <h2>Projects</h2>
                <section className={Styles.projectsListContainer}>
                    <Suspense fallback={
                        <p>Loading projects list. Please wait...</p>
                    }>
                        <Await resolve={loaderData.projectsResponse}>
                            {(projects)=>(
                                projects.map(project => (
                                    <ProjectItem 
                                        className={Styles.projectItem}
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
                </section>
            </section>
        </Page>
    );
}