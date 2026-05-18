import SnippetCard from './SnippetCard'

function SnippetsGrid({
  snippets,
  deleteSnippet,
}) {
  return (
    <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
      
      {snippets.map((snippet) => (
        <SnippetCard
          key={snippet.id}
          snippet={snippet}
          deleteSnippet={deleteSnippet}
        />
      ))}
    </div>
  )
}

export default SnippetsGrid