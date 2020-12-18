import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomePage from './components/HomePage/HomePage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Cart from './components/Cart/Cart';
import Account from './components/Account/Account';
import History from './components/History/History';
import Order from './components/Order/Order';
import ProductDetail from './components/ProductDetail/ProductDetail';
import { CartProvider } from './components/Context/Context';
import './App.css';

const App = () => {
  return (
    <div className='container'>
      <CartProvider>
        <Router>
          <Header />
          <Switch>
            <Route path='/' component={HomePage} exact />
            <Route path='/cart' component={Cart} />
            <Route path='/account' component={Account} />
            <Route path='/history' component={History} />
            <Route path='/order' component={Order} />
            <Route path='/:productid' component={ProductDetail} />
          </Switch>
          <Footer />
        </Router>
      </CartProvider>
    </div>
  );
};

export default App;
