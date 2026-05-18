import { useState } from 'react'

import Sidebar from './components/Sidebar'
import Header from './components/Header'
import SnippetsGrid from './components/SnippetsGrid'
import AddSnippetForm from './components/AddSnippetForm'

import snippetsData from './data/snippets'

function App() {
  const [snippets, setSnippets] = useState(snippetsData)

  const [searchTerm, setSearchTerm] = useState('')

  const addSnippet = (newSnippet) => {
    setSnippets([newSnippet, ...snippets])
  }

  const filteredSnippets = snippets.filter((snippet) => {
    const search = searchTerm.toLowerCase()

    return (
      snippet.title.toLowerCase().includes(search) ||
      snippet.language.toLowerCase().includes(search) ||
      snippet.code.toLowerCase().includes(search)
    )
  })

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      
      <div className="flex">
        
        <Sidebar />

        <main className="flex-1 p-8">
          
          <Header
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />

          <AddSnippetForm addSnippet={addSnippet} />

          <SnippetsGrid snippets={filteredSnippets} />

        </main>
      </div>
    </div>
  )
}

export default App