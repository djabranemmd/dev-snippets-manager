import {
  signOut,
} from "firebase/auth";

import { auth } from "../firebase/firebase";

import { useAuth } from "../context/AuthProvider";

export default function Sidebar({
  darkMode,
  setDarkMode,
  activeFilter,
  setActiveFilter,
}) {
  const { user } = useAuth();

  const handleLogout = async () => {
    await signOut(auth);
  };

  return (
    <aside className="sidebar">

      <div className="sidebar-logo">

        <div className="logo-box">
          DS
        </div>

        <div>
          <h2>Dev Snippets</h2>
          <p>Manager</p>
        </div>

      </div>

      <div className="sidebar-menu">

        <button
          className={`menu-btn ${
            activeFilter === "all"
              ? "active"
              : ""
          }`}
          onClick={() =>
            setActiveFilter("all")
          }
        >
          📚 All Snippets
        </button>

        <button
          className={`menu-btn ${
            activeFilter === "favorites"
              ? "active"
              : ""
          }`}
          onClick={() =>
            setActiveFilter("favorites")
          }
        >
          ⭐ Favorites
        </button>

      </div>

      <div
        style={{
          marginTop: "auto",
        }}
      >

        <p
          style={{
            fontSize: "14px",
            marginBottom: "12px",
          }}
        >
          {user?.email}
        </p>

        <button
          className="theme-btn"
          onClick={() =>
            setDarkMode(!darkMode)
          }
        >
          {darkMode
            ? "☀ Light Mode"
            : "🌙 Dark Mode"}
        </button>

        <button
          className="menu-btn"
          onClick={handleLogout}
          style={{
            marginTop: "12px",
            width: "100%",
          }}
        >
          Logout
        </button>

      </div>

    </aside>
  );
}