


import React from "react";
import { CartItem } from "../components/CartItem";
import '../styles/ShoppingCart.scss';

const ShoppingCart= () => {

  return (
    <aside className="product-detail">
  <div className="title-container">
    <img src="./icons/flechita.svg" alt="arrow" />
    <p className="title">Shopping Cart</p>
  </div>
    

    <div classname="my-order-content">
        <CartItem></CartItem>
        <CartItem></CartItem>
        <CartItem></CartItem>
      
    </div>
    <div class="total">
        <p>
          <span>Total</span>
        </p>
        <p>$560.00</p>
      </div>

      <button class="primary-button">
        Checkout
      </button>
    </aside>

  )};




  export {ShoppingCart};  