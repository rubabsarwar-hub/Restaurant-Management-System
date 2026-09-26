
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  const mainMenu = [
    { path: "/dashboard", icon: "▦", label: "Dashboard" },
    { path: "/pos", icon: "🛒", label: "POS / New Sale" },
    { path: "/orders", icon: "🧾", label: "Orders", badge: "0" },
  ];

  const managementMenu = [
    { path: "/products", icon: "🍔", label: "Products" },
    { path: "/categories", icon: "▤", label: "Categories" },
    { path: "/purchases", icon: "📥", label: "Purchases" },
    { path: "/inventory", icon: "📦", label: "Inventory" },
    { path: "/suppliers", icon: "🚚", label: "Suppliers" },
    { path: "/customers", icon: "👥", label: "Customers" },
    { path: "/expenses", icon: "💸", label: "Expenses" },
  ];

  const reportsMenu = [
    { path: "/sales", icon: "💰", label: "Sales History" },
    { path: "/reports", icon: "📊", label: "Reports" },
  ];

  const adminMenu = [
    { path: "/employees", icon: "👤", label: "Employees" },
    { path: "/settings", icon: "⚙️", label: "Settings" },
  ];

  const renderMenu = (items) =>
    items.map((item) => (
      <NavLink
        key={item.path}
        to={item.path}
        className={({ isActive }) =>
          `sidebar-link ${isActive ? "active" : ""}`
        }
      >
        <span className="sidebar-icon">{item.icon}</span>
        <span className="sidebar-label">{item.label}</span>

        {item.badge && (
          <span className="sidebar-badge">{item.badge}</span>
        )}
      </NavLink>
    ));

  return (
    <aside className="sidebar">

      {/* Logo */}
      <div className="sidebar-logo">
        <div className="logo-icon">🍽️</div>

        <div>
          <h2>Restaurant</h2>
          <span>MANAGEMENT SYSTEM</span>
        </div>
      </div>

      {/* Main */}
      <div className="sidebar-section">
        <p className="sidebar-title">MAIN</p>
        <nav>{renderMenu(mainMenu)}</nav>
      </div>

      {/* Management */}
      <div className="sidebar-section">
        <p className="sidebar-title">MANAGEMENT</p>
        <nav>{renderMenu(managementMenu)}</nav>
      </div>

      {/* Reports */}
      <div className="sidebar-section">
        <p className="sidebar-title">ANALYTICS</p>
        <nav>{renderMenu(reportsMenu)}</nav>
      </div>

      {/* Admin */}
      <div className="sidebar-section">
        <p className="sidebar-title">ADMINISTRATION</p>
        <nav>{renderMenu(adminMenu)}</nav>
      </div>

      {/* Bottom User */}
      <div className="sidebar-bottom">
        <div className="user-avatar">RS</div>

        <div className="user-info">
          <strong>Restaurant Admin</strong>
          <span>Administrator</span>
        </div>

        <button className="logout-btn" title="Logout">
          ↪
        </button>
      </div>

    </aside>
  );
};

export default Sidebar;

