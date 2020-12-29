import React, { useEffect, useState } from 'react';
import queryString from 'query-string';
import Main from '../Main/Main';
import TopContent from './TopContent';
import Evaluation from './Evaluation';
import CommentSection from './CommentSection';
import productApi from '../../api/productApi';

import './ProductDetail.scss';

const ProductDetail = () => {
  const [productInfomation, setProductInfomation] = useState(null);

  useEffect(() => {
    const getDetailInfomationProduct = async (id) => {
      try {
        const res = await productApi.getDetailProduct(id);
        console.log(res);
        setProductInfomation(res);
      } catch (error) {}
    };
    const id = queryString.parse(window.location.search);
    getDetailInfomationProduct(id.option);
  }, []);

  return (
    <Main>
      <div className='container-product-detail'>
        {productInfomation === null ? null : (
          <TopContent productInfomation={productInfomation} />
        )}
        {/* top content */}
        <div className='middle-content'>
          <Evaluation />
          {productInfomation === null ? null : (
            <CommentSection
              ListComment={productInfomation.comments}
              productID={productInfomation._id}
            />
          )}
        </div>
      </div>
    </Main>
  );
};

export default ProductDetail;
