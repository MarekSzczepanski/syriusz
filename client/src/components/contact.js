import React from "react";
import "../styles/styles.scss";
import Map from "../components/map";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import Ornament from "../img/ornament.png";

class Contact extends React.Component {
  render() {
    return (
      <section className="contactSection">
        <img
          className="ornament"
          id="contactUpperOrnament"
          src={Ornament}
          alt="ornament"
        ></img>
        <h3 className="contactH3">Kontakt</h3>
        <img
          className="ornament"
          id="upsideDown"
          src={Ornament}
          alt="ornament"
        ></img>
        <div className="contactWrap">
          <div className="contactTextWrap">
            <p className="contactP" id="contactMarginBottom">
              Dom Pogrzebowy Syriusz Ostróda. Kompleksowe usługi pogrzebowe.
              Czynne całą dobę 7 dni w tygodniu.
            </p>
            <div className="contactFAWrap">
              <FontAwesomeIcon className="contactIcon" icon={faPhoneAlt} />
              <p className="contactP">603 797 803</p>
            </div>
            <div className="contactFAWrap">
              <FontAwesomeIcon className="contactIcon" icon={faPhoneAlt} />
              <p className="contactP">502 541 760</p>
            </div>
            <div className="contactFAWrap" id="contactMarginBottom">
              <FontAwesomeIcon className="contactIcon" icon={faEnvelope} />
              <p className="contactP">syriusz2016@o2.pl</p>
            </div>
            <div className="contactMarginBottomWrap">
              <span className="contactUppercase">NIP:</span>
              <p className="contactP" id="nipRegon">
                123-45-67-89
              </p>
            </div>
            <div className="contactMarginBottomWrap" id="contactMarginBottom">
              <span className="contactUppercase">REGON:</span>
              <p className="contactP" id="nipRegon">
                123456789
              </p>
            </div>
            <p className="contactP">Numer konta bankowego:</p>
            <p className="contactP" id="contactNoWrap">
              12 1020 3613 0000 6102 0003 9552
            </p>
            <p className="contactP">
              <span className="contactUppercase">PKO BP</span>
            </p>
            <p className="contactP">
              <span className="contactUppercase">SWIFT: BPKOPLPW</span>
            </p>
          </div>
          <Map />
        </div>
      </section>
    );
  }
}
export default Contact;
