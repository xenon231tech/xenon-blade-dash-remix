# Development Guide

## Getting Started

### Prerequisites
- Node.js 14+
- npm or yarn
- Git
- Code editor (VS Code recommended)

### Setup

```bash
git clone https://github.com/xenon231tech/xenon-blade-dash-remix.git
cd xenon-blade-dash-remix
npm install
npm run dev
```

## Project Structure

```
xenon-blade-dash-remix/
├── src/
│   ├── utils/
│   ├── entities/
│   ├── systems/
│   └── index.js
├── docs/
├── examples/
├── config/
├── tests/
├── index.html
└── package.json
```

## Development Workflow

### Creating a New Enemy Type

1. Create enemy definition in `src/entities/enemies.js`
2. Add sprite asset reference
3. Define behavior and stats
4. Test in game
5. Document in guides

---

**Last Updated**: 2026-06-06
