import React,{useEffect} from 'react'
import { useParams } from 'react-router'
import useHTTP from '../../../hooks/useHTTP';
import './Detail.css'

const Detail = () => {
    const {id}=useParams()
   
    const { data, loading, error, getData } = useHTTP(`https://northwind.vercel.app/api/products/${id}`);

    useEffect(() => {
      
          
        },[])
    
      
  return (


<div className='details'>

<img
        className="card-img-top card"
        src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).webp"
        alt="Card cap"
      /> <div className='content'><p>{data.id}</p> <p>{data.name}</p> <p>{data.unitPrice}</p></div> 
    </div>
  )
}

export default Detail

