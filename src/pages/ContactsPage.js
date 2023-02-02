import React from "react";
import InputForm from "../components/InputForm";
import { MdCall, MdEmail, MdLocationPin } from "react-icons/md";
import { AiFillFacebook, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { TbPlayerTrackPrev } from "react-icons/tb";
import { Link } from "react-scroll";

function ContactsPage() {
  return (
    <main className="contactsMain" id="contacts">
      <header className="contactsHeader">
        <span className="contactsHeaderTitle">CONTACTS</span>
      </header>
      <section className="contactsSection">
        <div className="contactDetails">
          <div className="contactHeaderContainer">
            <span className="contactHeader">MY CONTACT DETAILS</span>
          </div>
          <div className="contactInfoContainer">
            <div className="contactInfo">
              <MdEmail className="contactInfoIcon" />
              <p className="contactInfoText">
                <a href="https://mail.google.com/mail/u/0/" target="_blank">
                  jerickddelacruzwebdev@gmail.com
                </a>
              </p>
            </div>
            <div className="contactInfo">
              <MdCall className="contactInfoIcon" />
              <p className="contactInfoText">+63 969 519 6128</p>
            </div>
            <div className="contactInfo">
              <MdLocationPin className="contactInfoIcon" />
              <p className="contactInfoText">
                Brgy. Tebuel, Manaoag Pangasinan
              </p>
            </div>

            <div className="contactHeaderContainer">
              <span className="contactHeader">MY SOCIAL LINKS</span>
            </div>

            <div className="contactInfo">
              <AiFillLinkedin className="contactInfoIcon" />
              <p className="contactInfoText">
                <a
                  href="https://www.linkedin.com/in/jerick-d-dela-cruz-9a72b7263/"
                  target="_blank"
                >
                  linkedin.com/in/jerickddelacruzwebdev/
                </a>
              </p>
            </div>
            <div className="contactInfo">
              <AiFillFacebook className="contactInfoIcon" />
              <p className="contactInfoText">
                <a
                  href="https://www.facebook.com/Rokhel121314/"
                  target="_blank"
                >
                  facebook.com/rokhel21314
                </a>
              </p>
            </div>

            <div className="contactInfo">
              <AiFillGithub className="contactInfoIcon" />
              <p className="contactInfoText">
                <a href="https://github.com/Rokhel121314" target="_blank">
                  github.com/Rokhel121314
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="contactForms">
          <InputForm />
        </div>
        <Link
          activeClass="active"
          to="home"
          smooth={true}
          duration={500}
          className="nextBtn4"
        >
          <TbPlayerTrackPrev className="toggleIcon4" />
        </Link>
      </section>
    </main>
  );
}

export default ContactsPage;
