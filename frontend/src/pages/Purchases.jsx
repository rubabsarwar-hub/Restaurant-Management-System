import { useState } from "react";
import "./Purchases.css";

const Purchases = () => {
  const [purchases, setPurchases] = useState([
    {
      id: 1,
      supplier: "Ali Traders",
      product: "Chicken",
      quantity: 20,
      price: 850,
      date: "25 Sep 2026",
    },
    {
      id: 2,
      supplier: "Fresh Foods",
      product: "Burger Buns",
      quantity: 50,
      price: 120,
      date: "24 Sep 2026",
    },
    {
      id: 3,
      supplier: "Lahore Beverages",
      product: "Cold Drinks",
      quantity: 30,
      price: 90,
      date: "23 Sep 2026",
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [search, setSearch] = useState("");

  const [newPurchase, setNewPurchase] = useState({
    supplier: "",
    product: "",
    quantity: "",
    price: "",
  });

  const deletePurchase = (id) => {
    setPurchases(
      purchases.filter((purchase) => purchase.id !== id)
    );
  };

  const addPurchase = (e) => {
    e.preventDefault();

    if (
      !newPurchase.supplier ||
      !newPurchase.product ||
      !newPurchase.quantity ||
      !newPurchase.price
    ) {
      return;
    }

    const purchase = {
      id: Date.now(),
      supplier: newPurchase.supplier,
      product: newPurchase.product,
      quantity: Number(newPurchase.quantity),
      price: Number(newPurchase.price),
      date: new Date().toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }),
    };

    setPurchases([purchase, ...purchases]);

    setNewPurchase({
      supplier: "",
      product: "",
      quantity: "",
      price: "",
    });

    setShowForm(false);
  };

  const filteredPurchases = purchases.filter(
    (purchase) =>
      purchase.supplier
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      purchase.product
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  const totalPurchases = purchases.reduce(
    (total, purchase) =>
      total + purchase.quantity * purchase.price,
    0
  );

  const totalItems = purchases.reduce(
    (total, purchase) => total + purchase.quantity,
    0
  );

  return (
    <div className="purchases-page">

      {/* Header */}

      <div className="purchases-header">

        <div>
          <h1>Purchases</h1>
          <p>Manage restaurant purchases and stock buying</p>
        </div>

        <button
          className="add-purchase-btn"
          onClick={() => setShowForm(!showForm)}
        >
          + Add Purchase
        </button>

      </div>

      {/* Statistics */}

      <div className="purchase-stats">

        <div className="purchase-stat-card">
          <div className="purchase-icon">🛒</div>

          <div>
            <span>Total Purchases</span>
            <h2>{purchases.length}</h2>
          </div>
        </div>

        <div className="purchase-stat-card">
          <div className="purchase-icon">📦</div>

          <div>
            <span>Total Items</span>
            <h2>{totalItems}</h2>
          </div>
        </div>

        <div className="purchase-stat-card">
          <div className="purchase-icon">💰</div>

          <div>
            <span>Total Amount</span>
            <h2>Rs. {totalPurchases.toLocaleString()}</h2>
          </div>
        </div>

      </div>

      {/* Add Purchase Form */}

      {showForm && (
        <form
          className="purchase-form"
          onSubmit={addPurchase}
        >

          <input
            type="text"
            placeholder="Supplier Name"
            value={newPurchase.supplier}
            onChange={(e) =>
              setNewPurchase({
                ...newPurchase,
                supplier: e.target.value,
              })
            }
          />

          <input
            type="text"
            placeholder="Product Name"
            value={newPurchase.product}
            onChange={(e) =>
              setNewPurchase({
                ...newPurchase,
                product: e.target.value,
              })
            }
          />

          <input
            type="number"
            placeholder="Quantity"
            value={newPurchase.quantity}
            onChange={(e) =>
              setNewPurchase({
                ...newPurchase,
                quantity: e.target.value,
              })
            }
          />

          <input
            type="number"
            placeholder="Price"
            value={newPurchase.price}
            onChange={(e) =>
              setNewPurchase({
                ...newPurchase,
                price: e.target.value,
              })
            }
          />

          <button type="submit">
            Save Purchase
          </button>

          <button
            type="button"
            className="cancel-purchase-btn"
            onClick={() => setShowForm(false)}
          >
            Cancel
          </button>

        </form>
      )}

      {/* Search */}

      <div className="purchase-search">

        <input
          type="text"
          placeholder="🔍 Search by supplier or product..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

      </div>

      {/* Purchase Table */}

      <div className="purchases-card">

        <div className="purchases-card-title">

          <div>
            <h2>Purchase List</h2>
            <p>All restaurant purchase records</p>
          </div>

          <span className="purchase-count">
            {filteredPurchases.length} Purchases
          </span>

        </div>

        <div className="purchases-table">

          <div className="purchases-table-header">
            <span>Supplier</span>
            <span>Product</span>
            <span>Quantity</span>
            <span>Price</span>
            <span>Total</span>
            <span>Date</span>
            <span>Action</span>
          </div>

          {filteredPurchases.map((purchase) => (

            <div
              className="purchase-row"
              key={purchase.id}
            >

              <span className="supplier-name">
                {purchase.supplier}
              </span>

              <span>{purchase.product}</span>

              <span className="purchase-quantity">
                {purchase.quantity}
              </span>

              <span>
                Rs. {purchase.price.toLocaleString()}
              </span>

              <span className="purchase-total">
                Rs.{" "}
                {(
                  purchase.quantity * purchase.price
                ).toLocaleString()}
              </span>

              <span className="purchase-date">
                {purchase.date}
              </span>

              <button
                className="delete-purchase-btn"
                onClick={() =>
                  deletePurchase(purchase.id)
                }
              >
                Delete
              </button>

            </div>

          ))}

        </div>

        {filteredPurchases.length === 0 && (
          <p className="no-purchases">
            No purchases found.
          </p>
        )}

      </div>

    </div>
  );
};

export default Purchases;