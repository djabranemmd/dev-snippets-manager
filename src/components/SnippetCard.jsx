function SnippetCard({ snippet }) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5 transition hover:border-cyan-500">

      <div className="flex items-start justify-between">
        
        <div>
          <h3 className="text-xl font-semibold">
            {snippet.title}
          </h3>

          <span className="mt-2 inline-block rounded-lg bg-cyan-500/20 px-3 py-1 text-sm text-cyan-400">
            {snippet.language}
          </span>
        </div>

        <button className="rounded-lg bg-slate-800 px-3 py-2 text-sm transition hover:bg-slate-700">
          Copy
        </button>
      </div>

      <pre className="mt-5 overflow-x-auto rounded-xl bg-slate-950 p-4 text-sm text-slate-300">
        <code>
          {snippet.code}
        </code>
      </pre>
    </div>
  )
}

export default SnippetCard