// Article generation functionality - analyzer mode (no storage) with streaming
window.generateArticle = async function(targetTopic, setProgress, setCurrentArticle, setStreamingText) {
  const sanitizedTopic = window.sanitizeInput(targetTopic);
  if (!sanitizedTopic) return;
  
  setProgress({ step: 'Initializing analysis...', percent: 5, estimatedTime: 30 });
  setStreamingText('');
  
  const topic = sanitizedTopic;
  
  // Detect category using CategoryDetector
  const category = window.detectCategory(targetTopic);
  
  try {
    // Get prompts from ArticlePrompts
    const prompts = window.ARTICLE_PROMPTS[category];
    const systemPrompt = prompts.systemPrompt;
    const userPrompt = prompts.userPrompt(targetTopic);
    
    setProgress({ step: 'Analyzing and writing...', percent: 10, estimatedTime: 25 });
    
    // Step 1: Generate article content using configured AI provider
    const fullContent = await window.aiProvider.chat([
      {
        role: 'system',
        content: systemPrompt
      },
      {
        role: 'user',
        content: userPrompt
      }
    ]);
    
    // Simulate streaming effect by revealing content progressively
    const words = fullContent.split(' ');
    const estimatedWords = words.length;
    let displayedContent = '';
    
    for (let i = 0; i < words.length; i++) {
      displayedContent += (i > 0 ? ' ' : '') + words[i];
      
      // Update less frequently to reduce re-renders (every 20 words instead of 10)
      if (i % 20 === 0 || i === words.length - 1) {
        setStreamingText(displayedContent);
        
        // Update progress based on word count
        const progressPercent = Math.min(10 + ((i + 1) / estimatedWords) * 50, 60);
        const remainingTime = Math.max(1, Math.round((estimatedWords - i - 1) / 100));
        setProgress({ 
          step: 'Writing analysis...', 
          percent: progressPercent, 
          estimatedTime: remainingTime 
        });
        
        // Delay to create streaming effect
        await new Promise(resolve => setTimeout(resolve, 100));
      }
    }

    setProgress({ step: 'Complete', percent: 100, estimatedTime: 0 });
    
    // Set the article in state (no image generation)
    setCurrentArticle({
      topic: topic,
      content: fullContent,
      image_url: null
    });
    
    setStreamingText('');
    
    return true;
  } catch (error) {
    console.error('Error generating article:', error);
    setStreamingText('');
    throw error;
  }
}