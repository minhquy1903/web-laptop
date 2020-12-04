import React, { useState } from 'react';

import LoginAndRegister from '../LoginAndRegister/LoginAndRegister';
import Dropdown from './Dropdown';
import SearchBox from './SearchBox';
import Modal from '..//Modal/Modal';
import './Header.scss';
import icon from './icons';
const Header = () => {
  const [openLoginForm, setOpenLoginForm] = useState(false);
  const [openDropdownLogin, setOpenDropdownLogin] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);
  console.log(openDropdown);
  return (
    <div className='outer-header-container'>
      <div className='inner-header-container'>
        <header className='header'>
          <div className='left-header'>
            <div className='logo'>
              LOGO
              <img src='logo.png' alt='' />
            </div>

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
            <HeaderItem iconLink={icon.cartIcon} />
            <HeaderItem
              openDropdownLogin={openDropdownLogin}
              setOpenDropdownLogin={setOpenDropdownLogin}
              iconLink={icon.userIcon}>
              <DropdownLogin>
                <DropdownItem
                  name={'Login'}
                  setOpenLoginForm={setOpenLoginForm}
                  closeDropdownAccount={() => setOpenDropdownLogin(false)}
                />
              </DropdownLogin>
            </HeaderItem>
          </div>
        </header>
        <Modal
          openModal={openLoginForm}
          closeModal={() => {
            setOpenLoginForm(false);
          }}>
          <LoginAndRegister />
        </Modal>
      </div>
    </div>
  );
};

export default Header;

const HeaderItem = ({
  openDropdownLogin,
  setOpenDropdownLogin,
  iconLink,
  children,
}) => {
  return (
    <div className='box-icon'>
      <i
        className={iconLink}
        onClick={() => setOpenDropdownLogin(!openDropdownLogin)}></i>
      {openDropdownLogin && children}
    </div>
  );
};

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
const DropdownLogin = ({ children }) => {
  return <div className='dropdown-login'>{children}</div>;
};
