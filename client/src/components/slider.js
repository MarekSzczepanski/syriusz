import React from "react";
import "../styles/styles.scss";
import { ReactComponent as ArrowLeft } from "../img/left_arrow.svg";
import { ReactComponent as ArrowRight } from "../img/right_arrow.svg";
import gsap from "gsap";
class Slider extends React.Component {
  blockInterval = [];
  state = {
    backgroundImageNumber: 1,
    blockInterval: false,
    clickBlock: false,
  };
  componentDidMount() {
    const initialDot = document.getElementById("dot1");

    initialDot.classList.add("active");
    initialDot.style.backgroundColor = "#d5a624";

    setInterval(() => {
      if (!this.state.clickBlock) {
        this.handleClick("timer");
      }
    }, 10000);
  }
  componentDidUpdate() {
    const activeDot = document.querySelector(".active");
    const dotToActivate = document.getElementById(
      "dot" + this.state.backgroundImageNumber
    );

    activeDot.classList.remove("active");
    activeDot.style.backgroundColor = "transparent";
    dotToActivate.classList.add("active");
    dotToActivate.style.backgroundColor = "#d5a624";
  }
  animation = (value) => {
    const tl = gsap.timeline();
    tl.to(
      document.querySelector(".sliderSection"),
      {
        marginLeft: value,
        duration: 2.6,
      },
      0
    );
  };
  sectionReborn = (margin, child1, child2, child3, animation, state) => {
    const section = document.querySelector(".sliderSection");
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

    this.animation(animation);

    this.setState({
      backgroundImageNumber: state,
    });
  };
  handleClick = (e) => {
    const left = document.getElementById("arrowLeft");
    const right = document.getElementById("arrowRight");
    const leftPattern = document.querySelector(".i1");
    const RightPattern = document.querySelector(".i2");
    let timerStop = false;

    this.setState({ clickBlock: true });
    setTimeout(() => {
      this.setState({
        clickBlock: false,
      });
    }, 2700);

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
        this.sectionReborn("-100vw", "slider3", "slider1", "slider2", "0", 3);
      } else if (this.state.backgroundImageNumber === 2) {
        this.blockInterval.push("timeout");
        setTimeout(() => {
          this.blockInterval.pop();
          this.setState({
            blockInterval: false,
          });
        }, 5000);
        this.sectionReborn("-100vw", "slider1", "slider2", "slider3", "0", 1);
      } else if (this.state.backgroundImageNumber === 3) {
        this.blockInterval.push("timeout");
        setTimeout(() => {
          this.blockInterval.pop();
          this.setState({
            blockInterval: false,
          });
        }, 5000);
        this.sectionReborn("-100vw", "slider2", "slider3", "slider1", "0", 2);
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
          "slider3",
          "slider1",
          "slider2",
          "-200vw",
          2
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
          "slider1",
          "slider2",
          "slider3",
          "-200vw",
          3
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
          "slider2",
          "slider3",
          "slider1",
          "-200vw",
          1
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
          "slider3",
          "slider1",
          "slider2",
          "-200vw",
          2
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
          "slider1",
          "slider2",
          "slider3",
          "-200vw",
          3
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
          "slider2",
          "slider3",
          "slider1",
          "-200vw",
          1
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
        <div className="sliderSectionWrap">
          <ArrowLeft
            id="arrowLeft"
            className="sliderArrow"
            onClick={!this.state.clickBlock ? this.handleClick : null}
          />
          <ArrowRight
            id="arrowRight"
            className="sliderArrow"
            onClick={!this.state.clickBlock ? this.handleClick : null}
          />
          <div className="sliderDotWrap">
            <div id="dot1" className="sliderDot"></div>
            <div id="dot2" className="sliderDot"></div>
            <div id="dot3" className="sliderDot"></div>
          </div>
          <section className="sliderSection">
            <div className="sliderWrap" id="slider1"></div>
            <div className="sliderWrap" id="slider2"></div>
            <div className="sliderWrap" id="slider3"></div>
          </section>
        </div>
      </>
    );
  }
}

export default Slider;
