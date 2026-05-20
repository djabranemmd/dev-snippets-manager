import SnippetCard from './SnippetCard'

function SnippetsGrid({
  snippets,
  deleteSnippet,
  toggleFavorite,
  openEditModal,
}) {
  if (snippets.length === 0) {
    return (
      <div className="mt-10 rounded-3xl border border-dashed border-slate-300 bg-white p-16 text-center">
        
        <h3 className="text-2xl font-bold text-slate-700">
          No snippets found
        </h3>

        <p className="mt-3 text-slate-500">
          Try adding a new snippet or changing your filters.
        </p>
      </div>
    )
  }

  return (
    <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
      
      {snippets.map((snippet) => (
        <SnippetCard
          key={snippet.id}
          snippet={snippet}
          deleteSnippet={deleteSnippet}
          toggleFavorite={toggleFavorite}
          openEditModal={openEditModal}
        />
      ))}
    </div>
  )
}

export default SnippetsGrid