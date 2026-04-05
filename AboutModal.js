// removed: All inline section content and JSX (moved to AboutContent.js)
// removed: Duplicate section rendering logic (replaced with AboutSection component)

function AboutModal({ onClose }) {
  React.useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        <div className="about-content">
          <h2>About Critical Realism Analyzer</h2>
          
          {window.ABOUT_SECTIONS.map(section => (
            <AboutSection key={section.id} section={section} />
          ))}
        </div>
      </div>
    </div>
  );
}