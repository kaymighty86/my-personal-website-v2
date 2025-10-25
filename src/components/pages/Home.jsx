import Page from './Page';
import LandingSection from '../sections/LandingSection';
import AboutSection from '../sections/AboutSection';
import ProjectsSection from '../sections/ProjectsSection';

function Home() {
  return (
    <Page>
      <LandingSection />
      <AboutSection />
      <ProjectsSection />
    </Page>
  )
}

export default Home
