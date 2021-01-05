import React, { useEffect, useState } from 'react';

import Main from '../Main/Main';
import Filter from './Filter';
import ProductItem from '../ProductItem/ProductItem';
import Pagination from './Pagination';

import './ShowProduct.scss';
import productApi from '../../api/productApi';

const ShowProduct = ({ match, location }) => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(16);
  const [loading, setLoading] = useState(false);
  const [subBrand, setSubBrand] = useState([]);

  useEffect(() => {
    // console.log(match);
    // console.log(location);
    const getInfoProducts = async () => {
      try {
        setLoading(true);
        let query;
        if (location.search !== undefined) query = location.search;

        if (subBrand.length !== 0) {
          for (let i = 0; i < subBrand.length; i++) {
            location.search += `&subBrand=${subBrand[i]}`;
          }
          query = location.search;
        }

        console.log(query);
        const url = match.params.brand + query;

        const response = await productApi.getAllProduct(url);
        setProducts(response);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    getInfoProducts();
    return () => setProducts(null);
  }, [match, location, subBrand]);
  // console.log(subBrand);
  // console.log(location);
  // Get current product page

  if (loading) return <div>loading ...</div>;
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
          <Filter subBrand={subBrand} setSubBrand={setSubBrand} />
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
