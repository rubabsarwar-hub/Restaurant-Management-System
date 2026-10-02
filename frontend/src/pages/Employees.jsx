import { useState } from "react";
import "./Employees.css";

const Employees = () => {
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Ali Raza",
      phone: "0300-1234567",
      role: "Manager",
      salary: 45000,
      status: "Active",
    },
    {
      id: 2,
      name: "Ahmed Khan",
      phone: "0312-7654321",
      role: "Chef",
      salary: 38000,
      status: "Active",
    },
    {
      id: 3,
      name: "Usman Ali",
      phone: "0321-9876543",
      role: "Waiter",
      salary: 25000,
      status: "Active",
    },
    {
      id: 4,
      name: "Hassan Raza",
      phone: "0333-4567890",
      role: "Cashier",
      salary: 30000,
      status: "Inactive",
    },
  ]);

  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);

  const [newEmployee, setNewEmployee] = useState({
    name: "",
    phone: "",
    role: "",
    salary: "",
  });

  const addEmployee = (e) => {
    e.preventDefault();

    if (
      !newEmployee.name ||
      !newEmployee.phone ||
      !newEmployee.role ||
      !newEmployee.salary
    ) {
      return;
    }

    const employee = {
      id: Date.now(),
      name: newEmployee.name,
      phone: newEmployee.phone,
      role: newEmployee.role,
      salary: Number(newEmployee.salary),
      status: "Active",
    };

    setEmployees([...employees, employee]);

    setNewEmployee({
      name: "",
      phone: "",
      role: "",
      salary: "",
    });

    setShowForm(false);
  };

  const deleteEmployee = (id) => {
    setEmployees(
      employees.filter((employee) => employee.id !== id)
    );
  };

  const filteredEmployees = employees.filter(
    (employee) =>
      employee.name
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      employee.role
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      employee.phone.includes(search)
  );

  const activeEmployees = employees.filter(
    (employee) => employee.status === "Active"
  ).length;

  const totalSalary = employees.reduce(
    (total, employee) => total + employee.salary,
    0
  );

  return (
    <div className="employees-page">

      {/* Header */}

      <div className="employees-header">

        <div>
          <h1>Employees</h1>
          <p>Manage your restaurant staff</p>
        </div>

        <button
          className="add-employee-btn"
          onClick={() => setShowForm(!showForm)}
        >
          + Add Employee
        </button>

      </div>

      {/* Statistics */}

      <div className="employee-stats">

        {/* Total Employees */}

        <div className="employee-stat-card">

          <div className="employee-icon employee-icon-users">
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
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </div>

          <div>
            <span>Total Employees</span>
            <h2>{employees.length}</h2>
          </div>

        </div>

        {/* Active Employees */}

        <div className="employee-stat-card">

          <div className="employee-icon employee-icon-active">
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
              <circle cx="12" cy="12" r="9" />
              <path d="m8 12 2.5 2.5L16 9" />
            </svg>
          </div>

          <div>
            <span>Active Employees</span>
            <h2>{activeEmployees}</h2>
          </div>

        </div>

        {/* Monthly Salaries */}

        <div className="employee-stat-card">

          <div className="employee-icon employee-icon-money">
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
            <span>Monthly Salaries</span>
            <h2>
              Rs. {totalSalary.toLocaleString()}
            </h2>
          </div>

        </div>

      </div>

      {/* Add Employee Form */}

      {showForm && (
        <form
          className="employee-form"
          onSubmit={addEmployee}
        >

          <input
            type="text"
            placeholder="Employee Name"
            value={newEmployee.name}
            onChange={(e) =>
              setNewEmployee({
                ...newEmployee,
                name: e.target.value,
              })
            }
          />

          <input
            type="text"
            placeholder="Phone Number"
            value={newEmployee.phone}
            onChange={(e) =>
              setNewEmployee({
                ...newEmployee,
                phone: e.target.value,
              })
            }
          />

          <input
            type="text"
            placeholder="Role"
            value={newEmployee.role}
            onChange={(e) =>
              setNewEmployee({
                ...newEmployee,
                role: e.target.value,
              })
            }
          />

          <input
            type="number"
            placeholder="Monthly Salary"
            value={newEmployee.salary}
            onChange={(e) =>
              setNewEmployee({
                ...newEmployee,
                salary: e.target.value,
              })
            }
          />

          <button type="submit">
            Save Employee
          </button>

          <button
            type="button"
            className="cancel-employee-btn"
            onClick={() => setShowForm(false)}
          >
            Cancel
          </button>

        </form>
      )}

      {/* Search */}

      <div className="employee-search">

        <svg
          className="employee-search-icon"
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
          placeholder="Search employee by name, role or phone..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

      </div>

      {/* Employees Card */}

      <div className="employees-card">

        <div className="employees-card-title">

          <div>
            <h2>Staff List</h2>
            <p>All restaurant employees</p>
          </div>

          <span className="employee-count">
            {filteredEmployees.length} Employees
          </span>

        </div>

        <table>

          <thead>
            <tr>
              <th>Employee</th>
              <th>Phone</th>
              <th>Role</th>
              <th>Salary</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>

            {filteredEmployees.map((employee) => (
              <tr key={employee.id}>

                <td>
                  <div className="employee-name">

                    <div className="employee-avatar">
                      {employee.name.charAt(0)}
                    </div>

                    <span>{employee.name}</span>

                  </div>
                </td>

                <td>{employee.phone}</td>

                <td>
                  <span className="role-badge">
                    {employee.role}
                  </span>
                </td>

                <td className="salary">
                  Rs. {employee.salary.toLocaleString()}
                </td>

                <td>
                  <span
                    className={`status-badge ${
                      employee.status.toLowerCase()
                    }`}
                  >
                    {employee.status}
                  </span>
                </td>

                <td>

                  <button className="edit-employee-btn">
                    Edit
                  </button>

                  <button
                    className="delete-employee-btn"
                    onClick={() =>
                      deleteEmployee(employee.id)
                    }
                  >
                    Delete
                  </button>

                </td>

              </tr>
            ))}

          </tbody>

        </table>

        {filteredEmployees.length === 0 && (
          <p className="no-employees">
            No employees found.
          </p>
        )}

      </div>

    </div>
  );
};

export default Employees;