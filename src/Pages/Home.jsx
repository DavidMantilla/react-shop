import React from "react";
import Categories from "../components/categories.jsx";
import Header from "../components/Header";
import Menu from "../components/Menu";



const Home = () => {

    return (
        <React.Fragment>

            <Header></Header>
          <Menu/>
         <Categories></Categories>
        </React.Fragment>
       

    );
}

export default Home;