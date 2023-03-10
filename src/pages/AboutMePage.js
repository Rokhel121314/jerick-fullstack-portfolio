import React from "react";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import {
  SiMysql,
  SiMongodb,
  SiJavascript,
  SiExpress,
  SiReact,
  SiNodedotjs,
} from "react-icons/si";
import { Link } from "react-scroll";
import { TbPlayerTrackNext } from "react-icons/tb";

function AboutMePage() {
  return (
    <main className="aboutMain" id="about">
      <header className="aboutHeader">
        <span className="aboutHeaderTitle">ABOUT ME?</span>
      </header>
      <section className="aboutSection">
        <span className="aboutContent animateContent1">
          Hello World! I'm Jerick Dela Cruz, a Full Stack Web Developer. A goal
          oriented web developer that came from construction industry. Different
          industry, but with the same goal of designing, creating, and
          constructing a project.
        </span>

        <span className="aboutContent animateContent2">
          I have a basic knowledge of HTML{" "}
          {<AiFillHtml5 className="htmlIcon teckstacksIcon" />}, CSS{" "}
          {<DiCss3 className="cssIcon teckstacksIcon" />}, JavaScript{" "}
          {<SiJavascript className="jsIcon teckstacksIcon" />}, and honing my
          skills on MERN STACKS such as MySql{" "}
          {<SiMysql className="mysqlIcon teckstacksIcon" />}/MongoDB{" "}
          {<SiMongodb className="dbIcon teckstacksIcon" />}, Express{" "}
          {<SiExpress className="expIcon teckstacksIcon" />}, React{" "}
          {<SiReact className="reactIcon teckstacksIcon" />}, and Node.js{" "}
          {<SiNodedotjs className="nodeIcon teckstacksIcon" />}.
        </span>

        <span className="aboutContent animateContent3">
          Having a background on construction and engineering my transferable
          skills are problem-solving, critical thinking, resourcefullness, team
          player and goal oriented.
        </span>
      </section>
      <Link
        activeClass="active"
        to="projects"
        smooth={true}
        duration={500}
        className="nextBtn1"
      >
        <TbPlayerTrackNext className="toggleIcon" />
      </Link>
    </main>
  );
}

export default AboutMePage;
