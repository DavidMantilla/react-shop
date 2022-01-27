
import React from "react";
import { ProductInfo } from "../components/ProductInfo";

import "@styles/productdetail.scss";
import close from "@icons/icon_close.png";

const ProductDetail = () => {

    return (
    <aside className="product-detail">
        <div className="product-detail-close">
            <img src={close} alt="close" />
          
        </div>
        <ProductInfo></ProductInfo>
    </aside>



    )};


    export {ProductDetail};  