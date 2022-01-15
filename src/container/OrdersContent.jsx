
import React from "react";
import { Order } from "../components/Order";
import '../styles/orders.scss';

const OrdersContent = () => {

  return (
    <div class="my-order">
      <div class="my-order-container">
        <h1 class="title">My orders</h1>
        <div class="my-order-content">
          <Order></Order>
          <Order></Order>
          <Order></Order>
        </div>
      </div>
    </div>
  );
}

export default OrdersContent;