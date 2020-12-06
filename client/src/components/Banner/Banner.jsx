import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Autoplay } from 'swiper';

import 'swiper/swiper.scss';
import './Banner.scss';

SwiperCore.use([Navigation, Autoplay]);

export default function Banner() {
  return (
    <div className='banner'>
      <div className='left-banner'>
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          onSlideChange={() => console.log('slide change')}
          autoplay={(true, { delay: 3000 })}
          onSwiper={(swiper) => console.log(swiper)}>
          <SwiperSlide>
            <img
              src='https://admin.thinkpro.vn//backend/uploads/banner/2020/11/24/2x-thinkpro-black-friday-sale-light.jpg'
              alt=''
              className='img'
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src='https://admin.thinkpro.vn//backend/uploads/banner/2020/11/9/2x-thinkpro-msi-banner-web-2610.jpg'
              alt=''
              className='img'
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src='https://admin.thinkpro.vn//backend/uploads/banner/2020/11/25/2x-service-banner2.jpg'
              alt=''
              className='img'
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src='https://admin.thinkpro.vn//backend/uploads/banner/2020/11/19/sieu-bao-khuyen-mai-thinkpad-x1-carbon.jpg'
              alt=''
              className='img'
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className='right-banner'>
        <div className='banner-title active'>
          Macbook Pro M1 và iPad Pro với Mini-LED sẽ sớm ra mắt vào đầu năm 2021
        </div>
        <div className='banner-title'>
          Thêm những hình ảnh về Surface Laptop 4 và Surface Pro 8 bị tung ra
          ngoài
        </div>
        <div className='banner-title'>
          Đánh giá chi tiết HP Pavilion Gaming 15 AMD: Siêu sao phân khúc giá rẻ
        </div>
      </div>
    </div>
  );
}
// {

// <img
//   src='https://admin.thinkpro.vn//backend/uploads/banner/2020/11/24/2x-thinkpro-black-friday-sale-light.jpg'
//   className='img'
//   alt=''
// />
// <img
//   src='https://admin.thinkpro.vn//backend/uploads/banner/2020/11/24/2x-thinkpro-black-friday-sale-light.jpg'
//   className='img'
//   alt=''
// />
// }
