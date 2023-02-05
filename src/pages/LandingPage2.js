import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { TbPlayerTrackNext } from "react-icons/tb";
import { AiFillFacebook, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

function LandingPage2() {
  const [bg, setBg] = useState(1);
  // console.log("background", bg);

  const navigateTo = useNavigate();

  function navigateToProjects() {
    <Link to="projects" />;
  }

  const background = () => {
    if (bg === 1) {
      setBg(2);
    } else {
      setBg(1);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      background();
    }, 7000);
  }, [bg]);

  return (
    <main className="landing2Main" id="home">
      <section className="landingSection">
        <div className="intro">
          <div className="introTitle mleft">Hi, I'm Jerick</div>
          <div className="introTitle2 mleft">Full Stack Web Developer</div>
          <div className="socialIcons mleft">
            <a href="https://github.com/Rokhel121314" target="_blank">
              <AiFillGithub className="socialIco" />
            </a>
            <a
              href="https://www.linkedin.com/in/jerick-d-dela-cruz-9a72b7263/"
              target="_blank"
            >
              <AiFillLinkedin className="socialIco" />
            </a>{" "}
            <a href="https://www.facebook.com/Rokhel121314/" target="_blank">
              <AiFillFacebook className="socialIco" />
            </a>{" "}
          </div>

          <div className="btnContainer">
            <Link
              activeClass="active"
              to="projects"
              smooth={true}
              duration={500}
            >
              <button className="projectBtn mleft">PROJECTS</button>
            </Link>
          </div>
        </div>

        <div className="sideImage">
          <div className="sideImageContainer">
            <img
              src={require("../assets/images/landingImageGIF.gif")}
              alt="sideImage"
              className="gifImage"
            />
          </div>
        </div>
      </section>
      <Link
        activeClass="active"
        to="about"
        smooth={true}
        duration={500}
        className="nextBtn"
      >
        <TbPlayerTrackNext className="toggleIcon" />
      </Link>
    </main>
  );
}

export default LandingPage2;
