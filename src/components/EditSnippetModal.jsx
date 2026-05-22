import { useEffect, useState } from "react";

export default function EditSnippetModal({
  snippet,
  onClose,
  onSave,
}) {
  const [title, setTitle] = useState("");
  const [language, setLanguage] = useState("");
  const [code, setCode] = useState("");
  const [tags, setTags] = useState("");

  useEffect(() => {
    if (snippet) {
      setTitle(snippet.title);
      setLanguage(snippet.language);
      setCode(snippet.code);
      setTags(snippet.tags.join(", "));
    }
  }, [snippet]);

  if (!snippet) return null;

  const handleSave = () => {
    if (!title || !language || !code) return;

    onSave({
      ...snippet,
      title,
      language,
      code,
      tags: tags
        .split(",")
        .map((tag) => tag.trim())
        .filter(Boolean),
    });
  };

  return (
    <div className="modal-overlay">
      <div className="modal-container">

        <h2>Edit Snippet</h2>

        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="text"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        />

        <textarea
          rows="6"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />

        <input
          type="text"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
        />

        <div className="modal-actions">
          <button className="secondary-btn" onClick={onClose}>
            Cancel
          </button>

          <button className="primary-btn" onClick={handleSave}>
            Save
          </button>
        </div>

      </div>
    </div>
  );
}