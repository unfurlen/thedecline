# Project Working Style

## Pace
- Take things slowly. Do not jump ahead or anticipate the next step.
- The user will say what comes next. Wait for instruction.

## Collaboration
- This is a discussion-first project. Present options, pros, and cons. Don't decide for the user.
- Ask questions naturally in conversation. Don't use the `question` tool.
- When the user pushes back on approach, reset and try a different angle.

## Project structure
- `docs/tasks/yyyy-mm-dd-task-name.md` — task documents (open items)
- `docs/decisions/yyyy-mm-dd-decision-name.md` — decision records (closed items)
- `src/` — game source code

## Process
- Tasks live in `docs/tasks/`.
- If any decision is made during a task, document it in `docs/decisions/`.
- No commits without explicit instruction.
- When adding a dependency (npm package, GitHub Action, etc.), always check for the latest version first.
