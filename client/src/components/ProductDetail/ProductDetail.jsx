import React, { useEffect, useState } from 'react';
import axios from 'axios';
import queryString from 'query-string';

import Main from '../Main/Main';
import TopContent from './TopContent';
import Evaluation from './Evaluation';
import CommentSection from './CommentSection';
import './ProductDetail.scss';

const ProductDetail = () => {
  const [productInfomation, setProductInfomation] = useState(null);

  const getDetailInfomationProduct = async (id) => {
    try {
      const res = await axios.get(`/api/product/laptop/detail/${id}`);
      setProductInfomation(res.data);
      console.log(res.data);
    } catch (error) {}
  };

  useEffect(() => {
    const id = queryString.parse(window.location.search);
    console.log(id.option);
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
              ListComment={productInfomation.reviews}
              productID={productInfomation.productID}
            />
          )}
        </div>
      </div>
    </Main>
  );
};

export default ProductDetail;
