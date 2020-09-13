import React from "react";
import "../styles/styles.scss";
import Home from "../img/dom.jpg";
import Chapel from "../img/kaplica.jpg";
import Ornament from "../img/ornament-white.png";

class Funeral_Home extends React.Component {
  render() {
    return (
      <section className="funeralHomeSection">
        <img className="ornament" src={Ornament} alt="ornament"></img>
        <h3 className="funeralHomeH3">Nasz dom pogrzebowy</h3>
        <img
          className="ornament"
          id="upsideDown"
          src={Ornament}
          alt="ornament"
        ></img>
        <div className="funeralHomeImagesWrap">
          <img className="funeralHomeImg" src={Home} alt="Dom pogrzebowy"></img>
          <img className="funeralHomeImg" src={Chapel} alt="Kaplica"></img>
        </div>
        <p className="funeralHomeP">
          Liczne ceremonie pogrzebowe, które zorganizowaliśmy pozwoliły nam
          zapracować na opinię godnego zaufania domu pogrzebowego. Dbamy o
          prawidłowy przebieg każdego pochówku, by zachował on zgodność z wolą
          najbliższych zmarłego. Konsultujemy z państwem kluczowe epizody
          ceremonii oraz jej szczegóły, takie jak wieńce czy muzyka.
        </p>
      </section>
    );
  }
}
export default Funeral_Home;
