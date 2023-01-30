import React from "react";
import style from "../css/style.css";
import profilepicture from "../assets/profilejpeg.jpg";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <>
      <nav className="navigation col-2">
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
