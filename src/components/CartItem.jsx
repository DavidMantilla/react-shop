
import React ,{useContext}from "react";
import close from "@icons/icon_close.png";
import AppContext from "../context/AppContext";

const CartItem = ({producto}) => {
  const {removeFromCart} = useContext(AppContext);
  const handleRemove=(product)=>{
  removeFromCart(product);

  }

  return (
    <div className="shopping-cart">
  {console.log(producto)}
  <figure>
  <img src={producto.images[0]} alt={producto.title}/>
  </figure>
  <p>{producto.title}</p>
  <p>${producto.price}</p>
  <img src={close} alt="close" onClick={()=>{handleRemove(producto)}}/>
</div>
  )};




  export {CartItem};  