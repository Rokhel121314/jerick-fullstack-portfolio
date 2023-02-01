import React from "react";

function ProjectsPage() {
  return (
    <main className="projectsMain">
      <header className="projectsHeader">
        <span className="projectsHeaderTitle">PROJECTS</span>
      </header>
      <section className="projectsSection">
        {/* PROJECT CARD 1*/}
        <div className="projectsCard">
          <a href="https://lakoph.online/" className="projectTitle">
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
        {/* PROJECT CARD 2*/}
        <div className="projectsCard">
          <a
            href="https://rokhel121314.github.io/stickWars_v.1.0/"
            className="projectTitle"
          >
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
            className="projectTitle"
          >
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
        {/* PROJECT CARD 4*/}
        <div className="projectsCard">
          <span className="projectTitle">UNDER DEVELOPMENT</span>

          <img
            src={require("../assets/projects/underdevelopment.png")}
            alt="projectimages"
            className="projectImage1"
          />

          <div className="projectTitle">
            <div className="bottomBorder">
              <span className="projectsDetail">
                UNDER DEVELOPMENT PLEASE WAIT FOR FUTURE UPDATES. {<br />} UNDER
                DEVELOPMENT PLEASE WAIT FOR FUTURE UPDATES.
              </span>
            </div>
          </div>
        </div>
        {/* END OF PROJECT CARD */}
      </section>
    </main>
  );
}

export default ProjectsPage;
