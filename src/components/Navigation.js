import React, { useEffect, useState } from "react";
import style from "../css/style.css";
import profilepicture from "../assets/images/profilejpeg.jpg";
import { CgMenu } from "react-icons/cg";
import { CgClose } from "react-icons/cg";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";

function Navigation() {
  const [toggle, setToggle] = useState(true);
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
    if (width > 768) {
      setToggle(false);
    } else {
      setToggle(true);
    }
    return () => {
      window.removeEventListener("resize", screenWidth);
    };
  }, [width]);

  const navigate = useNavigate();

  function adminPage() {
    navigate("admin");
  }

  return (
    <>
      <button className="navToggle" onClick={displayNav}>
        {toggle ? (
          <CgMenu className="toggleIcon" />
        ) : (
          <CgClose className="toggleIcon" />
        )}
      </button>
      {/* <button onClick={adminPage}>SECRETE</button> */}
      <nav className={toggle ? "navigationHide" : "navigationDisplay"}>
        <div className="top-filler"></div>
        <div className="profileDetailContainer">
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
        </div>

        <div className="navItems">
          <Link activeClass="active" to="home" smooth={true} duration={500}>
            HOME
          </Link>
          <Link activeClass="active" to="about" smooth={true} duration={500}>
            ABOUT
          </Link>
          <Link activeClass="active" to="projects" smooth={true} duration={500}>
            PROJECTS
          </Link>
          <Link
            activeClass="active"
            to="techstacks"
            smooth={true}
            duration={500}
          >
            TECH STACKS
          </Link>
          <Link activeClass="active" to="contacts" smooth={true} duration={500}>
            CONTACTS
          </Link>
        </div>

        <footer className="navFooter">
          <p className="copyRight" onClick={adminPage}>
            © Copyright 2023 All rights reserved.
          </p>
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
