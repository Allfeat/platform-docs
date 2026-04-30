# Allfeat Platform Documentation

Unified developer documentation for the Allfeat platform — covers the ATS Widget integration and the Organization API. Built with [Starlight](https://starlight.astro.build/).

Deployed at **https://docs.allfeat.org**.

## Structure

```
src/content/docs/
├── index.mdx          # Platform landing
└── ats/               # Allfeat Time Stamp (ATS)
    ├── index.mdx      # ATS overview
    ├── widget/        # Widget integration (white-label web component)
    └── api/           # Organization API (server-to-server)
```

## Commands

| Command         | Action                                       |
| :-------------- | :------------------------------------------- |
| `bun install`   | Install dependencies                         |
| `bun dev`       | Start dev server at `localhost:4321`         |
| `bun build`     | Build production site to `./dist/`           |
| `bun preview`   | Preview the production build locally         |
