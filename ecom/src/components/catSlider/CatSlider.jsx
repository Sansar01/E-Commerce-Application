import React, { useRef, useState } from 'react'
import '../catSlider/CatSlider.css'
import Slider from 'react-slick'

function CatSlider() {

  const [itemBg, setitemBg] = useState([
    '#fffceb',
    '#ecffec',
    '#feefea',
    '#fff3eb',
    '#fff3ff',
    '#f2fce4',
    '#feefea',
    '#fffceb',
    '#feefea',
    '#ecffec',
    '#feefea',
    '#fff3eb',
    '#fff3ff',
    '#f2fce4',
    '#feefea',
    '#fffceb',
    '#feefea',
    '#ecffec'
  ])

  const slider = useRef();
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    fade: false,
    arrows: true,
    autoplay:2000,
    centerMode:true
  }

  return (
    <div className="catSliderSection">
      <div className="container-fluid" ref={slider}>
        <div className="hd">Featured Categories</div>
        <Slider {...settings} className="cat_slider_Main">
          {
            itemBg.length != 0 && itemBg.map((item, index) => {
              return (
                <div className="item" key={index}>
                  <div className="info"  style={{ background: item }}>
                    <img src="https://th.bing.com/th/id/OIG4.Xq74jSVEkEaVe2hD2RUY" alt="" />
                    <h5>Cake & Milk</h5>
                    <p>25 items</p>
                  </div>
                </div>
              )
            })
          }
          {/* <div className="item">
            <div className="info">
              <img src="https://th.bing.com/th/id/OIG4.Xq74jSVEkEaVe2hD2RUY" alt="" />
              <h5>Cake & Milk</h5>
              <p>25 items</p>
            </div>
          </div>
          <div className="item">
            <div className="info">
              <img src="https://th.bing.com/th/id/OIG4.Xq74jSVEkEaVe2hD2RUY" alt="" />
              <h5>Cake & Milk</h5>
              <p>25 items</p>
            </div>
          </div>
          <div className="item">
            <div className="info">
              <img src="https://th.bing.com/th/id/OIG4.Xq74jSVEkEaVe2hD2RUY" alt="" />
              <h5>Cake & Milk</h5>
              <p>25 items</p>
            </div>
          </div>
          <div className="item">
            <div className="info">
              <img src="https://th.bing.com/th/id/OIG4.Xq74jSVEkEaVe2hD2RUY" alt="" />
              <h5>Cake & Milk</h5>
              <p>25 items</p>
            </div>
          </div>
          <div className="item">
            <div className="info">
              <img src="https://th.bing.com/th/id/OIG4.Xq74jSVEkEaVe2hD2RUY" alt="" />
              <h5>Cake & Milk</h5>
              <p>25 items</p>
            </div>
          </div>
          <div className="item">
            <div className="info">
              <img src="https://th.bing.com/th/id/OIG4.Xq74jSVEkEaVe2hD2RUY" alt="" />
              <h5>Cake & Milk</h5>
              <p>25 items</p>
            </div>
          </div>
          <div className="item">
            <div className="info">
              <img src="https://th.bing.com/th/id/OIG4.Xq74jSVEkEaVe2hD2RUY" alt="" />
              <h5>Cake & Milk</h5>
              <p>25 items</p>
            </div>
          </div>
          <div className="item">
            <div className="info">
              <img src="https://th.bing.com/th/id/OIG4.Xq74jSVEkEaVe2hD2RUY" alt="" />
              <h5>Cake & Milk</h5>
              <p>25 items</p>
            </div>
          </div>
          <div className="item">
            <div className="info">
              <img src="https://th.bing.com/th/id/OIG4.Xq74jSVEkEaVe2hD2RUY" alt="" />
              <h5>Cake & Milk</h5>
              <p>25 items</p>
            </div>
          </div> */}
        </Slider>
      </div>
    </div>
  )
}

export default CatSlider