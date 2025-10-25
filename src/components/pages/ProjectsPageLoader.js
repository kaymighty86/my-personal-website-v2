export function projectsPageLoader({params,request}){
    async function fetchProjectsList(){
        const projectsResponse = await fetch("https://my-personal-website-7ac29-default-rtdb.firebaseio.com/projects.json");

        if(!projectsResponse.ok){
            throw new Error("Unable to fetch projects list.");
        }

        const projectsList = await projectsResponse.json();

        //used the commented code below to test the Suspense fallback
        // return new Promise((resolve, reject)=>{
        //     setTimeout(()=>{
        //         resolve(projectsList);
        //     }, 3000)
        // });
        return projectsList;
    }

    return {
        projectsResponse: fetchProjectsList()//returning the unresolved promise so it can be handled in the loaded page instead of waiting for it from here
    }
}