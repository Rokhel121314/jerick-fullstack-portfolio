import style from "./css/style.css";
import AboutMePage from "./pages/AboutMePage";
import ProjectsPage from "./pages/ProjectsPage";
import SkillsPage from "./pages/SkillsPage";
import ContactsPage from "./pages/ContactsPage";
import Navigation from "./components/Navigation";
import LandingPage2 from "./pages/LandingPage2";

export const URL = process.env.REACT_APP_SERVER_URL;

function App() {
  return (
    <>
      <Navigation />
      <LandingPage2 />
      <AboutMePage />
      <ProjectsPage />
      <SkillsPage />
      <ContactsPage />
    </>
  );
}

export default App;
