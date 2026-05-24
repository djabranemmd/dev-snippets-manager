export default function DataAction({
  onCopy,
  onEdit,
  onDelete,
  onFavorite,
  favorite,
  onExport,
  onImport,
}) {
  return (
    <div className="card-actions">

      <button
        className="action-btn copy-btn"
        onClick={onCopy}
      >
        Copy
      </button>

      <button
        className="action-btn edit-btn"
        onClick={onEdit}
      >
        Edit
      </button>

      <button
        className="action-btn delete-btn"
        onClick={onDelete}
      >
        Delete
      </button>

      <button
        className="action-btn favorite-btn"
        onClick={onFavorite}
      >
        {favorite ? "★" : "☆"}
      </button>

      {onExport && (
        <button
          className="action-btn"
          onClick={onExport}
        >
          Export
        </button>
      )}

      {onImport && (
        <label className="action-btn">

          Import

          <input
            type="file"
            accept=".json"
            hidden
            onChange={onImport}
          />

        </label>
      )}

    </div>
  );
}