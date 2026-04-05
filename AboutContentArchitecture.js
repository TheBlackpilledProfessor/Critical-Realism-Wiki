// Architecture, security, and technical implementation sections
window.ABOUT_SECTIONS_ARCHITECTURE = [
  {
    id: 'architecture',
    title: 'Project Architecture',
    subsections: [
      {
        title: 'Frontend Stack',
        content: `
          <ul>
            <li><strong>React 18:</strong> Component-based UI with hooks for state management</li>
            <li><strong>Modular CSS:</strong> Separated stylesheets (base.css, layout.css, forms.css, articles.css, modals.css, components.css, mobile.css)</li>
            <li><strong>Custom Cursor:</strong> Animated cursor with click feedback using requestAnimationFrame for performance</li>
            <li><strong>Responsive Design:</strong> Mobile-first approach with touch-optimized controls</li>
          </ul>
        `
      },
      {
        title: 'Core Components',
        content: `
          <ul>
            <li><strong>App.js:</strong> Main application container with state orchestration</li>
            <li><strong>AppState.js:</strong> Custom hook for centralized state management</li>
            <li><strong>AppHandlers.js:</strong> Event handlers and business logic</li>
            <li><strong>ArticleGenerator.js:</strong> AI-powered content generation with streaming display</li>
            <li><strong>CategoryDetector.js:</strong> Keyword-based topic classification (15 categories)</li>
            <li><strong>LoadingScreen.js:</strong> Initial app loading with fade-out animation</li>
            <li><strong>AboutModal.js:</strong> Comprehensive documentation modal</li>
            <li><strong>ContextMenu.js:</strong> Right-click menu with page actions</li>
            <li><strong>Notification.js:</strong> Toast notifications with auto-dismiss</li>
          </ul>
        `
      },
      {
        title: 'AI Integration',
        content: `
          <ul>
            <li><strong>Multi-Provider Support:</strong> Together.ai, OpenRouter, or local LLMs (Ollama/LM Studio)</li>
            <li><strong>Provider Abstraction:</strong> Unified interface for switching between AI providers</li>
            <li><strong>Category-Specific Prompts:</strong> 15 specialized prompt templates across 4 modules</li>
            <li><strong>Real-time Progress:</strong> Live streaming of AI-generated content word-by-word</li>
            <li><strong>Local-First Option:</strong> Run completely offline with local models</li>
          </ul>
        `
      }
    ]
  },
  {
    id: 'security',
    title: 'Security & Input Sanitization',
    subsections: [
      {
        title: 'Input Validation',
        content: `
          <p>
            All user inputs pass through the <code>sanitizeInput()</code> function defined in utils.js, which:
          </p>
          <ul>
            <li>Removes angle brackets (&lt; &gt;) to prevent HTML injection</li>
            <li>Strips <code>javascript:</code> protocol to prevent XSS attacks</li>
            <li>Removes event handlers (onclick=, onload=, etc.) to prevent script execution</li>
            <li>Trims whitespace from input edges</li>
            <li>Enforces 500-character maximum length to prevent abuse</li>
            <li>Returns empty string for non-string inputs</li>
          </ul>
        `
      },
      {
        title: 'Content Security',
        content: `
          <ul>
            <li><strong>Markdown Rendering:</strong> Custom renderMarkdown() function processes content safely</li>
            <li><strong>Cross-Site Linking:</strong> Article cross-links use data attributes, not inline JavaScript</li>
            <li><strong>Image Loading:</strong> All images loaded from trusted CDN sources</li>
            <li><strong>No Eval:</strong> Zero use of eval() or Function() constructors</li>
          </ul>
        `
      },
      {
        title: 'Data Handling',
        content: `
          <ul>
            <li><strong>No Persistence:</strong> Analyzer mode stores zero data - every session is isolated</li>
            <li><strong>No Cookies:</strong> No tracking, analytics, or third-party cookies</li>
            <li><strong>No Backend:</strong> Pure client-side application with no server logging</li>
            <li><strong>Private Sessions:</strong> Your analyzed topics never leave your browser</li>
          </ul>
        `
      }
    ]
  },
  {
    id: 'technical',
    title: 'Technical Implementation Details',
    subsections: [
      {
        title: 'Performance Optimizations',
        content: `
          <ul>
            <li><strong>Cursor Animation:</strong> requestAnimationFrame throttling prevents lag</li>
            <li><strong>React Memoization:</strong> ArticleCard uses React.memo with custom comparison</li>
            <li><strong>Event Cleanup:</strong> Proper listener removal prevents memory leaks</li>
            <li><strong>CSS Animation:</strong> Hardware-accelerated transforms for smooth transitions</li>
          </ul>
        `
      },
      {
        title: 'Markdown Processing',
        content: `
          <p>
            Custom markdown renderer in utils.js handles:
          </p>
          <ul>
            <li>Headers (H1, H2, H3) with automatic sizing</li>
            <li>Bold (**text**) and italic (*text*) formatting</li>
            <li>Unordered lists with proper nesting</li>
            <li>Footnote references [^1] converted to superscript links</li>
            <li>Footnote definitions parsed from References section</li>
            <li>Automatic paragraph breaks and line breaks</li>
            <li>Cross-article linking with click handlers</li>
          </ul>
        `
      },
      {
        title: 'Category Detection Algorithm',
        content: `
          <p>
            CategoryDetector.js uses keyword matching with priority ordering:
          </p>
          <ol>
            <li>Satire/Humor keywords (highest priority for edge cases)</li>
            <li>Pop Culture & Media (viral content, gaming, internet phenomena)</li>
            <li>Instructional/How-To (guides, tutorials, DIY)</li>
            <li>Technical & Engineering (infrastructure, systems)</li>
            <li>Education & Academia (pedagogy, research)</li>
            <li>Scientific Topics (physics, biology, medicine)</li>
            <li>Philosophy & Ethics (moral theory, thinkers)</li>
            <li>Political & Economic (governance, policy)</li>
            <li>Literature & Arts (creative works, movements)</li>
            <li>Biography (life stories, profiles)</li>
            <li>Spirituality & Religion (faiths, practices)</li>
            <li>Social Movements & Activism (protests, grassroots)</li>
            <li>Historical & Social (events, civilizations)</li>
            <li>Health & Wellness (fitness, mental health)</li>
            <li>Speculative/Futurism (sci-fi, hypotheticals)</li>
            <li>Default: Critical Realism (for ambiguous topics)</li>
          </ol>
        `
      }
    ]
  },
  {
    id: 'codequality',
    title: 'Code Quality & Maintainability',
    subsections: [
      {
        title: 'Modular Architecture',
        content: `
          <p>
            The codebase is split into focused, single-responsibility files:
          </p>
          <ul>
            <li><strong>7 CSS modules:</strong> Base, layout, forms, articles, modals, components, mobile</li>
            <li><strong>4 prompt modules:</strong> Academic, cultural, practical, social categories</li>
            <li><strong>3 state files:</strong> AppState, AppHandlers, ArticleGenerator</li>
            <li><strong>8 UI components:</strong> Modals, notifications, dialogs, context menus</li>
            <li><strong>3 utility modules:</strong> Utils, CategoryDetector, ArticleImagePrompts</li>
          </ul>
        `
      },
      {
        title: 'Development Practices',
        content: `
          <ul>
            <li>Custom hooks for state management separation</li>
            <li>React.memo for performance optimization</li>
            <li>Proper cleanup in useEffect hooks</li>
            <li>Event listener management with removal</li>
            <li>No inline styles (CSS modules only)</li>
            <li>Semantic HTML with accessibility considerations</li>
          </ul>
        `
      }
    ]
  }
];