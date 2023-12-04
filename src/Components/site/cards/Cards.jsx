

import React from 'react';
import Card from '../card/Card';
import './Cards.css'


const Cards = ({ data, loading, error }) => {
    return (
        <div className='umumi'>
           <div className='maincard'>
        {loading ? (
          <div className='spin'>
            <div className='spinner-border' role='status'>
              <span className='visually-hidden'>Loading...</span>
            </div>
          </div>
        ) : (
            data.map((item, index) => (
               <Card key={index} item={item} />             
             ))
        )}
      </div>
      
    </div>
            
        
    );
}

export default Cards;

