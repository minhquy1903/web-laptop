import React, { useState, useEffect } from 'react';
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
  const [login, setLogin] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem('infoUser'); // Xu li localStorage
    console.log(user);
    if (user !== null && user !== undefined) setLogin(true);

    return () => setLogin(false);
  }, []);

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
              {login ? (
                <Link to='/account'>
                  <i className={icon.userIcon} />
                </Link>
              ) : (
                <i
                  className={icon.userIcon}
                  onClick={() => setOpenLoginForm(!openLoginForm)}
                />
              )}
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
            login={login}
            setLogin={setLogin}
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
