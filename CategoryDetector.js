// Category detection function - determines the appropriate writing mode based on topic keywords
window.detectCategory = function(topic) {
  const t = topic.toLowerCase();
  
  // 6. Satire / Humor
  const satireKeywords = ['meme', 'parody', 'satire', 'absurd', 'funny', 'joke', 'humor', 'comedy', 'spoof', 'rickroll', 'doge'];
  if (satireKeywords.some(k => t.includes(k))) return 'satire';
  
  // 8. Pop Culture & Media
  const popCultureKeywords = [
    'skibidi', 'viral', 'tiktok', 'youtube', 'streamer', 'influencer',
    'fnaf', 'among us', 'roblox', 'minecraft', 'fortnite', 'video game',
    'anime', 'manga', 'cosplay', 'fanfic', 'fandom', 'speedrun', 'creepypasta',
    'scp', 'backrooms', 'analog horror', 'arg', 'webcomic', 'vtuber', 'twitch',
    'squid game', 'trending', 'gaming culture', 'pixar'
  ];
  if (popCultureKeywords.some(k => t.includes(k))) return 'popculture';
  
  // 7. Instructional / How-To
  const howToKeywords = ['how to', 'guide to', 'tutorial', 'learn', 'diy', 'recipe', 'cooking', 'step-by-step', 'training', 'skill'];
  if (howToKeywords.some(k => t.includes(k))) return 'howto';
  
  // 15. Technical & Engineering
  const technicalKeywords = [
    'engineering', 'bridge construction', 'autonomous vehicle', 'embedded systems',
    'civil engineering', 'robotics', 'automation', 'solar panel', 'technical', 'infrastructure'
  ];
  if (technicalKeywords.some(k => t.includes(k))) return 'technical';
  
  // 14. Education & Academia
  const educationKeywords = [
    'university', 'college', 'academic', 'pedagogy', 'teaching method',
    'study method', 'research method', 'education policy', 'curriculum', 'stem education'
  ];
  if (educationKeywords.some(k => t.includes(k))) return 'education';
  
  // 2. Scientific Topics
  const scienceKeywords = [
    'physics', 'chemistry', 'biology', 'astronomy', 'quantum', 'molecule', 'atom',
    'evolution', 'genetics', 'ecosystem', 'geology', 'climate science', 'medicine',
    'disease', 'virus', 'bacteria', 'photosynthesis', 'crispr', 'environmental science'
  ];
  if (scienceKeywords.some(k => t.includes(k))) return 'science';
  
  // 3. Philosophy & Ethics
  const philosophyKeywords = [
    'philosophy', 'ethics', 'moral theory', 'metaphysics', 'epistemology', 'logic',
    'existentialism', 'utilitarianism', 'deontology', 'virtue ethics', 'kant', 'plato',
    'socrates', 'aristotle', 'political philosophy', 'john locke'
  ];
  if (philosophyKeywords.some(k => t.includes(k))) return 'philosophy';
  
  // 4. Political & Economic Analysis
  const politicalKeywords = [
    'socialism', 'capitalism', 'democracy', 'federal reserve', 'united nations',
    'governance', 'policy', 'political theory', 'ideology', 'economics', 'trade',
    'geopolitics', 'international relations', 'universal basic income'
  ];
  if (politicalKeywords.some(k => t.includes(k))) return 'political';
  
  // 5. Literature & Arts
  const artsKeywords = [
    'literature', 'poetry', 'novel', 'shakespeare', 'painting', 'sculpture', 'music',
    'beethoven', 'composer', 'theater', 'play', 'performance', 'impressionism',
    'art movement', 'cultural criticism', 'hamlet'
  ];
  if (artsKeywords.some(k => t.includes(k))) return 'arts';
  
  // 9. Biography
  const biographyKeywords = [
    'biography', 'life of', 'profile of', ' born ', ' died ', 'einstein',
    'mandela', 'da vinci', 'cleopatra', 'innovator', 'scientist profile', 'activist leader'
  ];
  if (biographyKeywords.some(k => t.includes(k))) return 'biography';
  
  // 10. Spirituality & Religion
  const religionKeywords = [
    'religion', 'christianity', 'islam', 'buddhism', 'hinduism', 'judaism',
    'theology', 'spiritual', 'mysticism', 'faith', 'sacred', 'divine',
    'hermeticism', 'interfaith', 'liberation theology'
  ];
  if (religionKeywords.some(k => t.includes(k))) return 'religion';
  
  // 12. Speculative / Futurism
  const speculativeKeywords = [
    'future', 'sci-fi', 'science fiction', 'alternate history', 'utopia', 'dystopia',
    'ai future', 'mars colonization', 'space exploration', 'what if', 'hypothetical',
    'transhumanism', 'artificial general intelligence'
  ];
  if (speculativeKeywords.some(k => t.includes(k))) return 'speculative';
  
  // 13. Health & Wellness
  const healthKeywords = [
    'health', 'fitness', 'exercise', 'nutrition', 'diet', 'mental health',
    'wellness', 'therapy', 'psychology', 'meditation', 'yoga', 'cognitive behavioral',
    'mediterranean diet', 'public health', 'vaccination'
  ];
  if (healthKeywords.some(k => t.includes(k))) return 'health';
  
  // 11. Social Movements & Activism
  const activismKeywords = [
    'movement', 'activism', 'protest', 'civil rights', 'labor rights',
    'environmentalism', 'feminism', 'resistance', 'greenpeace',
    'suffrage', 'human rights', 'grassroots'
  ];
  if (activismKeywords.some(k => t.includes(k))) return 'activism';
  
  // 1. Historical & Social Analysis
  const historicalKeywords = [
    'empire', 'revolution', 'ancient', 'civilization', 'historical',
    'french revolution', 'roman empire', 'industrialization', 'war',
    'century', 'medieval', 'renaissance', 'dynasty'
  ];
  if (historicalKeywords.some(k => t.includes(k))) return 'historical';
  
  // Default to critical realism for ambiguous topics
  return 'criticalrealism';
}