import React from 'react'
import HomeSlider from './Slider/HomeSlider'
import CatSlider from '../../components/catSlider/CatSlider'
import Banner from '../../components/Banner/Banner'
import '../Home/Home.css'
import Product from '../../components/Product/Product'
import Banner4 from '../../assets/images/banner4.jpg'
import Slider from 'react-slick'
import TopProducts from '../Home/TopProducts/TopProduct'

function Home() {

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    fade: false,
    arrows: true,
    autoplay:3000
  }


  return (
    <>
      <HomeSlider />
      <CatSlider />
      <Banner />

      {/* First Slider for product */}
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
              <Product tag="hot" />
            </div>
            <div className="item">
              <Product tag="sale" />
            </div>
            <div className="item">
              <Product tag="news" />
            </div>
            <div className="item">
              <Product tag="best" />
            </div>
            <div className="item">
              <Product tag="hot" />
            </div>
          </div>
        </div>
      </section>


      {/* Second slider for product */}

      <section className="homeProduct homeProductRow2 pt-0">
        <div className="container-fluid">
          <div className="d-flex align-items-center">
            <h2 className="hd mb-0 mt-0">
              Daily Best sells
            </h2>
            <ul className="list list-inline ms-auto filtertab mb-0">
              <li className="list-inline-item">
                <a href="" className="cursor">Featured</a>
              </li>
              <li className="list-inline-item">
                <a href="" className="cursor">Popular</a>
              </li>
              <li className="list-inline-item">
                <a href="" className="cursor">New Added</a>
              </li>
            </ul>
          </div>
          <div className="row pt-3">
            <div className="col-md-3 ps-2">
              <img src={Banner4} className='w-100' />
            </div>
            <div className="col-md-9">
              <Slider {...settings} className="productSlider">
                <div className="item">
                  <Product tag="hot" />
                </div>
                <div className="item">
                  <Product tag="news" />
                </div>
                <div className="item">
                  <Product tag="sale" />
                </div>
                <div className="item">
                  <Product tag="best" />
                </div>
                <div className="item">
                  <Product tag="news" />
                </div>
                <div className="item">
                  <Product tag="hot" />
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>

      <section className='topProductsSection'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col'>
                            <TopProducts title="Top Selling" />
                        </div>

                        <div className='col'>
                            <TopProducts title="Trending Products" />
                        </div>

                        <div className='col'>
                            <TopProducts title="Recently added" />
                        </div>

                        <div className='col'>
                            <TopProducts title="Top Rated" />
                        </div>

                    </div>
                </div>
            </section>

            <section className="newsLetterSection">
              <div className="container-fluid">
                <div className="box"></div>
              </div>
            </section>

    </>
  )
}

export default Home
