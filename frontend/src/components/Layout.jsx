import "./Layout.css";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Sidebar />

      <div className="main-section">
        <Navbar />

        <main className="content">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;