import { useState } from 'react'

import Sidebar from './components/Sidebar'
import Header from './components/Header'
import SnippetsGrid from './components/SnippetsGrid'
import AddSnippetForm from './components/AddSnippetForm'

import snippetsData from './data/snippets'

function App() {
  const [snippets, setSnippets] = useState(snippetsData)

  const addSnippet = (newSnippet) => {
    setSnippets([newSnippet, ...snippets])
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      
      <div className="flex">
        
        <Sidebar />

        <main className="flex-1 p-8">
          
          <Header />

          <AddSnippetForm addSnippet={addSnippet} />

          <SnippetsGrid snippets={snippets} />

        </main>
      </div>
    </div>
  )
}

export default App