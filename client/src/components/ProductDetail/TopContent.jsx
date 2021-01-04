import React, { useContext } from 'react';

import { formatMoney } from '../../service/service';
import { CartContext } from '../Context/Context';

const TopContent = ({ productInformation }) => {
  const [cart, setCart] = useContext(CartContext);

  const addToCart = () => {
    let product = {
      name: productInformation.name,
      brand: productInformation.brand,
      price: productInformation.price,
      _id: productInformation._id,
      sku: productInformation.sku,
      images: productInformation.images,
      discount: productInformation.discount,
      status: productInformation.status,
    };

    setCart([...cart, product]);
    localStorage.setItem('cart', JSON.stringify([...cart, product]));
  };

  return (
    <div className='product-detail'>
      <div className='left-content'>
        <div className='container-image'>
          <img src={productInformation.images} alt='hinh-laptop' />
        </div>
      </div>
      <div className='right-content'>
        <div className='title-product'>
          <h1 className='product-name pd-15'>{productInformation.name}</h1>
          <div className='code pd-15'>
            <span>SKU: {productInformation.sku}</span>
          </div>
          <div className='vote'>
            <ul>
              <li>
                <i className='far fa-star' />
              </li>
              <li>
                <i className='far fa-star' />
              </li>
              <li>
                <i className='far fa-star' />
              </li>
              <li>
                <i className='far fa-star' />
              </li>
              <li>
                <i className='far fa-star' />
              </li>
            </ul>
            <p>Đánh giá</p>
            <p>{productInformation.comments.length} Bình luận</p>
          </div>
        </div>
        <div className='all-detail'>
          <div className='description'>
            <div className='brand'>Thương hiệu: Dell</div>
            <ul>
              <li>
                <strong>Vi xử lý: </strong>
                {productInformation.detail.processor}
              </li>
              <li>
                <strong>Màn hình: </strong>
                {productInformation.detail.display}
              </li>
              <li>
                <strong>RAM: </strong>
                {productInformation.detail.memory}
              </li>
              <li>
                <strong>Card đồ họa: </strong>
                {productInformation.detail.graphics}
              </li>
              <li>
                <strong>Lưu trữ: </strong>
                {productInformation.detail.hardDrive}
              </li>
              <li>
                <strong>Pin: </strong>
                {productInformation.detail.battery}
              </li>
              <li>
                <strong>Kết nối chính: </strong>
                {productInformation.detail.ports}
              </li>
              <li>
                <strong>Cân nặng: </strong>
                {productInformation.detail.weight}
              </li>
              <li>
                <strong>Hệ điều hành: </strong>
                {productInformation.detail.os}
              </li>
            </ul>
            <div className='color'>
              <span>
                <strong>Màu sắc: </strong>
                {productInformation.detail.color}
              </span>
              <img src={productInformation.images} alt='hinh-laptop' />
            </div>
          </div>
          <div className='warranty'>
            <h3>Bảo hành</h3>
            <ul>
              <li>{productInformation.warranty}</li>
            </ul>
          </div>
        </div>
        <div className='price-wrapper'>
          <div className='price'>
            {' '}
            {formatMoney(productInformation.price)} đ
          </div>

          <button className='btn-add-cart' onClick={() => addToCart()}>
            Thêm vào giỏ hàng
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopContent;
