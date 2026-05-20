function Sidebar({
  activeFilter,
  setActiveFilter,
  sidebarOpen,
  setSidebarOpen,
  darkMode,
  setDarkMode,
}) {
  return (
    <>
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
        />
      )}

      <aside
        className={`fixed left-0 top-0 z-50 min-h-screen w-[280px] border-r border-slate-200 bg-white p-7 transition-transform duration-300 dark:border-slate-800 dark:bg-[#111827] lg:static lg:translate-x-0 ${
          sidebarOpen
            ? 'translate-x-0'
            : '-translate-x-full'
        }`}
      >
        
        <div className="flex items-center justify-between lg:block">

          <div>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              Dev Snippets
            </h1>

            <p className="mt-3 text-sm leading-6 text-slate-500 dark:text-slate-400">
              Organize and manage your reusable developer snippets.
            </p>
          </div>

          <button
            onClick={() => setSidebarOpen(false)}
            className="text-3xl text-slate-400 lg:hidden"
          >
            ×
          </button>

        </div>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="mt-8 w-full rounded-2xl border border-slate-200 bg-slate-100 px-5 py-4 font-semibold text-slate-700 transition hover:bg-slate-200 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700"
        >
          {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>

        <div className="mt-10 space-y-2">

          <button
            onClick={() => {
              setActiveFilter('all')
              setSidebarOpen(false)
            }}
            className={`w-full rounded-2xl px-4 py-3 text-left font-medium transition ${
              activeFilter === 'all'
                ? 'bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-white'
                : 'text-slate-500 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white'
            }`}
          >
            All Snippets
          </button>

          <button
            onClick={() => {
              setActiveFilter('favorites')
              setSidebarOpen(false)
            }}
            className={`w-full rounded-2xl px-4 py-3 text-left font-medium transition ${
              activeFilter === 'favorites'
                ? 'bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-white'
                : 'text-slate-500 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white'
            }`}
          >
            Favorites
          </button>

        </div>
      </aside>
    </>
  )
}

export default Sidebar