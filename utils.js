// Sanitization utility
window.sanitizeInput = function(input) {
  if (typeof input !== 'string') return '';
  return input
    .replace(/[<>]/g, '') // Remove angle brackets
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .replace(/on\w+\s*=/gi, '') // Remove event handlers
    .trim()
    .slice(0, 500); // Max length
}

// Date formatting utilities
window.formatDate = function(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
}

window.formatDateLong = function(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
}

// Content preview utility
window.getPreviewText = function(content) {
  // Strip markdown and get first few sentences
  return content.replace(/[#*_]/g, '').substring(0, 200) + '...';
}

// Markdown rendering utility
window.renderMarkdown = function(content) {
  // Extract footnote definitions (each on its own line starting with [^N]:)
  const footnotes = {};
  const lines = content.split('\n');
  const contentLines = [];
  let inReferences = false;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    // Check if this is a References header
    if (line.trim() === '## References') {
      inReferences = true;
      continue;
    }
    
    // If we're in the references section, parse footnotes
    if (inReferences) {
      const match = line.match(/^\[\^(\d+)\]:\s*(.+)$/);
      if (match) {
        footnotes[match[1]] = match[2].trim();
        continue;
      }
    }
    
    // Otherwise, keep the line
    contentLines.push(line);
  }
  
  let html = contentLines.join('\n')
    .replace(/^### (.+)$/gm, '<h3>$1</h3>')
    .replace(/^## (.+)$/gm, '<h2>$1</h2>')
    .replace(/^# (.+)$/gm, '<h1>$1</h1>')
    // Handle unordered lists before italic processing
    .replace(/^\* (.+)$/gm, '<li>$1</li>')
    .replace(/^- (.+)$/gm, '<li>$1</li>')
    // Wrap consecutive list items in ul tags
    .replace(/(<li>.*<\/li>\n?)+/g, '<ul>$&</ul>')
    // Now handle bold and italic (bold first to avoid interference)
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/\n\n/g, '</p><p>')
    .replace(/\n/g, '<br>');
  
  // Convert footnote references to superscript links
  html = html.replace(/\[\^(\d+)\]/g, '<sup class="footnote-ref"><a href="#fn$1" id="fnref$1">[$1]</a></sup>');
  
  // Add footnotes section if there are any
  if (Object.keys(footnotes).length > 0) {
    html += '</p><div class="footnotes"><h3>References</h3><ol>';
    Object.keys(footnotes).sort((a, b) => parseInt(a) - parseInt(b)).forEach(num => {
      html += `<li id="fn${num}">${footnotes[num]} <a href="#fnref${num}" class="footnote-backref">↩</a></li>`;
    });
    html += '</ol></div><p>';
  }
  
  return `<p>${html}</p>`;
}

// Add cross-links to article content
window.addCrossLinks = function(html, allArticles, currentArticleId) {
  const otherArticles = allArticles.filter(a => a.id !== currentArticleId);
  otherArticles.forEach(otherArticle => {
    const topicRegex = new RegExp(`\\b(${otherArticle.topic.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})\\b`, 'gi');
    html = html.replace(topicRegex, `<a href="#" class="article-link" data-article-id="${otherArticle.id}">$1</a>`);
  });
  return html;
}