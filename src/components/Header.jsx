export default function Header({
  search,
  setSearch,
}) {
  return (
    <header className="header">

      <div>
        <h1>Dev Snippets Manager</h1>
        <p>Manage your personal code snippets</p>
      </div>

      <input
        type="text"
        placeholder="Search snippets..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />

    </header>
  );
}