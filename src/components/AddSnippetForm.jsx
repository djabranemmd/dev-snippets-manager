import { useState } from "react";

export default function AddSnippetForm({ addSnippet }) {
  const [title, setTitle] = useState("");
  const [language, setLanguage] = useState("");
  const [code, setCode] = useState("");
  const [tags, setTags] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !language || !code) return;

    addSnippet({
      id: Date.now(),
      title,
      language,
      code,
      tags: tags
        .split(",")
        .map((tag) => tag.trim())
        .filter(Boolean),
      favorite: false,
    });

    setTitle("");
    setLanguage("");
    setCode("");
    setTags("");
  };

  return (
    <form onSubmit={handleSubmit} className="snippet-form">
      <div className="form-group">
        <label>Title</label>
        <input
          type="text"
          placeholder="Fetch API Example"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Language</label>
        <input
          type="text"
          placeholder="JavaScript"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Code</label>
        <textarea
          rows="6"
          placeholder="Paste your code..."
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Tags</label>
        <input
          type="text"
          placeholder="api, fetch, async"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
        />
      </div>

      <button type="submit" className="primary-btn">
        Add Snippet
      </button>
    </form>
  );
}