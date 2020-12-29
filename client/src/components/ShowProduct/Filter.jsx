import React, { useState, useEffect } from 'react';

export default function Filter() {
  const [category, setCategory] = useState([]);
  const [filterPrice, setFilterPrice] = useState([]);
  useEffect(() => {
    const getCategory = () => {
      fetch('/category.json')
        .then((response) => response.json())
        .then((data) => {
          setCategory(data.brand);
        });
    };

    const getFiterPrice = () => {
      fetch('/filterPrice.json')
        .then((response) => response.json())
        .then((data) => {
          setFilterPrice(data.price);
        });
    };
    getCategory();
    getFiterPrice();
  }, []);
  return (
    <div className='catalogue-wrap'>
      <CatalogueList title={'Thương hiệu'} data={category} />
      <CatalogueList title={'Khoảng giá'} data={filterPrice} />
    </div>
  );
}

const CatalogueList = ({ data, title }) => {
  const [show, setShow] = useState(false);

  return (
    <div className='catalogue'>
      <h3 className='title' onClick={() => setShow(!show)}>
        <span>{title}</span>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          id='i-plus'
          viewBox='0 0 20 20'
          fill='none'>
          <path
            d='M15.833 9.167h-5v-5a.833.833 0 10-1.666 0v5h-5a.833.833 0 100 1.666h5v5a.833.833 0 001.666 0v-5h5a.833.833 0 000-1.666z'
            fill='currentColor'></path>
        </svg>
      </h3>
      <div className={show ? 'catalogue__list show' : 'catalogue__list'}>
        {data.map((item, i) => (
          <CatalogueListItem key={i} item={item} />
        ))}
      </div>
    </div>
  );
};

const CatalogueListItem = ({ item }) => {
  return (
    <div className='catalogue__list-item'>
      <input type='checkbox' />
      <span>{item.name}</span>
    </div>
  );
};
