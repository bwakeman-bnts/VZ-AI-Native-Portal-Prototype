/*
 * Persona data for the AI Native Portal prototype.
 *
 * Widget glossary (each name below is a markup block in
 * "Portal Interaction Model.dc.html" gated by `hasWidget('name')`):
 *   greeting          - top-of-canvas "Good morning/afternoon, {name}" header (all personas)
 *   leadOfferHero      - device-comparison hero + My To Dos grid (p1 / IT Manager)
 *   billBreakdownHero  - bill-summary hero + My To Dos grid (p2 / Accounts Payable)
 *   fleetHealthHero    - device-health hero + My To Dos list (p3 / Field Ops)
 *   escalateCard       - "hand off to a rep" escalation card (p3 / Field Ops)
 *   securityStatsGrid  - security/inventory account-stats cards (p1 / IT Manager)
 *   billingStatsGrid   - billing/usage account-stats cards (p2 / Accounts Payable)
 *
 * To tweak a persona (copy, photo, which widgets show): edit its entry below.
 * To add a new widget: add its `<sc-if value="{{ hasWidget('name') }}">` markup
 * block in the canvas section of the .dc.html file, list "name" in the `canvas`
 * array of whichever persona(s) should show it, and add it to the glossary above.
 */
window.PERSONAS = {
  p1: {
    id: "p1",
    name: "Danielle",
    role: "IT Manager",
    initials: "AR",
    photo: "uploads/ITManagerPic.png",
    pickerDescription: "Reviewing new devices — wants to make sure they're getting the best terms.",
    greeting: "Good morning, Danielle",
    activationEmailUser: "danielle",
    welcomeMessage: "Hi, Danielle. How can I help you today?",
    canvas: ["greeting", "leadOfferHero", "securityStatsGrid"]
  },
  p2: {
    id: "p2",
    name: "Sergio",
    role: "Accounts Payable",
    initials: "GA",
    photo: "uploads/AccountsPayablePic.png",
    pickerDescription: "Wants to understand his bill and make sure his aggregate data plan won't go over.",
    greeting: "Good afternoon, Sergio",
    activationEmailUser: "sergio",
    welcomeMessage: "HI Sergio. How can I help you today?",
    canvas: ["greeting", "billBreakdownHero", "billingStatsGrid"]
  },
  p3: {
    id: "p3",
    name: "Marcus",
    role: "Field Operations Lead",
    initials: "ML",
    photo: "",
    pickerDescription: "Manages a fielded device fleet — wants issues caught before they cause downtime.",
    greeting: "Good afternoon, Marcus",
    activationEmailUser: "marcus",
    welcomeMessage: "Hi, Marcus. How can I help you today?",
    canvas: ["greeting", "fleetHealthHero", "escalateCard"]
  }
};

window.PERSONA_DEFAULT = "p1";
window.PERSONA_ORDER = ["p1", "p2", "p3"];
