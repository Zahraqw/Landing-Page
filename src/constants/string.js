const STRING = {
  brand: "AuroraUI",
  nav: ["Product", "Solutions", "Pricing", "Customers", "Resources"],

  actions: { login: "Sign in", signup: "Start free" },

  hero: {
    badge: "New • Design tokens + components",
    title: "Build consistent UIs",
    highlight: "at scale.",
    subtitle:
      "Create a shared component system with tokens, patterns, and docs—so every team ships faster with less rework.",
    primaryCta: "Start free",
    secondaryCta: "Book a demo",
    stats: [
      { value: "18+", label: "ready sections" },
      { value: "A11y", label: "built-in patterns" },
      { value: "Fast", label: "production setup" },
    ],
  },

  mockup: {
    url: "app.auroraui.io/library",
    workspace: "Team Workspace",
    status: "Synced",
    tabs: ["Library", "Tokens", "Publish"],
    kpis: [
      { label: "Adoption", value: "72%", hint: "+8% this month" },
      { label: "Components", value: "48", hint: "12 updated" },
    ],
    activity: [
      { title: "Button / Primary", meta: "Updated • 2m ago" },
      { title: "Card / Elevation", meta: "Reviewed • 14m ago" },
      { title: "Typography Scale", meta: "Published • 1h ago" },
    ],
  },

  clients: {
    title: "Trusted by product teams",
    subtitle: "Used by startups and teams building design systems at scale.",
    logos: ["Northwind", "Atlas", "Vanta", "Kite", "Spline", "Lumen"],
  },

  community: {
    title: "Everything you need in one system",
    subtitle: "Build, document, and ship UI faster with a shared foundation.",
    hint: " Ready for production teams",
    sectionTitle: "What you get",
    cards: [
      {
        title: "Component Library",
        desc: "Reusable components with clear variants, states, and guidelines.",
      },
      {
        title: "Design Tokens",
        desc: "Centralized colors, spacing, typography—synced across products.",
      },
      {
        title: "Docs & Governance",
        desc: "Usage rules, release notes, and adoption tracking for teams.",
      },
    ],
  },

  caseStudy: {
    badge: "Case Study",
    title: "The unseen work behind a scalable UI system",
    subtitle:
      "We helped a small team create reusable patterns, improve accessibility, and ship consistent screens across multiple products.",
    cta: "Learn more",
  },

  impact: {
    badge: "Impact",
    title: "Helping teams ship faster with fewer UI regressions",
    subtitle:
      "From tokens to documentation, everything stays aligned—so your product scales without redesigning every release.",
    cta: "See results",
    stats: [
      { value: "2,245,341", label: "Components rendered" },
      { value: "46,328", label: "Design tokens synced" },
      { value: "828,867", label: "Docs views" },
      { value: "1,926,436", label: "QA checks passed" },
    ],
  },
};

export default STRING;
