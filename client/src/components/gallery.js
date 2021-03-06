import React from "react";
import { Link } from "react-router-dom";
import "../styles/styles.scss";
import axios from "axios";
import gsap from "gsap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import CornerOrnament from "../img/ornament2.png";
import CornerOrnamentRight from "../img/ornament3.png";

class Gallery extends React.Component {
  state = {
    imagesDisplayed: [],
    allImages: [],
    imagesLinks: [],
  };
  componentDidMount() {
    const boundChangeImagesLinksInState = this.changeImagesLinksInState.bind(
      this
    );
    axios
      .get("/api/coffins_list")
      .then((response) => {
        boundChangeImagesLinksInState(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    if (window.innerWidth > 1300) {
      window.addEventListener("scroll", this.showNewsByScrolling);
    }
  }
  componentDidUpdate() {
    const leftChevron = document.querySelector(".galleryChevronLeft");
    const rightChevron = document.querySelector(".galleryChevronRight");
    leftChevron.style.opacity = 1;
    rightChevron.style.opacity = 1;
    if (
      this.state.allImages[0] == this.state.imagesDisplayed[0] ||
      this.state.allImages[0] ==
        this.state.imagesDisplayed[this.state.imagesDisplayed.length - 1]
    ) {
      leftChevron.style.opacity = 0.3;
    } else if (
      this.state.allImages[this.state.allImages.length - 1] ==
      this.state.imagesDisplayed[this.state.imagesDisplayed.length - 1]
    ) {
      rightChevron.style.opacity = 0.3;
    }
    const imagesToDisplay = document.querySelectorAll(".visible");
    if (document.querySelector(".hiddenImageToDisplay")) {
      imagesToDisplay.forEach((image) => {
        image.classList.remove("visible");
        image.style.display = "none";
      });
      const hiddenImagesToDisplay = document.querySelectorAll(
        ".hiddenImageToDisplay"
      );
      const tl = gsap.timeline();
      hiddenImagesToDisplay.forEach((image) => {
        image.style.display = "block";
        image.classList.add("visible");
      });
      if (this.state.eTarget === "right") {
        tl.fromTo(
          [hiddenImagesToDisplay],
          0.7,
          { x: "100vw" },
          { x: 0, ease: "Expo.EaseOut", stagger: 0.1, delay: 0.2 }
        );
      } else {
        const hiddenImagesToDisplayArray = Array.from(hiddenImagesToDisplay);
        tl.fromTo(
          [hiddenImagesToDisplayArray.reverse()],
          0.9,
          { x: "-100vw" },
          { x: 0, ease: "Expo.EaseOut", stagger: 0.1, delay: 0.2 }
        );
      }
    } else {
      for (
        let i = this.state.imagesDisplayed[0];
        i < this.state.imagesDisplayed.length;
        i++
      ) {
        document
          .getElementById("galleryImage" + this.state.imagesDisplayed[i])
          .classList.add("visible");
      }
      imagesToDisplay.forEach((image) => {
        image.style.display = "block";
      });
    }
  }
  displayImages = (imagesToDisplay) => {
    const allImages = document.querySelectorAll(".galleryImg");
    const allImagesIds = [];
    allImages.forEach((image) => {
      allImagesIds.push(image.id.slice(12));
    });
    this.setState({
      allImages: allImagesIds,
      imagesDisplayed: imagesToDisplay,
    });
  };
  handleChevronClick = (e) => {
    const hiddenImagesToDisplay = document.querySelectorAll(
      ".hiddenImageToDisplay"
    );
    hiddenImagesToDisplay.forEach((image) => {
      image.classList.remove("hiddenImageToDisplay");
    });

    const imagesToHide = document.querySelectorAll(".visible");
    const hiddenImages = [];
    imagesToHide.forEach((image) => {
      hiddenImages.push(Number(image.id.slice(12)));
    });

    const imagesToDisplay = [];
    for (let i = 1; i < 6; i++) {
      let imageToDisplay;
      if (
        (e.target.classList.contains("galleryChevronRight") &&
          this.state.allImages[this.state.allImages.length - 1] !=
            this.state.imagesDisplayed[
              this.state.imagesDisplayed.length - 1
            ]) ||
        (e.target.parentNode.classList.contains("galleryChevronRight") &&
          this.state.allImages[this.state.allImages.length - 1] !=
            this.state.imagesDisplayed[this.state.imagesDisplayed.length - 1])
      ) {
        imageToDisplay = document.getElementById(
          "galleryImage" + (Number(imagesToHide[4].id.slice(12)) + i)
        );
        this.setState({
          eTarget: "right",
        });
      } else if (
        (e.target.classList.contains("galleryChevronLeft") &&
          this.state.allImages[0] != this.state.imagesDisplayed[0]) ||
        (e.target.parentNode.classList.contains("galleryChevronLeft") &&
          this.state.allImages[0] != this.state.imagesDisplayed[0])
      ) {
        imageToDisplay = document.getElementById(
          "galleryImage" + (Number(imagesToHide[0].id.slice(12)) + -i)
        );
        this.setState({
          eTarget: "left",
        });
      }
      if (imageToDisplay) {
        imagesToDisplay.push(Number(imageToDisplay.id.slice(12)));
        imageToDisplay.classList.add("hiddenImageToDisplay");
      }
    }
    if (imagesToDisplay.length) {
      this.setState({
        imagesDisplayed: imagesToDisplay,
      });
    } else {
      this.setState({
        imagesDisplayed: hiddenImages,
      });
      for (let i = 0; i < hiddenImages.length; i++) {
        document
          .getElementById("galleryImage" + hiddenImages[i])
          .classList.add("visible");
      }
    }
  };
  changeImagesLinksInState = (respo) => {
    this.setState({
      imagesLinks: respo.reverse(),
    });
  };
  render() {
    if (this.state.imagesLinks[1] && !this.state.allImages[1]) {
      this.displayImages([0, 1, 2, 3, 4]);
    }
    const state = this.state;
    const renderImages = this.state.imagesLinks.map(function (image, i) {
      return (
        <img
          className="galleryImg"
          id={"galleryImage" + i}
          key={i}
          src={state.imagesLinks[i].src}
          alt="info"
        />
      );
    });
    return (
      <section className="gallerySection">
        {/* <h2>Galeria</h2> */}
        <div className="imagesWrap">
          <img
            className="cornerOrnament"
            src={CornerOrnament}
            id="upperLeftOrnament"
            alt="ornament"
          ></img>
          <img
            className="cornerOrnament"
            src={CornerOrnamentRight}
            id="upperRightOrnament"
            alt="ornament"
          ></img>
          {renderImages}
          <FontAwesomeIcon
            icon={faChevronLeft}
            className="galleryChevronLeft"
            onClick={this.handleChevronClick}
          />

          <FontAwesomeIcon
            icon={faChevronRight}
            className="galleryChevronRight"
            onClick={this.handleChevronClick}
          />
        </div>
      </section>
    );
  }
}
export default Gallery;
