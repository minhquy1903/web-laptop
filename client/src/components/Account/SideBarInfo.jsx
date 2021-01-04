import React from 'react';
import { Link } from 'react-router-dom';
export default function SideBarInfo({
  logoutHandler,
  hasLogout,
  information,
  history,
}) {
  return (
    <div className='account-information-left'>
      <div className='menu-wrapper'>
        <ul className='menu-option'>
          <li className={`item-option ${information && 'active'}`}>
            <Link to='/account' className=''>
              <i className='far fa-user-circle'></i>
              <span>Tài khoản</span>
            </Link>
          </li>
          <li className={`item-option ${history && 'active'}`}>
            <Link to='/history'>
              <i className='fas fa-history'></i>
              <span>Lịch sử</span>
            </Link>
          </li>
        </ul>
        {hasLogout && (
          <button className='logout-btn' onClick={() => logoutHandler()}>
            Đăng xuất
          </button>
        )}
      </div>
    </div>
  );
}
