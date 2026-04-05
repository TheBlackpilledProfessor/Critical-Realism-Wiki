// Event handlers for the App component
window.useAppHandlers = function(state) {
  const {
    topic,
    setTopic,
    setGenerating,
    setProgress,
    setNotification,
    setCurrentArticle,
    setStreamingText
  } = state;

  const handleGenerateArticle = async () => {
    if (!topic || state.generating) return;
    
    setGenerating(true);
    setCurrentArticle(null);
    
    try {
      await window.generateArticle(topic, setProgress, setCurrentArticle, setStreamingText);
      setTopic('');
    } catch (error) {
      console.error('Error generating article:', error);
      setNotification({ message: 'Failed to generate article. Please try again.', type: 'error' });
    } finally {
      setTimeout(() => {
        setGenerating(false);
        setProgress({ step: '', percent: 0, estimatedTime: 0 });
      }, 500);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !state.generating) {
      handleGenerateArticle();
    }
  };

  return {
    handleGenerateArticle,
    handleKeyPress
  };
};