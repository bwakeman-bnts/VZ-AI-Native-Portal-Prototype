# Product Architecture — Personas, Widgets, Journeys

This document is for anyone ("maker") prompting Claude to change this prototype, and for
Claude itself to re-read before making a change. `CLAUDE.md` covers *process* (git/PR
workflow, local server, file guardrails); this document covers the *product* pattern — how
personas, canvas content, and the chat panel are supposed to relate to each other.

## The vision, plainly
This prototype is a concept car for an "AI-native" portal: the main canvas isn't one static
layout everyone gets — it's hyperpersonalized, adapting its layout and content to whichever
persona is active. The conversational agent panel is framed as a "conductor" that
orchestrates the canvas and reacts to what happens there.

**Important: this is faked, not built.** There is no real language understanding and no
backend/LLM call anywhere in this prototype today. Every agent/canvas interaction is a
hand-authored script. The job of this architecture is to make that *finite, scripted*
library of moments feel crisp and alive, and to keep it consistent as it grows across
personas — not to make it more dynamic.

## Vocabulary

### Persona
`persona-data.js` (`window.PERSONAS`) — a data-defined role: identity/copy fields (name,
role, greeting, etc.) plus an ordered `canvas` list of Widget names, and (once Journeys are
implemented — see below) a `journeys` list. Answers: **what does this person see.**

### Widget
One named, `hasWidget('name')`-gated markup block in the canvas region of
`Portal Interaction Model.dc.html`. A widget belongs to whichever persona(s) list its name in
their `canvas` array. It can read persona-specific copy via `{{ persona.* }}`. It can be
extracted into its own file via `dc-import` once it's large or shared enough to be worth it
(see `CLAUDE.md`'s modularization criteria — size/conflict-driven, not preemptive).

### Journey *(target pattern — see "Current build status" below)*
One named, fully scripted moment where the agent and canvas visibly react to each other.
**A Journey is always started by an explicit click** — a suggested-prompt chip, a button, a
canvas CTA — **never by parsing text typed into the chat composer.** The composer stays live
(a maker can type and hit enter, and it feels responsive), but free text never starts a
Journey and never changes canvas content; it always gets a reply drawn from a small rotating
pool of generic, warm acknowledgment lines, purely so the composer feels alive.

Shared catalog (`journeys.js`, `window.JOURNEYS`) plus a per-persona opt-in list, mirroring
the Persona/Widget pattern exactly:

```js
// journeys.js — shared catalog, keyed by id
window.JOURNEYS = {
  "roaming-dispute": {
    canvasTopic: "Billing breakdown",
    reply: "We found the $140 roaming charge on line ••3390...",
    followUp: { delayMs: 900, text: "...", prompts: ["...", "..."] },
    notify: "We've flagged the $140 roaming charge for review."
    // ^ the scripted line the agent "says" when this Journey is started from a canvas
    //   control instead of a chat chip — see conductorNotify below.
  }
};
```
```js
// persona-data.js — each persona opts into a subset of the shared catalog
p2: { ..., journeys: ["roaming-dispute"] }
```

### Conductor helpers *(target pattern)*
The fixed, small vocabulary every trigger point uses, so nothing gets bespoke one-off logic:
- **`runJourney(id)`** — the *only* way a Journey starts. Called from a chip, a button, or a
  canvas widget's CTA. Sets canvas state and queues the scripted reply (same "thinking" delay
  pattern already used today).
- **`conductorNotify(text)`** — used internally by `runJourney` when a Journey is triggered
  from a canvas control, to push its scripted `notify` line into the chat panel. This is how
  clicking something in the canvas visibly makes the agent panel "react" — still entirely
  scripted content from the Journey's own data, never generated.
- The free-text send handler stops inspecting message content entirely: it appends the
  user's text verbatim and replies with one line from a small rotating
  `GENERIC_CHAT_REPLIES` pool. It never sets canvas state and never starts a Journey.

