import { useEffect, useState } from 'react'

import toast from 'react-hot-toast'

function EditSnippetModal({
  snippet,
  closeModal,
  updateSnippet,
}) {
  const [title, setTitle] = useState('')
  const [language, setLanguage] = useState('')
  const [code, setCode] = useState('')
  const [tags, setTags] = useState('')

  useEffect(() => {
    if (snippet) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setTitle(snippet.title)
      setLanguage(snippet.language)
      setCode(snippet.code)
      setTags(snippet.tags?.join(', ') || '')
    }
  }, [snippet])

  const handleSubmit = (e) => {
    e.preventDefault()

    const updatedSnippet = {
      ...snippet,
      title,
      language,
      code,
      tags: tags
        .split(',')
        .map((tag) => tag.trim())
        .filter(Boolean),
    }

    updateSnippet(updatedSnippet)

    toast.success('Snippet updated successfully')

    closeModal()
  }

  if (!snippet) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-6">
      
      <div className="w-full max-w-2xl rounded-3xl bg-white p-8 shadow-2xl">

        <div className="flex items-center justify-between">
          
          <h2 className="text-3xl font-bold text-slate-900">
            Edit Snippet
          </h2>

          <button
            onClick={closeModal}
            className="text-2xl text-slate-400 transition hover:text-slate-700"
          >
            ×
          </button>

        </div>

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
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              placeholder="Example: api, frontend, hooks"
              className="w-full rounded-2xl border border-slate-200 bg-[#fcfbf8] px-5 py-4 outline-none transition focus:border-sky-400 focus:ring-4 focus:ring-sky-100"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Code
            </label>

            <textarea
              rows="10"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full rounded-2xl border border-slate-200 bg-[#fcfbf8] px-5 py-4 font-mono outline-none transition focus:border-sky-400 focus:ring-4 focus:ring-sky-100"
            />
          </div>

          <div className="flex items-center gap-4">

            <button
              type="submit"
              className="rounded-2xl bg-sky-500 px-6 py-4 font-semibold text-white transition hover:bg-sky-400"
            >
              Save Changes
            </button>

            <button
              type="button"
              onClick={closeModal}
              className="rounded-2xl bg-slate-100 px-6 py-4 font-semibold text-slate-700 transition hover:bg-slate-200"
            >
              Cancel
            </button>

          </div>

        </form>
      </div>
    </div>
  )
}

export default EditSnippetModal