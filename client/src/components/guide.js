import React from "react";
import "../styles/styles.scss";
import Documents from "../img/dokumenty.jpg";

class Guide extends React.Component {
  render() {
    return (
      <section className="guideSection">
        <h5 className="guideH5">Niezbędne dokumenty</h5>
        <img className="guideImg" src={Documents} alt="Dokumenty"></img>
        <p>
          By dokonać niezbędnych formalności związanych z Ostatnią Posługą,
          niezbędna jest karta zgonu podpisana przez lekarza. Następnie, z wyżej
          wspomnianym dokumentem, należy udać się do Urzędu Stanu Cywilnego, by
          uzyskać akt zgonu. Posiadając oba dokumenty można dokonać wyboru
          zakładu pogrzebowego. Kompleksowe Usługi Pogrzebowe "Syriusz" to
          firma, która pomoże Państwu z formalnościami związanymi z pochówkiem
          bliskiej osoby. W razie jakichkolwiek pytań prosimy o kontakt.
        </p>
      </section>
    );
  }
}
export default Guide;
