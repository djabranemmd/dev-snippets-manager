import Sidebar from './components/Sidebar'
import Header from './components/Header'
import SnippetsGrid from './components/SnippetsGrid'

import snippets from './data/snippets'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      
      <div className="flex">
        
        <Sidebar />

        <main className="flex-1 p-8">
          
          <Header />

          <SnippetsGrid snippets={snippets} />

        </main>
      </div>
    </div>
  )
}

export default App