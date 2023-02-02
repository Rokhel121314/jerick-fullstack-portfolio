import React from "react";
import {
  SiMysql,
  SiMongodb,
  SiJavascript,
  SiExpress,
  SiReact,
  SiNodedotjs,
  SiHtml5,
  SiCss3,
  SiBootstrap,
} from "react-icons/si";
import { Link } from "react-scroll";
import { TbPlayerTrackNext } from "react-icons/tb";

function SkillsPage() {
  return (
    <main className="techstacksMain" id="techstacks">
      <header className="techstacksHeader">
        <span className="techstacksHeaderTitle">TECH STACKS</span>
      </header>
      <section className="techstacksSection">
        <article className="programmingLanguages">
          <div className="techstacksTitle">PROGRAMMING LANGUAGES</div>
          <div className="techstacksContainer">
            <SiHtml5 className="techstacksIcon htmlIcon" />{" "}
            <SiCss3 className="techstacksIcon cssIcon" />{" "}
            <SiJavascript className="techstacksIcon jsIcon" />
          </div>
        </article>

        <article className="frontendFrameworks">
          <div className="techstacksTitle">FRONT-END FRAMEWORKS</div>
          <div className="techstacksContainer">
            <SiReact className="techstacksIcon reactIcon" />{" "}
            <SiNodedotjs className="techstacksIcon nodeIcon" />{" "}
            <SiBootstrap className="techstacksIcon bsIcon" />
          </div>
        </article>

        <article className="backendFrameworks">
          <div className="techstacksTitle">BACK-END FRAMEWORKS</div>
          <div className="techstacksContainer">
            <SiExpress className="techstacksIcon expIcon" />{" "}
            <SiNodedotjs className="techstacksIcon nodeIcon" />{" "}
          </div>
        </article>

        <article className="dataBases">
          <div className="techstacksTitle">DATABASES</div>
          <div className="techstacksContainer">
            <SiMysql className="techstacksIcon mysqlIcon" />{" "}
            <SiMongodb className="techstacksIcon dbIcon" />{" "}
          </div>
        </article>
      </section>

      <Link
        activeClass="active"
        to="contacts"
        smooth={true}
        duration={500}
        className="nextBtn3"
      >
        <TbPlayerTrackNext className="toggleIcon" />
      </Link>
    </main>
  );
}

export default SkillsPage;
