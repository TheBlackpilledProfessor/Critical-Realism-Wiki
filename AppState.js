// State management and hooks for the App component
window.useAppState = function() {
  const [topic, setTopic] = React.useState('');
  const [generating, setGenerating] = React.useState(false);
  const [currentArticle, setCurrentArticle] = React.useState(null);
  const [progress, setProgress] = React.useState({ step: '', percent: 0, estimatedTime: 0 });
  const [streamingText, setStreamingText] = React.useState('');
  const [showAbout, setShowAbout] = React.useState(false);
  const [notification, setNotification] = React.useState(null);
  const [showSettings, setShowSettings] = React.useState(false);

  return {
    topic, setTopic,
    generating, setGenerating,
    currentArticle, setCurrentArticle,
    progress, setProgress,
    streamingText, setStreamingText,
    showAbout, setShowAbout,
    notification, setNotification,
    showSettings, setShowSettings
  };
};