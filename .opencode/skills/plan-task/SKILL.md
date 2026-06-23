---
name: plan-task
description: Use when the user asks to create a new task doc, plan a task, or document work. Creates yyyy-mm-dd-task-name.md in docs/tasks/. Do NOT use for general discussion or decision records.
---

# Plan Task

When the user wants to create a new task, follow this process.

## Task doc structure

```
docs/tasks/yyyy-mm-dd-task-name.md
```

A task doc has these sections:

### Description
A clear description of what needs to be done and why. Context, motivation, scope boundaries.

### Acceptance Criteria
Behaviour-oriented conditions using Given/When/Then format. Describe observable outcomes, not implementation. Written as checkboxes:

- [ ] **Given** precondition, **when** action, **then** expected behaviour
- [ ] **Given** precondition, **when** action, **then** expected behaviour

### Worklog
Notes on progress, decisions made, blockers, and changes in direction. Appended to during the task.

### Retro
Brief reflection after the task is closed: what went well, what didn't, what to change next time.

## Process

1. **Discuss** — Before writing anything, talk with the user to clarify the description and acceptance criteria. Push back on vague or underspecified goals. Ask "what does done look like?" Keep it conversational — no `question` tool.

2. **Confirm** — Once the description and AC feel solid, summarise them back to the user and ask if they're happy to proceed.

3. **Write** — Create the task doc with the confirmed description and acceptance criteria. Leave worklog and retro empty (they get filled later).


