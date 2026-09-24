# VZ AI Native Portal Prototype — Working Agreement

## What this project is
A static, no-build-tooling interactive prototype (HTML/JS/CSS) of a Verizon Business
"AI Native Portal" concept. There's no `package.json` or build step — it's browser-loaded
files directly. The design system lives in `_ds/verizon-business-design-system-*/` and is
pulled from Figma.

## File map
- `Portal Interaction Model.dc.html` — the client-facing deliverable. Treat as production.
- `_ds/` — design system tokens/components synced from Figma. **Generated, not hand-edited.**
- `assets/` — device mockups and brand assets (images/SVGs).
- `scraps/` — scratch/working images (dispute-flow checks, canvases, etc). Free-for-all.
- `uploads/` — working wireframes, pasted screenshots, reference docs. Free-for-all.
- `support.js`, `image-slot.js` — prototype interaction logic.

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
This team isn't dev-heavy, so here's the workflow spelled out step by step. The goal: nobody's
work gets silently overwritten, and one other set of eyes sees a change before it hits `main`.

**Everyday steps, for a human or an agent making a change:**
1. **Before starting**, make sure you're up to date: `git checkout main && git pull`.
2. **Create a branch** for your change, named like `yourname/short-description`
   (e.g. `ben/fix-dispute-flow-copy`).
3. **Make your edits**, then save them as a commit with a message describing *why*, not just
   *what* (e.g. "Fix dispute flow copy per legal review" not "update text").
4. **Push the branch** to GitHub: `git push -u origin yourname/short-description`.
5. **Open a Pull Request (PR)** on GitHub comparing your branch to `main`. Add a short
   description of what changed and why.
6. **Get one teammate to review and approve** the PR before merging — even a quick "looks
   good" comment counts. This is the safety net that catches mistakes before they reach the
   deliverable.
7. **Merge the PR** (use "Squash and merge" to keep history clean), then delete the branch.

**What NOT to do:** don't commit straight to `main`, and don't force-push. If you're not sure
whether a change is big enough to need a PR, default to using one — it's cheap insurance.

**One-time setup recommended for whoever admins the GitHub repo:** turn on branch protection
for `main` (Settings → Branches → require a PR + 1 approval before merging). That makes the
PR step unskippable rather than just a convention.

## Working with Claude/agents on this project
- Ask before editing `_ds/` or the `.dc.html` deliverable directly — prefer proposing the
  change and letting a human confirm, or opening a PR for it.
- Prefer the Figma MCP skills for anything visual rather than hand-authoring CSS/markup that
  approximates a design.
