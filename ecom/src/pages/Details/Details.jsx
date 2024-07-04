import React from 'react'
import { Link } from 'react-router-dom'
import '../Details/Details.css'
import Rating from '@mui/material/Rating'
import InnerImageZoom from 'react-inner-image-zoom'
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css'
import Slider from 'react-slick'

function Details() {
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
    <section className="detailsPage">
      <div className="breadcrumbWrapper mb-4">
        <div className="container-fluid">
          <ul className="breadcrumb breadcrumb2 mb-0">
            <li>
              <Link>Home</Link>{' '}
            </li>
            <li>
              <Link>Vegetable & Tubers</Link>
            </li>
            <li>Seeds of Change Organic</li>
          </ul>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row pt-3 pb-3">
          <div className="col-md-9 leftpart">
            <div className="row">
              {/* productzoom code start here */}
              <div className="col-md-5">
                <div className="productZoom">
                  <InnerImageZoom
                    zoomType="hover"
                    zoomScale={2}
                    src="https://h5p.org/sites/default/files/h5p/content/1209180/images/file-6113d5f8845dc.jpeg"
                  />
                </div>
                <Slider {...settings} className="home_slider_Main"></Slider>
              </div>
              {/* productzoom code end here */}

              {/* productInfo code start here */}
              <div className="col-md-7 productInfo">
                <h1>Seeds of Change Organic Quinoa,Bown</h1>
                <div className="d-flex align-items-center mb-4 mt-3">
                  <Rating
                    name="half-rating-read"
                    defaultValue={2.5}
                    precision={0.5}
                    readOnly
                  />
                  <span className="text-light ms-2 ">(32 reviews)</span>
                </div>
                <div className="priceSec d-flex align-items-center mb-3">
                  <span className="text-g priceLarge">$38</span>
                  <div className="ms-3 d-flex flex-column">
                    <span className="text-org">26% Off</span>
                    <span className="text-light">$52</span>
                  </div>
                </div>
                <p>
                  sfdsjfdshfaskfid jdfasdalfadklal f dshfahlfhd jshfl o o d dk
                  jf{' '}
                </p>
              </div>
              {/* productInfo code start here */}
            </div>
          </div>
          <div className="col-md-3 part2"></div>
        </div>
      </div>
    </section>
  )
}

export default Details
