import React from "react";
import Categories from "../components/categories.jsx";
import Header from "../components/Header";
import Menu from "../components/Menu";
import { ProductDetail } from "../container/ProductDetail.jsx";
import { ProductList } from "../container/ProductList.jsx";
import { ShoppingCart} from "../container/ShoppingCart.jsx";



const Home = () => {

    return (
        <React.Fragment>

            <Header></Header>
          {/* <Menu/> */}
         <Categories></Categories>
         <div className="container">
            
         
          {/* <ProductDetail></ProductDetail> */}
          <ShoppingCart></ShoppingCart>
          <ProductList></ProductList>
         </div>
        </React.Fragment>
       

    );
}

export default Home;