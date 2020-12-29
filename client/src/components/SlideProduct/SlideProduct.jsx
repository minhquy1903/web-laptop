import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import axios from 'axios';
import './SlideProduct.scss';

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';

import ProductSlideItem from './ProductSlideItem';

SwiperCore.use([Navigation]);

const SlideProduct = ({ url, titleListProduct }) => {
  const [infoProducts, setInfoProducts] = useState([]);

  useEffect(() => {
    const getInfoProducts = async () => {
      try {
        const response = await axios.get(url);
        setInfoProducts(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    getInfoProducts();
    return () => setInfoProducts();
  }, [url]);

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
          onSwiper={(swiper) => {}}>
          {infoProducts.map((product, i) => {
            return (
              <SwiperSlide key={i}>
                <ProductSlideItem key={i} product={product} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};

export default SlideProduct;
