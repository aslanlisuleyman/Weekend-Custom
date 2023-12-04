import React from 'react'
import Header from '../../Layout/admin/Header/Header'
import { Outlet } from 'react-router'
import Footer from '../../Layout/admin/Footer/Footer'

const AdminRoot = () => {
  return (
    <React.Fragment>
     <Header/>
     <Outlet/>
     <Footer/>



    </React.Fragment>
  )
}

export default AdminRoot