import "./Reports.css";

const Reports = () => {
  const reports = [
    {
      product: "Chicken Burger",
      category: "Burgers",
      sold: 45,
      revenue: 20250,
    },
    {
      product: "Zinger Burger",
      category: "Burgers",
      sold: 32,
      revenue: 17600,
    },
    {
      product: "Chicken Biryani",
      category: "Biryani",
      sold: 28,
      revenue: 9800,
    },
    {
      product: "Pizza",
      category: "Pizza",
      sold: 15,
      revenue: 18000,
    },
    {
      product: "French Fries",
      category: "Fast Food",
      sold: 38,
      revenue: 9500,
    },
  ];

  const totalRevenue = reports.reduce(
    (total, item) => total + item.revenue,
    0
  );

  const totalItems = reports.reduce(
    (total, item) => total + item.sold,
    0
  );

  return (
    <div className="reports-page">

      <div className="reports-header">
        <div>
          <h1>Reports</h1>
          <p>Analyze your restaurant performance</p>
        </div>

        <button className="export-btn">
          📥 Export Report
        </button>
      </div>

      <div className="report-stats">

        <div className="report-stat-card">
          <div className="report-icon">💰</div>
          <div>
            <span>Total Revenue</span>
            <h2>Rs. {totalRevenue.toLocaleString()}</h2>
          </div>
        </div>

        <div className="report-stat-card">
          <div className="report-icon">📦</div>
          <div>
            <span>Items Sold</span>
            <h2>{totalItems}</h2>
          </div>
        </div>

        <div className="report-stat-card">
          <div className="report-icon">💵</div>
          <div>
            <span>Cash Sales</span>
            <h2>Rs. 38,500</h2>
          </div>
        </div>

        <div className="report-stat-card">
          <div className="report-icon">💳</div>
          <div>
            <span>Card / Online</span>
            <h2>Rs. 26,650</h2>
          </div>
        </div>

      </div>

      <div className="reports-grid">

        <div className="report-card">

          <div className="report-card-title">
            <div>
              <h2>Top Selling Products</h2>
              <p>Products with highest sales</p>
            </div>
          </div>

          <div className="report-table">

            <div className="report-table-header">
              <span>Product</span>
              <span>Category</span>
              <span>Sold</span>
              <span>Revenue</span>
            </div>

            {reports.map((item, index) => (
              <div
                className="report-row"
                key={index}
              >
                <span className="report-product">
                  {item.product}
                </span>

                <span className="report-category">
                  {item.category}
                </span>

                <span className="report-sold">
                  {item.sold}
                </span>

                <span className="report-revenue">
                  Rs. {item.revenue.toLocaleString()}
                </span>
              </div>
            ))}

          </div>

        </div>

        <div className="report-card">

          <div className="report-card-title">
            <div>
              <h2>Payment Summary</h2>
              <p>Sales by payment method</p>
            </div>
          </div>

          <div className="payment-summary">

            <div className="payment-item">
              <div>
                <span>💵 Cash</span>
                <strong>Rs. 38,500</strong>
              </div>

              <div className="payment-bar">
                <div className="cash-bar"></div>
              </div>
            </div>

            <div className="payment-item">
              <div>
                <span>💳 Card</span>
                <strong>Rs. 18,200</strong>
              </div>

              <div className="payment-bar">
                <div className="card-bar"></div>
              </div>
            </div>

            <div className="payment-item">
              <div>
                <span>🌐 Online</span>
                <strong>Rs. 8,450</strong>
              </div>

              <div className="payment-bar">
                <div className="online-bar"></div>
              </div>
            </div>

          </div>

        </div>

      </div>

      <div className="report-card monthly-card">

        <div className="report-card-title">
          <div>
            <h2>Monthly Overview</h2>
            <p>Restaurant performance summary</p>
          </div>
        </div>

        <div className="monthly-grid">

          <div className="monthly-item">
            <span>Total Orders</span>
            <h3>120</h3>
          </div>

          <div className="monthly-item">
            <span>Total Revenue</span>
            <h3>Rs. 65,150</h3>
          </div>

          <div className="monthly-item">
            <span>Average Order</span>
            <h3>Rs. 543</h3>
          </div>

          <div className="monthly-item">
            <span>Products Sold</span>
            <h3>{totalItems}</h3>
          </div>

        </div>

      </div>

    </div>
  );
};

export default Reports;