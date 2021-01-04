import React, { useState, useEffect } from 'react';

export default function Filter({ brand, subBrand, setSubBrand }) {
  const [category, setCategory] = useState([]);
  const [filterPrice, setFilterPrice] = useState([]);
  const handleFilter = (e) => {
    if (e.target.checked === true) {
      setSubBrand([...subBrand, e.target.name]);
    } else {
      setSubBrand(subBrand.filter((element) => element !== e.target.name));
    }
  };

  useEffect(() => {
    const getCategory = () => {
      fetch('/category.json')
        .then((response) => response.json())
        .then((data) => {
          if (brand === 'all') setCategory(data.brand);
          else {
            const brandArr = data.brand;
            const { subBrand } = brandArr.find(
              (element) => element.name === brand,
            );
            setCategory(subBrand);
          }
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
  }, [brand]);
  return (
    <div className='catalogue-wrap'>
      <CatalogueList
        title={'Thương hiệu'}
        data={category}
        handleFilter={handleFilter}
      />
      <CatalogueList title={'Khoảng giá'} data={filterPrice} />
    </div>
  );
}

const CatalogueList = ({ data, title, handleFilter }) => {
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
          <CatalogueListItem key={i} item={item} handleFilter={handleFilter} />
        ))}
      </div>
    </div>
  );
};

const CatalogueListItem = ({ item, handleFilter }) => {
  return (
    <div className='catalogue__list-item'>
      <input
        type='checkbox'
        name={item.name}
        onChange={(e) => handleFilter(e)}
      />
      <span>{item.name}</span>
    </div>
  );
};
