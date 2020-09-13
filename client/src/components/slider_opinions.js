import React from "react";
import "../styles/styles.scss";
import { ReactComponent as ArrowLeft2 } from "../img/left_arrow2.svg";
import { ReactComponent as ArrowRight2 } from "../img/right_arrow2.svg";
import gsap from "gsap";

class SliderOpinions extends React.Component {
  blockInterval = [];
  state = {
    backgroundImageNumber: 1,
    blockInterval: false,
    clickBlock: false,
  };
  componentDidMount() {
    setInterval(() => {
      if (!this.state.clickBlock) {
        this.handleClick("timer");
      }
    }, 15000);
  }

  animation = (value, leftOrRight) => {
    const tl = gsap.timeline();
    const duration = 1.5;
    const delay = 1.6;
    tl.to(
      document.querySelector(".sliderOpinions"),
      {
        marginLeft: value,
        duration: 1.5,
        delay: 0.6,
      },
      0
    );
    if (leftOrRight === "right") {
      if (this.state.backgroundImageNumber === 3) {
        tl.to(
          document.getElementById(
            "opinionsP" + this.state.backgroundImageNumber
          ),
          {
            opacity: 0,
            duration: 0.6,
          },
          0
        );
        tl.to(
          document.getElementById("name" + this.state.backgroundImageNumber),
          {
            opacity: 0,
            duration: 0.6,
          },
          0
        );
        tl.to(
          document.getElementById("opinionsP1"),
          {
            opacity: 1,
            duration: duration,
            delay: delay,
          },
          0
        );
        tl.to(
          document.getElementById("name1"),
          {
            opacity: 1,
            duration: duration,
            delay: delay,
          },
          0
        );
      } else {
        tl.to(
          document.getElementById(
            "opinionsP" + this.state.backgroundImageNumber
          ),
          {
            opacity: 0,
            duration: 0.6,
          },
          0
        );
        tl.to(
          document.getElementById("name" + this.state.backgroundImageNumber),
          {
            opacity: 0,
            duration: 0.6,
          },
          0
        );
        tl.to(
          document.getElementById(
            "opinionsP" + (this.state.backgroundImageNumber + 1)
          ),
          {
            opacity: 1,
            duration: 1.5,
            delay: 1.6,
          },
          0
        );
        tl.to(
          document.getElementById(
            "name" + (this.state.backgroundImageNumber + 1)
          ),
          {
            opacity: 1,
            duration: 1.5,
            delay: 1.6,
          },
          0
        );
      }
    } else if (leftOrRight === "left") {
      if (this.state.backgroundImageNumber === 1) {
        tl.to(
          document.getElementById(
            "opinionsP" + this.state.backgroundImageNumber
          ),
          {
            opacity: 0,
            duration: 0.6,
          },
          0
        );
        tl.to(
          document.getElementById("name" + this.state.backgroundImageNumber),
          {
            opacity: 0,
            duration: 0.6,
          },
          0
        );
        tl.to(
          document.getElementById("opinionsP3"),
          {
            opacity: 1,
            duration: duration,
            delay: delay,
          },
          0
        );
        tl.to(
          document.getElementById("name3"),
          {
            opacity: 1,
            duration: duration,
            delay: delay,
          },
          0
        );
      } else {
        tl.to(
          document.getElementById(
            "opinionsP" + this.state.backgroundImageNumber
          ),
          {
            opacity: 0,
            duration: 0.6,
          },
          0
        );
        tl.to(
          document.getElementById("name" + this.state.backgroundImageNumber),
          {
            opacity: 0,
            duration: 0.6,
          },
          0
        );
        tl.to(
          document.getElementById(
            "opinionsP" + (this.state.backgroundImageNumber - 1)
          ),
          {
            opacity: 1,
            duration: duration,
            delay: delay,
          },
          0
        );
        tl.to(
          document.getElementById(
            "name" + (this.state.backgroundImageNumber - 1)
          ),
          {
            opacity: 1,
            duration: duration,
            delay: delay,
          },
          0
        );
      }
    }
  };
  sectionReborn = (
    margin,
    child1,
    child2,
    child3,
    animation,
    state,
    leftOrRight
  ) => {
    const section = document.querySelector(".sliderOpinions");
    const slider1 = document.getElementById(child1);
    const slider2 = document.getElementById(child2);
    const slider3 = document.getElementById(child3);

    section.style.marginLeft = margin;

    section.appendChild(slider1.cloneNode(true));
    section.appendChild(slider2.cloneNode(true));
    section.appendChild(slider3.cloneNode(true));

    slider1.remove();
    slider2.remove();
    slider3.remove();

    this.animation(animation, leftOrRight);

    this.setState({
      backgroundImageNumber: state,
    });
  };
  handleClick = (e) => {
    const left = document.getElementById("arrowLeftOpinions");
    const right = document.getElementById("arrowRightOpinions");
    const leftPattern = document.querySelector(".i1a");
    const RightPattern = document.querySelector(".i2a");
    let timerStop = false;

    this.setState({ clickBlock: true });
    setTimeout(() => {
      this.setState({
        clickBlock: false,
      });
    }, 2200);

    if (e.target === left || e.target === leftPattern) {
      this.setState({
        blockInterval: true,
      });
      if (this.state.backgroundImageNumber === 1) {
        this.blockInterval.push("timeout");
        setTimeout(() => {
          this.blockInterval.pop();
          this.setState({
            blockInterval: false,
          });
        }, 5000);
        this.sectionReborn(
          "-100vw",
          "slider3Opinions",
          "slider1Opinions",
          "slider2Opinions",
          "0",
          3,
          "left"
        );
      } else if (this.state.backgroundImageNumber === 2) {
        this.blockInterval.push("timeout");
        setTimeout(() => {
          this.blockInterval.pop();
          this.setState({
            blockInterval: false,
          });
        }, 5000);
        this.sectionReborn(
          "-100vw",
          "slider1Opinions",
          "slider2Opinions",
          "slider3Opinions",
          "0",
          1,
          "left"
        );
      } else if (this.state.backgroundImageNumber === 3) {
        this.blockInterval.push("timeout");
        setTimeout(() => {
          this.blockInterval.pop();
          this.setState({
            blockInterval: false,
          });
        }, 5000);
        this.sectionReborn(
          "-100vw",
          "slider2Opinions",
          "slider3Opinions",
          "slider1Opinions",
          "0",
          2,
          "left"
        );
      }
    } else if (e.target === right || e.target === RightPattern) {
      this.setState({
        blockInterval: true,
      });
      if (this.state.backgroundImageNumber === 1) {
        this.blockInterval.push("timeout");
        setTimeout(() => {
          this.blockInterval.pop();
          this.setState({
            blockInterval: false,
          });
        }, 5000);
        this.sectionReborn(
          "-100vw",
          "slider3Opinions",
          "slider1Opinions",
          "slider2Opinions",
          "-200vw",
          2,
          "right"
        );
      }
      if (this.state.backgroundImageNumber === 2) {
        this.blockInterval.push("timeout");
        setTimeout(() => {
          this.blockInterval.pop();
          this.setState({
            blockInterval: false,
          });
        }, 5000);
        this.sectionReborn(
          "-100vw",
          "slider1Opinions",
          "slider2Opinions",
          "slider3Opinions",
          "-200vw",
          3,
          "right"
        );
      }
      if (this.state.backgroundImageNumber === 3) {
        this.blockInterval.push("timeout");
        setTimeout(() => {
          this.blockInterval.pop();
          this.setState({
            blockInterval: false,
          });
        }, 5000);
        this.sectionReborn(
          "-100vw",
          "slider2Opinions",
          "slider3Opinions",
          "slider1Opinions",
          "-200vw",
          1,
          "right"
        );
      }
    } else if (e === "timer" && this.blockInterval.length === 0) {
      if (
        this.state.backgroundImageNumber === 1 &&
        !this.state.blockInterval &&
        !timerStop
      ) {
        timerStop = true;
        this.sectionReborn(
          "-100vw",
          "slider3Opinions",
          "slider1Opinions",
          "slider2Opinions",
          "-200vw",
          2,
          "right"
        );
      }
      if (
        this.state.backgroundImageNumber === 2 &&
        !this.state.blockInterval &&
        !timerStop
      ) {
        timerStop = true;
        this.sectionReborn(
          "-100vw",
          "slider1Opinions",
          "slider2Opinions",
          "slider3Opinions",
          "-200vw",
          3,
          "right"
        );
      }
      if (
        this.state.backgroundImageNumber === 3 &&
        !this.state.blockInterval &&
        !timerStop
      ) {
        timerStop = true;
        this.sectionReborn(
          "-100vw",
          "slider2Opinions",
          "slider3Opinions",
          "slider1Opinions",
          "-200vw",
          1,
          "right"
        );
      }
    }
  };
  changeState = (value) => {
    this.setState({
      backgroundImageNumber: value,
    });
  };
  render() {
    return (
      <>
        <div className="arrowWrap">
          <ArrowLeft2
            id="arrowLeftOpinions"
            className="sliderArrowOpinions"
            onClick={!this.state.clickBlock ? this.handleClick : null}
          />
          <ArrowRight2
            id="arrowRightOpinions"
            className="sliderArrowOpinions"
            onClick={!this.state.clickBlock ? this.handleClick : null}
          />
        </div>
        <div className="sliderOpinions">
          <div className="sliderWrapOpinions" id="slider1Opinions">
            <h6 className="nameH6" id="name1">
              Anna
            </h6>
            <p className="opinionsP" id="opinionsP1">
              Profesjonalne podejście i wielka życzliwość w jakże trudnych dla
              klientów chwilach. Polecam!
            </p>
          </div>
          <div className="sliderWrapOpinions" id="slider2Opinions">
            <h6 className="nameH6" id="name2">
              Renata
            </h6>
            <p className="opinionsP" id="opinionsP2">
              Moment pożegnania z Najbliższym jest dla każdej Rodziny niezwykle
              bolesny i tragiczny. Dlatego pragniemy bardzo serdecznie
              podziękować Państwu za to, że w tych trudnych chwilach
              towarzyszyliście naszej Rodzinie, a swym profesjonalizmem,
              delikatnością, taktem i fachowością sprawiliście, że z poczuciem
              wewnętrznego spokoju odprowadziliśmy naszą Mamę, Babcię i
              Prababcię na miejsce Jej doczesnego spoczynku.
            </p>
          </div>
          <div className="sliderWrapOpinions" id="slider3Opinions">
            <h6 className="nameH6" id="name3">
              Adriana
            </h6>
            <p className="opinionsP" id="opinionsP3">
              Bardzo dziękuję za profesjonalną organizację i pięknie
              zrealizowaną uroczystość pogrzebową mojego Taty. "Syriusz" przejął
              na swoje barki wszystkie obowiązki związane z przygotowaniami i
              dzięki temu mogliśmy w ciszy i skupieniu w gronie rodziny i
              przyjaciół pożegnać bliską nam osobę.
            </p>
          </div>
        </div>
      </>
    );
  }
}

export default SliderOpinions;
