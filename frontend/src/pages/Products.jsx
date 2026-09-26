import { useState } from "react";
import "./Products.css";

const Products = () => {
  const [products, setProducts] = useState(() => {
    const savedProducts = localStorage.getItem("products");

    return savedProducts
      ? JSON.parse(savedProducts)
      : [
          {
            id: 1,
            name: "Chicken Burger",
            price: 450,
            stock: 20,
          },
          {
            id: 2,
            name: "Zinger Burger",
            price: 550,
            stock: 15,
          },
          {
            id: 3,
            name: "Pizza",
            price: 1200,
            stock: 10,
          },
          {
            id: 4,
            name: "French Fries",
            price: 250,
            stock: 25,
          },
        ];
  });

  const [showForm, setShowForm] = useState(false);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");

  // Add Product
  const addProduct = (e) => {
    e.preventDefault();

    if (!name || !price || !stock) {
      alert("Please fill all fields");
      return;
    }

    const newProduct = {
      id: Date.now(),
      name: name,
      price: Number(price),
      stock: Number(stock),
    };

    const updatedProducts = [...products, newProduct];

    setProducts(updatedProducts);

    localStorage.setItem(
      "products",
      JSON.stringify(updatedProducts)
    );

    setName("");
    setPrice("");
    setStock("");

    setShowForm(false);

    alert("Product added successfully!");
  };

  // Delete Product
  const deleteProduct = (id) => {
    const updatedProducts = products.filter(
      (product) => product.id !== id
    );

    setProducts(updatedProducts);

    localStorage.setItem(
      "products",
      JSON.stringify(updatedProducts)
    );
  };

  return (
    <div className="products-page">

      {/* Header */}
      <div className="products-header">

        <div>
          <h1>Products</h1>
          <p>Manage restaurant products and stock</p>
        </div>

        <button
          className="add-product-btn"
          onClick={() => setShowForm(!showForm)}
        >
          + Add Product
        </button>

      </div>

      {/* Add Product Form */}
      {showForm && (
        <form
          className="product-form"
          onSubmit={addProduct}
        >

          <input
            type="text"
            placeholder="Product Name"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
          />

          <input
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e) =>
              setPrice(e.target.value)
            }
          />

          <input
            type="number"
            placeholder="Stock"
            value={stock}
            onChange={(e) =>
              setStock(e.target.value)
            }
          />

          <button type="submit">
            Save Product
          </button>

        </form>
      )}

      {/* Products Table */}
      <div className="products-card">

        <div className="products-table-header">
          <span>Product Name</span>
          <span>Price</span>
          <span>Stock</span>
          <span>Action</span>
        </div>

        {products.length === 0 ? (

          <div className="no-products">
            <h3>No Products</h3>
            <p>Add a product to get started.</p>
          </div>

        ) : (

          products.map((product) => (

            <div
              className="product-row"
              key={product.id}
            >

              <span>{product.name}</span>

              <span>
                Rs. {product.price}
              </span>

              <span
                className={
                  product.stock <= 5
                    ? "low-stock"
                    : "stock"
                }
              >
                {product.stock}
              </span>

              <button
                className="delete-btn"
                onClick={() =>
                  deleteProduct(product.id)
                }
              >
                Delete
              </button>

            </div>

          ))

        )}

      </div>

    </div>
  );
};

export default Products;