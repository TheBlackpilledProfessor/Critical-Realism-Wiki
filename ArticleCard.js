const ArticleCard = React.memo(function ArticleCard({ article, onClick }) {
  // Memoize click handler to prevent unnecessary re-renders
  const handleClick = React.useCallback(() => onClick(article), [onClick, article]);
  
  return (
    <div className="article-card" onClick={handleClick}>
      {article.image_url && (
        <div className="article-card-image" style={{ backgroundImage: `url(${article.image_url})` }}></div>
      )}
      <div className="article-card-content">
        <h3>
          {article.topic}
          {article.reviewed_at && (
            <span className="verified-badge">✓ Verified</span>
          )}
        </h3>
        <div className="article-meta">
          <span>By {article.username}</span>
          <span>•</span>
          <span>{formatDate(article.created_at)}</span>
        </div>
        <div className="article-preview">
          {getPreviewText(article.content)}
        </div>
      </div>
    </div>
  );
}, (prevProps, nextProps) => {
  // Custom comparison for better memoization
  return prevProps.article.id === nextProps.article.id &&
         prevProps.article.reviewed_at === nextProps.article.reviewed_at;
});