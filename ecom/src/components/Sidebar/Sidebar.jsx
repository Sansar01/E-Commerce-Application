import React, { useState } from 'react'
import Slider from '@mui/material/Slider';
import Checkbox from '@mui/material/Checkbox';
import { Button } from '@mui/material';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import bannerimg from '../../assets/images/banner1.jpg'

function Sidebar() {

    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    function valuetext(number) {
        return `${value}°C`;
    }

    const [value, setValue] = useState([20, 500]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    return (
        <div className="sidebar">
            <div className="card border-0 shadow">
                <h3>Category</h3>
                <div className="catList">
                    <div className="catItem d-flex align-items-center">
                        <span className="img">
                            <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/category-1.svg" alt="" width={30} />
                        </span>
                        <h4 className="mb-0 ml-3 mr-3">
                            Milks & Dairies
                        </h4>
                        <span className="d-flex align-items-center justify-content-center rounded-circle ms-auto">
                            30
                        </span>
                    </div>
                    <div className="catItem d-flex align-items-center">
                        <span className="img">
                            <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/category-1.svg" alt="" width={30} />
                        </span>
                        <h4 className="mb-0 ml-3 mr-3">
                            Clothing
                        </h4>
                        <span className="d-flex align-items-center justify-content-center rounded-circle ms-auto">
                            30
                        </span>
                    </div>
                    <div className="catItem d-flex align-items-center">
                        <span className="img">
                            <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/category-1.svg" alt="" width={30} />
                        </span>
                        <h4 className="mb-0 ml-3 mr-3">
                            Pet Foods
                        </h4>
                        <span className="d-flex align-items-center justify-content-center rounded-circle ms-auto">
                            30
                        </span>
                    </div>
                    <div className="catItem d-flex align-items-center">
                        <span className="img">
                            <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/category-1.svg" alt="" width={30} />
                        </span>
                        <h4 className="mb-0 ml-3 mr-3">
                            Baking Material
                        </h4>
                        <span className="d-flex align-items-center justify-content-center rounded-circle ms-auto">
                            30
                        </span>
                    </div>
                    <div className="catItem d-flex align-items-center">
                        <span className="img">
                            <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/category-1.svg" alt="" width={30} />
                        </span>
                        <h4 className="mb-0 ml-3 mr-3">
                            Fresh Fruit
                        </h4>
                        <span className="d-flex align-items-center justify-content-center rounded-circle ms-auto">
                            30
                        </span>
                    </div>
                </div>
            </div>
            <div className="card border-0 shadow">
                <h3>Fill by price</h3>
                <Slider
                    min={0}
                    step={1}
                    max={1000}
                    getAriaLabel={() => 'Temperature range'}
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    getAriaValueText={valuetext}
                    color='success'
                />

                <div className="d-flex pt-2 pb-2 priceRange">
                    <span>From: <strong className="text-success">Rs {value[0]}</strong></span>
                    <span className='ms-auto'>To: <strong className="text-success">Rs {value[1]}</strong></span>
                </div>

                <div className="filters">
                    <h5>Color</h5>
                    <ul>
                        <li><Checkbox {...label} color='success'/>Red</li>
                        <li><Checkbox {...label} color='success'/>Green</li>
                        <li><Checkbox {...label} color='success'/>Blue</li>   
                        <li><Checkbox {...label} color='success'/>Indigo</li>
                    </ul>
                </div>
                <div className="filters">
                    <h5>Item Condition</h5>
                    <ul>
                        <li><Checkbox {...label} color='success'/>New</li>
                        <li><Checkbox {...label} color='success'/>Refurbished</li>
                        <li><Checkbox {...label} color='success'/>Used</li>
                    </ul>
                </div>
                  <div className="d-flex">
                  <Button className='btn btn-g'><FilterAltOutlinedIcon/>Filter</Button>
                  </div>
            </div>
            <img src={bannerimg} alt="" className='w-100'/>
        </div>
    )
}

export default Sidebar;