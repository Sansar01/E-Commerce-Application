import React from 'react'
import Logo from '../../assets/images/logo.svg'
import '../Header/Header.css'

function Header() {
  return (
        <header>
               <div className='container-fluid'>
                <div className="row">
                    <div className="col-sm-2">
                        <img src={Logo}/>
                    </div>
                </div>
               </div>
        </header>
  )
}

export default Header