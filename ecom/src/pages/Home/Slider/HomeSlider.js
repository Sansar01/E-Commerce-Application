import React from "react";
import Slider from "react-slick";
import "../Slider/Slider.css";
import slider1 from '../../../assets/images/slider-1.png'
import slider2 from '../../../assets/images/slider-2.png'

function HomeSlider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade:true,
    arrows:true
  };

  console.log("css ", document.styleSheets);

  return (
    <section className="homeSlider">
      <section className="container-fluid">
        <Slider {...settings} className="home_slider_Main">
          <div className="item">
            <img src={slider1}/>
          </div>
          <div className="item">
            <img src={slider2}/>
          </div>
        </Slider>
      </section>
    </section>
  );
}

export default HomeSlider;
