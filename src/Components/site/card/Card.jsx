import React from 'react'
import './Card.css'
import { Link } from 'react-router-dom'

const Card = ({item}) => {
  return (
    <div>
     
<div className="card">

  
  <div className="view overlay">
    <img className="card-img-top" src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).webp"
      alt="Card image cap"/>
    <a href="#!">
      <div className="mask rgba-white-slight"></div>
    </a>
  </div>

 
  <div className="card-body">

   
    <h4 className="card-title">{item.id}</h4>
   
    <p className="card-text">{item.name}</p>
    <p className="card-text">{item.quantityPerUnit}</p>
    <p className="card-text">{item.unitPrice}</p>

    
    <Link to={`/${item.id}`} style={{ background: 'linear-gradient(to right, #87CEFA, #D8BFD8)', 
    display: 'inline-block',
    padding: '10px 20px',
    color: '#fff', 
    textDecoration: 'none', 
    borderRadius: '5px', }} className="btn btn-primary">Detail Page</Link>

  </div>

</div>

    
    </div>
  )
}

export default Card