import React from 'react'
import { Link } from 'react-router-dom'
import '../Details/Details.css'
import Rating from '@mui/material/Rating'

function Details() {
  return (
    <section className="detailPage">
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
              <div className="col-md-5 productZoom"></div>
              <div className="col-md-7 productInfo">
                {/* productZoom code start here */}
                <div className="col-md-3 productZoom"></div>
                {/* productZoom code end here */}

                {/* product info code start here */}
                <div className="col-md-9 productInfo">
                  <h3>Seeds of Change Organic Quinoa,Bown</h3>
                  <div className="d-flex align-items-center">
                    <Rating
                      name="half-rating-read"
                      defaultValue={2.5}
                      precision={0.5}
                      readOnly
                    />
                    <span className="text-light">(32 reviews)</span>
                  </div>
                  <div className="priceSec d-flex align-items-center mb-3">
                    <span className="text-g">$38</span>
                    <div className="ms-2 d-flex flex-column">
                      <span className="text-g">26% Off</span>
                      <span className="text-light">$52</span>
                    </div>
                  </div>
                  <p>
                    sfdsjfdshfaskfid jdfasdalfadklal f dshfahlfhd jshfl o o d dk
                    jf{' '}
                  </p>
                </div>
                {/*  */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Details
