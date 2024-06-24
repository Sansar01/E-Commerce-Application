import React, { useState } from 'react'
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
import { ClickAwayListener } from '@mui/base/ClickAwayListener'

function Listing() {

  const [isOpenDropdown, setisOpenDropdown] = useState(false);
  const[isOpenDropdown2,setisOpenDropdown2] = useState(false);

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
                <div className="ms-auto d-flex align-items-center position-relative">
                  <ClickAwayListener onClickAway={() => setisOpenDropdown(false)}>
                    <div className="tab_ position-relative">
                      <Button className='btn_' onClick={() => setisOpenDropdown(!isOpenDropdown)}>Show: 50</Button>
                      {
                        isOpenDropdown && (
                          <ul className="dropdownMenu">
                            <li>
                              <Button>
                                <Person2OutlinedIcon />
                                50
                              </Button>
                            </li>
                            <li>
                              <Button>
                                <LocationOnOutlinedIcon />
                              100
                              </Button>
                            </li>
                            <li>
                              <Button>
                                <FavoriteBorderOutlinedIcon />
                                150
                              </Button>
                            </li>
                            <li>
                              <Button>
                                <SettingsOutlinedIcon />
                               200
                              </Button>
                            </li>
                            <li>
                              <Button>
                                <LogoutOutlinedIcon />
                               250
                              </Button>
                            </li>
                          </ul>
                        )
                      }
                    </div>
                  </ClickAwayListener>
                  <ClickAwayListener onClickAway={() => setisOpenDropdown2(false)}>
                  <div className="tab_ ms-3 position-relative">
                    <Button className='btn_' onClick={()=>setisOpenDropdown2(!isOpenDropdown2)}>Sort By: Featured</Button>
                    {
                      isOpenDropdown2 && (
                        <ul className="dropdownMenu">
                      <li>
                        <Button>
                          <Person2OutlinedIcon />
                         Featured
                        </Button>
                      </li>
                      <li>
                        <Button>
                          <LocationOnOutlinedIcon />
                          Price:Low To High
                        </Button>
                      </li>
                      <li>
                        <Button>
                          <FavoriteBorderOutlinedIcon />
                           Price:High To Low
                        </Button>
                      </li>
                      <li>
                        <Button>
                          <SettingsOutlinedIcon />
                          Price:High To Low
                        </Button>
                      </li>
                      <li>
                        <Button>
                          <LogoutOutlinedIcon />
                          Price:High To Low
                        </Button>
                      </li>
                    </ul>
                      )
                    }
                  </div>
                  </ClickAwayListener>
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