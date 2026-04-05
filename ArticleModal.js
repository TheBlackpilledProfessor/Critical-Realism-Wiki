function ArticleModal({ article, onClose }) {
  const [deleting, setDeleting] = React.useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = React.useState(false);
  const [linkedArticle, setSelectedArticleFromLink] = React.useState(null);
  const [editing, setEditing] = React.useState(false);
  const [editedTopic, setEditedTopic] = React.useState(article.topic);
  const [editedContent, setEditedContent] = React.useState(article.content);
  const [saving, setSaving] = React.useState(false);
  const [showReportForm, setShowReportForm] = React.useState(false);
  const [reportReason, setReportReason] = React.useState('');
  const [reportDetails, setReportDetails] = React.useState('');
  const [submittingReport, setSubmittingReport] = React.useState(false);
  const [showSuccessDialog, setShowSuccessDialog] = React.useState(false);
  const [hideImage, setHideImage] = React.useState(false);
  const [hideActions, setHideActions] = React.useState(false);

  const allArticles = [];

  React.useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  const handleDeleteClick = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setShowDeleteConfirm(true);
  };

  const handleDeleteConfirm = async () => {
    setShowDeleteConfirm(false);
    // Analyzer mode - no persistence
    onClose();
  };

  const handleDeleteCancel = () => {
    setShowDeleteConfirm(false);
  };

  const handleRegenerate = (e) => {
    e.stopPropagation();
    onClose();
    window.dispatchEvent(new CustomEvent('regenerate-article', { detail: { topic: article.topic, articleId: article.id } }));
  };

  const renderContent = (content) => {
    let html = renderMarkdown(content);
    html = addCrossLinks(html, allArticles, article.id);
    return html;
  };

  const handleArticleLinkClick = (e) => {
    if (e.target.classList.contains('article-link')) {
      e.preventDefault();
      const articleId = e.target.getAttribute('data-article-id');
      const linkedArticle = allArticles.find(a => a.id === articleId);
      if (linkedArticle) {
        setSelectedArticleFromLink(linkedArticle);
      }
    }
  };

  const handleSaveEdit = async () => {
    // Analyzer mode - no persistence
    setEditing(false);
  };

  const handleCancelEdit = () => {
    setEditedTopic(article.topic);
    setEditedContent(article.content);
    setEditing(false);
  };

  const handleMarkReviewed = async () => {
    // Analyzer mode - no persistence
  };

  const handleSubmitReport = async () => {
    // Analyzer mode - no persistence
    setShowReportForm(false);
    setReportReason('');
    setReportDetails('');
  };

  return (
    <>
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <button className="modal-close" onClick={onClose}>×</button>
          <div className="modal-article">
            <div style={{ display: 'flex', gap: '10px', marginBottom: '15px', justifyContent: 'flex-end' }}>
              <button 
                onClick={() => setHideImage(!hideImage)} 
                className="action-btn"
                style={{ fontSize: '0.85em', padding: '8px 14px' }}
              >
                {hideImage ? '🖼️ Show Image' : '🖼️ Hide Image'}
              </button>
              <button 
                onClick={() => setHideActions(!hideActions)} 
                className="action-btn"
                style={{ fontSize: '0.85em', padding: '8px 14px' }}
              >
                {hideActions ? '⚙️ Show Actions' : '⚙️ Hide Actions'}
              </button>
            </div>
            {article.image_url && !hideImage && (
              <img src={article.image_url} alt={article.topic} className="article-image" />
            )}
            <h2>{article.topic}</h2>
            <div className="article-meta">
              <span>By {article.username}</span>
              <span>•</span>
              <span>{formatDateLong(article.created_at)}</span>
            </div>
            <div className="editorial-status">
              <div className={`status-badge ${article.reviewed_at ? 'reviewed' : 'draft'}`}>
                {article.editorial_status || 'AI-generated draft - awaiting review'}
              </div>
              {article.reviewed_at && (
                <div className="review-info">
                  Reviewed by {article.reviewed_by} on {formatDate(article.reviewed_at)}
                </div>
              )}
            </div>
            {!editing && !showReportForm ? (
              <>
                {!hideActions && <div className="article-actions">
                  <button onClick={handleRegenerate} className="action-btn regenerate-btn">
                    ↻ Regenerate
                  </button>
                </div>}
                <div className="article-body" onClick={handleArticleLinkClick} dangerouslySetInnerHTML={{ __html: renderContent(article.content) }} />
              </>
            ) : showReportForm ? (
              <div className="report-form">
                <h3>Report Article</h3>
                <p className="report-intro">
                  Help us maintain quality standards. Reports should focus on Code of Conduct violations.
                </p>
                <div className="edit-field">
                  <label>Violation Type</label>
                  <select 
                    value={reportReason}
                    onChange={(e) => setReportReason(e.target.value)}
                    className="edit-input"
                  >
                    <option value="">Select a reason...</option>
                    <option value="hate_speech">Hate Speech or Bigotry</option>
                    <option value="violence">Calls for Violence</option>
                    <option value="fatalism">Fatalistic Language</option>
                    <option value="misanthropy">Misanthropic Content</option>
                    <option value="unsourced">Unsourced Claims</option>
                    <option value="poor_sources">Low-Quality Sources</option>
                    <option value="determinism">Deterministic/Hopeless Framing</option>
                    <option value="other">Other Violation</option>
                  </select>
                </div>
                <div className="edit-field">
                  <label>Details</label>
                  <textarea
                    value={reportDetails}
                    onChange={(e) => setReportDetails(e.target.value)}
                    placeholder="Explain why this content violates our standards. Be specific."
                    className="edit-textarea"
                    rows="6"
                  />
                </div>
                <div className="edit-actions">
                  <button onClick={() => {
                    setShowReportForm(false);
                    setReportReason('');
                    setReportDetails('');
                  }} className="action-btn cancel-edit-btn">
                    Cancel
                  </button>
                  <button 
                    onClick={handleSubmitReport} 
                    disabled={submittingReport || !reportReason || !reportDetails.trim()}
                    className="action-btn report-submit-btn"
                  >
                    {submittingReport ? 'Submitting...' : '📤 Submit Report'}
                  </button>
                </div>
              </div>
            ) : (
              <div className="edit-form">
                <div className="edit-field">
                  <label>Title</label>
                  <input
                    type="text"
                    value={editedTopic}
                    onChange={(e) => setEditedTopic(e.target.value)}
                    className="edit-input"
                  />
                </div>
                <div className="edit-field">
                  <label>Content (Markdown)</label>
                  <textarea
                    value={editedContent}
                    onChange={(e) => setEditedContent(e.target.value)}
                    className="edit-textarea"
                    rows="20"
                  />
                </div>
                <div className="edit-actions">
                  <button onClick={handleCancelEdit} className="action-btn cancel-edit-btn">
                    Cancel
                  </button>
                  <button onClick={handleSaveEdit} disabled={saving} className="action-btn save-btn">
                    {saving ? 'Saving...' : '💾 Save'}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {showDeleteConfirm && (
        <ConfirmDialog
          article={article}
          onConfirm={handleDeleteConfirm}
          onCancel={handleDeleteCancel}
        />
      )}

      {linkedArticle && (
        <ArticleModal
          article={linkedArticle}
          onClose={() => setSelectedArticleFromLink(null)}
        />
      )}

      {showSuccessDialog && (
        <SuccessDialog />
      )}
    </>
  );
}