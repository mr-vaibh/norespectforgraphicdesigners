export const comparisons = [
  {
    id: 1,
    title: "The Navigation Menu",
    figmaNote: "Designer spent 3 weeks. Uses custom font, 23 items, all same visual weight, animated logo that rotates on hover.",
    devNote: "display: flex; gap: 16px; — 4 minutes. Accessible. Works on mobile. Done.",
    figmaBg: "#1a0a2e",
    figmaContent: {
      type: "nav",
    },
    devContent: {
      type: "nav-real",
    }
  },
  {
    id: 2,
    title: "The Hero Section",
    figmaNote: "Full-bleed video background, 5 layered gradients, custom cursor trail, parallax title, animated particles.",
    devNote: "background-image + h1 + p + button. Loads in 0.3s. Converts users. Passes Core Web Vitals.",
    figmaBg: "#0a1628",
    figmaContent: { type: "hero" },
    devContent: { type: "hero-real" }
  },
  {
    id: 3,
    title: "The Contact Form",
    figmaNote: "Custom floating labels that slide in on focus, glassmorphic inputs, animated submit button, confetti on send.",
    devNote: "<form> with <label> + <input>. Accessible. Works with keyboard. Screen readers love it.",
    figmaBg: "#0d1a0d",
    figmaContent: { type: "form" },
    devContent: { type: "form-real" }
  },
];
