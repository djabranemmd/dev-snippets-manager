function Sidebar() {
  return (
    <aside className="w-[260px] border-r border-slate-800 bg-slate-900 p-6">
      
      <h1 className="text-2xl font-bold text-cyan-400">
        Dev Snippets Manager
      </h1>

      <p className="mt-2 text-sm text-slate-400">
        Save and organize your favorite code snippets.
      </p>

      <button className="mt-6 w-full rounded-xl bg-cyan-500 px-4 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400">
        + Add Snippet
      </button>

      <div className="mt-10 space-y-3">

        <button className="w-full rounded-xl bg-slate-800 px-4 py-3 text-left transition hover:bg-slate-700">
          All Snippets
        </button>

        <button className="w-full rounded-xl px-4 py-3 text-left text-slate-400 transition hover:bg-slate-800 hover:text-white">
          Favorites
        </button>

        <button className="w-full rounded-xl px-4 py-3 text-left text-slate-400 transition hover:bg-slate-800 hover:text-white">
          JavaScript
        </button>

        <button className="w-full rounded-xl px-4 py-3 text-left text-slate-400 transition hover:bg-slate-800 hover:text-white">
          React
        </button>

        <button className="w-full rounded-xl px-4 py-3 text-left text-slate-400 transition hover:bg-slate-800 hover:text-white">
          CSS
        </button>

      </div>
    </aside>
  )
}

export default Sidebar