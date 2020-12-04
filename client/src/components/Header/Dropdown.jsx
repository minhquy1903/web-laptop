import React from 'react';

const Dropdown = ({ children, openDropdown, setOpenDropdown }) => {
  return (
    <div>
      <h2
        onClick={() => setOpenDropdown(!openDropdown)}
        className='title-dropdown-menu'>
        Laptop
      </h2>
      {openDropdown && <div className='dropdown-menu'>{children}</div>}
    </div>
  );
};

export default Dropdown;
