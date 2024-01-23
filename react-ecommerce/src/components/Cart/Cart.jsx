import React, { useContext, useState } from 'react';
import { PRODUCTS } from "../../products";
import { ShopContext } from "../../context/shop-context";
import { CartItem } from "./cart-tem";
import "./cart.css";

import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();

  // State to manage checkout form visibility, payment details, and order confirmation
  const [showCheckout, setShowCheckout] = useState(false);
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: '',
    expirationDate: '',
    cvv: '',
    // Add more fields as needed
  });
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails({
      ...paymentDetails,
      [name]: value,
    });
  };

  const handleCheckout = () => {
    // Implement your logic for handling the checkout (e.g., payment details)
    // For simplicity, this example just logs the payment details
    console.log('Payment Details:', paymentDetails);

    // Set the order confirmation state to true
    setOrderConfirmed(true);

    // Add further logic for completing the purchase
  };

  return (
    <div className='cart'>
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className='cartItems'>
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} key={product.id} />;
          }
        })}
      </div>
      {totalAmount > 0 ? (
        <div className='Checkout'>
          <p>Subtotal: ${totalAmount} </p>
          <button onClick={() => navigate("/shop")}>Continue Shopping</button>
          {/* Toggle visibility of checkout form */}
          <button onClick={() => setShowCheckout(!showCheckout)}>
            {showCheckout ? 'Hide Checkout' : 'Checkout'}
          </button>
          {/* Display checkout form if showCheckout is true */}
          {showCheckout && (
            <div className="checkout-form">
              <label htmlFor="cardNumber">Card Number:</label>
              <input
                type="text"
                id="cardNumber"
                name="cardNumber"
                value={paymentDetails.cardNumber}
                onChange={handleInputChange}
              />

              <label htmlFor="expirationDate">Expiration Date:</label>
              <input
                type="text"
                id="expirationDate"
                name="expirationDate"
                value={paymentDetails.expirationDate}
                onChange={handleInputChange}
              />

              <label htmlFor="cvv">CVV:</label>
              <input
                type="text"
                id="cvv"
                name="cvv"
                value={paymentDetails.cvv}
                onChange={handleInputChange}
              />

              {/* Add more input fields for payment details as needed */}
              <button onClick={handleCheckout}>Complete Purchase</button>
            </div>
          )}
          {/* Display order confirmation message if orderConfirmed is true */}
          {orderConfirmed && <p>Order Confirmed!</p>}
        </div>
      ) : (
        <h1>Your Cart is Empty</h1>
      )}
    </div>
  );
};

export default Cart;
