export default function Sidebar({
  darkMode,
  setDarkMode,
  activeFilter,
  setActiveFilter,
}) {
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

    </aside>
  );
}