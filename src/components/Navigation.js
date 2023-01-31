import React, { useEffect, useState } from "react";
import style from "../css/style.css";
import profilepicture from "../assets/images/profilejpeg.jpg";
import { Link } from "react-router-dom";
import { CgMenu } from "react-icons/cg";
import { CgClose } from "react-icons/cg";

function Navigation() {
  const [toggle, setToggle] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  // console.log("toggle", toggle);
  // console.log("widht", width);

  function screenWidth() {
    setWidth(window.innerWidth);
  }

  function displayNav() {
    if (toggle === true) {
      setToggle(false);
    } else {
      setToggle(true);
    }
  }

  useEffect(() => {
    window.addEventListener("resize", screenWidth);
    if (width > 600) {
      setToggle(false);
    } else {
      setToggle(true);
    }
    return () => {
      window.removeEventListener("resize", screenWidth);
    };
  }, [width]);

  return (
    <>
      <button className="navToggle" onClick={displayNav}>
        {toggle ? (
          <CgMenu className="toggleIcon" />
        ) : (
          <CgClose className="toggleIcon" />
        )}
      </button>
      <nav className={toggle ? "navigationHide" : "navigationDisplay"}>
        <div className="profileContainer">
          <img
            src={profilepicture}
            alt="profilepicture"
            className="profilePicture"
          />
        </div>

        <div className="nameContainer">
          <p className="pName">JERICK D. DELA CRUZ</p>
          <p className="tName">FULL STACK WEB DEVELOPER</p>
        </div>

        <div className="navItems">
          <Link to={"/"}>HOME</Link>
          <Link to={"/about"}>ABOUT</Link>
          <Link to={"/projects"}>PROJECTS</Link>
          <Link to={"/skills"}>SKILLS</Link>
          <Link to={"/contacts"}>CONTACTS</Link>
        </div>

        <footer className="navFooter">
          <p className="copyRight">© Copyright 2023 All rights reserved.</p>
          <p className="createdWith">
            Created with:{" "}
            <a className="reactLink" href="https://reactjs.org/">
              REACT
            </a>
          </p>
        </footer>
      </nav>
    </>
  );
}

export default Navigation;
