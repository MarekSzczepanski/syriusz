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
class Gallery2 extends React.Component {
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
      .get("http://localhost:5000/api/urns_list")
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
    const leftChevron = document.querySelector(".galleryChevronLeft2");
    const rightChevron = document.querySelector(".galleryChevronRight2");
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
    const imagesToDisplay = document.querySelectorAll(".visible2");
    if (document.querySelector(".hiddenImageToDisplay2")) {
      imagesToDisplay.forEach((image) => {
        image.classList.remove("visible2");
        image.style.display = "none";
      });
      const hiddenImagesToDisplay = document.querySelectorAll(
        ".hiddenImageToDisplay2"
      );
      const tl = gsap.timeline();
      hiddenImagesToDisplay.forEach((image) => {
        image.style.display = "block";
        image.classList.add("visible2");
      });
      if (this.state.eTarget === "right") {
        tl.fromTo(
          [hiddenImagesToDisplay],
          0.9,
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
          .getElementById("2galleryImage" + this.state.imagesDisplayed[i])
          .classList.add("visible2");
      }
      imagesToDisplay.forEach((image) => {
        image.style.display = "block";
      });
    }
  }
  displayImages = (imagesToDisplay) => {
    const allImages = document.querySelectorAll(".galleryImg2");
    const allImagesIds = [];
    allImages.forEach((image) => {
      allImagesIds.push(image.id.slice(13));
    });
    this.setState({
      allImages: allImagesIds,
      imagesDisplayed: imagesToDisplay,
    });
  };
  handleChevronClick = (e) => {
    const hiddenImagesToDisplay = document.querySelectorAll(
      ".hiddenImageToDisplay2"
    );
    hiddenImagesToDisplay.forEach((image) => {
      image.classList.remove("hiddenImageToDisplay2");
    });

    const imagesToHide = document.querySelectorAll(".visible2");
    const hiddenImages = [];
    imagesToHide.forEach((image) => {
      hiddenImages.push(Number(image.id.slice(13)));
    });

    const imagesToDisplay = [];
    for (let i = 1; i < 6; i++) {
      let imageToDisplay;
      if (
        (e.target.classList.contains("galleryChevronRight2") &&
          this.state.allImages[this.state.allImages.length - 1] !=
            this.state.imagesDisplayed[
              this.state.imagesDisplayed.length - 1
            ]) ||
        (e.target.parentNode.classList.contains("galleryChevronRight2") &&
          this.state.allImages[this.state.allImages.length - 1] !=
            this.state.imagesDisplayed[this.state.imagesDisplayed.length - 1])
      ) {
        imageToDisplay = document.getElementById(
          "2galleryImage" + (Number(imagesToHide[4].id.slice(13)) + i)
        );
        this.setState({
          eTarget: "right",
        });
      } else if (
        (e.target.classList.contains("galleryChevronLeft2") &&
          this.state.allImages[0] != this.state.imagesDisplayed[0]) ||
        (e.target.parentNode.classList.contains("galleryChevronLeft2") &&
          this.state.allImages[0] != this.state.imagesDisplayed[0])
      ) {
        imageToDisplay = document.getElementById(
          "2galleryImage" + (Number(imagesToHide[0].id.slice(13)) + -i)
        );
        this.setState({
          eTarget: "left",
        });
      }
      if (imageToDisplay) {
        imagesToDisplay.push(Number(imageToDisplay.id.slice(13)));
        imageToDisplay.classList.add("hiddenImageToDisplay2");
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
          .getElementById("2galleryImage" + hiddenImages[i])
          .classList.add("visible2");
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
          className="galleryImg2"
          id={"2galleryImage" + i}
          key={i}
          src={state.imagesLinks[i].src}
          alt="info"
        />
      );
    });
    return (
      <section className="gallerySection2">
        {/* <h2>Galeria</h2> */}
        <div className="imagesWrap">
          {renderImages}
          <FontAwesomeIcon
            icon={faChevronLeft}
            className="galleryChevronLeft2"
            onClick={this.handleChevronClick}
          />

          <FontAwesomeIcon
            icon={faChevronRight}
            className="galleryChevronRight2"
            onClick={this.handleChevronClick}
          />
        </div>
      </section>
    );
  }
}
export default Gallery2;
