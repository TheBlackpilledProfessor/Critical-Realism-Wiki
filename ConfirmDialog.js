function ConfirmDialog({ article, onConfirm, onCancel }) {
  return (
    <div className="confirm-overlay" onClick={onCancel}>
      <div className="confirm-dialog" onClick={(e) => e.stopPropagation()}>
        <h3>Delete Article?</h3>
        <p>Are you sure you want to delete "{article.topic}"? This cannot be undone.</p>
        <div className="confirm-actions">
          <button onClick={onCancel} className="confirm-btn cancel-btn">
            Cancel
          </button>
          <button onClick={onConfirm} className="confirm-btn delete-confirm-btn">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}