// Workflow and prompts sections
window.ABOUT_SECTIONS_WORKFLOW = [
  {
    id: 'workflow',
    title: 'How It Works',
    subsections: [
      {
        title: 'Analysis Pipeline',
        content: `
          <ol>
            <li><strong>Input Sanitization:</strong> Topic passes through security validation (max 500 chars, XSS prevention)</li>
            <li><strong>Category Detection:</strong> CategoryDetector.js analyzes keywords against 15 category definitions</li>
            <li><strong>Prompt Selection:</strong> System loads category-specific prompts from modular prompt files</li>
            <li><strong>Content Generation:</strong> AI creates 800-1200 word analysis with inline citations</li>
            <li><strong>Streaming Display:</strong> Content appears word-by-word with progress tracking</li>
            <li><strong>Image Generation:</strong> Category-specific image prompt creates 16:9 illustration</li>
            <li><strong>Final Render:</strong> Markdown conversion with cross-linking and footnote processing</li>
          </ol>
        `
      },
      {
        title: 'Real-time Streaming',
        content: `
          <p>
            Watch the AI's writing process as it happens:
          </p>
          <ul>
            <li>Progress bar shows percentage complete and estimated time remaining</li>
            <li>Content streams word-by-word with 50ms delays every 10 words</li>
            <li>Live markdown rendering shows formatted text as it's generated</li>
            <li>Status updates track: initialization → analysis → image generation → completion</li>
          </ul>
        `
      }
    ]
  },
  {
    id: 'prompts',
    title: 'Modular Prompt System',
    content: `
      <p>
        Article generation prompts are organized across four specialized modules:
      </p>
      <ul>
        <li><strong>ArticlePromptsAcademic.js:</strong> Critical realism, historical, scientific, philosophical, political</li>
        <li><strong>ArticlePromptsCultural.js:</strong> Satire, pop culture, arts, biography</li>
        <li><strong>ArticlePromptsPractical.js:</strong> How-to guides, health, technical, education</li>
        <li><strong>ArticlePromptsSocial.js:</strong> Activism, religion, speculative topics</li>
      </ul>
      <p>
        Each category includes:
      </p>
      <ul>
        <li>Detailed system prompt (800-1200 word target, citation requirements, structural guidelines)</li>
        <li>User prompt template with category-specific instructions</li>
        <li>Custom image generation prompt in ArticleImagePrompts.js</li>
        <li>Tone and style specifications for natural, human-like writing</li>
      </ul>
    `
  },
  {
    id: 'difference',
    title: 'What Makes This Different',
    content: `
      <p>
        Traditional encyclopedias aim for neutral, detached coverage. We aim for <em>engaged scholarship</em> - writing that is rigorous and evidence-based but also passionate, curious, and genuinely interested in helping readers understand.
      </p>
      <p>
        Our articles read like they were written by someone who has studied the topic deeply and wants to share what they've learned in an accessible, compelling way. We avoid the sterile tone of academic writing while maintaining its intellectual rigor.
      </p>
    `
  }
];