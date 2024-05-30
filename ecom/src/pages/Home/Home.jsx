import React from 'react'
import HomeSlider from './Slider/HomeSlider'
import CatSlider from '../../components/catSlider/CatSlider'
import Banner from '../../components/Banner/Banner'
import '../Home/Home.css'

function Home() {
  return (
    <>
      <HomeSlider />
      <CatSlider />
      <Banner/>

      <section className="homeProduct">
        <div className="container-fluid">
          <h2 className="hd">
            Popular Products
          </h2>
        </div>
      </section>
    </>
  )
}

export default Home
