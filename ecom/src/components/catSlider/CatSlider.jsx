import React from 'react'
import '../catSlider/CatSlider.css'
import Slider from 'react-slick'

function CatSlider() {

    var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: true,
  }

  return (
    <div className="catSliderSection">
        <div className="container-fluid">
        <Slider {...settings} className="home_slider_Main">
        </Slider>
        </div>
    </div>
  )
}

export default CatSlider