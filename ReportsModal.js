function ReportsModal({ onClose }) {
  const reports = [];

  React.useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  const handleResolveReport = async (reportId) => {
    // Analyzer mode - no persistence
  };

  const handleDeleteReport = async (reportId) => {
    // Analyzer mode - no persistence
  };

  const pendingReports = reports.filter(r => r.status === 'pending');
  const resolvedReports = reports.filter(r => r.status === 'resolved');

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        <div className="about-content">
          <h2>Content Reports</h2>
          
          <div className="about-section">
            <h3>Pending Reports ({pendingReports.length})</h3>
            {pendingReports.length === 0 ? (
              <p style={{ color: '#666' }}>No pending reports.</p>
            ) : (
              <div className="reports-list">
                {pendingReports.slice().reverse().map(report => (
                  <div key={report.id} className="report-item">
                    <div className="report-header">
                      <strong>{report.article_topic}</strong>
                      <span className="report-date">{formatDate(report.created_at)}</span>
                    </div>
                    <div className="report-meta">
                      Reported by {report.username} • Article by {report.article_author}
                    </div>
                    <div className="report-reason">
                      <strong>Reason:</strong> {report.reason.replace(/_/g, ' ')}
                    </div>
                    <div className="report-details">
                      {report.details}
                    </div>
                    <div className="report-actions">
                      <button 
                        onClick={() => handleResolveReport(report.id)}
                        className="action-btn review-btn"
                      >
                        ✓ Resolve
                      </button>
                      <button 
                        onClick={() => handleDeleteReport(report.id)}
                        className="action-btn delete-btn"
                      >
                        🗑 Dismiss
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {resolvedReports.length > 0 && (
            <div className="about-section">
              <h3>Resolved Reports ({resolvedReports.length})</h3>
              <div className="reports-list">
                {resolvedReports.slice().reverse().slice(0, 10).map(report => (
                  <div key={report.id} className="report-item resolved">
                    <div className="report-header">
                      <strong>{report.article_topic}</strong>
                      <span className="report-date">{formatDate(report.created_at)}</span>
                    </div>
                    <div className="report-meta">
                      Reported by {report.username} • Resolved {formatDate(report.resolved_at)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}