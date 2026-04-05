function SettingsModal({ onClose }) {
  const [provider, setProvider] = React.useState('together');
  const [togetherKey, setTogetherKey] = React.useState('');
  const [openrouterKey, setOpenrouterKey] = React.useState('');
  const [openrouterModel, setOpenrouterModel] = React.useState('');
  const [localEndpoint, setLocalEndpoint] = React.useState('');
  const [localModel, setLocalModel] = React.useState('');
  const [saved, setSaved] = React.useState(false);

  React.useEffect(() => {
    setProvider(localStorage.getItem('ai_provider') || 'together');
    setTogetherKey(localStorage.getItem('together_api_key') || '');
    setOpenrouterKey(localStorage.getItem('openrouter_api_key') || '');
    setOpenrouterModel(localStorage.getItem('openrouter_model') || 'meta-llama/llama-3.1-70b-instruct');
    setLocalEndpoint(localStorage.getItem('local_llm_endpoint') || 'http://localhost:11434/v1/chat/completions');
    setLocalModel(localStorage.getItem('local_llm_model') || 'llama3.1');
  }, []);

  React.useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  const handleSave = () => {
    localStorage.setItem('ai_provider', provider);
    
    if (provider === 'together' && togetherKey.trim()) {
      localStorage.setItem('together_api_key', togetherKey.trim());
    } else if (provider === 'openrouter' && openrouterKey.trim()) {
      localStorage.setItem('openrouter_api_key', openrouterKey.trim());
      localStorage.setItem('openrouter_model', openrouterModel.trim());
    } else if (provider === 'local') {
      localStorage.setItem('local_llm_endpoint', localEndpoint.trim());
      localStorage.setItem('local_llm_model', localModel.trim());
    }
    
    setSaved(true);
    setTimeout(() => {
      setSaved(false);
      onClose();
    }, 1500);
  };

  const handleClear = () => {
    localStorage.removeItem('ai_provider');
    localStorage.removeItem('together_api_key');
    localStorage.removeItem('openrouter_api_key');
    localStorage.removeItem('openrouter_model');
    localStorage.removeItem('local_llm_endpoint');
    localStorage.removeItem('local_llm_model');
    setTogetherKey('');
    setOpenrouterKey('');
    setOpenrouterModel('meta-llama/llama-3.1-70b-instruct');
    setLocalEndpoint('http://localhost:11434/v1/chat/completions');
    setLocalModel('llama3.1');
    setProvider('together');
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        <div className="about-content">
          <h2>Settings</h2>
          
          <div className="about-section">
            <h3>AI Provider</h3>
            <p style={{ color: '#ccc', marginBottom: '15px', lineHeight: '1.6' }}>
              Choose which AI provider to use for content generation.
            </p>
            
            <div className="edit-field">
              <label>Provider</label>
              <select
                value={provider}
                onChange={(e) => setProvider(e.target.value)}
                className="edit-input"
              >
                <option value="together">Together.ai</option>
                <option value="openrouter">OpenRouter</option>
                <option value="local">Local LLM (Ollama/LM Studio)</option>
              </select>
            </div>
          </div>

          {provider === 'together' && (
            <div className="about-section">
              <h3>Together.ai Configuration</h3>
              <div className="edit-field">
                <label>API Key</label>
                <input
                  type="password"
                  value={togetherKey}
                  onChange={(e) => setTogetherKey(e.target.value)}
                  placeholder="Enter your Together.ai API key"
                  className="edit-input"
                />
                <p style={{ color: '#666', fontSize: '0.85em', marginTop: '8px' }}>
                  Get your API key from <a href="https://api.together.xyz/settings/api-keys" target="_blank" rel="noopener noreferrer" style={{ color: '#4a9eff' }}>Together.ai Settings</a>
                </p>
              </div>
            </div>
          )}

          {provider === 'openrouter' && (
            <div className="about-section">
              <h3>OpenRouter Configuration</h3>
              <div className="edit-field">
                <label>API Key</label>
                <input
                  type="password"
                  value={openrouterKey}
                  onChange={(e) => setOpenrouterKey(e.target.value)}
                  placeholder="Enter your OpenRouter API key"
                  className="edit-input"
                />
                <p style={{ color: '#666', fontSize: '0.85em', marginTop: '8px' }}>
                  Get your API key from <a href="https://openrouter.ai/keys" target="_blank" rel="noopener noreferrer" style={{ color: '#4a9eff' }}>OpenRouter Keys</a>
                </p>
              </div>
              <div className="edit-field">
                <label>Model</label>
                <input
                  type="text"
                  value={openrouterModel}
                  onChange={(e) => setOpenrouterModel(e.target.value)}
                  placeholder="meta-llama/llama-3.1-70b-instruct"
                  className="edit-input"
                />
                <p style={{ color: '#666', fontSize: '0.85em', marginTop: '8px' }}>
                  Browse models at <a href="https://openrouter.ai/models" target="_blank" rel="noopener noreferrer" style={{ color: '#4a9eff' }}>OpenRouter Models</a>
                </p>
              </div>
            </div>
          )}

          {provider === 'local' && (
            <div className="about-section">
              <h3>Local LLM Configuration</h3>
              <p style={{ color: '#ccc', marginBottom: '15px', lineHeight: '1.6' }}>
                Configure your local LLM endpoint (Ollama, LM Studio, or any OpenAI-compatible API).
              </p>
              <div className="edit-field">
                <label>API Endpoint</label>
                <input
                  type="text"
                  value={localEndpoint}
                  onChange={(e) => setLocalEndpoint(e.target.value)}
                  placeholder="http://localhost:11434/v1/chat/completions"
                  className="edit-input"
                />
                <p style={{ color: '#666', fontSize: '0.85em', marginTop: '8px' }}>
                  Default Ollama: http://localhost:11434/v1/chat/completions
                  <br />
                  Default LM Studio: http://localhost:1234/v1/chat/completions
                </p>
              </div>
              <div className="edit-field">
                <label>Model Name</label>
                <input
                  type="text"
                  value={localModel}
                  onChange={(e) => setLocalModel(e.target.value)}
                  placeholder="llama3.1"
                  className="edit-input"
                />
              </div>
            </div>
          )}

          <div className="about-section">
            <div style={{ display: 'flex', gap: '10px' }}>
              <button 
                onClick={handleSave} 
                className="action-btn save-btn"
                style={{ flex: 1 }}
              >
                {saved ? '✓ Saved!' : '💾 Save'}
              </button>
              <button 
                onClick={handleClear}
                className="action-btn delete-btn"
              >
                Clear All
              </button>
            </div>
          </div>

          <div className="about-section">
            <h3>Privacy Note</h3>
            <p style={{ color: '#999', fontSize: '0.9em', lineHeight: '1.6' }}>
              All settings are stored locally in your browser. API keys are never sent to any server 
              except your selected AI provider for content generation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}