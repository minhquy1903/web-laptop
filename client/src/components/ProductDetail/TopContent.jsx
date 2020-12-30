import React from 'react';

const TopContent = ({ productInfomation }) => {
  return (
    <div className='product-detail'>
      <div className='left-content'>
        <div className='container-image'>
          <img src={productInfomation.images} alt='hinh-laptop' />
        </div>
      </div>
      <div className='right-content'>
        <div className='title-product'>
          <h1 className='product-name pd-15'>{productInfomation.name}</h1>
          <div className='code pd-15'>
            <span>SKU: {productInfomation.sku}</span>
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
            <p>Bình luận</p>
          </div>
        </div>
        <div className='all-detail'>
          <div className='description'>
            <div className='brand'>Thương hiệu: Dell</div>
            <ul>
              <li>
                <strong>Vi xử lý: </strong>
                {productInfomation.detail.processor}
              </li>
              <li>
                <strong>Màn hình: </strong>
                {productInfomation.detail.display}
              </li>
              <li>
                <strong>RAM: </strong>
                {productInfomation.detail.memory}
              </li>
              <li>
                <strong>Card đồ họa:</strong>
                {productInfomation.detail.graphics}
              </li>
              <li>
                <strong>Lưu trữ: </strong>
                {productInfomation.detail.hardDrive}
              </li>
              <li>
                <strong>Pin: </strong>
                {productInfomation.detail.battery}
              </li>
              <li>
                <strong>Kết nối chính: </strong>
                {productInfomation.detail.ports}
              </li>
              <li>
                <strong>Cân nặng: </strong>
                {productInfomation.detail.weight}
              </li>
              <li>
                <strong>Hệ điều hành: </strong>
                {productInfomation.detail.os}
              </li>
            </ul>
            <div className='color'>
              <span>
                <strong>Màu sắc: </strong>
                {productInfomation.detail.color}
              </span>
              <img src={productInfomation.images} alt='hinh-laptop' />
            </div>
          </div>
          <div className='warranty'>
            <h3>Bảo hành</h3>
            <ul>
              <li>{productInfomation.warranty}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopContent;
