import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Dropdown = () => {
  return (
    <div className='menu-item'>
      <Link to={'/laptop/all'}>
        <h2 className='title-dropdown-menu'>Laptop</h2>
      </Link>
      <DropDownMenu />
    </div>
  );
};

export default Dropdown;

const DropDownMenu = () => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    const getCategory = () => {
      fetch('/category.json')
        .then((response) => response.json())
        .then((data) => {
          setCategory(data.brand);
        });
    };
    getCategory();
  }, []);
  return (
    <div className='dropdown-menu'>
      {category.map((data, i) => {
        return <DropdownItem key={i} data={data} />;
      })}
    </div>
  );
};

const DropdownItem = ({ data }) => {
  return (
    <div className='dropdown-item'>
      <Link to={`/laptop/${data.name}`} replace>
        <h3 className='brand-name'>{data.name}</h3>
      </Link>
      <ul>
        {data.subBrand.map((subBrand, i) => {
          return (
            <Link key={i} to={`/laptop/${data.name}?subBrand=${subBrand.name}`}>
              <li key={i} className='sub-brand'>
                {subBrand.name}
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};
