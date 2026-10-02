import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="navbar">

      {/* Left Side */}
      <div className="navbar-left">

        <div className="mobile-menu">
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <path d="M4 6h16" />
            <path d="M4 12h16" />
            <path d="M4 18h16" />
          </svg>
        </div>

        <div>
          <p className="navbar-label">RESTAURANT MANAGEMENT</p>
          <h2>Good Afternoon, Admin</h2>
        </div>

      </div>

      {/* Right Side */}
      <div className="navbar-right">

        {/* Search */}
        <div className="navbar-search">

          <svg
            className="navbar-search-icon"
            width="19"
            height="19"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-4-4" />
          </svg>

          <input
            type="text"
            placeholder="Search anything..."
          />

          <kbd>Ctrl K</kbd>

        </div>

        {/* Date */}
        <div className="navbar-date">

          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="4" width="18" height="17" rx="2" />
            <path d="M16 2v4" />
            <path d="M8 2v4" />
            <path d="M3 10h18" />
            <path d="M8 14h.01" />
            <path d="M12 14h.01" />
            <path d="M16 14h.01" />
            <path d="M8 18h.01" />
            <path d="M12 18h.01" />
          </svg>

          <span>Today</span>

        </div>

        {/* Notification */}
        <button className="notification-btn">

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
            <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" />
            <path d="M10 21h4" />
          </svg>

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

          <svg
            className="profile-arrow"
            width="17"
            height="17"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>

        </div>

      </div>

    </header>
  );
};

export default Navbar;