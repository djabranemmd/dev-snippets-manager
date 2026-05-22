import AddSnippetForm from "./AddSnippetForm";

export default function SnippetForm({ addSnippet }) {
  return (
    <section className="form-section">
      <h2>Add New Snippet</h2>

      <AddSnippetForm addSnippet={addSnippet} />
    </section>
  );
}