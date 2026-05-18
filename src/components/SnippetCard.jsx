import { useState } from 'react'

import SyntaxHighlighter from 'react-syntax-highlighter'

import {
  atomOneLight,
} from 'react-syntax-highlighter/dist/esm/styles/hljs'

function SnippetCard({
  snippet,
  deleteSnippet,
}) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(snippet.code)

      setCopied(true)

      setTimeout(() => {
        setCopied(false)
      }, 2000)

    } catch (error) {
      console.log('Copy failed:', error)
    }
  }

  const handleDelete = () => {
    const confirmDelete = window.confirm(
      'Are you sure you want to delete this snippet?'
    )

    if (confirmDelete) {
      deleteSnippet(snippet.id)
    }
  }

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

        <div className="flex items-center gap-2">

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