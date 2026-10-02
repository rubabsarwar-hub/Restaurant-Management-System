
import "./Dashboard.css";

const stats = [
  {
    icon: "/images/sales.png",
    title: "Today's Sales",
    value: "Rs. 0",
    note: "No sales recorded today",
  },
  {
    icon: "/images/orders.png",
    title: "Today's Orders",
    value: "0",
    note: "No orders today",
  },
  {
    icon: "/images/products.png",
    title: "Total Products",
    value: "0",
    note: "Products available",
  },
  {
    icon: "/images/low-stock.png",
    title: "Low Stock",
    value: "0",
    note: "Everything is in stock",
  },
];

const Dashboard = () => {
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
          <img src="/images/calendar.png" alt="Calendar" />
          Today
        </button>
      </div>

      {/* STATS */}
      <div className="dashboard-cards">

        {stats.map((stat, index) => (
          <div className="dashboard-card" key={index}>

            <div className="card-top">
              <div className="card-icon">
                <img src={stat.icon} alt={stat.title} />
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
                <img src="/images/orders.png" alt="Orders" />
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
            <img src="/images/burger.png" alt="Products" />
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
            <img src="/images/success.png" alt="In Stock" />
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
            <img src="/images/sales.png" alt="New Sale" />
            New Sale
          </button>

          <button>
            <img src="/images/burger.png" alt="Add Product" />
            Add Product
          </button>

          <button>
            <img src="/images/orders.png" alt="View Orders" />
            View Orders
          </button>

          <button>
            <img src="/images/products.png" alt="Inventory" />
            Inventory
          </button>

        </div>

      </div>

    </div>
  );
};

export default Dashboard;

