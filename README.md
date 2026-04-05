# Critical Realism Analyzer

**Critical Realism Analyzer** is an open-source AI-powered topic analysis tool. Unlike rigid encyclopedias, it produces flowing, evidence-based, and engaging articles for any topic, applying the principles of critical realism to provide systemic and contextual insights.

![Demo Screenshot](./assets/demo.png)

---

## Features

- **Evidence-Based Analysis:** All factual claims are supported by reputable sources.
- **Intellectual Honesty:** Presents multiple perspectives and acknowledges complexity.
- **Human-Like Writing:** Natural, engaging, and accessible style.
- **Contextual Understanding:** Topics are placed in historical, cultural, and systemic context.
- **15 Specialized Analysis Modes:** Academic, cultural, practical, and social topics.
- **Real-Time Streaming:** Live word-by-word generation with progress feedback.
- **AI Multi-Provider Support:** Together.ai, OpenRouter, or local LLMs (Ollama/LM Studio).
- **Secure & Client-Side:** Zero persistence, no tracking, input sanitized, safe markdown rendering.

---

## Tech Stack

- **Frontend:** React 18, Modular CSS, Responsive Design
- **AI Integration:** Multi-provider support with real-time streaming
- **Security:** XSS prevention, sanitized input, safe markdown rendering
- **Performance:** Hardware-accelerated animations, requestAnimationFrame throttling
- **Architecture:** Modular, maintainable code with single-responsibility files

---

## Installation

Clone the repository:

```bash
git clone https://github.com/<your-username>/critical-realism-analyzer.git
cd critical-realism-analyzer
```

Install dependencies:

```bash
npm install
# or
yarn install
```

Run the app locally:

```bash
npm start
# or
yarn start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Download

You can download the project as a ZIP directly from GitHub:

[Download ZIP](https://github.com/<your-username>/critical-realism-analyzer/archive/refs/heads/main.zip)

---

## Usage

1. Enter any topic (max 500 characters) in the input box.  
2. Choose your AI provider in the Settings.  
3. Click **Analyze**.  
4. Watch the AI generate an article in real-time.  
5. Explore cross-links, footnotes, and dynamically generated images.

---

## Project Structure

```
/src
  ├─ components/      # UI components (modals, notifications, context menus)
  ├─ prompts/         # Category-specific AI prompts
  ├─ utils/           # Sanitization, markdown rendering, category detection
  ├─ App.js           # Main container
  ├─ AppState.js      # Custom state hook
  ├─ AppHandlers.js   # Event handlers and logic
  └─ ArticleGenerator.js # AI-powered content generation
```

---

## Security & Privacy

- Zero data persistence, fully client-side.  
- Input is sanitized to prevent XSS.  
- No cookies, tracking pixels, or analytics.  
- AI calls go directly to WebSim API or local LLM.

---

## Contribution

Contributions are welcome!  

1. Fork the repo  
2. Create a branch: `git checkout -b feature/my-feature`  
3. Commit changes: `git commit -m "Add feature"`  
4. Push to the branch: `git push origin feature/my-feature`  
5. Open a Pull Request

---

## License

This project is licensed under the **MIT License** – see the [LICENSE](LICENSE) file for details.

---

## Demo & Screenshots

![Demo](./assets/demo.gif)

---

## References

All generated content uses reputable sources such as:

- Peer-reviewed journals  
- Established institutions  
- Verified primary documents

---

> Designed for researchers, students, and curious minds. Explore topics like never before with **Critical Realism Analyzer**.
