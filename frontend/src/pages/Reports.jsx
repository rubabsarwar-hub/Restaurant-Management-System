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

      {/* Header */}

      <div className="reports-header">
        <div>
          <h1>Reports</h1>
          <p>Analyze your restaurant performance</p>
        </div>

        <button className="export-btn">
          <svg
            width="19"
            height="19"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 3v12" />
            <path d="m7 10 5 5 5-5" />
            <path d="M5 21h14" />
          </svg>

          Export Report
        </button>
      </div>

      {/* Statistics */}

      <div className="report-stats">

        {/* Total Revenue */}

        <div className="report-stat-card">
          <div className="report-icon report-icon-money">
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect
                x="2"
                y="5"
                width="20"
                height="14"
                rx="2"
              />
              <circle cx="12" cy="12" r="3" />
              <path d="M6 9h.01M18 15h.01" />
            </svg>
          </div>

          <div>
            <span>Total Revenue</span>
            <h2>
              Rs. {totalRevenue.toLocaleString()}
            </h2>
          </div>
        </div>

        {/* Items Sold */}

        <div className="report-stat-card">
          <div className="report-icon report-icon-items">
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 8.5 12 4 3 8.5v7L12 20l9-4.5z" />
              <path d="m3 8.5 9 4.5 9-4.5" />
              <path d="M12 13v7" />
              <path d="M7.5 6.25 16.5 11" />
            </svg>
          </div>

          <div>
            <span>Items Sold</span>
            <h2>{totalItems}</h2>
          </div>
        </div>

        {/* Cash Sales */}

        <div className="report-stat-card">
          <div className="report-icon report-icon-cash">
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect
                x="3"
                y="6"
                width="18"
                height="12"
                rx="2"
              />
              <circle cx="12" cy="12" r="3" />
              <path d="M7 9h.01M17 15h.01" />
            </svg>
          </div>

          <div>
            <span>Cash Sales</span>
            <h2>Rs. 38,500</h2>
          </div>
        </div>

        {/* Card / Online */}

        <div className="report-stat-card">
          <div className="report-icon report-icon-card">
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect
                x="2"
                y="5"
                width="20"
                height="14"
                rx="2"
              />
              <path d="M2 10h20" />
              <path d="M6 15h4" />
            </svg>
          </div>

          <div>
            <span>Card / Online</span>
            <h2>Rs. 26,650</h2>
          </div>
        </div>

      </div>

      {/* Reports Grid */}

      <div className="reports-grid">

        {/* Top Selling Products */}

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

        {/* Payment Summary */}

        <div className="report-card">

          <div className="report-card-title">
            <div>
              <h2>Payment Summary</h2>
              <p>Sales by payment method</p>
            </div>
          </div>

          <div className="payment-summary">

            {/* Cash */}

            <div className="payment-item">

              <div className="payment-info">
                <span className="payment-label">
                  <span className="payment-mini-icon cash-mini">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect
                        x="3"
                        y="6"
                        width="18"
                        height="12"
                        rx="2"
                      />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  </span>
                  Cash
                </span>

                <strong>Rs. 38,500</strong>
              </div>

              <div className="payment-bar">
                <div className="cash-bar"></div>
              </div>

            </div>

            {/* Card */}

            <div className="payment-item">

              <div className="payment-info">
                <span className="payment-label">
                  <span className="payment-mini-icon card-mini">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect
                        x="2"
                        y="5"
                        width="20"
                        height="14"
                        rx="2"
                      />
                      <path d="M2 10h20" />
                    </svg>
                  </span>
                  Card
                </span>

                <strong>Rs. 18,200</strong>
              </div>

              <div className="payment-bar">
                <div className="card-bar"></div>
              </div>

            </div>

            {/* Online */}

            <div className="payment-item">

              <div className="payment-info">
                <span className="payment-label">
                  <span className="payment-mini-icon online-mini">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="9" />
                      <path d="M3 12h18" />
                      <path d="M12 3a14 14 0 0 1 0 18" />
                      <path d="M12 3a14 14 0 0 0 0 18" />
                    </svg>
                  </span>
                  Online
                </span>

                <strong>Rs. 8,450</strong>
              </div>

              <div className="payment-bar">
                <div className="online-bar"></div>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Monthly Overview */}

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