// Import/Export functionality (disabled in analyzer mode)

window.exportArticles = async function(articles, privateMode = false, collectionName = 'article_v1', setProgress = null) {
  if (articles.length === 0) {
    throw new Error('No articles to export');
  }
  
  const currentUser = await websim.getCurrentUser();
  const mode = privateMode ? 'private' : 'public';
  const timestamp = new Date().toISOString().split('T')[0];
  
  // For large databases (>50 articles), use chunked export
  const CHUNK_SIZE = 50;
  const needsChunking = articles.length > CHUNK_SIZE;
  
  if (needsChunking) {
    if (setProgress) setProgress({ step: 'Preparing chunked export...', percent: 5, estimatedTime: articles.length * 0.2 });
    
    // Create manifest
    const totalChunks = Math.ceil(articles.length / CHUNK_SIZE);
    const manifest = {
      version: '1.0',
      exportDate: new Date().toISOString(),
      exportedBy: currentUser.username,
      totalArticles: articles.length,
      privateMode: privateMode,
      chunked: true,
      totalChunks: totalChunks,
      chunkSize: CHUNK_SIZE
    };
    
    // Export manifest
    const manifestBlob = new Blob([JSON.stringify(manifest, null, 2)], { type: 'application/json' });
    const manifestUrl = URL.createObjectURL(manifestBlob);
    const manifestLink = document.createElement('a');
    manifestLink.href = manifestUrl;
    manifestLink.download = `critical-realism-wiki-${mode}-backup-${timestamp}-manifest.json`;
    document.body.appendChild(manifestLink);
    manifestLink.click();
    document.body.removeChild(manifestLink);
    URL.revokeObjectURL(manifestUrl);
    
    // Export chunks
    for (let i = 0; i < totalChunks; i++) {
      const startIdx = i * CHUNK_SIZE;
      const endIdx = Math.min(startIdx + CHUNK_SIZE, articles.length);
      const chunk = articles.slice(startIdx, endIdx);
      
      if (setProgress) {
        setProgress({ 
          step: `Exporting chunk ${i + 1}/${totalChunks}...`, 
          percent: 10 + ((i / totalChunks) * 80),
          estimatedTime: (totalChunks - i) * 2
        });
      }
      
      const chunkData = {
        version: '1.0',
        chunkIndex: i,
        totalChunks: totalChunks,
        articles: chunk.map(article => ({
          topic: article.topic,
          content: article.content,
          image_url: article.image_url,
          username: article.username,
          created_at: article.created_at
        }))
      };
      
      // Compress chunk
      const jsonString = JSON.stringify(chunkData);
      const jsonBlob = new Blob([jsonString], { type: 'application/json' });
      const compressionStream = new CompressionStream('gzip');
      const compressedStream = jsonBlob.stream().pipeThrough(compressionStream);
      const compressedBlob = await new Response(compressedStream).blob();
      
      const url = URL.createObjectURL(compressedBlob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `critical-realism-wiki-${mode}-backup-${timestamp}-chunk-${i + 1}-of-${totalChunks}.crw`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      
      // Small delay between downloads
      await new Promise(resolve => setTimeout(resolve, 500));
    }
    
    if (setProgress) setProgress({ step: 'Export complete!', percent: 100, estimatedTime: 0 });
    
  } else {
    // Single file export for small databases
    if (setProgress) setProgress({ step: 'Compressing data...', percent: 50, estimatedTime: 2 });
    
    const exportData = {
      version: '1.0',
      exportDate: new Date().toISOString(),
      exportedBy: currentUser.username,
      totalArticles: articles.length,
      privateMode: privateMode,
      chunked: false,
      articles: articles.map(article => ({
        topic: article.topic,
        content: article.content,
        image_url: article.image_url,
        username: article.username,
        created_at: article.created_at
      }))
    };
    
    // Compress the JSON data using gzip
    const jsonString = JSON.stringify(exportData);
    const jsonBlob = new Blob([jsonString], { type: 'application/json' });
    const compressionStream = new CompressionStream('gzip');
    const compressedStream = jsonBlob.stream().pipeThrough(compressionStream);
    const compressedBlob = await new Response(compressedStream).blob();
    
    if (setProgress) setProgress({ step: 'Downloading...', percent: 90, estimatedTime: 1 });
    
    const url = URL.createObjectURL(compressedBlob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `critical-realism-wiki-${mode}-backup-${timestamp}.crw`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    if (setProgress) setProgress({ step: 'Complete!', percent: 100, estimatedTime: 0 });
  }
}

window.importArticles = async function(file, articles, setProgress, collectionName) {
  // Import/export disabled in analyzer mode
  throw new Error('Import/Export not available in analyzer mode');
}