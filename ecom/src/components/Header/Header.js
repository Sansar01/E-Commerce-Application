import React from "react";
import Logo from "../../assets/images/logo.svg";
import "../Header/Header.css";

function Header() {
  return (
    <>
      <header>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-2">
            <img src={Logo} />
          </div>
           {/* {header search start here} */}

        <div className="col-sm-5">
          <div className="headerSearch d-flex align-items-center">
            <div className="selectDrop cursor">
              All Categories
            </div>
            <div className="search">
              <input type="text" placeholder="Search for items..."/>
            </div>
          </div>
        </div>

        {/* {header search end here} */}
        </div>
      </div>
    </header>
    </>
  );
}

export default Header;
