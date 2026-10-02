import { useState } from "react";
import "./Categories.css";

const Categories = () => {
  const [categories, setCategories] = useState([
    {
      id: 1,
      name: "Burgers",
      products: 8,
    },
    {
      id: 2,
      name: "Pizza",
      products: 5,
    },
    {
      id: 3,
      name: "Biryani",
      products: 4,
    },
    {
      id: 4,
      name: "Fast Food",
      products: 10,
    },
    {
      id: 5,
      name: "Drinks",
      products: 6,
    },
  ]);

  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [categoryName, setCategoryName] = useState("");

  const deleteCategory = (id) => {
    setCategories(
      categories.filter((category) => category.id !== id)
    );
  };

  const addCategory = (e) => {
    e.preventDefault();

    if (!categoryName.trim()) {
      return;
    }

    const newCategory = {
      id: Date.now(),
      name: categoryName,
      products: 0,
    };

    setCategories([...categories, newCategory]);
    setCategoryName("");
    setShowForm(false);
  };

  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="categories-page">

      {/* Header */}
      <div className="categories-header">

        <div>
          <h1>Categories</h1>
          <p>Manage your product categories</p>
        </div>

        <button
          className="add-category-btn"
          onClick={() => setShowForm(!showForm)}
        >
          + Add Category
        </button>

      </div>

      {/* Statistics */}
      <div className="category-stats">

        {/* Total Categories */}
        <div className="category-stat-card">

          <div className="category-icon category-icon-folder">
            <svg
              viewBox="0 0 64 64"
              width="32"
              height="32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 18c0-3.3 2.7-6 6-6h15l6 7h15c3.3 0 6 2.7 6 6v23c0 3.3-2.7 6-6 6H14c-3.3 0-6-2.7-6-6V18z"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinejoin="round"
              />

              <path
                d="M9 25h46"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <div>
            <span>Total Categories</span>
            <h2>{categories.length}</h2>
          </div>

        </div>

        {/* Total Products */}
        <div className="category-stat-card">

          <div className="category-icon category-icon-product">
            <svg
              viewBox="0 0 64 64"
              width="32"
              height="32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 20l20-9 20 9-20 9-20-9z"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinejoin="round"
              />

              <path
                d="M12 20v24l20 10 20-10V20"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinejoin="round"
              />

              <path
                d="M32 29v25"
                stroke="currentColor"
                strokeWidth="4"
              />

              <path
                d="M22 16l20 9"
                stroke="currentColor"
                strokeWidth="4"
              />
            </svg>
          </div>

          <div>
            <span>Total Products</span>
            <h2>
              {categories.reduce(
                (total, category) =>
                  total + category.products,
                0
              )}
            </h2>
          </div>

        </div>

        {/* Showing */}
        <div className="category-stat-card">

          <div className="category-icon category-icon-search">
            <svg
              viewBox="0 0 64 64"
              width="32"
              height="32"
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
          </div>

          <div>
            <span>Showing</span>
            <h2>{filteredCategories.length}</h2>
          </div>

        </div>

      </div>

      {/* Add Form */}
      {showForm && (
        <form
          className="category-form"
          onSubmit={addCategory}
        >

          <input
            type="text"
            placeholder="Enter category name..."
            value={categoryName}
            onChange={(e) =>
              setCategoryName(e.target.value)
            }
          />

          <button type="submit">
            Save Category
          </button>

          <button
            type="button"
            className="cancel-category-btn"
            onClick={() => setShowForm(false)}
          >
            Cancel
          </button>

        </form>
      )}

      {/* Search */}
      <div className="category-search">

        <svg
          className="search-icon"
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
          placeholder="Search category..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

      </div>

      {/* Categories Card */}
      <div className="categories-card">

        <div className="categories-card-title">

          <div>
            <h2>Category List</h2>
            <p>All restaurant product categories</p>
          </div>

          <span className="category-count">
            {filteredCategories.length} Categories
          </span>

        </div>

        <div className="categories-table">

          <div className="categories-table-header">
            <span>Category</span>
            <span>Products</span>
            <span>Status</span>
            <span>Action</span>
          </div>

          {filteredCategories.map((category) => (

            <div
              className="category-row"
              key={category.id}
            >

              <div className="category-name">

                <div className="category-avatar">
                  {category.name.charAt(0)}
                </div>

                <span>{category.name}</span>

              </div>

              <span className="product-count">
                {category.products} Products
              </span>

              <span className="category-status">
                Active
              </span>

              <div>

                <button className="edit-category-btn">
                  Edit
                </button>

                <button
                  className="delete-category-btn"
                  onClick={() =>
                    deleteCategory(category.id)
                  }
                >
                  Delete
                </button>

              </div>

            </div>

          ))}

        </div>

        {filteredCategories.length === 0 && (
          <p className="no-categories">
            No categories found.
          </p>
        )}

      </div>

    </div>
  );
};

export default Categories;