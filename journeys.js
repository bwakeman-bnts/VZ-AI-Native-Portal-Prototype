/*
 * Journey data for the AI Native Portal prototype.
 *
 * A Journey is one named, fully scripted moment where the agent panel and the
 * canvas react to each other. Journeys are only ever started by an explicit
 * click (a suggested-prompt chip, a button, a canvas CTA) — never by parsing
 * free text typed into the chat composer. See ARCHITECTURE.md for the full
 * model.
 *
 * Shape:
 *   canvasTopic  - human-readable label for this journey (used for the
 *                  "recents" history entry once the agent panel is closed).
 *   reply        - the agent's scripted first reply when this Journey starts
 *                  from a chat-side trigger (a chip).
 *   replyTaskCard - optional: true if the reply message should render the
 *                  special "task card" widget in the chat panel.
 *   notify       - the agent's scripted line when this Journey starts from a
 *                  canvas-side control instead of a chat chip (see
 *                  conductorNotify in the root Component). Falls back to
 *                  `reply` if omitted.
 *   followUp     - optional second beat: { delayMs, text, prompts }.
 *                  `delayMs` + `text` add a second scripted agent message
 *                  after a delay (omit both to just reveal `prompts`
 *                  immediately instead). `prompts` is an array of
 *                  { label, journey? } — clicking one either starts another
 *                  Journey (if `journey` is set) or sends `label` as a plain
 *                  generic chat message (see GENERIC_CHAT_REPLIES).
 *
 * To add a Journey: add an entry below, then wire whichever chip/button/CTA
 * should start it to call `runJourney('your-id', { label: 'Chip text' })`
 * (chat-side) or `runJourney('your-id', { fromCanvas: true })` (canvas-side).
 */
window.JOURNEYS = {
  "roaming-dispute": {
    canvasTopic: "Billing breakdown",
    reply: "Pulling that up on the canvas — I've submitted a dispute for that roaming charge. You can see where that charge occurred in the August statement I've provided as well.",
    replyTaskCard: true,
    notify: "I've flagged that roaming charge for review and pulled up the billing breakdown.",
    followUp: {
      delayMs: 900,
      text: "We noticed your company's headcount is growing. You can save $420.00 if you buy a bundle of 10 new lines. Want me to show you an offer to share with your procurement lead?",
      prompts: [
        { label: "Yes, show me the offer", journey: "device-offer" },
        { label: "How else might we save money?" },
        { label: "Not right now" }
      ]
    }
  },
  "device-offer": {
    canvasTopic: "Device options",
    reply: "Here's your offer. This takes into account your negotiated rates and special loyalty pricing.",
    notify: "Here's the offer, ready to share with your procurement lead.",
    followUp: {
      prompts: [
        { label: "Share with procurement lead" },
        { label: "Add lines to my order" },
        { label: "No thanks" }
      ]
    }
  }
};
