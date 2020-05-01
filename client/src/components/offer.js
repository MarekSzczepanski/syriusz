import React from "react";
import "../styles/styles.scss";
import Gallery from "../components/gallery";
import Gallery2 from "../components/gallery2";
import Gallery3 from "../components/gallery3";
import Ornament from "../img/ornament-white.png";

class Guide extends React.Component {
  render() {
    return (
      <section className="offerSection">
        <img
          className="ornament"
          id="upperWhiteOrnament"
          src={Ornament}
          alt="ornament"
        ></img>
        <h3 className="offerH3">oferta trumien, urn, wieńców oraz usług</h3>
        <img
          className="ornament"
          id="upsideDown"
          src={Ornament}
          alt="ornament"
        ></img>
        <div className="offerWrap">
          <h4>trumny</h4>
        </div>
        <Gallery />
        <div className="offerWrap">
          <h4 id="middleOfferH4">urny</h4>
        </div>
        <Gallery2 />
        <div className="offerWrap">
          <h4 id="lastOfferH4">wieńce</h4>
        </div>
        <Gallery3 />

        <h6>oferujemy również:</h6>
        <p className="offerP">● międzynarodowy transport ciała</p>
        <p className="offerP">● ekshumacje</p>
        <p className="offerP">● odzież dla zmarłych</p>
      </section>
    );
  }
}
export default Guide;
