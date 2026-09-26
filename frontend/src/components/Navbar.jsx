import "./Navbar.css";
const Navbar = () => {
  return (
    <header className="navbar">

      {/* Left Side */}
      <div className="navbar-left">
        <div className="mobile-menu">☰</div>

        <div>
          <p className="navbar-label">RESTAURANT MANAGEMENT</p>
          <h2>Good Afternoon, Admin 👋</h2>
        </div>
      </div>

      {/* Right Side */}
      <div className="navbar-right">

        {/* Search */}
        <div className="navbar-search">
          <span>⌕</span>
          <input
            type="text"
            placeholder="Search anything..."
          />
          <kbd>Ctrl K</kbd>
        </div>

        {/* Date */}
        <div className="navbar-date">
          📅
          <span>Today</span>
        </div>

        {/* Notification */}
        <button className="notification-btn">
          🔔
          <span className="notification-dot"></span>
        </button>

        {/* Profile */}
        <div className="navbar-profile">

          <div className="profile-avatar">
            RS
          </div>

          <div className="profile-info">
            <strong>Rubab Sarwar</strong>
            <span>
              <i></i>
              Administrator
            </span>
          </div>

          <span className="profile-arrow">⌄</span>

        </div>

      </div>

    </header>
  );
};

export default Navbar;

