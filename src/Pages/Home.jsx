import React from "react";
import Categories from "../components/categories.jsx";
import Header from "../components/Header";

import { ProductDetail } from "../container/ProductDetail.jsx";
import { ProductList } from "../container/ProductList.jsx";




const Home = () => {

    return (
        <React.Fragment>

            <Header></Header>
          
         <Categories></Categories>
         <div className="container">
            
         
          {/* <ProductDetail></ProductDetail> */}
        
          <ProductList></ProductList>
         </div>
        </React.Fragment>
       

    );
}

export default Home;