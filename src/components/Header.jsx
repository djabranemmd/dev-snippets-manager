function Header() {
  return (
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
  )
}

export default Header