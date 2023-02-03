import style from "./css/style.css";
import LandingPage from "./pages/LandingPage";
import AboutMePage from "./pages/AboutMePage";
import ProjectsPage from "./pages/ProjectsPage";
import SkillsPage from "./pages/SkillsPage";
import ContactsPage from "./pages/ContactsPage";
import Navigation from "./components/Navigation";
import { Routes, Route } from "react-router-dom";
import Admin from "./pages/Admin";

export const URL = process.env.REACT_APP_SERVER_URL;

function App() {
  return (
    <>
      <Navigation />
      <LandingPage />
      <AboutMePage />
      <ProjectsPage />
      <SkillsPage />
      <ContactsPage />
    </>
  );
}

export default App;
