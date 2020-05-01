import React from "react";
import "../styles/styles.scss";
import Home from "../img/dom.jpg";
import Chapel from "../img/kaplica.jpg";
import Ornament from "../img/ornament.png";

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
          Wieloletnie doświadczenie w branży pogrzebowej pozwoliło nam
          zapracować na wizerunek firmy godnej zaufania i polecenia. W trosce o
          podwyższenie jakości wykonywanych usług wybudowaliśmy dla Państwa dom
          pogrzebowy z własną kaplicą, chłodnią oraz piękną salą tak, by był on
          godnym miejscem do przygotowania osoby zmarłej do ostatniego
          pożegnania.
        </p>
      </section>
    );
  }
}
export default Funeral_Home;
