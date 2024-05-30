import React from 'react'
import banner1 from '../../assets/images/banner1.jpg'
import banner2 from '../../assets/images/banner2.jpg'
import banner3 from '../../assets/images/banner3.jpg'
import banner4 from '../../assets/images/banner4.jpg'
import '../Banner/Banner.css'

function Banner() {
  return (
    <div className="bannersection">
        <div className="container-fluid">
            <div className="row">
                <div className="col">
                     <div className="box">
                        <img src={banner1} className='w-100 transition' />
                     </div>
                </div>
                <div className="col">
                     <div className="box">
                        <img src={banner2} className='w-100 transition' />
                     </div>
                </div>
                <div className="col">
                     <div className="box">
                        <img src={banner3} className='w-100 transition' />
                     </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner