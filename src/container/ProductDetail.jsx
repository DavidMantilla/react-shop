
import React from "react";
import { ProductInfo } from "../components/ProductInfo";

import "../styles/productdetail.scss";

const ProductDetail = () => {

    return (
    <aside className="product-detail">
        <div className="product-detail-close">
            <img src="./icons/icon_close.png" alt="close" />
          
        </div>
        <ProductInfo></ProductInfo>
    </aside>



    )};


    export {ProductDetail};  