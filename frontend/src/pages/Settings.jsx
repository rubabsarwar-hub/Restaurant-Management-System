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
            <div className="settings-title-icon">
              🏪
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
              💾 Save Changes
            </button>

            {saved && (
              <p className="save-message">
                ✓ Settings saved successfully
              </p>
            )}

          </form>

        </div>

        {/* System Settings */}

        <div className="settings-card">

          <div className="settings-card-title">
            <div className="settings-title-icon">
              ⚙️
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

          <div className="settings-title-icon">
            👤
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