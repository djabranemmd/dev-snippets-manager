function Header({ searchTerm, setSearchTerm }) {
  return (
    <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
      
      <div>
        <h2 className="text-4xl font-bold tracking-tight text-slate-900">
          My Snippets
        </h2>

        <p className="mt-3 text-slate-500">
          Save, search, and reuse your favorite code snippets faster.
        </p>
      </div>

      <input
        type="text"
        placeholder="Search snippets..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 outline-none transition focus:border-sky-400 focus:ring-4 focus:ring-sky-100 lg:w-[380px]"
      />
    </div>
  )
}

export default Header