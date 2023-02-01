import style from "./css/style.css";
import LandingPage from "./pages/LandingPage";
import AboutMePage from "./pages/AboutMePage";
import ProjectsPage from "./pages/ProjectsPage";
import SkillsPage from "./pages/SkillsPage";
import ContactsPage from "./pages/ContactsPage";
import Navigation from "./components/Navigation";

function App() {
  return (
    <>
      <LandingPage />
      <AboutMePage />
      <ProjectsPage />
      <SkillsPage />
      <ContactsPage />
    </>
  );
}

export default App;
