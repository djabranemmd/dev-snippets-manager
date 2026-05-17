function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="flex">
        
        {/* Sidebar */}
        <aside className="w-[260px] border-r border-slate-800 bg-slate-900 p-6">
          <h1 className="text-2xl font-bold text-cyan-400">
            DevVault
          </h1>

          <p className="mt-2 text-sm text-slate-400">
            Manage your code snippets professionally.
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

        {/* Main Content */}
        <main className="flex-1 p-8">
          
          {/* Topbar */}
          <div className="flex items-center justify-between gap-4">
            <div>
              <h2 className="text-3xl font-bold">
                My Snippets
              </h2>

              <p className="mt-2 text-slate-400">
                Quickly save and manage your reusable code snippets.
              </p>
            </div>

            <input
              type="text"
              placeholder="Search snippets..."
              className="w-[320px] rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 outline-none transition focus:border-cyan-400"
            />
          </div>

          {/* Snippets Grid */}
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            
            {/* Card */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5 transition hover:border-cyan-500">
              
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-semibold">
                    Fetch API Example
                  </h3>

                  <span className="mt-2 inline-block rounded-lg bg-cyan-500/20 px-3 py-1 text-sm text-cyan-400">
                    JavaScript
                  </span>
                </div>

                <button className="rounded-lg bg-slate-800 px-3 py-2 text-sm transition hover:bg-slate-700">
                  Copy
                </button>
              </div>

              <pre className="mt-5 overflow-x-auto rounded-xl bg-slate-950 p-4 text-sm text-slate-300">
{`fetch('/api/data')
  .then(res => res.json())
  .then(data => console.log(data))`}
              </pre>
            </div>

          </div>
        </main>
      </div>
    </div>
  )
}

export default App