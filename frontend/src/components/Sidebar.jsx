import { NavLink } from "react-router-dom";
import {
  LuLayoutDashboard,
  LuShoppingCart,
  LuReceipt,
  LuUtensils,
  LuTags,
  LuDownload,
  LuPackage,
  LuTruck,
  LuUsers,
  LuWalletCards,
  LuCircleDollarSign,
  LuChartNoAxesColumnIncreasing,
  LuUserRound,
  LuSettings,
  LuLogOut,
} from "react-icons/lu";

import "./Sidebar.css";

const Sidebar = () => {
  const mainMenu = [
    { path: "/dashboard", icon: LuLayoutDashboard, label: "Dashboard" },
    { path: "/pos", icon: LuShoppingCart, label: "POS / New Sale" },
    { path: "/orders", icon: LuReceipt, label: "Orders", badge: "0" },
  ];

  const managementMenu = [
    { path: "/products", icon: LuUtensils, label: "Products" },
    { path: "/categories", icon: LuTags, label: "Categories" },
    { path: "/purchases", icon: LuDownload, label: "Purchases" },
    { path: "/inventory", icon: LuPackage, label: "Inventory" },
    { path: "/suppliers", icon: LuTruck, label: "Suppliers" },
    { path: "/customers", icon: LuUsers, label: "Customers" },
    { path: "/expenses", icon: LuWalletCards, label: "Expenses" },
  ];

  const reportsMenu = [
    { path: "/sales", icon: LuCircleDollarSign, label: "Sales History" },
    {
      path: "/reports",
      icon: LuChartNoAxesColumnIncreasing,
      label: "Reports",
    },
  ];

  const adminMenu = [
    { path: "/employees", icon: LuUserRound, label: "Employees" },
    { path: "/settings", icon: LuSettings, label: "Settings" },
  ];

  const renderMenu = (items) =>
    items.map((item) => {
      const Icon = item.icon;

      return (
        <NavLink
          key={item.path}
          to={item.path}
          className={({ isActive }) =>
            `sidebar-link ${isActive ? "active" : ""}`
          }
        >
          <span className="sidebar-icon">
            <Icon size={20} strokeWidth={2} />
          </span>

          <span className="sidebar-label">{item.label}</span>

          {item.badge && (
            <span className="sidebar-badge">{item.badge}</span>
          )}
        </NavLink>
      );
    });

  return (
    <aside className="sidebar">

      {/* Logo */}
      <div className="sidebar-logo">
        <div className="logo-icon">
          <LuUtensils size={23} strokeWidth={2} />
        </div>

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

      {/* Analytics */}
      <div className="sidebar-section">
        <p className="sidebar-title">ANALYTICS</p>
        <nav>{renderMenu(reportsMenu)}</nav>
      </div>

      {/* Administration */}
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
          <LuLogOut size={19} strokeWidth={2} />
        </button>
      </div>

    </aside>
  );
};

export default Sidebar;