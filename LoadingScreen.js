function LoadingScreen() {
  const [fadeOut, setFadeOut] = React.useState(false);
  const [show, setShow] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => setShow(false), 500);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className={`initial-loading ${fadeOut ? 'fade-out' : ''}`}>
      <div className="loading-logo">Critical Realism Wiki</div>
      <div className="loading-text" style={{ marginBottom: '20px', fontSize: '1.1em', color: '#999' }}>Public Edition</div>
      <div className="loading-spinner"></div>
      <div className="loading-text">Loading community analysis...</div>
    </div>
  );
}