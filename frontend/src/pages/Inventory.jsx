import { useState } from "react";
import "./Inventory.css";

const Inventory = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Chicken",
      category: "Food",
      stock: 45,
      minStock: 20,
      unit: "Kg",
    },
    {
      id: 2,
      name: "Burger Buns",
      category: "Bakery",
      stock: 12,
      minStock: 20,
      unit: "Pcs",
    },
    {
      id: 3,
      name: "Pizza Cheese",
      category: "Dairy",
      stock: 30,
      minStock: 15,
      unit: "Kg",
    },
    {
      id: 4,
      name: "Cold Drink",
      category: "Drinks",
      stock: 8,
      minStock: 15,
      unit: "Bottles",
    },
    {
      id: 5,
      name: "French Fries",
      category: "Food",
      stock: 25,
      minStock: 10,
      unit: "Kg",
    },
  ]);

  const [search, setSearch] = useState("");

  const updateStock = (id, amount) => {
    setProducts(
      products.map((product) =>
        product.id === id
          ? {
              ...product,
              stock: Math.max(0, product.stock + amount),
            }
          : product
      )
    );
  };

  const filteredProducts = products.filter(
    (product) =>
      product.name
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      product.category
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  const totalProducts = products.length;

  const lowStock = products.filter(
    (product) => product.stock <= product.minStock
  ).length;

  const outOfStock = products.filter(
    (product) => product.stock === 0
  ).length;

  const totalStock = products.reduce(
    (total, product) => total + product.stock,
    0
  );

  return (
    <div className="inventory-page">

      {/* Header */}
      <div className="inventory-header">

        <div>
          <h1>Inventory</h1>
          <p>Monitor and manage your restaurant stock</p>
        </div>

      </div>

      {/* Statistics */}
      <div className="inventory-stats">

        {/* Total Products */}
        <div className="inventory-stat-card">

          <div className="inventory-icon inventory-icon-box">
            <svg
              viewBox="0 0 64 64"
              width="32"
              height="32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 20l22-10 22 10-22 10-22-10z"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinejoin="round"
              />

              <path
                d="M10 20v25l22 10 22-10V20"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinejoin="round"
              />

              <path
                d="M32 30v25"
                stroke="currentColor"
                strokeWidth="4"
              />

              <path
                d="M21 15l22 10"
                stroke="currentColor"
                strokeWidth="4"
              />
            </svg>
          </div>

          <div>
            <span>Total Products</span>
            <h2>{totalProducts}</h2>
          </div>

        </div>

        {/* Total Stock */}
        <div className="inventory-stat-card">

          <div className="inventory-icon inventory-icon-chart">
            <svg
              viewBox="0 0 64 64"
              width="32"
              height="32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 54V10"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
              />

              <path
                d="M10 54h44"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
              />

              <rect
                x="18"
                y="34"
                width="7"
                height="14"
                rx="2"
                fill="currentColor"
              />

              <rect
                x="29"
                y="25"
                width="7"
                height="23"
                rx="2"
                fill="currentColor"
              />

              <rect
                x="40"
                y="15"
                width="7"
                height="33"
                rx="2"
                fill="currentColor"
              />
            </svg>
          </div>

          <div>
            <span>Total Stock</span>
            <h2>{totalStock}</h2>
          </div>

        </div>

        {/* Low Stock */}
        <div className="inventory-stat-card">

          <div className="inventory-icon inventory-icon-warning">
            <svg
              viewBox="0 0 64 64"
              width="32"
              height="32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M32 8L58 54H6L32 8z"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinejoin="round"
              />

              <path
                d="M32 23v15"
                stroke="currentColor"
                strokeWidth="5"
                strokeLinecap="round"
              />

              <circle
                cx="32"
                cy="46"
                r="2.5"
                fill="currentColor"
              />
            </svg>
          </div>

          <div>
            <span>Low Stock</span>
            <h2>{lowStock}</h2>
          </div>

        </div>

        {/* Out of Stock */}
        <div className="inventory-stat-card">

          <div className="inventory-icon inventory-icon-out">
            <svg
              viewBox="0 0 64 64"
              width="32"
              height="32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="32"
                cy="32"
                r="23"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
              />

              <path
                d="M22 22l20 20"
                stroke="currentColor"
                strokeWidth="5"
                strokeLinecap="round"
              />

              <path
                d="M42 22L22 42"
                stroke="currentColor"
                strokeWidth="5"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <div>
            <span>Out of Stock</span>
            <h2>{outOfStock}</h2>
          </div>

        </div>

      </div>

      {/* Search */}
      <div className="inventory-search">

        <svg
          className="inventory-search-icon"
          viewBox="0 0 64 64"
          width="21"
          height="21"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="27"
            cy="27"
            r="15"
            fill="none"
            stroke="currentColor"
            strokeWidth="5"
          />

          <path
            d="M38 38l15 15"
            stroke="currentColor"
            strokeWidth="5"
            strokeLinecap="round"
          />
        </svg>

        <input
          type="text"
          placeholder="Search product or category..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

      </div>

      {/* Inventory Card */}
      <div className="inventory-card">

        <div className="inventory-card-title">

          <div>
            <h2>Stock Overview</h2>
            <p>Current restaurant inventory</p>
          </div>

          <span className="inventory-count">
            {filteredProducts.length} Products
          </span>

        </div>

        <div className="inventory-table">

          <div className="inventory-table-header">
            <span>Product</span>
            <span>Category</span>
            <span>Current Stock</span>
            <span>Minimum Stock</span>
            <span>Status</span>
            <span>Update</span>
          </div>

          {filteredProducts.map((product) => {

            const isOutOfStock = product.stock === 0;

            const isLowStock =
              product.stock <= product.minStock;

            return (
              <div
                className="inventory-row"
                key={product.id}
              >

                <div className="inventory-product">

                  <div className="inventory-avatar">
                    {product.name.charAt(0)}
                  </div>

                  <span>{product.name}</span>

                </div>

                <span className="inventory-category">
                  {product.category}
                </span>

                <span className="current-stock">
                  {product.stock} {product.unit}
                </span>

                <span className="minimum-stock">
                  {product.minStock} {product.unit}
                </span>

                <span
                  className={
                    isOutOfStock
                      ? "stock-status out"
                      : isLowStock
                      ? "stock-status low"
                      : "stock-status available"
                  }
                >
                  {isOutOfStock
                    ? "Out of Stock"
                    : isLowStock
                    ? "Low Stock"
                    : "In Stock"}
                </span>

                <div className="stock-actions">

                  <button
                    onClick={() =>
                      updateStock(product.id, -1)
                    }
                  >
                    −
                  </button>

                  <button
                    onClick={() =>
                      updateStock(product.id, 1)
                    }
                  >
                    +
                  </button>

                </div>

              </div>
            );
          })}

        </div>

        {filteredProducts.length === 0 && (
          <p className="no-inventory">
            No products found.
          </p>
        )}

      </div>

    </div>
  );
};

export default Inventory;