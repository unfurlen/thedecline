# The Decline

Turn-based roguelike survival game. Web-first (mobile + desktop web).

## Tech Stack

| Layer | Choice |
|---|---|
| Language | TypeScript |
| Build | Vite |
| Rendering | Canvas 2D API |
| Linting/formatting | Biome |

## Project Structure

```
src/          — game source code
docs/         — task docs, decision records, project map
  tasks/      — open items (yyyy-mm-dd-task-name.md)
  decisions/  — closed decisions (yyyy-mm-dd-decision-name.md)
  project.md  — this file
```

## Conventions

- Minimal dependencies. Write systems from scratch where practical.
- Decisions get recorded as they're settled, not held until task completion.
- Each task runs in its own session — context is self-contained.
