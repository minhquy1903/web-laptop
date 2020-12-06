import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import LoginAndRegister from '../LoginAndRegister/LoginAndRegister';
import Dropdown from './Dropdown';
import SearchBox from './SearchBox';
import Modal from '..//Modal/Modal';
import './Header.scss';
import icon from './icons';
const Header = () => {
  const [openLoginForm, setOpenLoginForm] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);
  console.log(openDropdown);
  return (
    <div className='outer-header-container'>
      <div className='inner-header-container'>
        <header className='header'>
          <div className='left-header'>
            <Link to='/'>
              <div className='logo'>
                LOGO
                <img src='logo.png' alt='' />
              </div>
            </Link>

            <Dropdown
              openDropdown={openDropdown}
              setOpenDropdown={setOpenDropdown}>
              <DropdownItem name={'Dell'} />
              <DropdownItem name={'Lenovo'} />
              <DropdownItem name={'Razer'} />
              <DropdownItem name={'HP'} />
              <DropdownItem name={'Macbook'} />
              <DropdownItem name={'Asus'} />
              <DropdownItem name={'Msi'} />
            </Dropdown>
            <SearchBox />
          </div>
          <div className='right-header'>
            <div className='box-icon'>
              <Link to='/cart'>
                <i className={icon.cartIcon} i />
              </Link>
            </div>
            <div className='box-icon'>
              <i
                className={icon.userIcon}
                onClick={() => setOpenLoginForm(!openLoginForm)}></i>
            </div>
          </div>
        </header>
        <Modal
          openModal={openLoginForm}
          closeModal={() => {
            setOpenLoginForm(false);
          }}>
          <LoginAndRegister
            closeModal={() => {
              setOpenLoginForm(false);
            }}
          />
        </Modal>
      </div>
    </div>
  );
};

export default Header;

const DropdownItem = ({ name, setOpenLoginForm, closeDropdownAccount }) => {
  return (
    <div
      className='dropdown-item'
      onClick={() => {
        setOpenLoginForm(true);
        closeDropdownAccount();
      }}>
      {name}
    </div>
  );
};
