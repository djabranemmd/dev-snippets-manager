import EmptyState from "./EmptyState";
import SnippetCard from "./SnippetCard";

export default function SnippetsGrid({
  snippets,
  deleteSnippet,
  toggleFavorite,
  setEditingSnippet,
}) {
  if (snippets.length === 0) {
    return <EmptyState />;
  }

  return (
    <div className="snippets-grid">
      {snippets.map((snippet) => (
        <SnippetCard
          key={snippet.id}
          snippet={snippet}
          deleteSnippet={deleteSnippet}
          toggleFavorite={toggleFavorite}
          setEditingSnippet={setEditingSnippet}
        />
      ))}
    </div>
  );
}