Persona/Widget and Journey are independent axes: Persona/Widget is "what does this person see
at rest," Journey is "what happens when they click something." A widget's CTA can call
`runJourney()`; a Journey's canvas content can just be an existing widget or a small
dedicated card.

## Current build status
- **Persona and Widget**: real, working, in production use (`persona-data.js`,
  `hasWidget()`-gated sections in `Portal Interaction Model.dc.html`).
- **Journey, `runJourney()`, `conductorNotify()`, `journeys.js`**: **not yet built.** The
  chat panel today still uses inline `isDispute`/`isOffer` regex-matching on typed chat text
  in `push()` (`Portal Interaction Model.dc.html`) — which is exactly the pattern this
  document replaces. Refactoring that into the Journey model is a recommended next step, not
  yet done. Don't assume `runJourney`/`journeys.js` exist until that refactor lands.

## Forward-looking note: a future real LLM
Not built now, but worth designing toward: because Journeys are a finite, named, data-driven
catalog, a future real LLM integration would work by giving the model that same catalog as
its bounded "menu of moves" — it either matches free text to a Journey id (calling the exact
same `runJourney(id)`) or falls back to generic conversation. The catalog shape doesn't need
to change to support this later; the LLM would just become a smarter *trigger* for the same
scripted outcomes, not a new kind of behavior.

## How Claude should apply this
When a maker prompts a change:
1. **Classify it first** — persona copy/journey-list tweak (pure data edit), new Widget, new
   Journey, or something else. Say which one out loud before implementing.
2. **If it fits**, apply it using the existing recipe and naming conventions below — don't
   improvise a parallel mechanism for something this model already covers.
3. **Enforce this model as a guardrail, not a suggestion.** If a request doesn't cleanly fit —
   implies real text understanding, would make one persona's Journey behave inconsistently
   with the same-named Journey on another persona, or needs a one-off exception to the
   Widget/Journey contract — **do not implement it.** Stop, explain specifically what about
   the request breaks the pattern, and require explicit confirmation before writing anything
   that creates the inconsistency. Default to protecting consistency over speed; the maker
   can override, but only knowingly.
4. **Teach as you go.** When applying a change, briefly say which part of the system it
   touched and why (e.g. "this is a Journey, not a Widget, because it's triggered by a click
   and changes canvas + agent reply together"). The goal is makers get better at prompting
   future changes themselves, not just receive a diff — especially the first few times
   someone requests something in a category they haven't touched before.
5. Treat genuinely new capabilities (like a real LLM integration) as their own planning
   conversation, not an ad hoc addition layered onto the scripted system.

## Recipes
1. **Add/change a persona** — edit `persona-data.js`.
2. **Add a widget** — author markup gated by `hasWidget('name')`, list it in the relevant
   persona(s)' `canvas`, add it to the glossary comment at the top of `persona-data.js`.
   Extract to `dc-import` only per `CLAUDE.md`'s size/conflict criteria.
3. **Add a Journey** *(once the refactor below lands)* — add an entry to `journeys.js`; list
   its id in whichever persona(s)' `journeys` array should offer it; wire the triggering
   chip/button/CTA to call `runJourney(id)`.
4. **Make a canvas widget "notify" the agent panel** — give its Journey a `notify` line; the
   widget's CTA calls `runJourney(id)` exactly like a chat chip would.
5. **Visual/design changes** — reuse existing design tokens (`var(--vds-*)`) and animation
   conventions (`vz*` keyframes, `view-transition-name` on hero sections) so new content
   matches without inventing a new visual language per widget; genuine design-system changes
   still flow through the Figma sync workflow in `CLAUDE.md`.
6. **Split a file further** — only per the size/conflict criteria already in `CLAUDE.md`.

## Recommended next step (not done yet)
Refactor the existing `push()`/`isDispute`/`isOffer` chat logic into `journeys.js` +
`runJourney()`/`conductorNotify()`/`GENERIC_CHAT_REPLIES`, matching the Journey model above.
Real code change with regression risk — propose it as its own PR once this vocabulary is
confirmed working for the team, the same staged approach used for the file modularization
work.
