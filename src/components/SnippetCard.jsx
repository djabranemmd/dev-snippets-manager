import { useState } from 'react'

import toast from 'react-hot-toast'

import SyntaxHighlighter from 'react-syntax-highlighter'

import {
  atomOneLight,
} from 'react-syntax-highlighter/dist/esm/styles/hljs'

function SnippetCard({
  snippet,
  deleteSnippet,
  toggleFavorite,
  openEditModal,
}) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(snippet.code)

      setCopied(true)

      toast.success('Snippet copied')

      setTimeout(() => {
        setCopied(false)
      }, 2000)

    } catch (error) {
      toast.error('Copy failed')
    }
  }

  const handleDelete = () => {
    const confirmDelete = window.confirm(
      'Are you sure you want to delete this snippet?'
    )

    if (confirmDelete) {
      deleteSnippet(snippet.id)

      toast.success('Snippet deleted')
    }
  }

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">

      <div className="flex items-start justify-between gap-4">
        
        <div className="flex-1">
          
          <div className="flex items-center gap-3">

            <h3 className="text-xl font-bold text-slate-900">
              {snippet.title}
            </h3>

            <button
              onClick={() => toggleFavorite(snippet.id)}
              className={`text-xl transition ${
                snippet.isFavorite
                  ? 'text-yellow-500'
                  : 'text-slate-300 hover:text-yellow-400'
              }`}
            >
              ★
            </button>

          </div>

          <div className="mt-3 flex flex-wrap gap-2">

            <span className="rounded-xl bg-sky-100 px-3 py-1 text-sm font-medium text-sky-700">
              {snippet.language}
            </span>

            {snippet.tags?.map((tag) => (
              <span
                key={tag}
                className="rounded-xl bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600"
              >
                #{tag}
              </span>
            ))}

          </div>

        </div>

        <div className="flex flex-wrap items-center gap-2">

          <button
            onClick={() => openEditModal(snippet)}
            className="rounded-xl bg-amber-100 px-4 py-2 text-sm font-medium text-amber-700 transition hover:bg-amber-200"
          >
            Edit
          </button>

          <button
            onClick={handleCopy}
            className={`rounded-xl px-4 py-2 text-sm font-medium transition ${
              copied
                ? 'bg-green-100 text-green-700'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            {copied ? 'Copied!' : 'Copy'}
          </button>

          <button
            onClick={handleDelete}
            className="rounded-xl bg-red-100 px-4 py-2 text-sm font-medium text-red-600 transition hover:bg-red-200"
          >
            Delete
          </button>

        </div>
      </div>

      <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200">
        
        <SyntaxHighlighter
          language={snippet.language.toLowerCase()}
          style={atomOneLight}
          customStyle={{
            margin: 0,
            padding: '24px',
            background: '#f8fafc',
            fontSize: '14px',
            borderRadius: '0px',
          }}
          wrapLongLines={true}
        >
          {snippet.code}
        </SyntaxHighlighter>

      </div>
    </div>
  )
}

export default SnippetCard