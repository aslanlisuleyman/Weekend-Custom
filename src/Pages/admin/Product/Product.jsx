

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import Table from '../../../Components/admin/table/Table';

const Product = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    axios.get('https://northwind.vercel.app/api/products').then((res) => {
      setData(res.data);
      setFilteredData(res.data);
    });
  }, []);

  const searchData = (searchValue) => {
    setFilteredData([
      ...data.filter((item) =>
        item.name.toLowerCase().trim().includes(searchValue.trim().toLowerCase())
      ),
    ]);
  };

  const handleClick = (e) => {
    e.preventDefault();
    let sortedData = filteredData.sort((a, b) => a.unitPrice - b.unitPrice);
    console.log(sortedData);
    setFilteredData([...sortedData]);
  };

  return (
    <div className='div' style={{ backgroundColor: 'white' }}>
      <div style={{ marginRight: '300px', marginBottom: '20px' }}>
        {' '}
        <input
          type='text'
          placeholder='Search...'
          onChange={(e) => {
            searchData(e.target.value);
          }}
        />
        <button
          style={{ marginBottom: '5px' }}
          className='btn btn-primary'
          onClick={(e) => handleClick(e)}
        >
          Sort By Price
        </button>
      </div>
      <Toaster />
      <table className='table table-hover table-white'>
        <thead>
          <tr>
            <th scope='col'>#</th>
            <th scope='col'>Name</th>
            <th scope='col'>Unit Price</th>
            <th scope='col'>Delete</th>
            <th scope='col'>Edit</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item, index) => (
            <Table key={index} item={item} setFilteredData={setFilteredData} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Product;
