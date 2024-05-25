import React, { useState } from 'react'
import Button from "@mui/material/Button";
import '../Nav/Nav.css'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import GridViewIcon from '@mui/icons-material/GridView';
import { Link } from 'react-router-dom'
import HeadphonesOutlinedIcon from '@mui/icons-material/HeadphonesOutlined';
import bannermenu from '../../../assets/images/banner-menu.png'
function Nav() {

  return (
    <div className="nav d-flex align-items-center">
      <div className="container-fluid">
        <div className="row position-relative">
          <div className="col-sm-3 part1 d-flex align-items-center">
            <Button className='bg-g text-white catTab'><GridViewIcon /> &nbsp; Browse All Categories<KeyboardArrowDownIcon /></Button>
          </div>
          <div className="col-sm-7 part2 position-static">
            <ul className="list list inline mb-0">
              <li className="list-inline-item">
                <Button><Link>Home</Link></Button>
              </li>
              <li className="list-inline-item">
                <Button><Link>About</Link></Button>
              </li>
              <li className="list-inline-item">
                <Button><Link>Shop</Link></Button>
              </li>
              <li className="list-inline-item">
                <Button><Link>Vendors</Link></Button>
              </li>
              <li className="list-inline-item position-static">
                <Button><Link>Mega-menu <KeyboardArrowDownIcon /></Link></Button>
                <div className="dropdown_menu mega_menu mega_menu_width">
                <div className="row">
                  <div className="col">
                    <h4 className="text-g">Fruit & Vegetables</h4>
                  </div>
                  <div className="col">
                    <h4 className="text-g">Breakfast & Dairy</h4>
                  </div>
                  <div className="col">
                    <h4 className="text-g">Meat & Seafood</h4>
                  </div>
                  <div className="col">
                    <h4 className="text-g">
                      <img src={bannermenu}/>
                    </h4>
                  </div>
                </div>

                </div>
              </li>
              <li className="list-inline-item">
                <Button><Link>Blog</Link></Button>
              </li>
              <li className="list-inline-item">
                <Button><Link>Pages <KeyboardArrowDownIcon /></Link></Button>
                <div className="dropdown_menu">
                  <ul>
                    <li><Button><Link to={'/about'}>About Us</Link></Button></li>
                    <li><Button><Link to={'/contact'}>Contact</Link></Button></li>
                    <li><Button><Link to={'/my-account'}>My Account</Link></Button></li>
                    <li><Button><Link to={'/login'}>Login</Link></Button></li>
                    <li><Button><Link to={'/register'}>Register</Link></Button></li>
                    <li><Button><Link to={'/forgot-password'}>Forgot Password</Link></Button></li>
                    <li><Button><Link to={'/reset-password'}>Reset Password</Link></Button></li>
                    <li><Button><Link to={'/purchase-guide'}>Purchase Guide</Link></Button></li>
                    <li><Button><Link to={'/privacy-policy'}>Privacy Policy</Link></Button></li>
                    <li><Button><Link to={'/terms-of-sevice'}>Terms of Service</Link></Button></li>
                    <li><Button><Link to={'/404'}>404 Page</Link></Button></li>
                  </ul>
                </div>
              </li>
              <li className="list-inline-item">
                <Button><Link>Contact</Link></Button>
              </li>
            </ul>
          </div>
          <div className="col-sm-2 part3 d-flex align-items-center">
            <div className="phNo d-flex align-items center ml-auto">
              <span><HeadphonesOutlinedIcon /></span>
              <div className="info ml-3">
                <h3 className="text-g mb-0">1900 - 888</h3>
                <p className='mb-0'>24/7 Support center</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Nav