import { useState } from "react";
import "./Settings.css";

const Settings = () => {
  const [restaurant, setRestaurant] = useState({
    name: "Chaudhry Restaurant",
    phone: "0300-1234567",
    email: "info@chaudhryrestaurant.com",
    address: "Gulberg, Lahore",
  });

  const [saved, setSaved] = useState(false);

  const handleChange = (e) => {
    setRestaurant({
      ...restaurant,
      [e.target.name]: e.target.value,
    });

    setSaved(false);
  };

  const saveSettings = (e) => {
    e.preventDefault();
    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 3000);
  };

  return (
    <div className="settings-page">

      <div className="settings-header">
        <div>
          <h1>Settings</h1>
          <p>Manage your restaurant system settings</p>
        </div>
      </div>

      <div className="settings-grid">

        {/* Restaurant Information */}

        <div className="settings-card">

          <div className="settings-card-title">

            <div className="settings-title-icon restaurant-settings-icon">
              <svg
                width="25"
                height="25"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 21h18" />
                <path d="M5 21V8h14v13" />
                <path d="M7 8V5h10v3" />
                <path d="M8 12h2" />
                <path d="M14 12h2" />
                <path d="M8 16h2" />
                <path d="M14 16h2" />
              </svg>
            </div>

            <div>
              <h2>Restaurant Information</h2>
              <p>Update your restaurant details</p>
            </div>

          </div>

          <form onSubmit={saveSettings}>

            <div className="settings-field">
              <label>Restaurant Name</label>

              <input
                type="text"
                name="name"
                value={restaurant.name}
                onChange={handleChange}
              />
            </div>

            <div className="settings-field">
              <label>Phone Number</label>

              <input
                type="text"
                name="phone"
                value={restaurant.phone}
                onChange={handleChange}
              />
            </div>

            <div className="settings-field">
              <label>Email Address</label>

              <input
                type="email"
                name="email"
                value={restaurant.email}
                onChange={handleChange}
              />
            </div>

            <div className="settings-field">
              <label>Restaurant Address</label>

              <textarea
                name="address"
                value={restaurant.address}
                onChange={handleChange}
                rows="3"
              ></textarea>
            </div>

            <button
              type="submit"
              className="save-settings-btn"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
                <path d="M17 21v-8H7v8" />
                <path d="M7 3v5h8" />
              </svg>

              Save Changes
            </button>

            {saved && (
              <p className="save-message">
                <span className="success-check">✓</span>
                Settings saved successfully
              </p>
            )}

          </form>

        </div>

        {/* System Settings */}

        <div className="settings-card">

          <div className="settings-card-title">

            <div className="settings-title-icon system-settings-icon">
              <svg
                width="25"
                height="25"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="3" />
                <path d="M19.4 15a1.7 1.7 0 0 0 .34 1.88l.06.06-1.8 1.8-.06-.06a1.7 1.7 0 0 0-1.88-.34 1.7 1.7 0 0 0-1.03 1.56V20h-2.55v-.1a1.7 1.7 0 0 0-1.03-1.56 1.7 1.7 0 0 0-1.88.34l-.06.06-1.8-1.8.06-.06A1.7 1.7 0 0 0 6.1 15a1.7 1.7 0 0 0-1.56-1.03H4.4v-2.55h.1A1.7 1.7 0 0 0 6.1 10.4a1.7 1.7 0 0 0-.34-1.88L5.7 8.46l1.8-1.8.06.06a1.7 1.7 0 0 0 1.88.34 1.7 1.7 0 0 0 1.03-1.56V5.4h2.55v.1a1.7 1.7 0 0 0 1.03 1.56 1.7 1.7 0 0 0 1.88-.34l.06-.06 1.8 1.8-.06.06A1.7 1.7 0 0 0 17.9 10.4a1.7 1.7 0 0 0 1.56 1.03h.1v2.55h-.1A1.7 1.7 0 0 0 19.4 15z" />
              </svg>
            </div>

            <div>
              <h2>System Settings</h2>
              <p>Configure your restaurant system</p>
            </div>

          </div>

          <div className="system-setting">

            <div>
              <h3>Currency</h3>
              <p>Default currency for transactions</p>
            </div>

            <select defaultValue="PKR">
              <option value="PKR">PKR - Pakistani Rupee</option>
              <option value="USD">USD - US Dollar</option>
              <option value="AED">AED - UAE Dirham</option>
            </select>

          </div>

          <div className="system-setting">

            <div>
              <h3>Order Notifications</h3>
              <p>Receive notifications for new orders</p>
            </div>

            <label className="switch">
              <input
                type="checkbox"
                defaultChecked
              />
              <span className="slider"></span>
            </label>

          </div>

          <div className="system-setting">

            <div>
              <h3>Low Stock Alerts</h3>
              <p>Show alerts when stock is low</p>
            </div>

            <label className="switch">
              <input
                type="checkbox"
                defaultChecked
              />
              <span className="slider"></span>
            </label>

          </div>

          <div className="system-setting">

            <div>
              <h3>Auto Print Receipt</h3>
              <p>Automatically print order receipts</p>
            </div>

            <label className="switch">
              <input type="checkbox" />
              <span className="slider"></span>
            </label>

          </div>

        </div>

      </div>

      {/* Account */}

      <div className="settings-card account-card">

        <div className="settings-card-title">

          <div className="settings-title-icon account-settings-icon">
            <svg
              width="25"
              height="25"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="8" r="3.5" />
              <path d="M5 20c.8-3.5 3.2-5.5 7-5.5s6.2 2 7 5.5" />
            </svg>
          </div>

          <div>
            <h2>Account</h2>
            <p>Manage your system account</p>
          </div>

        </div>

        <div className="account-info">

          <div className="account-avatar">
            A
          </div>

          <div>
            <h3>Administrator</h3>
            <p>Restaurant System Admin</p>
          </div>

          <span className="account-status">
            Active
          </span>

        </div>

      </div>

    </div>
  );
};

export default Settings;