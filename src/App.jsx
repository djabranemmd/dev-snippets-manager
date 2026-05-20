import { useEffect, useState } from 'react'

import Sidebar from './components/Sidebar'
import Header from './components/Header'
import SnippetsGrid from './components/SnippetsGrid'
import AddSnippetForm from './components/AddSnippetForm'
import EditSnippetModal from './components/EditSnippetModal'

import snippetsData from './data/snippets'

function App() {
  const [snippets, setSnippets] = useState(() => {
    const savedSnippets = localStorage.getItem('snippets')

    return savedSnippets
      ? JSON.parse(savedSnippets)
      : snippetsData
  })

  const [searchTerm, setSearchTerm] = useState('')

  const [activeFilter, setActiveFilter] = useState('all')

  const [editingSnippet, setEditingSnippet] = useState(null)

  const [sidebarOpen, setSidebarOpen] = useState(false)

  useEffect(() => {
    localStorage.setItem(
      'snippets',
      JSON.stringify(snippets)
    )
  }, [snippets])

  const addSnippet = (newSnippet) => {
    setSnippets([
      {
        ...newSnippet,
        isFavorite: false,
      },
      ...snippets,
    ])
  }

  const deleteSnippet = (id) => {
    const updatedSnippets = snippets.filter(
      (snippet) => snippet.id !== id
    )

    setSnippets(updatedSnippets)
  }

  const toggleFavorite = (id) => {
    const updatedSnippets = snippets.map((snippet) => {
      if (snippet.id === id) {
        return {
          ...snippet,
          isFavorite: !snippet.isFavorite,
        }
      }

      return snippet
    })

    setSnippets(updatedSnippets)
  }

  const updateSnippet = (updatedSnippet) => {
    const updatedSnippets = snippets.map((snippet) => {
      if (snippet.id === updatedSnippet.id) {
        return updatedSnippet
      }

      return snippet
    })

    setSnippets(updatedSnippets)
  }

  const filteredSnippets = snippets.filter((snippet) => {
    const search = searchTerm.toLowerCase()

    const matchesSearch =
  snippet.title.toLowerCase().includes(search) ||
  snippet.language.toLowerCase().includes(search) ||
  snippet.code.toLowerCase().includes(search) ||
  snippet.tags?.some((tag) =>
    tag.toLowerCase().includes(search)
  )

    const matchesFilter =
      activeFilter === 'all'
        ? true
        : snippet.isFavorite

    return matchesSearch && matchesFilter
  })

  return (
    <div className="min-h-screen bg-[#f8f6f2] text-slate-900">
      
      <div className="flex">
        
        <Sidebar
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />

        <main className="flex-1 p-5 lg:p-10">
          
          <Header
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            setSidebarOpen={setSidebarOpen}
          />

          <AddSnippetForm addSnippet={addSnippet} />

          <SnippetsGrid
            snippets={filteredSnippets}
            deleteSnippet={deleteSnippet}
            toggleFavorite={toggleFavorite}
            openEditModal={setEditingSnippet}
          />

        </main>
      </div>

      {editingSnippet && (
        <EditSnippetModal
          snippet={editingSnippet}
          closeModal={() => setEditingSnippet(null)}
          updateSnippet={updateSnippet}
        />
      )}

    </div>
  )
}

export default App