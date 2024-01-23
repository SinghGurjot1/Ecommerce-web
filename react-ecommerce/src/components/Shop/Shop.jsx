import React from 'react';
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./shop.css";

const Shop = () => {
  // Fetch and display products
  return (
    <div className='shop'>
      <div className='shopTitle'>
        <h1>Online Shop</h1>
      </div>
      <div className='products'>
        {PRODUCTS.map((product) => (
          <Product key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
