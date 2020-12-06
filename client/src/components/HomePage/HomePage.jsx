import React from 'react';

import Main from '../Main/Main';

import Banner from '../Banner/Banner';
import SlideProduct from '../SlideProduct/SlideProduct';

import './HomePage.scss';

const HomePage = () => {
  return (
    <>
      <Main>
        <div className='home-page'>
          <Banner />
          <SlideProduct
            titleListProduct={'Giảm giá sốc'}
            url={'/api/product/laptop/home/on-sale'}
          />
          <SlideProduct
            titleListProduct={'Hàng mới về'}
            url={'/api/product/laptop/home/incoming'}
          />
        </div>
      </Main>
    </>
  );
};

export default HomePage;
