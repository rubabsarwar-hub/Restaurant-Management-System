import { useState } from "react";
import "./Customers.css";

const Customers = () => {
  const [customers, setCustomers] = useState([
    {
      id: 1,
      name: "Ali Khan",
      phone: "0300-1234567",
      orders: 8,
      spent: 12500,
    },
    {
      id: 2,
      name: "Ahmed Raza",
      phone: "0312-7654321",
      orders: 5,
      spent: 8200,
    },
    {
      id: 3,
      name: "Sara Malik",
      phone: "0321-9876543",
      orders: 12,
      spent: 18900,
    },
  ]);

  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);

  const [newCustomer, setNewCustomer] = useState({
    name: "",
    phone: "",
  });

  const deleteCustomer = (id) => {
    setCustomers(
      customers.filter((customer) => customer.id !== id)
    );
  };

  const addCustomer = (e) => {
    e.preventDefault();

    if (!newCustomer.name || !newCustomer.phone) {
      return;
    }

    const customer = {
      id: Date.now(),
      name: newCustomer.name,
      phone: newCustomer.phone,
      orders: 0,
      spent: 0,
    };

    setCustomers([...customers, customer]);

    setNewCustomer({
      name: "",
      phone: "",
    });

    setShowForm(false);
  };

  const filteredCustomers = customers.filter(
    (customer) =>
      customer.name
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      customer.phone.includes(search)
  );

  const totalCustomers = customers.length;

  const totalOrders = customers.reduce(
    (total, customer) => total + customer.orders,
    0
  );

  const totalSpent = customers.reduce(
    (total, customer) => total + customer.spent,
    0
  );

  return (
    <div className="customers-page">

      {/* Header */}

      <div className="customers-header">
        <div>
          <h1>Customers</h1>
          <p>Manage your restaurant customers</p>
        </div>

        <button
          className="add-customer-btn"
          onClick={() => setShowForm(!showForm)}
        >
          + Add Customer
        </button>
      </div>

      {/* Statistics */}

      <div className="customer-stats">

        <div className="customer-stat-card">
          <div className="stat-icon">👥</div>
          <div>
            <span>Total Customers</span>
            <h2>{totalCustomers}</h2>
          </div>
        </div>

        <div className="customer-stat-card">
          <div className="stat-icon">🛒</div>
          <div>
            <span>Total Orders</span>
            <h2>{totalOrders}</h2>
          </div>
        </div>

        <div className="customer-stat-card">
          <div className="stat-icon">💰</div>
          <div>
            <span>Total Revenue</span>
            <h2>Rs. {totalSpent.toLocaleString()}</h2>
          </div>
        </div>

      </div>

      {/* Add Customer Form */}

      {showForm && (
        <form
          className="customer-form"
          onSubmit={addCustomer}
        >
          <input
            type="text"
            placeholder="Customer Name"
            value={newCustomer.name}
            onChange={(e) =>
              setNewCustomer({
                ...newCustomer,
                name: e.target.value,
              })
            }
          />

          <input
            type="text"
            placeholder="Phone Number"
            value={newCustomer.phone}
            onChange={(e) =>
              setNewCustomer({
                ...newCustomer,
                phone: e.target.value,
              })
            }
          />

          <button type="submit">
            Save Customer
          </button>

          <button
            type="button"
            className="cancel-btn"
            onClick={() => setShowForm(false)}
          >
            Cancel
          </button>
        </form>
      )}

      {/* Search */}

      <div className="customer-search">
        <input
          type="text"
          placeholder="🔍 Search customer by name or phone..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Customers Table */}

      <div className="customers-card">

        <div className="customers-card-title">
          <div>
            <h2>Customer List</h2>
            <p>All registered restaurant customers</p>
          </div>

          <span className="customer-count">
            {filteredCustomers.length} Customers
          </span>
        </div>

        <table>

          <thead>
            <tr>
              <th>Customer</th>
              <th>Phone</th>
              <th>Total Orders</th>
              <th>Total Spent</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>

            {filteredCustomers.map((customer) => (
              <tr key={customer.id}>

                <td>
                  <div className="customer-name">
                    <div className="customer-avatar">
                      {customer.name.charAt(0)}
                    </div>

                    <span>{customer.name}</span>
                  </div>
                </td>

                <td>{customer.phone}</td>

                <td>
                  <span className="orders-badge">
                    {customer.orders} Orders
                  </span>
                </td>

                <td className="spent">
                  Rs. {customer.spent.toLocaleString()}
                </td>

                <td>

                  <button className="edit-btn">
                    Edit
                  </button>

                  <button
                    className="delete-btn"
                    onClick={() =>
                      deleteCustomer(customer.id)
                    }
                  >
                    Delete
                  </button>

                </td>

              </tr>
            ))}

          </tbody>

        </table>

        {filteredCustomers.length === 0 && (
          <p className="no-customers">
            No customers found.
          </p>
        )}

      </div>

    </div>
  );
};

export default Customers;