import bg1 from "../assets/bg1.jpg";
import bg2 from "../assets/bg2.jpeg";
import React, { useEffect, useState } from "react";

function LandingPage() {
  const [bg, setBg] = useState(1);
  console.log("background", bg);

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
      <div className="introContainer">
        <span>{bg === 1 ? "Hi" : "Civil Engineer/"}</span>
        <span>{bg === 1 ? "I'm Jerick" : "Full Stack Web Developer"}</span>
        <button>download CV</button>
      </div>
    </main>
  );
}

export default LandingPage;
