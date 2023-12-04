import React from 'react'
import Header from '../../Layout/site/Header/Header'
import { Outlet } from 'react-router'
import Footer from '../../Layout/site/Footer/Footer'

const SiteRoot = () => {
  return (
    <React.Fragment>

     <Header/>
     <Outlet/>
     <Footer/>



    </React.Fragment>
  )
}

export default SiteRoot