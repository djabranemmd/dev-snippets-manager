function Header({
  searchTerm,
  setSearchTerm,
  setSidebarOpen,
}) {
  return (
    <header className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
      
      <div className="flex items-center gap-4">

        <button
          onClick={() => setSidebarOpen(true)}
          className="flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-white text-2xl text-slate-700 shadow-sm dark:border-slate-700 dark:bg-slate-800 dark:text-white lg:hidden"
        >
          ☰
        </button>

        <div>
          <h2 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            My Snippets
          </h2>

          <p className="mt-2 text-slate-500 dark:text-slate-400">
            Quickly search and manage your saved code snippets.
          </p>
        </div>

      </div>

      <div className="w-full lg:w-[350px]">
        
        <input
          type="text"
          placeholder="Search snippets..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm outline-none transition focus:border-sky-400 focus:ring-4 focus:ring-sky-100 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
        />

      </div>
    </header>
  )
}

export default Header