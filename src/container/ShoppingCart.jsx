


import React ,{useContext}from "react";
import { CartItem } from "../components/CartItem";
import '@styles/ShoppingCart.scss';
import flechita from "@icons/flechita.svg";
import AppContext from "../context/AppContext";

const ShoppingCart= () => {
const{state}=useContext(AppContext);
const cart = state.cart;
const sumtotal= () => {
  let reducer=(accumulator, currentValue)=> accumulator+currentValue.price;
  let sum = cart.reduce(reducer,0);
  return sum;
  
}

  return (
<aside className="shopping-cart-container">
  <div className="title-container">
    <img src={flechita} alt="arrow" />
    <p className="title">Shopping Cart</p>
  </div>
  <div className="my-order-content">
  {cart.map(producto => (
					<CartItem producto={producto} key={`orderItem-${producto.id}`} />
				))}

  </div>
  <div className="total">
    <p>
      <span>Total</span>
    </p>
    <p>${sumtotal()}</p>
  </div>
  <button className="primary-button">
    Checkout
  </button>
</aside>


  )};




  export {ShoppingCart};  