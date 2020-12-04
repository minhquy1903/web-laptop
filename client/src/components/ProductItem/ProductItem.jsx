import React from 'react';

import './ProductItem.scss';

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
});

export default function ProductItem({ product }) {
  return (
    <div className='product-item-container'>
      <div className='wrap-product-item'>
        <div className='top-content'>
          <div className='image-container'>
            <a href='#'>
              <img alt='hinh-laptop' src={product.images[0]} />
            </a>
          </div>
        </div>

        <div className='bottom-content'>
          <h3 className='product-name'>{product.name}</h3>
          <div className='sku-code'>SKU: {product.productID}</div>
          <div className='price'>Price: {product.price}đ</div>
        </div>
      </div>
    </div>
  );
}
