import React, { useState } from "react";
import "../selectDrop/Select.css";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function Select() {
  const [isOpenSelect, setisOpenSelect] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const openSelect = () => {
    setisOpenSelect(!isOpenSelect);
  };

  const closeSelect = (Index) => {
    setSelectedIndex(Index);
    setisOpenSelect(!isOpenSelect)
  };
    

  return (
    <div className="selectDropWrapper cursor position-relative">
      <span className="openSelect" onClick={openSelect}>
        All Categories <KeyboardArrowDownIcon className="arrow"/>
      </span>
      {isOpenSelect && (
        <div className="selectDrop">
          <div className="searchField">
            <input type="text" />
          </div>
          <ul className="searchResults">
                    <li onClick={()=>closeSelect(0)} className={`${selectedIndex === 0 ? 'active' :''}`}>All Categories</li>
                    <li onClick={()=>closeSelect(1)} className={`${selectedIndex === 1 ? 'active' :''}`}>Milks and Dairies</li>
                    <li onClick={()=>closeSelect(2)} className={`${selectedIndex === 2 ? 'active' :''}`}>Wines & Drinks</li>
                    <li onClick={()=>closeSelect(3)} className={`${selectedIndex === 3 ? 'active' :''}`}>Clothing & beauty</li>
                    <li onClick={()=>closeSelect(4)} className={`${selectedIndex === 4 ? 'active' :''}`}>Fresh Seafood</li>
                    <li onClick={()=>closeSelect(5)} className={`${selectedIndex === 5 ? 'active' :''}`}>Pet Foods & Toy</li>
                    <li onClick={()=>closeSelect(6)} className={`${selectedIndex === 6 ? 'active' :''}`}>Fast food</li>
                    <li onClick={()=>closeSelect(7)} className={`${selectedIndex === 7 ? 'active' :''}`}>Baking material</li>
                    <li onClick={()=>closeSelect(8)} className={`${selectedIndex === 8 ? 'active' :''}`}>Vegetables</li>
                    <li onClick={()=>closeSelect(9)} className={`${selectedIndex === 9 ? 'active' :''}`}>Noodles & Rice</li>
                    <li onClick={()=>closeSelect(10)} className={`${selectedIndex === 10 ? 'active' :''}`}>Ice cream</li>
                </ul>
        </div>
      )}
    </div>
  );
}

export default Select;
