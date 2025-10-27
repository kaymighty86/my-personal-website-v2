import Page from './Page';
import LandingSection from '../sections/LandingSection';
import AboutSection from '../sections/AboutSection';
import ProjectsSection from '../sections/ProjectsSection';

import { useEffect } from 'react';
import { useSearchParams } from 'react-router';

function Home() {

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(()=>{
    const section2Navigate = searchParams.get("section");

    if(section2Navigate){
      //check if there is a specific section to redirect to from the url then navigate to the section traditionally as React Router cannot do section navigation
      location.href = "#"+section2Navigate;
    }
  },[searchParams]);

  return (
    <Page>
      <LandingSection />
      <AboutSection />
      <ProjectsSection />
    </Page>
  )
}

export default Home
