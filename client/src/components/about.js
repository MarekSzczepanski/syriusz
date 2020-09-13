import React from "react";
import "../styles/styles.scss";

class About extends React.Component {
  render() {
    return (
      <section className="aboutSection">
        <h5 className="aboutH5">Szanowni Państwo,</h5>
        <p className="aboutP">
          Odejście bliskiej osoby to wyjątkowa sytuacja, przepełniona żalem i
          cierpieniem. Dzięki wieloletniemu doświadczemu skutecznie pomagamy
          Państwu przejść przez ten trudny okres. Kompleksowe Usługi Pogrzebowe
          "Syriusz" to firma, która zadba o godny przebieg ceremonii
          pogrzebowej. Dokładamy wszelkich starań, by ostatnia droga zmarłego
          pozostała w pamięci pogrążonych w żałobie jako chwila uroczysta i
          dostojna. Zadbamy o każdy szczegół związany z pochówkiem oraz zajmiemy
          się formalnościami.
          <h6 className="aboutH6">Miejsce na podpis</h6>
        </p>
      </section>
    );
  }
}
export default About;
