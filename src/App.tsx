import { ScrollToTop } from './components/atoms/ScrollToTop';
import { ContactSection } from './components/organisms/ContactSection';
import { ExperienceSection } from './components/organisms/ExperienceSection';
import { HeroSection } from './components/organisms/HeroSection';
import { ProjectsSection } from './components/organisms/ProjectsSection';
import { SkillsSection } from './components/organisms/SkillsSection';
import { Layout } from './components/templates/Layout';
import { ThemeProvider } from './contexts/ThemeContext';


function App() {
  return (
    <ThemeProvider>
      <Layout>
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
        <ScrollToTop />
      </Layout>
    </ThemeProvider>
  );
}

export default App;