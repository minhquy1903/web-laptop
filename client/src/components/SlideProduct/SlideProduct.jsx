import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import './SlideProduct.scss';

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';

import ProductSlideItem from './ProductSlideItem';
import productApi from '../../api/productApi';

SwiperCore.use([Navigation]);

const SlideProduct = ({ url, titleListProduct }) => {
  const [infoProducts, setInfoProducts] = useState([]);

  useEffect(() => {
    const getInfoProducts = async () => {
      try {
        let response;
        if (url === 'sale') {
          response = await productApi.getOnSaleProduct();
        } else response = await productApi.getIncomingProduct();

        console.log(response);
        setInfoProducts(response);
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
