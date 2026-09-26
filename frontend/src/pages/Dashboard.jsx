import "./Dashboard.css";

const Dashboard = () => {
  const stats = [
    {
      icon: "💰",
      title: "Today's Sales",
      value: "Rs. 0",
      note: "No sales recorded today",
    },
    {
      icon: "🧾",
      title: "Today's Orders",
      value: "0",
      note: "No orders today",
    },
    {
      icon: "📦",
      title: "Total Products",
      value: "0",
      note: "Products available",
    },
    {
      icon: "⚠️",
      title: "Low Stock",
      value: "0",
      note: "Everything is in stock",
    },
  ];

  return (
    <div className="dashboard">

      {/* HEADER */}
      <div className="dashboard-header">
        <div>
          <p className="dashboard-label">RESTAURANT MANAGEMENT</p>
          <h1>Dashboard</h1>
          <p>Welcome back! Here's your restaurant overview.</p>
        </div>

        <button className="date-btn">
          📅 Today
        </button>
      </div>

      {/* STATS */}
      <div className="dashboard-cards">

        {stats.map((stat, index) => (
          <div className="dashboard-card" key={index}>

            <div className="card-top">
              <div className="card-icon">
                {stat.icon}
              </div>

              <span className="card-menu">•••</span>
            </div>

            <h3>{stat.title}</h3>

            <h2>{stat.value}</h2>

            <p>{stat.note}</p>

          </div>
        ))}

      </div>

      {/* MAIN GRID */}
      <div className="dashboard-grid">

        {/* RECENT ORDERS */}
        <div className="dashboard-section recent-orders">

          <div className="section-header">
            <div>
              <h2>Recent Orders</h2>
              <p>Latest restaurant orders</p>
            </div>

            <button>View All →</button>
          </div>

          <div className="orders-table">

            <div className="table-header">
              <span>Order ID</span>
              <span>Customer</span>
              <span>Amount</span>
              <span>Status</span>
            </div>

            <div className="empty-state">
              <div className="empty-icon">
                🧾
              </div>

              <h3>No orders yet</h3>

              <p>
                New orders will appear here once customers place orders.
              </p>

              <button className="primary-btn">
                + Create New Order
              </button>
            </div>

          </div>
        </div>

        {/* SALES OVERVIEW */}
        <div className="dashboard-section sales-overview">

          <div className="section-header">
            <div>
              <h2>Sales Overview</h2>
              <p>Weekly sales performance</p>
            </div>

            <select>
              <option>This Week</option>
              <option>This Month</option>
              <option>This Year</option>
            </select>
          </div>

          <div className="sales-total">
            <h3>Rs. 0</h3>
            <span>Today's revenue</span>
          </div>

          <div className="sales-chart">

            <div className="chart-grid">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="chart-bars">
              <div className="chart-column">
                <div className="chart-bar bar-1"></div>
                <span>Mon</span>
              </div>

              <div className="chart-column">
                <div className="chart-bar bar-2"></div>
                <span>Tue</span>
              </div>

              <div className="chart-column">
                <div className="chart-bar bar-3"></div>
                <span>Wed</span>
              </div>

              <div className="chart-column">
                <div className="chart-bar bar-4"></div>
                <span>Thu</span>
              </div>

              <div className="chart-column">
                <div className="chart-bar bar-5"></div>
                <span>Fri</span>
              </div>

              <div className="chart-column">
                <div className="chart-bar bar-6"></div>
                <span>Sat</span>
              </div>

              <div className="chart-column">
                <div className="chart-bar bar-7"></div>
                <span>Sun</span>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* LOWER GRID */}
      <div className="dashboard-lower">

        {/* TOP PRODUCTS */}
        <div className="dashboard-section">

          <div className="section-header">
            <div>
              <h2>Top Selling Products</h2>
              <p>Best performing menu items</p>
            </div>
          </div>

          <div className="product-empty">
            <span>🍔</span>
            <p>No product sales yet</p>
          </div>

        </div>

        {/* LOW STOCK */}
        <div className="dashboard-section">

          <div className="section-header">
            <div>
              <h2>Low Stock Alert</h2>
              <p>Products that need attention</p>
            </div>

            <button>Inventory →</button>
          </div>

          <div className="product-empty">
            <span>✅</span>
            <p>No low-stock products</p>
          </div>

        </div>

      </div>

      {/* QUICK ACTIONS */}
      <div className="quick-actions">

        <div>
          <p className="dashboard-label">QUICK ACCESS</p>
          <h2>Quick Actions</h2>
        </div>

        <div className="action-buttons">

          <button>
            <span>🛒</span>
            New Sale
          </button>

          <button>
            <span>🍔</span>
            Add Product
          </button>

          <button>
            <span>🧾</span>
            View Orders
          </button>

          <button>
            <span>📦</span>
            Inventory
          </button>

        </div>

      </div>

    </div>
  );
};

export default Dashboard;