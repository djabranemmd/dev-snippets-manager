function SnippetCard({ snippet }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">

      <div className="flex items-start justify-between gap-4">
        
        <div>
          <h3 className="text-xl font-bold text-slate-900">
            {snippet.title}
          </h3>

          <span className="mt-3 inline-block rounded-xl bg-sky-100 px-3 py-1 text-sm font-medium text-sky-700">
            {snippet.language}
          </span>
        </div>

        <button className="rounded-xl bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-200">
          Copy
        </button>
      </div>

      <pre className="mt-6 overflow-x-auto rounded-2xl bg-[#f8f6f2] p-5 text-sm leading-7 text-slate-700">
        <code>
          {snippet.code}
        </code>
      </pre>
    </div>
  )
}

export default SnippetCard