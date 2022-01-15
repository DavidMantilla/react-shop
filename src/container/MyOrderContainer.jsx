import React from "react";
import { MyOrderProds} from "../components/MyOrderProds";
import '../styles/MyOrder.scss';
import { Order } from "../components/Order";
const MyOrderContainer = () => {

    return (
      <div class="my-order">
<div className="my-order-container">
  <h1 className="title">My order</h1>
  <div className="my-order-content">
   <Order></Order>
    <MyOrderProds></MyOrderProds>
    <MyOrderProds></MyOrderProds>
    <MyOrderProds></MyOrderProds>
    <MyOrderProds></MyOrderProds>

  </div>
  </div>
  </div>
    )};
    export {MyOrderContainer};