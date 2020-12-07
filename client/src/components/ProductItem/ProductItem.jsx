import React from 'react';
import { Link } from 'react-router-dom';
import './ProductItem.scss';

export default function ProductItem({ product }) {
  return (
    <div className='product-item-container'>
      <div className='wrap-product-item'>
        <div className='top-content'>
          <div className='image-container'>
            <Link to='#'>
              <img alt='hinh-laptop' src={product.images[0]} />
            </Link>
          </div>
        </div>

        <div className='bottom-content'>
          <h3 className='product-name'>{product.name}</h3>
          <div className='sku-code'>SKU: {product.productID}</div>
          <div className='price'>Price: {product.price}đ</div>
          <button>Thêm vào giỏ hàng</button>
        </div>
      </div>
    </div>
  );
}
