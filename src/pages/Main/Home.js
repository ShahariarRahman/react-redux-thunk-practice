import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../../components/ProductCard";
import { toggleBrand, toggleStock } from "../../redux/actions/filterActions";
import fetchProductData from "../../redux/thunk/products/fetchProducts";

const Home = () => {
  const { product, filter } = useSelector(state => state);
  const { brands, stock } = filter.filters;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductData());
  }, [dispatch]);

  const activeClass = "text-white  bg-indigo-500 border-white";

  return (
    <div className='max-w-7xl gap-14 mx-auto my-10'>
      <div className='mb-10 flex justify-end gap-5'>
        <button onClick={() => dispatch(toggleStock())} className={`border px-3 py-2 rounded-full font-semibold ${stock ? activeClass : null} `}>
          In Stock
        </button>
        <button onClick={() => dispatch(toggleBrand('amd'))} className={`border px-3 py-2 rounded-full font-semibold ${brands.includes("amd") ? activeClass : null}`}>
          AMD
        </button>
        <button onClick={() => dispatch(toggleBrand('intel'))} className={`border px-3 py-2 rounded-full font-semibold ${brands.includes('intel') ? activeClass : null}`}>
          Intel
        </button>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14'>
        {product.products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
