import DataAction from "./DataAction";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

import {
  oneLight,
} from "react-syntax-highlighter/dist/esm/styles/prism";

export default function SnippetCard({
  snippet,
  deleteSnippet,
  toggleFavorite,
  setEditingSnippet,
}) {
  const handleCopy = () => {
    navigator.clipboard.writeText(
      snippet.code
    );
  };

  return (
    <div className="snippet-card">

      <div className="snippet-top">

        <div>
          <h3>{snippet.title}</h3>

          <span>
            {snippet.language}
          </span>
        </div>

      </div>

      <SyntaxHighlighter
        language={
          snippet.language?.toLowerCase() ||
          "javascript"
        }
        style={oneLight}
        customStyle={{
          borderRadius: "16px",
          fontSize: "14px",
          padding: "18px",
          marginTop: "16px",
          marginBottom: "0",
        }}
        wrapLongLines={true}
      >
        {snippet.code}
      </SyntaxHighlighter>

      <div className="tags-container">

        {(snippet.tags || []).map(
          (tag, index) => (
            <span
              key={index}
              className="tag"
            >
              #{tag}
            </span>
          )
        )}

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