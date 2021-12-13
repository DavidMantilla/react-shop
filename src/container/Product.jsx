import React from "react";
import { ProductInfo } from "../components/ProductInfo";
import '../styles/header.scss';

const Product = () => {

    return (

<aside classname="product-detail">
  <div classname="product-detail-close">
    <img src="./icons/icon_close.png" alt="close" />
  </div>
 
<ProductInfo/>
</aside>

    )};


  export default Product;
