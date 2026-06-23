# Tech Stack

**Status**: Decided

## Context

Need a tech stack for a turn-based roguelike survival game. Web-first (mobile then desktop). Minimal dependencies desired — roguelike systems (FOV, pathfinding, map gen) written from scratch.

## Decision

- **Language**: TypeScript
- **Rendering**: Canvas 2D API (browser built-in, no extra deps)
- **Build tooling**: Vite

## Rationale

- TypeScript gives type safety and broad platform reach. Web is the primary target; no native toolchain needed.
- Canvas 2D API is sufficient for 2D tile rendering and available in every browser without dependencies.
- Minimal deps keeps the project lean and maximises control.
