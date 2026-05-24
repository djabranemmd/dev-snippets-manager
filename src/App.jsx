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
import DataAction from "./components/DataAction";

import { useAuth } from "./context/AuthProvider";

import {
  getUserSnippets,
  createSnippet,
  createManySnippets,
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

  useEffect(() => {
    const load = async () => {
      if (!user) return;

      const data =
        await getUserSnippets(user.uid);

      setSnippets(data);
    };

    load();
  }, [user]);

  const addSnippet = async (snippet) => {
    const created =
      await createSnippet({
        ...snippet,
        userId: user.uid,
      });

    setSnippets((prev) => [
      created,
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

  const handleExport = () => {
    const blob = new Blob(
      [
        JSON.stringify(
          snippets,
          null,
          2
        ),
      ],
      {
        type: "application/json",
      }
    );

    const url =
      URL.createObjectURL(blob);

    const a =
      document.createElement("a");

    a.href = url;

    a.download = "snippets.json";

    a.click();
  };

  const handleImport = async (e) => {
    const file =
      e.target.files?.[0];

    if (!file) return;

    const text =
      await file.text();

    const parsed =
      JSON.parse(text);

    const payload = parsed.map(
      (snippet) => ({
        ...snippet,
        userId: user.uid,
      })
    );

    const created =
      await createManySnippets(
        payload
      );

    setSnippets((prev) => [
      ...created,
      ...prev,
    ]);
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
          (s) => s.favorite
        );
      }

      return result;
    }, [
      snippets,
      search,
      activeFilter,
    ]);

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

        <DataAction
          onExport={handleExport}
          onImport={handleImport}
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