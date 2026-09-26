import { useState } from "react";
import "./Sales.css";

const Sales = () => {
  const [sales] = useState([
    {
      id: 1,
      order: "#ORD-1001",
      customer: "Ali Khan",
      items: 3,
      amount: 1850,
      payment: "Cash",
      date: "26 Sep 2026",
    },
    {
      id: 2,
      order: "#ORD-1002",
      customer: "Ahmed Raza",
      items: 2,
      amount: 1200,
      payment: "Card",
      date: "26 Sep 2026",
    },
    {
      id: 3,
      order: "#ORD-1003",
      customer: "Sara Malik",
      items: 5,
      amount: 2750,
      payment: "Cash",
      date: "25 Sep 2026",
    },
    {
      id: 4,
      order: "#ORD-1004",
      customer: "Usman Ali",
      items: 4,
      amount: 2100,
      payment: "Online",
      date: "25 Sep 2026",
    },
    {
      id: 5,
      order: "#ORD-1005",
      customer: "Hassan Ahmed",
      items: 2,
      amount: 950,
      payment: "Cash",
      date: "24 Sep 2026",
    },
  ]);

  const [search, setSearch] = useState("");

  const filteredSales = sales.filter(
    (sale) =>
      sale.order
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      sale.customer
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  const totalSales = sales.reduce(
    (total, sale) => total + sale.amount,
    0
  );

  const totalOrders = sales.length;

  const totalItems = sales.reduce(
    (total, sale) => total + sale.items,
    0
  );

  const averageSale =
    totalOrders > 0
      ? Math.round(totalSales / totalOrders)
      : 0;

  return (
    <div className="sales-page">

      {/* Header */}

      <div className="sales-header">

        <div>
          <h1>Sales</h1>
          <p>Track your restaurant sales and revenue</p>
        </div>

      </div>

      {/* Statistics */}

      <div className="sales-stats">

        <div className="sales-stat-card">
          <div className="sales-icon">💰</div>

          <div>
            <span>Total Sales</span>
            <h2>
              Rs. {totalSales.toLocaleString()}
            </h2>
          </div>
        </div>

        <div className="sales-stat-card">
          <div className="sales-icon">🛒</div>

          <div>
            <span>Total Orders</span>
            <h2>{totalOrders}</h2>
          </div>
        </div>

        <div className="sales-stat-card">
          <div className="sales-icon">📦</div>

          <div>
            <span>Items Sold</span>
            <h2>{totalItems}</h2>
          </div>
        </div>

        <div className="sales-stat-card">
          <div className="sales-icon">📊</div>

          <div>
            <span>Average Sale</span>
            <h2>
              Rs. {averageSale.toLocaleString()}
            </h2>
          </div>
        </div>

      </div>

      {/* Search */}

      <div className="sales-search">

        <input
          type="text"
          placeholder="🔍 Search order or customer..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

      </div>

      {/* Sales Card */}

      <div className="sales-card">

        <div className="sales-card-title">

          <div>
            <h2>Sales History</h2>
            <p>All restaurant sales records</p>
          </div>

          <span className="sales-count">
            {filteredSales.length} Sales
          </span>

        </div>

        <div className="sales-table">

          <div className="sales-table-header">
            <span>Order</span>
            <span>Customer</span>
            <span>Items</span>
            <span>Amount</span>
            <span>Payment</span>
            <span>Date</span>
          </div>

          {filteredSales.map((sale) => (

            <div
              className="sales-row"
              key={sale.id}
            >

              <span className="order-number">
                {sale.order}
              </span>

              <div className="sales-customer">

                <div className="sales-avatar">
                  {sale.customer.charAt(0)}
                </div>

                <span>{sale.customer}</span>

              </div>

              <span className="sales-items">
                {sale.items}
              </span>

              <span className="sales-amount">
                Rs. {sale.amount.toLocaleString()}
              </span>

              <span
                className={`payment-badge ${sale.payment.toLowerCase()}`}
              >
                {sale.payment}
              </span>

              <span className="sales-date">
                {sale.date}
              </span>

            </div>

          ))}

        </div>

        {filteredSales.length === 0 && (
          <p className="no-sales">
            No sales found.
          </p>
        )}

      </div>

    </div>
  );
};

export default Sales;