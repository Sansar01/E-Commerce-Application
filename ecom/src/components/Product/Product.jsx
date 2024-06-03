import React from 'react'
import '../Product/Product.css'
import Rating from '@mui/material/Rating';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import CompareArrowsOutlinedIcon from '@mui/icons-material/CompareArrowsOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';

function Product(props) {
    return (
        <div className="productThumb">
        <span className={`badge ${props.tag}`}>New</span>
            <Link>
                <div className="imgWrapper">
                    <img src="https://nest-frontend-v6.netlify.app/assets/imgs/shop/product-1-2.jpg" alt="" className='w-100' />
                    <div className="overlay transition">
                             <ul className="list list-inline mb-0">
                                 <li className="list-inline-item">
                                    <a className='cursor' tooltip="Add to Wishlist"><FavoriteBorderOutlinedIcon/></a>
                                 </li>
                                 <li className="list-inline-item">
                                    <a className='cursor' tooltip="Compare"><CompareArrowsOutlinedIcon/></a>
                                 </li>
                                 <li className="list-inline-item">
                                    <a className='cursor' tooltip="Quick View"><RemoveRedEyeOutlinedIcon/></a>
                                 </li>
                             </ul>
                    </div>
                </div>
            </Link>
            <div className="info">
                <span className="d-block catName">Snacks</span>
                <h4 className="title">
                    <Link> Seeds of Change Organic Quinoa, Brown, & Red Rice</Link>
                </h4>
                <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
                <span className="brand d-block">By <Link href="" className="text-g">Nest Food</Link></span>
                <div className="d-flex align-items-center">
                    <div className="d-flex align-items-center">
                        <span className="price text-g">$2.85</span>
                        <span className="oldprice">$32.8</span>
                    </div>
                    <Button className=' ms-auto'><ShoppingCartOutlinedIcon />Add</Button>
                </div>
            </div>
        </div>
    )
}

export default Product