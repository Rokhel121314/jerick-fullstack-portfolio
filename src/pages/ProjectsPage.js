import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";
import { Link } from "react-scroll";
import { TbPlayerTrackNext } from "react-icons/tb";

function ProjectsPage() {
  return (
    <main className="projectsMain" id="projects">
      <header className="projectsHeader">
        <span className="projectsHeaderTitle">PROJECTS</span>
      </header>
      <section className="projectsSection">
        {/* PROJECT CARD 1*/}
        <div className="projectsCard">
          <a
            href="https://lakoph.online/"
            target="_blank"
            rel="noreferrer"
            className="projectTitle"
            disabled={true}>
            <span>LAKO PH</span>
          </a>

          <img
            src={require("../assets/projects/lakoGIF1.gif")}
            alt="projectimages"
            className="projectImage1"
          />
          <div className="bottomBorder">
            <span className="projectsDetail">
              PROVIDES STOCKS, POS, TRANSACTION AND SALES SUMMARY FOR SMALL
              BUSINESS SUCH AS STORES, BAKERIES AND MANY MORE
            </span>
          </div>
        </div>
        {/* END OF PROJECT CARD */}

        {/* PROJECT CARD 4*/}
        <div className="projectsCard">
          <a
            href="https://pokemon-teambuilder.onrender.com/"
            target="_blank"
            rel="noreferrer"
            className="projectTitle">
            <span>POKEMON TEAM BUILDER</span>
          </a>

          <img
            src={require("../assets/projects/pokemon.gif")}
            alt="projectimages"
            className="projectImage1"
          />

          <div className="bottomBorder">
            <span className="projectsDetail">
              MADE WITH POKEMON API, CAN VIEW , SEARCH, ADD TO FAVORITE, AND
              CREATE TEAM
            </span>
          </div>
        </div>
        {/* END OF PROJECT CARD */}

        {/* PROJECT CARD 2*/}
        <div className="projectsCard">
          <a
            href="https://rokhel121314.github.io/stickWars_v.1.0/"
            target="_blank"
            rel="noreferrer"
            className="projectTitle">
            <span>STICK WARS</span>
          </a>

          <img
            src={require("../assets/projects/stickwarsGIF.gif")}
            alt="projectimages"
            className="projectImage1"
          />

          <div className="bottomBorder">
            <span className="projectsDetail">
              A SIMPLE FIGHTING GAME WITH PLAYER VS PLAYER AND PLAYER VS BOT,
              MADE WITH JAVASCRIPT.
            </span>
          </div>
        </div>

        {/* END OF PROJECT CARD */}
        {/* PROJECT CARD 3*/}
        <div className="projectsCard">
          <a
            href="https://rokhel121314.github.io/TemperatureConverterv.3.0/"
            target="_blank"
            rel="noreferrer"
            className="projectTitle">
            <span>TEMPERATURE CONVERTER</span>
          </a>

          <img
            src={require("../assets/projects/tempconvertGIF.gif")}
            alt="projectimages"
            className="projectImage1"
          />

          <div className="bottomBorder">
            <span className="projectsDetail">
              SIMPLE COMPLETE TEMPERATURE CONVERTER CAN BE USED FOR ENGINEERING
              SUBJECTS
            </span>
          </div>
        </div>

        {/* END OF PROJECT CARD */}
      </section>
      <div className="nextBtnContainer">
        <Link
          activeClass="active"
          to="techstacks"
          smooth={true}
          duration={500}
          className="nextBtn2">
          <TbPlayerTrackNext className="toggleIcon" />
        </Link>
      </div>
    </main>
  );
}

export default ProjectsPage;
