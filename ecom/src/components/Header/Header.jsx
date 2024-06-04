/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useRef, useState } from "react";
import Logo from "../../assets/images/logo.svg";
import "../Header/Header.css";
import SearchIcon from "@mui/icons-material/Search";
import Select from "../selectDrop/Select";
import axios from "axios";
import iconCompare from "../../assets/images/icon-compare.svg";
import iconHeart from "../../assets/images/icon-heart.svg";
import iconUser from "../../assets/images/icon-user.svg";
import iconCart from "../../assets/images/icon-cart.svg";
import Button from "@mui/material/Button";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import Nav from "./Nav/Nav";

function Header() {
  const [isOpenDropdown, setisOpenDropdown] = useState(false);

  const headerRef = useRef();

  const [Categories, setCategories] = useState([
    "Milks and Dairies",
    "Wines & Drinks",
    "Clothing & beauty",
    "Fresh Seafood",
    "Pet Foods & Toy",
    " Fast food",
    "Baking Material",
    "Vegetables",
    "Noodles & Rice",
    "Ice cream",
  ]);

  const countryList = [];

  useEffect(() => {
    getCountry("https://countriesnow.space/api/v0.1/countries/");
  }, []);

  const getCountry = async (url) => {
    try {
      await axios.get(url).then((res) => {
        if (res != null) {
          res.data.data.map((item, index) => countryList.push(item.country));
        }
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(()=>{
    window.addEventListener("scroll",()=>{
      let position = window.pageYOffset;
      if(position>50)
        headerRef.current.classList.add('fixed');
      else
      headerRef.current.classList.remove('fixed');
    })
  },[])

  return (
    <>
      <div className="headerWrapper" ref={headerRef}>
      <header>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-2">
              <img src={Logo} />
            </div>
            {/* {header search start here} */}
            <div className="col-sm-5">
              <div className="headerSearch d-flex align-items-center">
                <Select data={Categories} placeholder={"All Categories"} />
                <div className="search">
                  <input type="text" placeholder="Search for items..." />
                  <SearchIcon className="searchIcon cursor" />
                </div>
              </div>
            </div>
            {/* {header search end here} */}
            <div className="col-sm-5 d-flex align-items-center">
              <div className="ms-auto d-flex align-items-center">
                <div className="countryWrapper">
                  <Select data={countryList} placeholder={"Your Location"} />
                </div>
                <ul className="list list-inline mb-0 headerTabs">
                  <li className="list-inline-item">
                    <span>
                      <img src={iconCompare} />
                      <span className="badge bg-success rounded-circle">3</span>
                      Compare
                    </span>
                  </li>
                  <li className="list-inline-item">
                    <span>
                      <img src={iconHeart} />
                      <span className="badge bg-success rounded-circle">3</span>
                      Whislist
                    </span>
                  </li>
                  <li className="list-inline-item">
                    <span>
                      <img src={iconCart} />
                      <span className="badge bg-success rounded-circle">3</span>
                      Cart
                    </span>
                  </li>
                  <li
                    className="list-inline-item position-relative"
                    onMouseEnter={() => setisOpenDropdown(true)}
                    onMouseLeave={() => setisOpenDropdown(false)}
                  >
                    <span>
                      <img src={iconUser} />
                      Accounts
                    </span>
                    {isOpenDropdown && (
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
                    )}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>

      <Nav />
    </div>
    <div className="afterHeader"></div>
    </>
  );
}

export default Header;
