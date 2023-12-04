

import React, { useEffect, useState } from 'react';
import useHTTP from '../../../hooks/useHTTP';
import Cards from '../../../Components/site/cards/Cards';
import Pagenation from '../Pagenation';
import './Home.css';

const Home = () => {
  const { data, loading, error, getData } = useHTTP('https://northwind.vercel.app/api/products');
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(8);
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('');

  const lastItemIndex = currentPage * postsPerPage;
  const firstItemIndex = lastItemIndex - postsPerPage;

  const filteredData = data.filter(
    (item) => item.name && item.name.toLowerCase().includes(search.toLowerCase())
  );

  if (sort === 'Low') {
    filteredData.sort((a, b) => a.unitPrice - b.unitPrice);
  } else if (sort === 'High') {
    filteredData.sort((a, b) => b.unitPrice - a.unitPrice);
  }

  const paginatedData = filteredData.slice(firstItemIndex, lastItemIndex);

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className='home'>
      <input
        type="text"
        placeholder="Axtar..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <select className='sort'
        onChange={(e) => {
          setSort(e.target.value);
        }}
        
      >
        <option value="">Çeşidlə</option>
        <option value="Low">Azdan Çoxa</option>
        <option value="High">Çoxdan Aza</option>
      </select>
      <Cards data={paginatedData} loading={loading} error={error} />
      <Pagenation
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        data={filteredData}
        postsPerPage={postsPerPage}
      />
      <select
        onChange={(e) => {
           
          setPostsPerPage(e.target.value);
          setCurrentPage(1);
        }}
        name="postsPerPage"
        id=""
      >
        <option value="8">8</option>
        <option value="10">10</option>
        <option value="12">12</option>
      </select>

      
    </div>
  );
};

export default Home;
