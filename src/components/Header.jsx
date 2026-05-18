function Header({ searchTerm, setSearchTerm }) {
  return (
    <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
      
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
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 outline-none transition focus:border-cyan-400 lg:w-[350px]"
      />
    </div>
  )
}

export default Header