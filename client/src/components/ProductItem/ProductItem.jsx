import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { CartContext } from '../Context/Context';

import './ProductItem.scss';

export default function ProductItem({ product, loading }) {
  const [cart, setCart] = useContext(CartContext);
  if (loading) return <h2>Loadding ...</h2>;
  const addToCart = () => {
    setCart([...cart, product]);
    localStorage.setItem('cart', JSON.stringify([...cart, product]));
  };
  return (
    <div className='product-item-container'>
      <div className='wrap-product-item'>
        <div className='top-content'>
          <div className='image-container'>
            <Link to={`/${product.name}?option=${product._id}`}>
              <img alt='hinh-laptop' src={product.images[0]} />
            </Link>
          </div>
        </div>

        <div className='bottom-content'>
          <h3 className='product-name'>{product.name}</h3>
          <div className='sku-code'>SKU: {product.sku}</div>
          <div className='price'>Price: {product.price}đ</div>
          <button className='add-to-cart-btn' onClick={() => addToCart()}>
            Thêm vào giỏ hàng
          </button>
        </div>
      </div>
    </div>
  );
}
