// Miscellaneous sections: limitations, use cases, privacy, compatibility
window.ABOUT_SECTIONS_MISC = [
  {
    id: 'limitations',
    title: 'Limitations & Ethics',
    content: `
      <p>
        This is an AI tool, not a replacement for human expertise. While we strive for accuracy and cite reputable sources, articles should be viewed as starting points for understanding, not final authorities.
      </p>
      <p>
        We explicitly reject:
      </p>
      <ul>
        <li>Fatalistic or deterministic framing that denies human agency</li>
        <li>Hate speech, bigotry, or content promoting harm</li>
        <li>Uncited claims or reliance on low-quality sources</li>
        <li>Misanthropic language that dismisses human potential</li>
        <li>Medical advice or prescriptive health recommendations</li>
      </ul>
    `
  },
  {
    id: 'usecases',
    title: 'Best Use Cases',
    content: `
      <ul>
        <li>Getting a comprehensive overview of an unfamiliar topic</li>
        <li>Understanding complex ideas in accessible language</li>
        <li>Exploring different perspectives on controversial issues</li>
        <li>Finding quality sources for further research</li>
        <li>Learning about historical context and systemic connections</li>
        <li>Discovering what makes a topic intellectually interesting</li>
      </ul>
    `
  },
  {
    id: 'privacy',
    title: 'Privacy & Data',
    subsections: [
      {
        title: 'Zero Persistence',
        content: `
          <p>
            Analyzer mode stores absolutely no data:
          </p>
          <ul>
            <li>No database connections or storage APIs</li>
            <li>No localStorage or sessionStorage usage</li>
            <li>No cookies, tracking pixels, or analytics</li>
            <li>Each session exists only in component state</li>
            <li>Refresh the page and everything disappears</li>
          </ul>
        `
      },
      {
        title: 'Client-Side Only',
        content: `
          <ul>
            <li>Pure JavaScript application running in your browser</li>
            <li>No backend server logging requests</li>
            <li>No form submissions or POST requests</li>
            <li>AI calls go directly to WebSim API with no intermediary</li>
          </ul>
        `
      },
      {
        title: 'Your Data, Your Control',
        content: `
          <ul>
            <li>Topics you analyze never persist beyond the session</li>
            <li>Generated content exists only in browser memory</li>
            <li>Close the tab and everything is gone</li>
            <li>No user accounts, profiles, or identification</li>
          </ul>
        `
      }
    ]
  },
  {
    id: 'compatibility',
    title: 'Browser Compatibility',
    content: `
      <p>
        Tested and optimized for:
      </p>
      <ul>
        <li>Chrome/Edge 90+ (recommended)</li>
        <li>Firefox 88+</li>
        <li>Safari 14+</li>
        <li>Mobile browsers on iOS 14+ and Android 10+</li>
      </ul>
      <p>
        Required features:
      </p>
      <ul>
        <li>ES6+ JavaScript support</li>
        <li>CSS Grid and Flexbox</li>
        <li>requestAnimationFrame API</li>
        <li>Modern scrollbar styling</li>
      </ul>
    `
  }
];