import DataAction from "./DataAction";

export default function SnippetCard({
  snippet,
  deleteSnippet,
  toggleFavorite,
  setEditingSnippet,
}) {

  const handleCopy = () => {
    navigator.clipboard.writeText(snippet.code);
  };

  return (
    <div className="snippet-card">

      <div className="snippet-top">

        <div>
          <h3>{snippet.title}</h3>
          <span>{snippet.language}</span>
        </div>

      </div>

      <pre>
        <code>{snippet.code}</code>
      </pre>

      {/* TAGS */}
      <div className="tags-container">

        {(snippet.tags || []).map((tag, index) => (
          <span
            key={index}
            className="tag"
          >
            #{tag}
          </span>
        ))}

      </div>

      <DataAction
        onCopy={handleCopy}
        onEdit={() =>
          setEditingSnippet(snippet)
        }
        onDelete={() =>
          deleteSnippet(snippet.id)
        }
        onFavorite={() =>
          toggleFavorite(snippet.id)
        }
        favorite={snippet.favorite}
      />

    </div>
  );
}