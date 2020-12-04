import React from 'react';

const SearchBox = () => {
  return (
    <div className='search-box'>
      <input type='text' placeholder='Search...' />
      <i className='fas fa-search search-btn'></i>
    </div>
  );
};

export default SearchBox;
