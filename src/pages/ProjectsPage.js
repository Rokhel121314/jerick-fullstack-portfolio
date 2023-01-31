import React from "react";

function ProjectsPage() {
  return (
    <main className="projectsMain">
      <header className="projectsHeader">
        <span className="projectsHeaderTitle">PROJECTS</span>
      </header>
      <section className="projectsSection">
        <div className="projectsCard">
          <div className="projectsImageContainer">
            <img
              src={require("../assets/projects/lakoGIF1.gif")}
              alt="projectimages"
              className="projectImage1"
            />
          </div>
          <div className="projectTitle">
            <div>
              <span>LAKO PH</span>
              <br />
              <span className="projectsDetail">
                PROVIDES STOCKS, POS, TRANSACTION AND SALES SUMMARY FOR STORES
              </span>
              <br />
            </div>
            <div>
              <span>
                <a href="http://lakoph.online/">Go to website</a>
              </span>
            </div>
          </div>
        </div>
        <div className="projectsCard">1</div>
        <div className="projectsCard">1</div>
        <div className="projectsCard">1</div>
        {/* <div className="projectsCard">1</div>
        <div className="projectsCard">1</div> */}
      </section>
    </main>
  );
}

export default ProjectsPage;
