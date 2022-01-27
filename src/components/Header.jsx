import React ,{useState,useContext} from "react";
import '@styles/header.scss';
import logo_menu from "@icons/icon_menu.svg";
import navlogo  from "@logos/logo_yard_sale.svg";
import Menu from "@components/Menu";
import ShoppingCarticon from "@icons/icon_shopping_cart.svg";
import AppContext from "../context/AppContext";
import { ShoppingCart} from "../container/ShoppingCart.jsx";
const Header = () => {
    const [toggle,setToggle] = useState(false);
    const [toggleCart,setToggleCart] = useState(false);
    const {state}= useContext(AppContext);
    const cart= state.cart;
    const handleToggle = () => {
      setToggle(!toggle);
    }
    return (
        <nav>
            <img src={logo_menu} alt="menu" className="menu" />
            <div className="navbar-left">
                <img src={navlogo} alt="logo" className="nav-logo" />
                <ul>
                    <li>
                        <a href="/">All</a>
                    </li>
                    <li>
                        <a href="/">Clothes</a>
                    </li>
                    <li>
                        <a href="/">Electronics</a>
                    </li>
                    <li>
                        <a href="/">Furnitures</a>
                    </li>
                    <li>
                        <a href="/">Toys</a>
                    </li>
                    <li>
                        <a href="/">Others</a>
                    </li>
                </ul>
            </div>
            <div className="navbar-right">
                <ul>
                    <li className="navbar-email" onClick={handleToggle}>
                        platzi@example.com
                    </li>
                    <li className="navbar-shopping-cart" onClick={()=>{ setToggleCart(!toggleCart)}}>
                        <img src={ShoppingCarticon} alt="shopping cart" />
                       {cart.length>0? <div> {cart.length}</div>:null}
                    </li>
                </ul>

            </div>
            {toggle && <Menu/>}
         
            {toggleCart && <ShoppingCart/>}
        </nav>


    );
}

export default Header;