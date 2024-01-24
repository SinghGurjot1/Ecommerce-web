
import React, { useEffect, useState, useContext } from 'react';
import { ShopContext } from "../../context/shop-context";
import "./shop.css";

const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemAmount = cartItems[id];

  return (
    <div key={id} className="product">
      <div className="product-content">
        <img alt={productName} src={productImage} />
        <div className="description">
          <p><b>{productName}</b></p>
          <p>${price}</p>
        </div>
      </div>
      <div className="product-actions">
        <button className="addToCartBtn" onClick={() => addToCart(id)}>
          Add to Cart {cartItemAmount > 0 && <> ({cartItemAmount}) </>}
        </button>
      </div>
    </div>
  );
};

const YourComponent = () => {
  const [products, setProducts] = useState([]);
  const { /* other context values if needed */ } = useContext(ShopContext);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://twitter-clone-d2717-default-rtdb.firebaseio.com/PRODUCTS.json');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }

        const data = await response.json();
        setProducts(data); // Assuming data is an array of products
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []); // Empty dependency array to fetch products only once on component mount

  return (
    <div className='shop'>
      <div className='shopTitle'>
        <h1>Your Product List</h1>
        </div>
      < div className='products'>
         {products.map((product) => (
            <Product key={product.id} data={product} />
          ))}
        </div>
      </div>
  );
};

export default YourComponent;
