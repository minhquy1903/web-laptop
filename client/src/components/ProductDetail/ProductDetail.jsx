import React, { useEffect, useState } from 'react';
import queryString from 'query-string';
import Main from '../Main/Main';
import TopContent from './TopContent';
import Evaluation from './Evaluation';
import CommentSection from './CommentSection';
import productApi from '../../api/productApi';

import './ProductDetail.scss';

const ProductDetail = () => {
  const [productInformation, setProductInformation] = useState(null);

  useEffect(() => {
    const getDetailInformationProduct = async (id) => {
      try {
        const res = await productApi.getDetailProduct(id);
        // console.log(res);
        setProductInformation(res);
      } catch (error) {}
    };
    const id = queryString.parse(window.location.search);
    getDetailInformationProduct(id.option);
  }, []);

  return (
    <Main>
      <div className='container-product-detail'>
        {productInformation === null ? null : (
          <TopContent productInformation={productInformation} />
        )}
        {/* top content */}
        <div className='middle-content'>
          <Evaluation />
          {productInformation === null ? null : (
            <CommentSection
              ListComment={productInformation.comments}
              productID={productInformation._id}
            />
          )}
        </div>
      </div>
    </Main>
  );
};

export default ProductDetail;
