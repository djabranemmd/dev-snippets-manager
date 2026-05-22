import { useEffect, useState } from "react";

import "./App.css";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import SnippetForm from "./components/SnippetForm";
import SnippetsGrid from "./components/SnippetsGrid";
import EditSnippetModal from "./components/EditSnippetModal";

import initialSnippets from "./data/Snippets";

function App() {
  const [darkMode, setDarkMode] =
    useState(false);

  const [activeFilter, setActiveFilter] =
    useState("all");

  const [snippets, setSnippets] =
    useState(() => {
      const saved =
        localStorage.getItem("snippets");

      return saved
        ? JSON.parse(saved)
        : initialSnippets;
    });

  const [search, setSearch] =
    useState("");

  const [editingSnippet, setEditingSnippet] =
    useState(null);

  useEffect(() => {
    localStorage.setItem(
      "snippets",
      JSON.stringify(snippets)
    );
  }, [snippets]);

  useEffect(() => {
    document.body.classList.toggle(
      "dark",
      darkMode
    );
  }, [darkMode]);

  const addSnippet = (snippet) => {
    setSnippets([snippet, ...snippets]);
  };

  const deleteSnippet = (id) => {
    setSnippets(
      snippets.filter((s) => s.id !== id)
    );
  };

  const toggleFavorite = (id) => {
    setSnippets(
      snippets.map((s) =>
        s.id === id
          ? {
              ...s,
              favorite: !s.favorite,
            }
          : s
      )
    );
  };

  const updateSnippet = (
    updatedSnippet
  ) => {
    setSnippets(
      snippets.map((s) =>
        s.id === updatedSnippet.id
          ? updatedSnippet
          : s
      )
    );

    setEditingSnippet(null);
  };

  let filteredSnippets =
    snippets.filter((snippet) => {
      const q = search.toLowerCase();

      return (
        snippet.title
          ?.toLowerCase()
          .includes(q) ||

        snippet.language
          ?.toLowerCase()
          .includes(q) ||

        snippet.code
          ?.toLowerCase()
          .includes(q) ||

        (snippet.tags || []).some(
          (tag) =>
            tag
              .toLowerCase()
              .includes(q)
        )
      );
    });

  if (activeFilter === "favorites") {
    filteredSnippets =
      filteredSnippets.filter(
        (snippet) => snippet.favorite
      );
  }

  return (
    <div className="app-container">

      <Sidebar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        activeFilter={activeFilter}
        setActiveFilter={
          setActiveFilter
        }
      />

      <main className="main-content">

        <Header
          search={search}
          setSearch={setSearch}
        />

        <SnippetForm
          addSnippet={addSnippet}
        />

        <SnippetsGrid
          snippets={filteredSnippets}
          deleteSnippet={deleteSnippet}
          toggleFavorite={toggleFavorite}
          setEditingSnippet={
            setEditingSnippet
          }
        />

      </main>

      <EditSnippetModal
        snippet={editingSnippet}
        onClose={() =>
          setEditingSnippet(null)
        }
        onSave={updateSnippet}
      />

    </div>
  );
}

export default App;