import { useState } from "react";
import "./Expenses.css";

const Expenses = () => {
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      title: "Electricity Bill",
      category: "Utilities",
      amount: 18500,
      date: "25 Sep 2026",
      description: "Monthly electricity bill",
    },
    {
      id: 2,
      title: "Gas Bill",
      category: "Utilities",
      amount: 9200,
      date: "24 Sep 2026",
      description: "Monthly gas bill",
    },
    {
      id: 3,
      title: "Cleaning Supplies",
      category: "Supplies",
      amount: 6500,
      date: "23 Sep 2026",
      description: "Restaurant cleaning items",
    },
  ]);

  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);

  const [newExpense, setNewExpense] = useState({
    title: "",
    category: "",
    amount: "",
    description: "",
  });

  const deleteExpense = (id) => {
    setExpenses(
      expenses.filter((expense) => expense.id !== id)
    );
  };

  const addExpense = (e) => {
    e.preventDefault();

    if (
      !newExpense.title ||
      !newExpense.category ||
      !newExpense.amount
    ) {
      return;
    }

    const expense = {
      id: Date.now(),
      title: newExpense.title,
      category: newExpense.category,
      amount: Number(newExpense.amount),
      date: new Date().toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }),
      description:
        newExpense.description || "No description",
    };

    setExpenses([expense, ...expenses]);

    setNewExpense({
      title: "",
      category: "",
      amount: "",
      description: "",
    });

    setShowForm(false);
  };

  const filteredExpenses = expenses.filter(
    (expense) =>
      expense.title
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      expense.category
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  const totalExpenses = expenses.reduce(
    (total, expense) => total + expense.amount,
    0
  );

  const totalShowing = filteredExpenses.reduce(
    (total, expense) => total + expense.amount,
    0
  );

  const categories = [
    ...new Set(expenses.map((expense) => expense.category)),
  ];

  return (
    <div className="expenses-page">

      {/* Header */}

      <div className="expenses-header">

        <div>
          <h1>Expenses</h1>
          <p>Track and manage restaurant expenses</p>
        </div>

        <button
          className="add-expense-btn"
          onClick={() => setShowForm(!showForm)}
        >
          + Add Expense
        </button>

      </div>

      {/* Statistics */}

      <div className="expense-stats">

        {/* Total Expenses */}

        <div className="expense-stat-card">

          <div className="expense-icon expense-icon-money">
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect
                x="2"
                y="5"
                width="20"
                height="14"
                rx="2"
              />
              <circle cx="12" cy="12" r="3" />
              <path d="M6 9h.01M18 15h.01" />
            </svg>
          </div>

          <div>
            <span>Total Expenses</span>
            <h2>
              Rs. {totalExpenses.toLocaleString()}
            </h2>
          </div>

        </div>

        {/* Total Records */}

        <div className="expense-stat-card">

          <div className="expense-icon expense-icon-records">
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect
                x="5"
                y="3"
                width="14"
                height="18"
                rx="2"
              />
              <path d="M9 7h6" />
              <path d="M9 11h6" />
              <path d="M9 15h4" />
            </svg>
          </div>

          <div>
            <span>Total Records</span>
            <h2>{expenses.length}</h2>
          </div>

        </div>

        {/* Categories */}

        <div className="expense-stat-card">

          <div className="expense-icon expense-icon-category">
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 6.5A1.5 1.5 0 0 1 4.5 5H10l2 2h7.5A1.5 1.5 0 0 1 21 8.5v9A1.5 1.5 0 0 1 19.5 19h-15A1.5 1.5 0 0 1 3 17.5z" />
            </svg>
          </div>

          <div>
            <span>Categories</span>
            <h2>{categories.length}</h2>
          </div>

        </div>

      </div>

      {/* Add Expense Form */}

      {showForm && (
        <form
          className="expense-form"
          onSubmit={addExpense}
        >

          <input
            type="text"
            placeholder="Expense Title"
            value={newExpense.title}
            onChange={(e) =>
              setNewExpense({
                ...newExpense,
                title: e.target.value,
              })
            }
          />

          <select
            value={newExpense.category}
            onChange={(e) =>
              setNewExpense({
                ...newExpense,
                category: e.target.value,
              })
            }
          >
            <option value="">Select Category</option>
            <option value="Utilities">Utilities</option>
            <option value="Supplies">Supplies</option>
            <option value="Rent">Rent</option>
            <option value="Salary">Salary</option>
            <option value="Maintenance">Maintenance</option>
            <option value="Other">Other</option>
          </select>

          <input
            type="number"
            placeholder="Amount"
            value={newExpense.amount}
            onChange={(e) =>
              setNewExpense({
                ...newExpense,
                amount: e.target.value,
              })
            }
          />

          <input
            type="text"
            placeholder="Description"
            value={newExpense.description}
            onChange={(e) =>
              setNewExpense({
                ...newExpense,
                description: e.target.value,
              })
            }
          />

          <button type="submit">
            Save Expense
          </button>

          <button
            type="button"
            className="cancel-expense-btn"
            onClick={() => setShowForm(false)}
          >
            Cancel
          </button>

        </form>
      )}

      {/* Search */}

      <div className="expense-search">

        <svg
          className="expense-search-icon"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="7" />
          <path d="m20 20-4-4" />
        </svg>

        <input
          type="text"
          placeholder="Search expense or category..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

      </div>

      {/* Expense Card */}

      <div className="expenses-card">

        <div className="expenses-card-title">

          <div>
            <h2>Expense List</h2>
            <p>All restaurant expense records</p>
          </div>

          <div className="expense-summary">

            <span>
              {filteredExpenses.length} Records
            </span>

            <strong>
              Rs. {totalShowing.toLocaleString()}
            </strong>

          </div>

        </div>

        <div className="expenses-table">

          <div className="expenses-table-header">
            <span>Expense</span>
            <span>Category</span>
            <span>Amount</span>
            <span>Date</span>
            <span>Description</span>
            <span>Action</span>
          </div>

          {filteredExpenses.map((expense) => (

            <div
              className="expense-row"
              key={expense.id}
            >

              <div className="expense-name">

                <div className="expense-avatar">
                  {expense.title.charAt(0)}
                </div>

                <span>{expense.title}</span>

              </div>

              <span className="expense-category">
                {expense.category}
              </span>

              <span className="expense-amount">
                Rs. {expense.amount.toLocaleString()}
              </span>

              <span className="expense-date">
                {expense.date}
              </span>

              <span className="expense-description">
                {expense.description}
              </span>

              <button
                className="delete-expense-btn"
                onClick={() =>
                  deleteExpense(expense.id)
                }
              >
                Delete
              </button>

            </div>

          ))}

        </div>

        {filteredExpenses.length === 0 && (
          <p className="no-expenses">
            No expenses found.
          </p>
        )}

      </div>

    </div>
  );
};

export default Expenses;