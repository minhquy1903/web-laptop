import React, { useState } from 'react';

export default function OrderLeftCol() {
  const [form, setForm] = useState({ atHome: true, atStore: false });
  return (
    <div className='order__col__left'>
      <div className='form'>
        <div className='sex'>
          <label className='check__box'>
            Anh
            <input type='radio' defaultChecked='checked' name='sex' />
            <span className='check__border' />
          </label>
          <label className='check__box'>
            Chị
            <input type='radio' name='sex' />
            <span className='check__border' />
          </label>
        </div>
        <div className='row__info'>
          <div className='col__info__6  warning'>
            <div className='input__wrap'>
              <input type='text' placeholder='Họ và tên' className />
            </div>
          </div>
          <div className='col__info__6  warning'>
            <div className='input__wrap'>
              <input type='text' placeholder='Số điện thoại' className />
            </div>
            <div className='text__war'>Bạn cần nhập số điện thoại</div>
          </div>
          <div className='col__info__12'>
            <div className='input__wrap'>
              <input type='text' placeholder='Email' className />
            </div>
          </div>
        </div>
        <div className='row__info'>
          <div className='col__info__12'>
            <div className='input__wrap'>
              <input
                type='text'
                placeholder='Yêu cầu khác(không bắt buộc)'
                className
              />
            </div>
          </div>
        </div>
        <div className='title__inline'>Bạn muốn</div>
        <div className='place__taken'>
          <label
            className='check__box'
            defaultChecked='checked'
            onClick={() => {
              setForm({ atHome: true, atStore: false });
            }}>
            Nhận tại địa chỉ
            <input type='radio' name='asd' />
            <span className='check__border' />
          </label>
          <label
            className='check__box'
            onClick={() => {
              setForm({ atHome: false, atStore: true });
            }}>
            Nhận tại cửa hàng
            <input type='radio' name='asd' />
            <span className='check__border' />
          </label>
        </div>

        {form.atHome && (
          <div className='container__full__adress__checked'>
            <div className='row__info xxx'>
              <div className='col__info__6  warning'>
                <div className='input__wrap'>
                  <input type='text' placeholder='Tỉnh/ Thành phố' className />
                </div>
                <div className='text__war'>Bạn cần nhập thông tin</div>
              </div>
              <div className='col__info__6  warning'>
                <div className='input__wrap'>
                  <input type='text' placeholder='Quận/ Huyện' className />
                </div>
                <div className='text__war'>Bạn cần nhập thông tin</div>
              </div>
              <div className='col__info__12'>
                <div className='input__wrap'>
                  <input
                    type='text'
                    placeholder='Số nhà,tên đường, phường xã'
                    className
                  />
                </div>
                <div className='text__war'>Bạn cần nhập thông tin</div>
              </div>
            </div>
            <div className='check__box__request'>
              <label className='container__checkbox'>
                Yêu cầu nhân viên hỗ trợ kỹ thuật đi giao hàng
                <input type='checkbox' />
                <span className='checkmark' />
              </label>
              <label className='container__checkbox'>
                Cà thẻ khi nhận hàng
                <input type='checkbox' />
                <span className='checkmark' />
              </label>
              <label className='container__checkbox'>
                Xuất hóa đơn công ty
                <input type='checkbox' />
                <span className='checkmark' />
              </label>
            </div>
          </div>
        )}

        {form.atStore && (
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
        )}
      </div>
      {/* FORM */}
    </div>
  );
}
