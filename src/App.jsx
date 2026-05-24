import {
  useEffect,
  useMemo,
  useState,
} from "react";

import "./App.css";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import SnippetForm from "./components/SnippetForm";
import SnippetsGrid from "./components/SnippetsGrid";
import EditSnippetModal from "./components/EditSnippetModal";

import { useAuth } from "./context/AuthProvider";

import {
  getUserSnippets,
  createSnippet,
  removeSnippet,
  editSnippet,
} from "./firebase/snippetsService";

function App() {
  const { user } = useAuth();

  const [darkMode, setDarkMode] =
    useState(false);

  const [activeFilter, setActiveFilter] =
    useState("all");

  const [snippets, setSnippets] =
    useState([]);

  const [search, setSearch] =
    useState("");

  const [editingSnippet, setEditingSnippet] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    const loadSnippets = async () => {
      if (!user) return;

      setLoading(true);

      const data =
        await getUserSnippets(user.uid);

      setSnippets(data);

      setLoading(false);
    };

    loadSnippets();
  }, [user]);

  useEffect(() => {
    document.body.classList.toggle(
      "dark",
      darkMode
    );
  }, [darkMode]);

  const addSnippet = async (snippet) => {
    const payload = {
      ...snippet,
      userId: user.uid,
    };

    const id = await createSnippet(
      payload
    );

    setSnippets((prev) => [
      { ...payload, id },
      ...prev,
    ]);
  };

  const deleteSnippet = async (id) => {
    await removeSnippet(id);

    setSnippets((prev) =>
      prev.filter((s) => s.id !== id)
    );
  };

  const toggleFavorite = async (id) => {
    const target = snippets.find(
      (s) => s.id === id
    );

    if (!target) return;

    const updated = {
      ...target,
      favorite: !target.favorite,
    };

    await editSnippet(id, updated);

    setSnippets((prev) =>
      prev.map((s) =>
        s.id === id ? updated : s
      )
    );
  };

  const updateSnippet = async (
    updatedSnippet
  ) => {
    await editSnippet(
      updatedSnippet.id,
      updatedSnippet
    );

    setSnippets((prev) =>
      prev.map((s) =>
        s.id === updatedSnippet.id
          ? updatedSnippet
          : s
      )
    );

    setEditingSnippet(null);
  };

  const filteredSnippets =
    useMemo(() => {
      let result = snippets.filter(
        (snippet) => {
          const q =
            search.toLowerCase();

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

            (
              snippet.tags || []
            ).some((tag) =>
              tag
                .toLowerCase()
                .includes(q)
            )
          );
        }
      );

      if (
        activeFilter ===
        "favorites"
      ) {
        result = result.filter(
          (snippet) =>
            snippet.favorite
        );
      }

      return result;
    }, [
      snippets,
      search,
      activeFilter,
    ]);

  if (loading) {
    return (
      <div
        style={{
          padding: "40px",
        }}
      >
        Loading...
      </div>
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