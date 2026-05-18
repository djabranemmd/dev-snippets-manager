import { useState } from 'react'

function AddSnippetForm({ addSnippet }) {
  const [title, setTitle] = useState('')
  const [language, setLanguage] = useState('')
  const [code, setCode] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!title || !language || !code) {
      return
    }

    const newSnippet = {
      id: Date.now(),
      title,
      language,
      code,
    }

    addSnippet(newSnippet)

    setTitle('')
    setLanguage('')
    setCode('')
  }

  return (
    <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900 p-6">
      
      <h2 className="text-2xl font-bold">
        Add New Snippet
      </h2>

      <p className="mt-2 text-slate-400">
        Save reusable snippets and access them anytime.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-6 space-y-5"
      >

        <div>
          <label className="mb-2 block text-sm text-slate-300">
            Snippet Title
          </label>

          <input
            type="text"
            placeholder="Example: Fetch API"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 outline-none transition focus:border-cyan-400"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-slate-300">
            Language
          </label>

          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 outline-none transition focus:border-cyan-400"
          >
            <option value="">
              Select Language
            </option>

            <option value="JavaScript">
              JavaScript
            </option>

            <option value="React">
              React
            </option>

            <option value="CSS">
              CSS
            </option>

            <option value="HTML">
              HTML
            </option>

            <option value="SQL">
              SQL
            </option>

            <option value="Bash">
              Bash
            </option>
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm text-slate-300">
            Code
          </label>

          <textarea
            rows="8"
            placeholder="Write your code snippet here..."
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 font-mono outline-none transition focus:border-cyan-400"
          />
        </div>

        <button
          type="submit"
          className="rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400"
        >
          Save Snippet
        </button>

      </form>
    </div>
  )
}

export default AddSnippetForm