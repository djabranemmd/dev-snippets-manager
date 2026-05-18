function Sidebar() {
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

        <button className="w-full rounded-2xl bg-slate-100 px-4 py-3 text-left font-medium text-slate-900 transition hover:bg-slate-200">
          All Snippets
        </button>

        <button className="w-full rounded-2xl px-4 py-3 text-left text-slate-500 transition hover:bg-slate-100 hover:text-slate-900">
          Favorites
        </button>

        <button className="w-full rounded-2xl px-4 py-3 text-left text-slate-500 transition hover:bg-slate-100 hover:text-slate-900">
          JavaScript
        </button>

        <button className="w-full rounded-2xl px-4 py-3 text-left text-slate-500 transition hover:bg-slate-100 hover:text-slate-900">
          React
        </button>

        <button className="w-full rounded-2xl px-4 py-3 text-left text-slate-500 transition hover:bg-slate-100 hover:text-slate-900">
          CSS
        </button>

      </div>
    </aside>
  )
}

export default Sidebar