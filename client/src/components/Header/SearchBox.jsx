import React from 'react';

const SearchBox = () => {
  return (
    <div className='search-box'>
      <input type='text' placeholder='Tìm kiếm trên Sativa' />
      <button>
        <i className='fas fa-search search-btn'></i>
      </button>
    </div>
  );
};

export default SearchBox;
