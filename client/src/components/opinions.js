import React from "react";
import "../styles/styles.scss";
import Ornament from "../img/ornament-white.png";
import SliderOpinions from "../components/slider_opinions";

class Opinions extends React.Component {
  render() {
    return (
      <>
        <section className="opinionsSection">
          <img
            className="ornament"
            id="upperWhiteOrnament"
            src={Ornament}
            alt="ornament"
          ></img>
          <h3 className="opinionsH3">opinie</h3>
          <img
            className="ornament"
            id="upsideDown"
            src={Ornament}
            alt="ornament"
          ></img>
          <div className="opinionsWrap">
            <div className="opinionsBackground"></div>
            <SliderOpinions />
          </div>
        </section>
      </>
    );
  }
}
export default Opinions;
