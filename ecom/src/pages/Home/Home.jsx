import React from 'react'
import HomeSlider from './Slider/HomeSlider'
import CatSlider from '../../components/catSlider/CatSlider'
import Banner from '../../components/Banner/Banner'
import '../Home/Home.css'
import Product from '../../components/Product/Product'

function Home() {
  return (
    <>
      <HomeSlider />
      <CatSlider />
      <Banner />

      <section className="homeProduct">
        <div className="container-fluid">
          <div className="d-flex align-items-center">
            <h2 className="hd mb-0 mt-0">
              Popular Products
            </h2>
            <ul className="list list-inline ms-auto filtertab mb-0">
              <li className="list-inline-item">
                <a href="" className="cursor">All</a>
              </li>
              <li className="list-inline-item">
                <a href="" className="cursor">Milks & Dairies</a>
              </li>
              <li className="list-inline-item">
                <a href="" className="cursor">Coffees & Tea</a>
              </li>
              <li className="list-inline-item">
                <a href="" className="cursor">Pet Foods</a>
              </li>
              <li className="list-inline-item">
                <a href="" className="cursor">Meats</a>
              </li>
              <li className="list-inline-item">
                <a href="" className="cursor">Vegetables</a>
              </li>
              <li className="list-inline-item">
                <a href="" className="cursor">Fruits</a>
              </li>
            </ul>
          </div>
          <div className="productRow">
            <div className="item">
              <Product tag="hot"/>
            </div>
            <div className="item">
              <Product tag="sale"/>
            </div>
            <div className="item">
              <Product tag="news"/>
            </div>
            <div className="item">
              <Product tag="best"/>
            </div>
            <div className="item">
              <Product tag="hot"/>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
