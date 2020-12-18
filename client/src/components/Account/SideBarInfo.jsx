import React from 'react';
import { Link } from 'react-router-dom';
export default function SideBarInfo({
  logoutHandler,
  hasLogout,
  infomation,
  history,
}) {
  console.log(infomation);

  return (
    <div className='account-infomation-left'>
      <div className='menu-wrapper'>
        <ul className='menu-option'>
          <li className={`item-option ${infomation && 'active'}`}>
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
