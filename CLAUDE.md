# VZ AI Native Portal Prototype — Working Agreement

## What this project is
A static, no-build-tooling interactive prototype (HTML/JS/CSS) of a Verizon Business
"AI Native Portal" concept. There's no `package.json` or build step — it's browser-loaded
files directly. The design system lives in `_ds/verizon-business-design-system-*/` and is
pulled from Figma.

## File map
- `Portal Interaction Model.dc.html` — the client-facing deliverable (the root page). Treat as
  production.
- `*.dc.html` at repo root other than the file above (e.g. `DemoProfilePicker.dc.html`) — split-out
  components, loaded at runtime via `<dc-import name="...">` from the root file or from each
  other. Must stay **flat in the repo root** — the runtime resolves `dc-import` names as
  `./Name.dc.html` and can't follow a `/` into a subfolder.
- `persona-data.js` — plain data file (`window.PERSONAS`), see its own header comment for the
  widget glossary and how to add/edit a persona.
- `_ds/` — design system tokens/components synced from Figma. **Generated, not hand-edited.**
- `assets/` — device mockups and brand assets (images/SVGs).
- `scraps/` — scratch/working images (dispute-flow checks, canvases, etc). Free-for-all.
- `uploads/` — working wireframes, pasted screenshots, reference docs. Free-for-all.
- `support.js`, `image-slot.js` — prototype interaction logic. **Generated/vendored, not
  hand-edited** (`support.js` header says as much — it's the dc-runtime that parses all the
  `.dc.html` files).

## Running it locally
As of the first `dc-import` split, opening the file by double-clicking it (`file://`) no
longer renders correctly — the browser blocks `fetch` on `file://`, so any imported piece
renders as an empty box and logs a `[dc-runtime] sibling fetch ... failed` error. You need a
local static server:
- **No terminal (recommended for non-devs):** install the VS Code "Live Server" extension (or
  use the built-in "Live Preview"), right-click `Portal Interaction Model.dc.html` → **Open
  with Live Server**. One click.
- **Terminal:** `python3 -m http.server 8080` from the repo root, then open
  `http://localhost:8080/Portal%20Interaction%20Model.dc.html`.

## Team
Mixed group of designers and developers collaborating directly in this repo. Nobody should
assume they're the only one touching a file — check `git status` / recent commits before
large edits.

## Design → code workflow
Figma is the source of truth for visual design. When a design changes:
1. Pull it into code using the Figma MCP skills (`figma-design-to-code`, `figma-use`) rather
   than hand-copying pixel values or eyeballing a screenshot.
2. Design system changes flow through the same sync — don't hand-edit files under `_ds/`.
   If something in `_ds/` looks wrong, fix it in Figma and re-sync, or flag it for whoever
   owns the sync.

## Guardrails (ask before touching without review)
- `_ds/` — sync-only, no manual edits.
- `Portal Interaction Model.dc.html` — client-facing; changes go through a PR, not a direct
  push to `main`.
- `scraps/` and `uploads/` — scratch, no restrictions.

## Git & PR workflow (plain-language version)
Nobody on this team is a dev, and nobody is going to line-by-line review generated code — so
this workflow does NOT rely on human review as the safety net. Instead: every change goes
through a branch + PR (so nothing lands via a stray direct push, and there's always a
reviewable diff in GitHub's history), but **PRs are self-merged by whichever Claude session
opened them, once that session has actually run the prototype and confirmed the change
works** — not just "no merge conflicts, ship it."

Branch protection on `main` reflects this exactly: **PR required, 0 approvals required.**
Force-push and branch deletion are still blocked.

**Steps, for a human or an agent making a change:**
1. **Before starting**, make sure you're up to date: `git checkout main && git pull`.
2. **Create a branch** for your change, named like `yourname/short-description`
   (e.g. `ben/fix-dispute-flow-copy`).
3. **Make your edits**, commit with a message describing *why*, not just *what*.
4. **Push the branch**, open a PR describing what changed and why.
5. **Verify by actually running it** — open the prototype in a browser, click through the
   change (not just the one screen it touched), check the console for new errors/warnings.
   Screenshot if it's a visual change. This step is not optional; it's what replaces human
   review here.
6. **Merge the PR yourself** (squash merge) once verified, then delete the branch.

**What NOT to do:** don't commit straight to `main`, don't force-push, and don't merge a PR
you haven't actually run and checked — an unreviewed diff with no verification either is the
one thing this process can't catch.

**Concurrent-edit risk:** this repo is still mostly one large file
(`Portal Interaction Model.dc.html`). If two branches touch the same section at the same time,
expect real git merge conflicts, not just noise. When resolving one, re-verify extra
carefully — a clean merge doesn't mean the resulting markup/logic is still correct. See
"Modularization" below — the plan is to split this file precisely to shrink this risk.

## Modularization (in progress, staged)
The single 3000+ line `.dc.html` file is the main reason concurrent edits collide. Splitting
it via `dc-import` is happening incrementally, not all at once (no tests exist, so a big-bang
split has no way to catch a regression):
- **Done:** the demo profile picker modal → `DemoProfilePicker.dc.html` (proved the mechanism
  + local-server workflow on something low-risk).
- **Next:** the drill-down detail area (`showDrill`, ~a third of the file, already isolated
  behind its own `drillVals()` method) → `DrillDetail.dc.html` — the extraction that actually
  matters for file size.
- **Deferred until they become a real pain point:** the dashboard/persona canvas widgets, the
  section-page shells, the chat panel. Don't split these preemptively — wait until growth
  (more personas, more widgets) makes them a recurring conflict source, then ask Claude to
  scope that specific split.

## Working with Claude/agents on this project
- Ask before editing `_ds/` or the `.dc.html` deliverable directly — prefer proposing the
  change and letting a human confirm, or opening a PR for it.
- Prefer the Figma MCP skills for anything visual rather than hand-authoring CSS/markup that
  approximates a design.
- Always verify by running the prototype before merging a PR — see the workflow above.
