const { useState, useEffect, useMemo } = React;

function App() {
  // Use custom hooks for state management
  const state = window.useAppState();
  const {
    topic, setTopic,
    generating,
    currentArticle,
    progress,
    streamingText,
    showAbout, setShowAbout,
    notification, setNotification,
    showSettings, setShowSettings
  } = state;

  // Use custom hooks for handlers and effects
  const handlers = window.useAppHandlers(state);
  const {
    handleGenerateArticle,
    handleKeyPress
  } = handlers;



  // Memoize rendered content to prevent re-processing
  const renderedStreamingText = useMemo(() => {
    return streamingText ? renderMarkdown(streamingText) : '';
  }, [streamingText]);

  const renderedCurrentArticle = useMemo(() => {
    return currentArticle ? renderMarkdown(currentArticle.content) : '';
  }, [currentArticle]);

  return (
    <>
      <LoadingScreen />
      <div className="container">
      <nav className="desktop-nav">
        <button onClick={() => { setShowSettings(true); }} className="nav-btn">
          ⚙️ Settings
        </button>
        <button onClick={() => { setShowAbout(true); }} className="nav-btn">
          About
        </button>
      </nav>
      <div className="header">
        <div className="header-top">
          <h1>Critical Realism Analyzer</h1>
        </div>
        <p>Single-use topic analyzer</p>
      </div>

      <div className="input-section">
        <div className="input-group">
          <input
            type="text"
            placeholder="Enter any topic to analyze..."
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            onKeyPress={handleKeyPress}
            disabled={generating}
          />
          <button onClick={handleGenerateArticle} disabled={generating || !topic.trim()}>
            {generating ? 'Analyzing...' : 'Analyze'}
          </button>
        </div>
        {generating && (
          <div className="streaming-container">
            <div className="streaming-header">
              <div className="streaming-status">
                <div className="streaming-indicator"></div>
                <span>{progress.step}</span>
              </div>
              <div className="streaming-stats">
                {progress.percent}% • {progress.estimatedTime}s remaining
              </div>
            </div>
            {streamingText && (
              <div className="streaming-text">
                <div className="streaming-content" dangerouslySetInnerHTML={{ __html: renderedStreamingText }} />
              </div>
            )}
            {!streamingText && (
              <div className="streaming-placeholder">
                <div className="streaming-dots">
                  <span>.</span><span>.</span><span>.</span>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {currentArticle && (
        <div className="article-display">
          <h2>{currentArticle.topic}</h2>
          <div className="article-body" dangerouslySetInnerHTML={{ __html: renderedCurrentArticle }} />
        </div>
      )}

      {showAbout && (
        <AboutModal onClose={() => setShowAbout(false)} />
      )}

      {showSettings && (
        <SettingsModal onClose={() => setShowSettings(false)} />
      )}

      {notification && (
        <Notification
          message={notification.message}
          type={notification.type}
          onClose={() => setNotification(null)}
        />
      )}
    </div>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);