// removed: All individual category prompt definitions (criticalrealism, historical, science, philosophy, political, satire, popculture, arts, biography, howto, health, technical, education, activism, religion, speculative)
// These have been moved to specialized files for better organization:
// - ArticlePromptsAcademic.js (criticalrealism, historical, science, philosophy, political)
// - ArticlePromptsCultural.js (satire, popculture, arts, biography)
// - ArticlePromptsPractical.js (howto, health, technical, education)
// - ArticlePromptsSocial.js (activism, religion, speculative)

// Combine all category prompts into a single object
window.ARTICLE_SYSTEM_PROMPTS = {
  ...window.ARTICLE_PROMPTS_ACADEMIC,
  ...window.ARTICLE_PROMPTS_CULTURAL,
  ...window.ARTICLE_PROMPTS_PRACTICAL,
  ...window.ARTICLE_PROMPTS_SOCIAL
};