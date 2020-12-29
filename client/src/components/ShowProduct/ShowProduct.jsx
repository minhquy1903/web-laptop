import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Main from '../Main/Main';
import Filter from './Filter';
import ProductItem from '../ProductItem/ProductItem';
import Pagination from './Pagination';

import './ShowProduct.scss';

const ShowProduct = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(16);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getInfoProducts = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`/api/product/laptop/HP`);

        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    getInfoProducts();
    return () => setProducts(null);
  }, []);

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
