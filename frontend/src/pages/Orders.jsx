import { useEffect, useState } from "react";
import "./Orders.css";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(savedOrders);
  }, []);

  return (
    <div className="orders-page">

      <div className="orders-header">
        <div>
          <h1>Orders</h1>
          <p>Manage all restaurant orders</p>
        </div>
      </div>

      <div className="orders-card">

        <div className="orders-table-header">
          <span>Order ID</span>
          <span>Customer</span>
          <span>Table</span>
          <span>Total</span>
          <span>Payment</span>
          <span>Status</span>
        </div>

        {orders.length === 0 ? (
          <div className="no-orders">
            <h3>No Orders Yet</h3>
            <p>Placed orders will appear here.</p>
          </div>
        ) : (
          orders.map((order) => (
            <div className="order-row" key={order.id}>

              <span>#{order.id}</span>

              <span>{order.customerName}</span>

              <span>{order.tableNumber}</span>

              <span>Rs. {order.total}</span>

              <span>{order.paymentMethod}</span>

              <span className="status">
                {order.status}
              </span>

            </div>
          ))
        )}

      </div>

    </div>
  );
};

export default Orders;