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

## Sessions
- Each task runs in its own session. Keep context self-contained — don't assume knowledge from prior sessions.
- Target: one task per session, under 100k tokens when possible. Good docs, clear code, and strong separation of concerns enable this.
- Hitting compaction before a task completes is a strong signal that task slicing or project context needs improvement.

## Session workflow
1. Read the task doc in `docs/tasks/`.
2. Read relevant decision records in `docs/decisions/`.
3. Read `docs/project.md` (project map and conventions).
4. Work through the task with the user.
5. On completion, load the `reflect-task` skill for retro and updates.
6. Plan the next task — draft the description and AC for the next task while project context is fresh.

## Process
- Tasks live in `docs/tasks/`.
- If any decision is made during a task, document it in `docs/decisions/`.
- No commits without explicit instruction.
- When adding a dependency (npm package, GitHub Action, etc.), always check for the latest version first.
