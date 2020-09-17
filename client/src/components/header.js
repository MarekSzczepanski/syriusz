import React from "react";
import "../styles/styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import Light from "../img/light.png";

class Header extends React.Component {
  scrollToSection = (e) => {
    if (e.target.id === "home") {
      document.querySelector("header").scrollIntoView({ behavior: "smooth" });
    } else {
      document
        .querySelector("." + e.target.id + "Section")
        .scrollIntoView({ behavior: "smooth" });
    }
  };
  render() {
    return (
      <header>
        <img className="light" src={Light} alt="Light"></img>
        <div className="headerTextWrap">
          <div className="headerUpperWrap">
            <h1>
              dom pogrzebowy <span className="h1Span">"syriusz"</span>w
              ostródzie
            </h1>
            <h2 className="headerLetterSpacing">
              Kompleksowe usługi pogrzebowe
            </h2>
          </div>
          <h2 className="headerH2">całodobowy kontakt telefoniczny</h2>
          <div className="headerPhoneWrap">
            <FontAwesomeIcon icon={faPhoneAlt} className="headerPhoneIcon" />
            <p className="headerPhoneNumber">603 797 803</p>
            <FontAwesomeIcon
              icon={faPhoneAlt}
              className="headerPhoneIcon"
              id="secondPhoneIcon"
            />
            <p className="headerPhoneNumber">502 541 760</p>
          </div>
          <nav>
            <ul>
              <li onClick={this.scrollToSection} id="home">
                strona główna
              </li>
              <li onClick={this.scrollToSection} id="about">
                o nas
              </li>
              <li onClick={this.scrollToSection} id="guide">
                poradnik
              </li>
              <li onClick={this.scrollToSection} id="funeralHome">
                dom pogrzebowy
              </li>
              <li onClick={this.scrollToSection} id="offer">
                oferta
              </li>
              <li onClick={this.scrollToSection} id="opinions">
                opinie
              </li>
              <li onClick={this.scrollToSection} id="contact">
                kontakt
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}
export default Header;
