---
name: reflect-task
description: Use when closing a task or running a retro. Loads after a task is complete to capture learnings and improve future sessions.
---

# Reflect Task

When the user signals a task is complete (e.g. "retro", "close task", "wrap up"), follow this process.

## Process

1. **Read the task doc** — Confirm the current state of description, AC (all checked?), worklog, and any existing retro notes. Suggest any worklog entries or notes that may have been missed.

2. **Lead with your own reflections** — Answer the questions below yourself first, based on what you observed during the task. Then ask the user if there's anything else or any corrections from their perspective:
   - What went well this task?
   - What didn't? Anything that slowed things down or caused rework?
   - What context, docs, or structures would have helped at the start?
   - Are there any decisions made during this task that aren't yet recorded in `docs/decisions/`?
   - Is there anything a new session starting this task should know?

3. **Write the retro** — Fill in the retro section of the task doc. Keep reflections about process and project, not about the agent (those won't persist).

4. **Update supporting docs** — If the user identified missing context or conventions that would help future sessions, make the updates:
   - `AGENTS.md` for process/convention changes
   - `docs/decisions/` for any unlogged decisions
   - `docs/project.md` for code structure or architecture notes
