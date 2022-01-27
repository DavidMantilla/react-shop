
import React , {useContext, useState}from "react";
import '../styles/menu.scss';
import addCart from "@icons/bt_add_to_cart.svg";
import AppContext from "../context/AppContext";
const ProductItem= ({producto}) => {
const {addToCart} = useContext(AppContext);
const handle = (item) => {
  addToCart(item);
}

    return (
        
  <div className="product-card">

<img src={producto.images[0]} alt={producto.title}/>
<div className="product-item">
  <div>
    <p>${producto.price}</p>
    <p>{producto.title}</p>
  </div>
  <figure onClick={()=>{handle(producto)}}>
    <img src={addCart} alt="" />
  </figure>

</div>
</div>
    )};


export {ProductItem};