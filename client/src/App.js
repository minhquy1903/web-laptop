import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomePage from './components/HomePage/HomePage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Cart from './components/Cart/Cart';

import './App.css';

const App = () => {
  return (
    <div className='container'>
      <Router>
        <Header />
        <Switch>
          <Route path='/' component={HomePage} exact />
          <Route path='/cart' component={Cart} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
