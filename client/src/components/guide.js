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
          Śmierć Bliskiego to traumatyczny moment dla najbliższych. To czas,
          kiedy w ciągu kilku dni należy zrealizować szereg wszelkich
          formalności, które pozwolą na organizację godnej ceremonii
          pogrzebowej. Dom Pogrzebowy Elizjum, wychodząc naprzeciw pytaniom,
          przybliża, jakie sprawy formalne i dokumenty musi zebrać i załatwić
          rodzina Zmarłego, aby odprawić mu godny pogrzeb. Kluczowe znaczenie ma
          tu miejsce, gdzie zmarł Bliski. Inne procedury obowiązują w przypadku
          śmierci w domu, inne w szpitalu czy domu opieki. Każdorazowo
          najważniejszym jest, aby uzyskać kartę zgonu podpisaną przez lekarza,
          na podstawie której wystawiony zostanie w Urzędzie Stanu Cywilnego akt
          zgonu. Te dwa dokumenty potwierdzają niezaprzeczalnie fakt śmierci.
          Otrzymawszy je można wybrać zakład pogrzebowy, który zorganizuje
          ceremonię ostatniego pożegnania zmarłego.
        </p>
      </section>
    );
  }
}
export default Guide;
