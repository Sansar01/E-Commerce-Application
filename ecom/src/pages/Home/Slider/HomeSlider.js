import React from "react";
import Slider from "react-slick";
import "../Slider/Slider.css";
import "slick-carousel/slick/slick-theme.css";

function HomeSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  console.log("css ",document.styleSheets);

  return (
    <section className="homeSlider">
      <section className="container-fluid">
        <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </section>
    </section>
  );
}

export default HomeSlider;
