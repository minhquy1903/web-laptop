import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Dropdown = () => {
  return (
    <div className='menu-item'>
      <h2 className='title-dropdown-menu'>Laptop</h2>
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
      <h3 className='brand-name'>
        <Link to={`/laptop/${data.name}`} replace>
          {data.name}
        </Link>
      </h3>
      <ul>
        {data.subBrand.map((subBrand, i) => {
          return (
            <li key={i} className='sub-brand'>
              <Link to={`/laptop/${data.name}?subBrand=${subBrand.name}`}>
                {subBrand.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
