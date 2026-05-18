import { useEffect, useState } from 'react'

import Sidebar from './components/Sidebar'
import Header from './components/Header'
import SnippetsGrid from './components/SnippetsGrid'
import AddSnippetForm from './components/AddSnippetForm'

import snippetsData from './data/snippets'

function App() {
  const [snippets, setSnippets] = useState(() => {
    const savedSnippets = localStorage.getItem('snippets')
    return savedSnippets ? JSON.parse(savedSnippets) : snippetsData
  })

  const [searchTerm, setSearchTerm] = useState('')
  useEffect(() => {
    localStorage.setItem('snippets', JSON.stringify(snippets))
  }, [snippets])

  const addSnippet = (newSnippet) => {
    setSnippets([newSnippet, ...snippets])
  }

  const deleteSnippet = (id) => {
    const updatedSnippets = snippets.filter(
      (snippet) => snippet.id !== id
    )

    setSnippets(updatedSnippets)
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
    <div className="min-h-screen bg-[#f8f6f2] text-slate-900">
      
      <div className="flex">
    
        <Sidebar />

        <main className="flex-1 p-10">
          
          <Header
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />
    
          <AddSnippetForm addSnippet={addSnippet} />

          <SnippetsGrid
            snippets={filteredSnippets}
            deleteSnippet={deleteSnippet}
          />
        </main> 
      </div>  
    </div>  
  )
}

export default App