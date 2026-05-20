function Sidebar({
  activeFilter,
  setActiveFilter,
}) {
  return (
    <aside className="min-h-screen w-[280px] border-r border-slate-200 bg-white p-7">
      
      <h1 className="text-3xl font-bold tracking-tight text-slate-900">
        Dev Snippets
      </h1>

      <p className="mt-3 text-sm leading-6 text-slate-500">
        Organize and manage your reusable developer snippets.
      </p>

      <button className="mt-8 w-full rounded-2xl bg-sky-500 px-5 py-4 font-semibold text-white shadow-sm transition hover:bg-sky-400">
        + Add Snippet
      </button>

      <div className="mt-10 space-y-2">

        <button
          onClick={() => setActiveFilter('all')}
          className={`w-full rounded-2xl px-4 py-3 text-left font-medium transition ${
            activeFilter === 'all'
              ? 'bg-slate-100 text-slate-900'
              : 'text-slate-500 hover:bg-slate-100 hover:text-slate-900'
          }`}
        >
          All Snippets
        </button>

        <button
          onClick={() => setActiveFilter('favorites')}
          className={`w-full rounded-2xl px-4 py-3 text-left font-medium transition ${
            activeFilter === 'favorites'
              ? 'bg-slate-100 text-slate-900'
              : 'text-slate-500 hover:bg-slate-100 hover:text-slate-900'
          }`}
        >
          Favorites
        </button>

      </div>
    </aside>
  )
}

export default Sidebar