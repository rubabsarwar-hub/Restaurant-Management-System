
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Layout from "./components/Layout";
import Customers from "./pages/Customers";
import Dashboard from "./pages/Dashboard";
import POS from "./pages/POS";
import Orders from "./pages/Orders";
import Products from "./pages/Products";
import Categories from "./pages/Categories";
import Purchases from "./pages/Purchases";
import Inventory from "./pages/Inventory";
import Suppliers from "./pages/Suppliers";
import Expenses from "./pages/Expenses";
import Sales from "./pages/Sales";
import Reports from "./pages/Reports";
import Employees from "./pages/Employees";
import Settings from "./pages/Settings";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Dashboard */}
        <Route
          path="/dashboard"
          element={
            <Layout>
              <Dashboard />
            </Layout>
          }
        />

        {/* POS */}
        <Route
          path="/pos"
          element={
            <Layout>
              <POS />
            </Layout>
          }
        />

        {/* Orders */}
        <Route
          path="/orders"
          element={
            <Layout>
              <Orders />
            </Layout>
          }
        />

        {/* Products */}
        <Route
          path="/products"
          element={
            <Layout>
              <Products />
            </Layout>
          }
        />

        <Route
  path="/categories"
  element={
    <Layout>
      <Categories />
    </Layout>
  }
/>

<Route
  path="/purchases"
  element={
    <Layout>
      <Purchases />
    </Layout>
  }
/>

<Route
  path="/inventory"
  element={
    <Layout>
      <Inventory />
    </Layout>
  }
/>

<Route
  path="/suppliers"
  element={
    <Layout>
      <Suppliers />
    </Layout>
  }
/>

<Route
  path="/expenses"
  element={
    <Layout>
      <Expenses />
    </Layout>
  }
/>

<Route
  path="/sales"
  element={
    <Layout>
      <Sales />
    </Layout>
  }
/>

<Route
  path="/reports"
  element={
    <Layout>
      <Reports />
    </Layout>
  }
/>

<Route
  path="/employees"
  element={
    <Layout>
      <Employees />
    </Layout>
  }
/>

        {/* Customers */}
<Route
  path="/customers"
  element={
    <Layout>
      <Customers />
    </Layout>
  }
/>

<Route
  path="/settings"
  element={
    <Layout>
      <Settings />
    </Layout>
  }
/>

        {/* Any unknown URL */}
        <Route
          path="*"
          element={<Navigate to="/dashboard" replace />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;

