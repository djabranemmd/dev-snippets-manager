import { useState } from "react";

export default function SnippetForm({ addSnippet }) {
  const [title, setTitle] = useState("");
  const [language, setLanguage] = useState("");
  const [code, setCode] = useState("");
  const [tags, setTags] = useState("");

  const submit = (e) => {
    e.preventDefault();

    if (!title || !language || !code) return;

    addSnippet({
      title,
      language,
      code,
      tags: tags.split(",").map(t => t.trim()).filter(Boolean),
    });

    setTitle("");
    setLanguage("");
    setCode("");
    setTags("");
  };

  return (
    <form onSubmit={submit} className="mt-6 p-5 bg-white dark:bg-slate-800 rounded-2xl space-y-3">

      <input className="input" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
      <input className="input" placeholder="Language" value={language} onChange={e => setLanguage(e.target.value)} />
      <textarea className="input" rows="4" placeholder="Code" value={code} onChange={e => setCode(e.target.value)} />
      <input className="input" placeholder="Tags" value={tags} onChange={e => setTags(e.target.value)} />

      <button className="px-4 py-3 bg-sky-500 text-white rounded-xl">
        Add Snippet
      </button>

    </form>
  );
}