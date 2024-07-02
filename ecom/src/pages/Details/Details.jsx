import React from 'react'
import { Link } from 'react-router-dom'

function Details() {
  return (
   <section className="detailPage">
    <div className="breadcrumbWrapper">
        <div className="container-fluid">
            <ul className="breadcrumb">
                <li><Link>Home</Link></li>
                <li><Link>Vegetable & Tubers</Link></li>
                <li>Seeds of Change Organic</li>
            </ul>
        </div>
    </div>
   </section>
  )
}

export default Details