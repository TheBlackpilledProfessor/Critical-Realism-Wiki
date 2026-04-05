// removed: window.ARTICLE_PROMPTS object with systemPrompt and userPrompt for all 15 categories
// removed: window.IMAGE_PROMPTS object with image generation prompts for all 15 categories

// Article prompts index - imports and re-exports prompts from separate modules
// This file serves as the main entry point for all article generation prompts

// System prompts are loaded from ArticleSystemPrompts.js

// Build the unified ARTICLE_PROMPTS object that ArticleGenerator expects
window.ARTICLE_PROMPTS = window.ARTICLE_SYSTEM_PROMPTS;