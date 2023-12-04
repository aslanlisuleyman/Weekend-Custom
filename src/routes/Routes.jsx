import React from 'react'
import SiteRoot from '../Pages/site/SiteRoot'
import Home from '../Pages/site/Home/Home'
import Detail from '../Pages/site/Detail/Detail'
import AdminRoot from '../Pages/admin/AdminRoot'
import Product from '../Pages/admin/Product/Product'
import AddPage from '../Pages/admin/AddPage/AddPage'
import EditProduct from '../Pages/admin/EditProduct/EditProduct'


const Routes = [{
    path:'/',
    element:<SiteRoot/>,
    children:[{
        path:'',
        element:<Home/>
    },
{
    path:'/:id',
    element:<Detail/>
},{
    path:'admin',
    element:<AdminRoot/>
}]
},{

    path:'/admin',
    element:<AdminRoot/>,
    children:[{
        path:'',
        element:<Product/>
    },{
        path:'AddPage',
        element:<AddPage/>
    },
    {
        path: 'EditProduct',
        element: <EditProduct />
    },{
        path:'',
        element:<SiteRoot/>
    }]


}]
  


export default Routes