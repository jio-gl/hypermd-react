# HyperMD React

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](#license)

A lightweight, client‑side Markdown editor and previewer built with **React 18**, **marked**, and **highlight.js**.

---

## Table of Contents
- [Features](#features)
- [Demo](#demo)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Built With](#built-with)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)

---

## Features
- **Live preview**: edit Markdown on the left, see HTML on the right in real time.  
- **Syntax highlighting** for code blocks powered by *highlight.js*.  
- **Git‑style links & checkboxes** via *marked* extensions.  
- **Zero‑config**: bootstrapped with Create React App for instant development.  
- **Modern routing** with React Router v6.  
- **Unique note IDs** generated with *uuid*.  

---

## Demo
*(Coming soon – screenshots or a live link here)*

---

## Getting Started

### Prerequisites
- **Node.js** ≥ 18  
- **npm** ≥ 9 (shipped with Node) or **yarn** ≥ 1.22

### Installation

```bash
git clone https://github.com/<your‑org>/hypermd-react.git
cd hypermd-react
npm install            # or yarn
npm start              # opens http://localhost:3000
```

### Available Scripts
| Command | What it does |
|---------|--------------|
| `npm start` | Runs the app in development mode with hot‑reload. |
| `npm test` | Launches the test runner in interactive watch mode. |
| `npm run build` | Builds an optimized production bundle in `build/`. |
| `npm run eject` | **Irreversible** – copies CRA config locally so you can customize webpack/Babel/ESLint. |

---

## Project Structure
```
hypermd-react
├─ public/            # Static assets & index.html
└─ src/
   ├─ components/     # React components
   ├─ hooks/          # Custom React hooks
   ├─ pages/          # Route components
   ├─ styles/         # SCSS/CSS modules
   ├─ utils/          # Helper functions
   └─ index.tsx       # Entry point
```

---

## Built With
| Package | Version | Purpose |
|---------|---------|---------|
| react | 18.2.0 | UI library |
| react-dom | 18.2.0 | DOM renderer |
| react-router-dom | 6.10.0 | Declarative routing |
| marked | 4.3.0 | Markdown → HTML parser |
| highlight.js | 11.7.0 | Syntax highlighting |
| uuid | 9.0.0 | Unique ID generation |
| react-scripts | 5.0.1 | CRA build config |
| @testing-library/* | 13‑14 | Testing utilities |
| web-vitals | 2.1.4 | Performance metrics |

> See **package.json** for the full list of dependencies and versions.

---

## Contributing

1. **Fork** the repository.
2. **Create** your feature branch: `git checkout -b feat/amazing-feature`.
3. **Commit** your changes: `git commit -m 'feat: add amazing feature'`.
4. **Push** to the branch: `git push origin feat/amazing-feature`.
5. Create a **Pull Request**.

Please make sure your code lints and tests pass before submitting. ❤️

---

## License
Distributed under the **MIT License** – see the [`LICENSE`](LICENSE) file for details.

---

## Kudos
- [Create React App](https://github.com/facebook/create-react-app) for the project scaffold.
- [marked](https://github.com/markedjs/marked) for fast Markdown parsing.
- [highlight.js](https://github.com/highlightjs/highlight.js) for gorgeous code highlighting.

