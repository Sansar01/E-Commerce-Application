import React, { useState } from 'react'
import '../selectDrop/Select.css'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { ClickAwayListener } from '@mui/base/ClickAwayListener'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined'

function Select(props) {
  const [isOpenSelect, setisOpenSelect] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [selectedItem, setselectedItem] = useState(props.placeholder)

  const openSelect = () => {
    setisOpenSelect(!isOpenSelect)
  }

  const closeSelect = (Index) => {
    setSelectedIndex(Index)

    //Access ul elements
    var li = document.querySelector('.searchResults')

    //After collecting  all collection of li we getting value of children with index
    var item = li.children[Index]

    setisOpenSelect(!isOpenSelect)

    // set Selected Item
    setselectedItem(item.textContent)
    if (props.placeholder === 'All Categories') {
      //changing the value of css class
      if (item.textContent.length >= 17) {
        let css = document.styleSheets[3].cssRules[2].style
        css.setProperty('width', '30%')
      } else {
        let css = document.styleSheets[3].cssRules[2].style
        css.setProperty('width', '27%')
      }
    }
  }

  return (
    <ClickAwayListener onClickAway={() => setisOpenSelect(false)}>
      <div className="selectDropWrapper cursor position-relative">
        {props.placeholder === 'Your Location' && (
          <LocationOnOutlinedIcon style={{ opacity: '0.5 ' }} />
        )}
        <span className="openSelect" onClick={openSelect}>
          {selectedItem}
          <KeyboardArrowDownIcon className="arrow" />
        </span>
        {isOpenSelect && (
          <div className="selectDrop">
            <div className="searchField">
              <input type="text" placeholder="Search here" />
            </div>
            <ul className="searchResults">
              <li
                key={0}
                onClick={() => closeSelect(0)}
                className={`${selectedIndex === 0 ? 'active' : ''}`}
              >
                {props.placeholder}
              </li>
              {props &&
                props.data.map((category, Index) => {
                  return (
                    <li
                      key={Index + 1}
                      onClick={() => closeSelect(Index + 1)}
                      className={`${
                        selectedIndex === Index + 1 ? 'active' : ''
                      }`}
                    >
                      {category}
                    </li>
                  )
                })}
              {/* <li
                onClick={() => closeSelect(0)}
                className={`${selectedIndex === 0 ? "active" : ""}`}
              >
                All Categories
              </li>
              <li
                onClick={() => closeSelect(1)}
                className={`${selectedIndex === 1 ? "active" : ""}`}
              >
                Milks and Dairies
              </li>
              <li
                onClick={() => closeSelect(2)}
                className={`${selectedIndex === 2 ? "active" : ""}`}
              >
                Wines & Drinks
              </li>
              <li
                onClick={() => closeSelect(3)}
                className={`${selectedIndex === 3 ? "active" : ""}`}
              >
                Clothing & beauty
              </li>
              <li
                onClick={() => closeSelect(4)}
                className={`${selectedIndex === 4 ? "active" : ""}`}
              >
                Fresh Seafood
              </li>
              <li
                onClick={() => closeSelect(5)}
                className={`${selectedIndex === 5 ? "active" : ""}`}
              >
                Pet Foods & Toy
              </li>
              <li
                onClick={() => closeSelect(6)}
                className={`${selectedIndex === 6 ? "active" : ""}`}
              >
                Fast food
              </li>
              <li
                onClick={() => closeSelect(7)}
                className={`${selectedIndex === 7 ? "active" : ""}`}
              >
                Baking material
              </li>
              <li
                onClick={() => closeSelect(8)}
                className={`${selectedIndex === 8 ? "active" : ""}`}
              >
                Vegetables
              </li>
              <li
                onClick={() => closeSelect(9)}
                className={`${selectedIndex === 9 ? "active" : ""}`}
              >
                Noodles & Rice
              </li>
              <li
                onClick={() => closeSelect(10)}
                className={`${selectedIndex === 10 ? "active" : ""}`}
              >
                Ice cream
              </li> */}
            </ul>
          </div>
        )}
      </div>
    </ClickAwayListener>
  )
}

export default Select
