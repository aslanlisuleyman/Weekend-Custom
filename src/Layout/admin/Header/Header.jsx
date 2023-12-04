import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <div  className='header__divv'>
         <img className='imgg' src="https://clipart-library.com/new_gallery/340-3403967_s-logo-png-transparent-cool-s-logo.png" alt="" />
        <ul className='header__ull'>
            <li>
                <Link className='a' style={{color:'white', textDecoration:'none'}} to=''>Product</Link>
            </li>
            <li>
                <Link className='a' style={{color:'white', textDecoration:'none'}} to='AddPage'>AddPage</Link>
            </li>
            <li>
          <Link  style={{color:'white', textDecoration:'none'}} to='EditProduct'>EditProduct</Link>
        </li>
            <li>
                <Link className='a' style={{color:'white', textDecoration:'none'}} to='/'>Home</Link>
            </li>
        </ul>
    </div>
  )
}

export default Header