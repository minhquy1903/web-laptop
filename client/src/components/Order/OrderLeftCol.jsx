import React, { useEffect, useRef } from 'react';

export default function OrderLeftCol({ setUserInformation, result }) {
  const name = useRef(null);
  const phone = useRef(null);
  const email = useRef(null);
  const address = useRef(null);
  useEffect(() => {
    let userInformation = JSON.parse(localStorage.getItem('userInformation'));

    if (userInformation === null || userInformation.name === undefined) {
      setUserInformation({
        name: name.current.value,
        phone: phone.current.value,
        address: address.current.value,
      });
      name.current.value = "";
      phone.current.value = "";
      email.current.value = "";
      address.current.value = "";
      return;

    }
    setUserInformation(userInformation);
    name.current.value = userInformation.name;
    phone.current.value = userInformation.phone;
    email.current.value = userInformation.email;
    address.current.value = userInformation.address;
  }, [result]);
  return (
    <div className='order__col__left'>
      <div className='form'>
        <div className='row__info'>
          <div className='col__info__6  warning'>
            <div className='input__wrap'>
              <input type='text' placeholder='Họ và tên' ref={name} />
            </div>
          </div>
          <div className='col__info__6  warning'>
            <div className='input__wrap'>
              <input type='text' placeholder='Số điện thoại' ref={phone} />
            </div>
          </div>
          <div className='col__info__12'>
            <div className='input__wrap'>
              <input type='text' placeholder='Địa chỉ' ref={email} />
            </div>
          </div>
        </div>
        <div className='row__info'>
          <div className='col__info__12'>
            <div className='input__wrap'>
              <input
                type='text'
                placeholder='Yêu cầu khác(không bắt buộc)'
                ref={address}
              />
            </div>
          </div>
        </div>

        <div className='container__address__select'>
          <div className>
            <label className='check__box address__radio'>
              Số 105 ngõ 562 đường Láng, P. Láng Hạ, Q. Tây Ninh, Hà Nam
              <input type='radio' name='address' />
              <span className='check__border' />
            </label>
            <label className='check__box address__radio'>
              Số 105 ngõ 562 đường Minh Nhật Kool
              <input type='radio' name='address' />
              <span className='check__border' />
            </label>
            <label className='check__box address__radio'>
              Số 105 ngõ 562 đường Nguyễn Thị Minh Khai, Q.1
              <input type='radio' name='address' />
              <span className='check__border' />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
