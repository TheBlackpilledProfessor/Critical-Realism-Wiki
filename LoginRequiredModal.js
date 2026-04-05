function LoginRequiredModal({ onClose }) {
  React.useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content login-required-modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        <div className="login-required-content">
          <h2>Login Required</h2>
          <p>You must be logged in to a WebSim account to generate articles.</p>
          <p>Please sign in and try again.</p>
          <button className="action-btn" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}