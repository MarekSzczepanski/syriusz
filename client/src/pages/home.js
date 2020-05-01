import React from "react";
import Header from "../components/header";
import Slider from "../components/slider";
import About from "../components/about";
import Guide from "../components/guide";
import FuneralHome from "../components/funeral_home";
import Offer from "../components/offer";
import Opinions from "../components/opinions";
import Contact from "../components/contact";
import Footer from "../components/footer";
class Home extends React.Component {
  render() {
    return (
      <>
        <div className="wrap">
          <Header />
          <Slider />
          <div className="aboutAndGuideWrap">
            <About />
            <Guide />
          </div>
          <FuneralHome />
          <Offer />
          <Opinions />
          <Contact />
          <Footer />
        </div>
      </>
    );
  }
}
export default Home;
