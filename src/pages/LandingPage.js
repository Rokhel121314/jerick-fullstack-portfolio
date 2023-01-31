import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { TbPlayerTrackNext } from "react-icons/tb";

function LandingPage() {
  const [bg, setBg] = useState(1);
  // console.log("background", bg);

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
    <main className={bg === 1 ? "landingMain1" : "landingMain2"}>
      {/* <div className="introContainer">
        <span>{bg === 1 ? "Hi" : "Civil Engineer/"}</span>
        <span>{bg === 1 ? "I'm Jerick" : "Full Stack Web Developer"}</span>
        <button>download CV</button>
      </div> */}

      <div className="introContainer">
        <span>Hi!</span>
        <span>I'm Jerick</span>
        <span>{bg === 1 ? "Fullstack Web Developer" : " Civil Engineer"}</span>
      </div>
      <Link to={"/about"} className="nextBtn">
        <TbPlayerTrackNext className="toggleIcon" />
      </Link>
    </main>
  );
}

export default LandingPage;
