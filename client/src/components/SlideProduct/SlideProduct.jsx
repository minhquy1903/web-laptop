import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import axios from 'axios';
import './SlideProduct.scss';

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';

import ProductItem from '../ProductItem/ProductItem';

SwiperCore.use([Navigation]);

const SlideProduct = ({ url, titleListProduct }) => {
  const [infoProducts, setInfoProducts] = useState([]);

  async function getInfoProducts() {
    try {
      const response = await axios.get(url);
      console.log(response);
      setInfoProducts(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getInfoProducts();
    return () => setInfoProducts();
  }, []);

  return (
    <>
      <div className='title-list-product'>
        <span>{titleListProduct}</span>
      </div>
      <div className='list-product-container'>
        <Swiper
          spaceBetween={0}
          slidesPerView={5}
          navigation
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}>
          {infoProducts.map((product, i) => {
            return (
              <SwiperSlide key={i}>
                <ProductItem key={i} product={product} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};

export default SlideProduct;
