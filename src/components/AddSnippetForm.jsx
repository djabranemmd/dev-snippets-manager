import { useState } from 'react'

import toast from 'react-hot-toast'

function AddSnippetForm({ addSnippet }) {
  const [title, setTitle] = useState('')
  const [language, setLanguage] = useState('')
  const [code, setCode] = useState('')
  const [tags, setTags] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!title || !language || !code) {
      toast.error('Please fill all fields')

      return
    }

    const newSnippet = {
      id: Date.now(),
      title,
      language,
      code,
      tags: tags
        .split(',')
        .map((tag) => tag.trim())
        .filter(Boolean),
    }

    addSnippet(newSnippet)

    toast.success('Snippet added successfully')

    setTitle('')
    setLanguage('')
    setCode('')
    setTags('')
  }

  return (
    <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      
      <h2 className="text-2xl font-bold text-slate-900">
        Add New Snippet
      </h2>

      <p className="mt-2 text-slate-500">
        Store useful snippets and access them anytime.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-8 space-y-6"
      >

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Snippet Title
          </label>

          <input
            type="text"
            placeholder="Example: Fetch API"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full rounded-2xl border border-slate-200 bg-[#fcfbf8] px-5 py-4 outline-none transition focus:border-sky-400 focus:ring-4 focus:ring-sky-100"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Language
          </label>

          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="w-full rounded-2xl border border-slate-200 bg-[#fcfbf8] px-5 py-4 outline-none transition focus:border-sky-400 focus:ring-4 focus:ring-sky-100"
          >
            <option value="">Select Language</option>
            <option value="JavaScript">JavaScript</option>
            <option value="React">React</option>
            <option value="CSS">CSS</option>
            <option value="HTML">HTML</option>
            <option value="SQL">SQL</option>
            <option value="Bash">Bash</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Tags
          </label>

          <input
            type="text"
            placeholder="Example: api, frontend, async"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            className="w-full rounded-2xl border border-slate-200 bg-[#fcfbf8] px-5 py-4 outline-none transition focus:border-sky-400 focus:ring-4 focus:ring-sky-100"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Code
          </label>

          <textarea
            rows="8"
            placeholder="Write your code snippet here..."
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="w-full rounded-2xl border border-slate-200 bg-[#fcfbf8] px-5 py-4 font-mono outline-none transition focus:border-sky-400 focus:ring-4 focus:ring-sky-100"
          />
        </div>

        <button
          type="submit"
          className="rounded-2xl bg-sky-500 px-6 py-4 font-semibold text-white transition hover:bg-sky-400"
        >
          Save Snippet
        </button>

      </form>
    </div>
  )
}

export default AddSnippetForm