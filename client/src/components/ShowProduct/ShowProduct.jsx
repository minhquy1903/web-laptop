import React, { useEffect, useState } from 'react';

import Main from '../Main/Main';
import Filter from './Filter';
import ProductItem from '../ProductItem/ProductItem';
import Pagination from './Pagination';

import './ShowProduct.scss';
import productApi from '../../api/productApi';

const ShowProduct = ({ match }) => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(16);
  const [loading, setLoading] = useState(false);
  console.log(match.params.brand);
  useEffect(() => {
    const getInfoProducts = async () => {
      try {
        setLoading(true);
        // if(match.params.brand !== 'allProduct')
        const response = await productApi.getAllProductOfBrand(
          match.params.brand,
        );
        console.log(response);
        setProducts(response);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    getInfoProducts();
    return () => setProducts(null);
  }, [match.params.brand]);

  // Get current product page
  if (loading) return null;
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProuct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProuct,
    indexOfLastProduct,
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <Main>
      <div className='show-product'>
        <div className='col-left'>
          <Filter />
        </div>
        <div className='col-right'>
          <div className='list-product'>
            {currentProducts.map((product, i) => {
              return (
                <ProductItem key={i} product={product} loading={loading} />
              );
            })}
          </div>
          <Pagination
            productsPerPage={productsPerPage}
            totalProducts={products.length}
            paginate={paginate}
          />
        </div>
      </div>
    </Main>
  );
};

export default ShowProduct;
