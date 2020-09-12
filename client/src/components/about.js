import React from "react";
import "../styles/styles.scss";

class About extends React.Component {
  render() {
    return (
      <section className="aboutSection">
        <h5 className="aboutH5">Szanowni Państwo,</h5>
        <p className="aboutP">
          Nasze ponad 20 letnie doświadczenie sprawia, że rozumiemy wyjątkowość
          sytuacji śmierci bliskiej osoby. W trudnych dla Państwa chwilach nasza
          firma Kompleksowe Usługi Pogrzebowe Żukowo zajmuje się przygotowaniem
          godnej ceremonii pogrzebowej z należytą powagą oraz dyskrecją.
          Dokładamy wszelkich starań i dbamy o każdy szczegół, aby pełniona
          przez nas ostatnia posługa wykonana została na najwyższym poziomie z
          zachowaniem szacunku dla osoby zmarłej i jej rodziny. Na życzenie
          pomagamy w uregulowaniu wszelkich formalności w urzędach (akt zgonu,
          rozliczenia bezgotówkowe przez ZUS, KRUS itp.) Organizujemy również
          ceremonie pogrzebową w każdym miejscu w kraju, a cenę dostosujemy do
          Państwa możliwości finansowych.
          <h6 className="aboutH6">Miejsce na podpis</h6>
        </p>
      </section>
    );
  }
}
export default About;
