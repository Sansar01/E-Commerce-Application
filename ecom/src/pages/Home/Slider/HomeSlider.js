import React from 'react'
import Slider from 'react-slick'
import '../Slider/Slider.css'
import slider1 from '../../../assets/images/slider-1.png'
import slider2 from '../../../assets/images/slider-2.png'
import Button from '@mui/material/Button'
import SendOutlinedIcon from '@mui/icons-material/SendOutlined'
import NewLetter from '../../../components/Newsletter/NewsLetter'

function HomeSlider() {
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
    <section className="homeSlider">
      <section className="container-fluid">
        <Slider {...settings} className="home_slider_Main">
          <div className="item">
            <img src={slider1} className="w-100" />
            <div className="info">
              <h2 class="mb-4">
                Don’t miss amazing
                <br />
                grocery deals
              </h2>
              <p>Sign up for the daily newsletter</p>
            </div>
          </div>
          <div className="item">
            <img src={slider2} className="w-100" />
            <div className="info">
              <h2 class="mb-3">
                Fresh Vegetables
                <br />
                Big discount
              </h2>
              <p>Sign up for the daily newsletter</p>
            </div>
          </div>
        </Slider>
       <NewLetter/>
      </section>
    </section>
  )
}

export default HomeSlider
