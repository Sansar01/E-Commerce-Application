import React from 'react'
import '../Listing/Listing.css'
import { Link } from 'react-router-dom'
import Sidebar from '../../components/Sidebar/Sidebar'
import Product from '../../components/Product/Product'
import { Button } from '@mui/material'
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

function Listing() {
  return (
    <section className="listingPage">
      <div className="container-fluid">
        <div className="breadcrumb flex-column">
          <h2>Snacks</h2>
          <ul className="list list-inline mb-0">
            <li className="list-inline-item">
              <Link to={'/'}>Home</Link>
            </li>
            <li className="list-inline-item">
              <Link to={'/'}>Shop</Link>
            </li>
            <li className="list-inline-item">
              <Link to={'/'}>Snack</Link>
            </li>
          </ul>
        </div>
        <div className="listingData">
          <div className="row">
            <div className="col-md-3 sidebarWrapper">
              <Sidebar />
            </div>
            <div className="col-md-9 rightContent homeProduct pt-0">
              <div className="topStrip d-flex align-items-center">
                <p className="mb-0">We found <span className='text-success'>29</span>items for you</p>
                <div className="ms-auto d-flex align-items-center">
                  <div className="tab_">
                    <Button className=''>Show: 50</Button>
                    <ul className="dropdownMenu">
                      <li>
                        <Button>
                          <Person2OutlinedIcon />
                          My Account
                        </Button>
                      </li>
                      <li>
                        <Button>
                          <LocationOnOutlinedIcon />
                          Order Tracking
                        </Button>
                      </li>
                      <li>
                        <Button>
                          <FavoriteBorderOutlinedIcon />
                          My Whishlist
                        </Button>
                      </li>
                      <li>
                        <Button>
                          <SettingsOutlinedIcon />
                          Setting
                        </Button>
                      </li>
                      <li>
                        <Button>
                          <LogoutOutlinedIcon />
                          Sign-out
                        </Button>
                      </li>
                    </ul>
                  </div>
                  <div className="tab_ ms-3">
                    <Button className=''>Sort By: Featured</Button>
                  </div>
                </div>
              </div>
              <div className="productRow ps-0 pe-2">
                <div className="item">
                  <Product />
                </div>
                <div className="item">
                  <Product />
                </div>
                <div className="item">
                  <Product />
                </div>
                <div className="item">
                  <Product />
                </div>
                <div className="item">
                  <Product />
                </div>
                <div className="item">
                  <Product />
                </div>
                <div className="item">
                  <Product />
                </div>
                <div className="item">
                  <Product />
                </div>
                <div className="item">
                  <Product />
                </div>
                <div className="item">
                  <Product />
                </div>
                <div className="item">
                  <Product />
                </div>
                <div className="item">
                  <Product />
                </div>
                <div className="item">
                  <Product />
                </div>
                <div className="item">
                  <Product />
                </div>
                <div className="item">
                  <Product />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Listing