import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
const Header = () => {
  
  return (
    <>
     <div className='header__div'>
        <div> <img className='img' src="https://clipart-library.com/new_gallery/340-3403967_s-logo-png-transparent-cool-s-logo.png" alt="" /></div>
         <div> <ul className='header__ul'>
            <li>
                <Link className='a' style={{color:'white', textDecoration:'none'}} to='/' >Home</Link>
            </li>
            <li>
            <Link  className='a' style={{color:'white', textDecoration:'none'}} to='/admin' >Admin</Link>
            </li>
        </ul></div>
       
        
    </div>

    
    </>
   
  )
}

export default Header