import { useState } from "react";
import "./Suppliers.css";

const Suppliers = () => {
  const [suppliers, setSuppliers] = useState([
    {
      id: 1,
      name: "Ali Traders",
      company: "Ali Food Suppliers",
      phone: "0300-1234567",
      purchases: 125000,
    },
    {
      id: 2,
      name: "Fresh Foods",
      company: "Fresh Foods Lahore",
      phone: "0312-7654321",
      purchases: 85000,
    },
    {
      id: 3,
      name: "Lahore Beverages",
      company: "Lahore Drinks Supply",
      phone: "0321-9876543",
      purchases: 62000,
    },
  ]);

  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);

  const [newSupplier, setNewSupplier] = useState({
    name: "",
    company: "",
    phone: "",
  });

  const deleteSupplier = (id) => {
    setSuppliers(
      suppliers.filter((supplier) => supplier.id !== id)
    );
  };

  const addSupplier = (e) => {
    e.preventDefault();

    if (
      !newSupplier.name ||
      !newSupplier.company ||
      !newSupplier.phone
    ) {
      return;
    }

    const supplier = {
      id: Date.now(),
      name: newSupplier.name,
      company: newSupplier.company,
      phone: newSupplier.phone,
      purchases: 0,
    };

    setSuppliers([supplier, ...suppliers]);

    setNewSupplier({
      name: "",
      company: "",
      phone: "",
    });

    setShowForm(false);
  };

  const filteredSuppliers = suppliers.filter(
    (supplier) =>
      supplier.name
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      supplier.company
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      supplier.phone.includes(search)
  );

  const totalPurchases = suppliers.reduce(
    (total, supplier) =>
      total + supplier.purchases,
    0
  );

  return (
    <div className="suppliers-page">

      {/* Header */}

      <div className="suppliers-header">

        <div>
          <h1>Suppliers</h1>
          <p>Manage your restaurant suppliers</p>
        </div>

        <button
          className="add-supplier-btn"
          onClick={() => setShowForm(!showForm)}
        >
          + Add Supplier
        </button>

      </div>

      {/* Statistics */}

      <div className="supplier-stats">

        <div className="supplier-stat-card">
          <div className="supplier-icon">🏢</div>

          <div>
            <span>Total Suppliers</span>
            <h2>{suppliers.length}</h2>
          </div>
        </div>

        <div className="supplier-stat-card">
          <div className="supplier-icon">🛒</div>

          <div>
            <span>Total Purchases</span>
            <h2>
              Rs. {totalPurchases.toLocaleString()}
            </h2>
          </div>
        </div>

        <div className="supplier-stat-card">
          <div className="supplier-icon">🔍</div>

          <div>
            <span>Showing</span>
            <h2>{filteredSuppliers.length}</h2>
          </div>
        </div>

      </div>

      {/* Add Supplier Form */}

      {showForm && (
        <form
          className="supplier-form"
          onSubmit={addSupplier}
        >

          <input
            type="text"
            placeholder="Supplier Name"
            value={newSupplier.name}
            onChange={(e) =>
              setNewSupplier({
                ...newSupplier,
                name: e.target.value,
              })
            }
          />

          <input
            type="text"
            placeholder="Company Name"
            value={newSupplier.company}
            onChange={(e) =>
              setNewSupplier({
                ...newSupplier,
                company: e.target.value,
              })
            }
          />

          <input
            type="text"
            placeholder="Phone Number"
            value={newSupplier.phone}
            onChange={(e) =>
              setNewSupplier({
                ...newSupplier,
                phone: e.target.value,
              })
            }
          />

          <button type="submit">
            Save Supplier
          </button>

          <button
            type="button"
            className="cancel-supplier-btn"
            onClick={() => setShowForm(false)}
          >
            Cancel
          </button>

        </form>
      )}

      {/* Search */}

      <div className="supplier-search">

        <input
          type="text"
          placeholder="🔍 Search supplier, company or phone..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

      </div>

      {/* Supplier Card */}

      <div className="suppliers-card">

        <div className="suppliers-card-title">

          <div>
            <h2>Supplier List</h2>
            <p>All registered restaurant suppliers</p>
          </div>

          <span className="supplier-count">
            {filteredSuppliers.length} Suppliers
          </span>

        </div>

        <div className="suppliers-table">

          <div className="suppliers-table-header">
            <span>Supplier</span>
            <span>Company</span>
            <span>Phone</span>
            <span>Total Purchases</span>
            <span>Action</span>
          </div>

          {filteredSuppliers.map((supplier) => (

            <div
              className="supplier-row"
              key={supplier.id}
            >

              <div className="supplier-name">

                <div className="supplier-avatar">
                  {supplier.name.charAt(0)}
                </div>

                <span>{supplier.name}</span>

              </div>

              <span className="supplier-company">
                {supplier.company}
              </span>

              <span className="supplier-phone">
                {supplier.phone}
              </span>

              <span className="supplier-purchases">
                Rs. {supplier.purchases.toLocaleString()}
              </span>

              <div>

                <button className="edit-supplier-btn">
                  Edit
                </button>

                <button
                  className="delete-supplier-btn"
                  onClick={() =>
                    deleteSupplier(supplier.id)
                  }
                >
                  Delete
                </button>

              </div>

            </div>

          ))}

        </div>

        {filteredSuppliers.length === 0 && (
          <p className="no-suppliers">
            No suppliers found.
          </p>
        )}

      </div>

    </div>
  );
};

export default Suppliers;