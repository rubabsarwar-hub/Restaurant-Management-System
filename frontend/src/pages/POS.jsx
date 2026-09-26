import { useMemo, useState } from "react";
import "./POS.css";

const POS = () => {
  const [cart, setCart] = useState([]);

  const [customerName, setCustomerName] = useState("");
  const [tableNumber, setTableNumber] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("Cash");
  const [orderType, setOrderType] = useState("Dine In");
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [discount, setDiscount] = useState(0);

  const taxRate = 5;

  const products = [
    {
      id: 1,
      name: "Chicken Burger",
      price: 450,
      category: "Burgers",
      emoji: "🍔",
    },
    {
      id: 2,
      name: "Zinger Burger",
      price: 550,
      category: "Burgers",
      emoji: "🍔",
    },
    {
      id: 3,
      name: "Pizza",
      price: 1200,
      category: "Pizza",
      emoji: "🍕",
    },
    {
      id: 4,
      name: "French Fries",
      price: 250,
      category: "Sides",
      emoji: "🍟",
    },
    {
      id: 5,
      name: "Cold Drink",
      price: 120,
      category: "Drinks",
      emoji: "🥤",
    },
    {
      id: 6,
      name: "Chicken Biryani",
      price: 350,
      category: "Rice",
      emoji: "🍛",
    },
    {
      id: 7,
      name: "Chicken Wings",
      price: 650,
      category: "Sides",
      emoji: "🍗",
    },
    {
      id: 8,
      name: "Club Sandwich",
      price: 500,
      category: "Sandwich",
      emoji: "🥪",
    },
  ];

  const categories = [
    "All",
    "Burgers",
    "Pizza",
    "Sides",
    "Drinks",
    "Rice",
    "Sandwich",
  ];

  // FILTER PRODUCTS
  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      category === "All" || product.category === category;

    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  // ADD TO CART
  const addToCart = (product) => {
    const existingProduct = cart.find(
      (item) => item.id === product.id
    );

    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // INCREASE
  const increaseQuantity = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  // DECREASE
  const decreaseQuantity = (id) => {
    setCart(
      cart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // REMOVE
  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  // SUBTOTAL
  const subtotal = useMemo(() => {
    return cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
  }, [cart]);

  // DISCOUNT AMOUNT
  const discountAmount = (subtotal * discount) / 100;

  // TAX
  const taxableAmount = subtotal - discountAmount;
  const taxAmount = (taxableAmount * taxRate) / 100;

  // GRAND TOTAL
  const grandTotal = taxableAmount + taxAmount;

  // ITEMS COUNT
  const totalItems = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  // PLACE ORDER
  const placeOrder = () => {
    if (cart.length === 0) {
      alert("Please add products to the order.");
      return;
    }

    if (!customerName.trim()) {
      alert("Please enter customer name.");
      return;
    }

    if (orderType === "Dine In" && !tableNumber.trim()) {
      alert("Please enter table number.");
      return;
    }

    const newOrder = {
      id: Date.now(),
      customerName,
      tableNumber:
        orderType === "Dine In" ? tableNumber : "N/A",
      orderType,
      paymentMethod,
      subtotal,
      discount: discountAmount,
      tax: taxAmount,
      total: grandTotal,
      status: "Pending",
      items: cart,
      createdAt: new Date().toISOString(),
    };

    const existingOrders =
      JSON.parse(localStorage.getItem("orders")) || [];

    localStorage.setItem(
      "orders",
      JSON.stringify([...existingOrders, newOrder])
    );

    alert("Order placed successfully!");

    setCart([]);
    setCustomerName("");
    setTableNumber("");
    setPaymentMethod("Cash");
    setOrderType("Dine In");
    setDiscount(0);
  };

  return (
    <div className="pos-page">

      {/* HEADER */}
      <div className="pos-header">
        <div>
          <p className="pos-label">POINT OF SALE</p>
          <h1>New Order</h1>
          <p>Create and manage customer orders</p>
        </div>

        <div className="pos-status">
          <span></span>
          POS Online
        </div>
      </div>

      <div className="pos-layout">

        {/* LEFT SIDE */}
        <div className="menu-area">

          {/* SEARCH */}
          <div className="pos-search">
            <span>⌕</span>

            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <kbd>Ctrl K</kbd>
          </div>

          {/* CATEGORIES */}
          <div className="category-list">
            {categories.map((item) => (
              <button
                key={item}
                className={
                  category === item
                    ? "category-btn active"
                    : "category-btn"
                }
                onClick={() => setCategory(item)}
              >
                {item}
              </button>
            ))}
          </div>

          {/* PRODUCTS HEADER */}
          <div className="products-heading">
            <div>
              <h2>Menu</h2>
              <p>
                {filteredProducts.length} products available
              </p>
            </div>
          </div>

          {/* PRODUCTS */}
          <div className="product-grid">

            {filteredProducts.map((product) => (
              <div
                className="pos-product-card"
                key={product.id}
                onClick={() => addToCart(product)}
              >

                <div className="product-image">
                  {product.emoji}
                </div>

                <div className="product-info">
                  <span>{product.category}</span>

                  <h3>{product.name}</h3>

                  <div className="product-bottom">
                    <strong>
                      Rs. {product.price.toLocaleString()}
                    </strong>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        addToCart(product);
                      }}
                    >
                      +
                    </button>
                  </div>
                </div>

              </div>
            ))}

            {filteredProducts.length === 0 && (
              <div className="no-products">
                <div>🔍</div>
                <h3>No products found</h3>
                <p>Try another search or category.</p>
              </div>
            )}

          </div>
        </div>

        {/* RIGHT SIDE - ORDER */}
        <div className="order-panel">

          <div className="order-panel-header">
            <div>
              <p>ORDER</p>
              <h2>Current Order</h2>
            </div>

            <div className="items-count">
              {totalItems} items
            </div>
          </div>

          {/* CUSTOMER */}
          <div className="customer-box">

            <div className="input-group">
              <label>Customer</label>

              <input
                type="text"
                placeholder="Customer name"
                value={customerName}
                onChange={(e) =>
                  setCustomerName(e.target.value)
                }
              />
            </div>

            <div className="order-type">
              <label>Order Type</label>

              <div className="type-buttons">
                {["Dine In", "Takeaway", "Delivery"].map(
                  (type) => (
                    <button
                      key={type}
                      className={
                        orderType === type
                          ? "type-btn active"
                          : "type-btn"
                      }
                      onClick={() => setOrderType(type)}
                    >
                      {type}
                    </button>
                  )
                )}
              </div>
            </div>

            {orderType === "Dine In" && (
              <div className="input-group">
                <label>Table</label>

                <input
                  type="text"
                  placeholder="Table number"
                  value={tableNumber}
                  onChange={(e) =>
                    setTableNumber(e.target.value)
                  }
                />
              </div>
            )}

          </div>

          {/* CART */}
          <div className="cart-area">

            {cart.length === 0 ? (
              <div className="empty-cart">
                <div className="empty-cart-icon">
                  🛒
                </div>

                <h3>Your cart is empty</h3>

                <p>
                  Select products from the menu to start
                  an order.
                </p>
              </div>
            ) : (
              <div className="cart-items">

                {cart.map((item) => (
                  <div
                    className="cart-item"
                    key={item.id}
                  >

                    <div className="cart-item-icon">
                      {item.emoji}
                    </div>

                    <div className="cart-item-info">
                      <h4>{item.name}</h4>

                      <span>
                        Rs. {item.price.toLocaleString()}
                      </span>

                      <div className="quantity-controls">

                        <button
                          onClick={() =>
                            decreaseQuantity(item.id)
                          }
                        >
                          −
                        </button>

                        <strong>
                          {item.quantity}
                        </strong>

                        <button
                          onClick={() =>
                            increaseQuantity(item.id)
                          }
                        >
                          +
                        </button>

                      </div>
                    </div>

                    <div className="cart-item-right">

                      <strong>
                        Rs.{" "}
                        {(
                          item.price * item.quantity
                        ).toLocaleString()}
                      </strong>

                      <button
                        className="remove-item"
                        onClick={() =>
                          removeItem(item.id)
                        }
                      >
                        ×
                      </button>

                    </div>

                  </div>
                ))}

              </div>
            )}

          </div>

          {/* BILL */}
          <div className="bill-section">

            <div className="bill-row">
              <span>Subtotal</span>
              <strong>
                Rs. {subtotal.toLocaleString()}
              </strong>
            </div>

            <div className="discount-row">
              <span>Discount</span>

              <div className="discount-input">
                <input
                  type="number"
                  min="0"
                  max="100"
                  value={discount}
                  onChange={(e) =>
                    setDiscount(
                      Math.min(
                        100,
                        Math.max(0, Number(e.target.value))
                      )
                    )
                  }
                />
                <span>%</span>
              </div>

              <strong>
                - Rs. {discountAmount.toLocaleString()}
              </strong>
            </div>

            <div className="bill-row">
              <span>Tax ({taxRate}%)</span>

              <strong>
                Rs. {taxAmount.toLocaleString()}
              </strong>
            </div>

            <div className="bill-total">
              <span>Total</span>

              <strong>
                Rs. {Math.round(grandTotal).toLocaleString()}
              </strong>
            </div>

          </div>

          {/* PAYMENT */}
          <div className="payment-section">

            <label>Payment Method</label>

            <div className="payment-buttons">

              {[
                { name: "Cash", icon: "💵" },
                { name: "Card", icon: "💳" },
                { name: "Online", icon: "📱" },
              ].map((payment) => (
                <button
                  key={payment.name}
                  className={
                    paymentMethod === payment.name
                      ? "payment-btn active"
                      : "payment-btn"
                  }
                  onClick={() =>
                    setPaymentMethod(payment.name)
                  }
                >
                  <span>{payment.icon}</span>
                  {payment.name}
                </button>
              ))}

            </div>

          </div>

          {/* PLACE ORDER */}
          <button
            className="place-order-btn"
            onClick={placeOrder}
          >
            <span>✓</span>
            Place Order
            <strong>
              Rs. {Math.round(grandTotal).toLocaleString()}
            </strong>
          </button>

        </div>
      </div>
    </div>
  );
};

export default POS;