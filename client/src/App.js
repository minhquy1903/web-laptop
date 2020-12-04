import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import Banner from './components/Banner/Banner';
import SlideProduct from './components/SlideProduct/SlideProduct';

import './App.css';

const App = () => {
  return (
    <div className='container'>
      <Header />
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
      <Footer />
    </div>
  );
};

export default App;
