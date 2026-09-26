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

        <div className="category-stat-card">
          <div className="category-icon">
            📂
          </div>

          <div>
            <span>Total Categories</span>
            <h2>{categories.length}</h2>
          </div>
        </div>

        <div className="category-stat-card">
          <div className="category-icon">
            📦
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

        <div className="category-stat-card">
          <div className="category-icon">
            🔍
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

        <input
          type="text"
          placeholder="🔍 Search category..."
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