// ============================================================================
// ROBO ARENA 2026 — EVENT CONFIG
// ----------------------------------------------------------------------------
// This is the ONE file to edit for all event content: dates, venue, prizes,
// schedule, format, contact details, etc. Nothing else in the codebase should
// need to change when the event details change from year to year.
//
// Edit the values below and save — the whole site updates automatically.
// ============================================================================

export const siteMeta = {
  title: "ROBO ARENA 2026",
  description:
    "ROBO ARENA 2026 — Soccer Challenge & Sumo Battle junior robotics competition, presented by ABSEE Enterprise & Creative Robotics at Sunway Putra Mall.",
};

// ----------------------------------------------------------------------------
// Countdown target — ISO 8601 with timezone offset. Used by the live countdown
// timer on the homepage. Format: YYYY-MM-DDTHH:mm:ss+08:00
// ----------------------------------------------------------------------------
export const countdownTargetISO = "2026-09-19T10:00:00+08:00";

// ----------------------------------------------------------------------------
// Hero section
// ----------------------------------------------------------------------------
export const hero = {
  eyebrow: "ABSEE Enterprise & Creative Robotics present",
  headline: "ROBO ARENA 2026",
  subheading: "Soccer Challenge · Sumo Battle — presented by ABSEE Enterprise & Creative Robotics",
  pills: [
    { label: "Dates", value: "19–20 Sep 2026" },
    { label: "Time", value: "10:00 AM – 5:00 PM" },
    { label: "Venue", value: "Sunway Putra Mall" },
    { label: "Category", value: "Primary School (U12)" },
  ],
  ctaPrimary: { label: "Register Now", href: "#register" },
  ctaSecondary: { label: "Event Details", href: "#event" },
};

// ----------------------------------------------------------------------------
// Navigation
// ----------------------------------------------------------------------------
export const navLinks = [
  { label: "Event", href: "#event" },
  { label: "Format", href: "#format" },
  { label: "Schedule", href: "#schedule" },
  { label: "Prizes", href: "#prizes" },
  { label: "Contact", href: "#contact" },
];

export const navRegisterCta = { label: "Register", href: "#register" };

// ----------------------------------------------------------------------------
// Event Details — numbered cards 01–06
// ----------------------------------------------------------------------------
export const eventDetails = [
  {
    number: "01",
    title: "Date",
    lines: ["19 September 2026 — Soccer Challenge", "20 September 2026 — Sumo Battle"],
  },
  {
    number: "02",
    title: "Venue",
    lines: ["Sunway Putra Mall", "Level 2, East Wing"],
  },
  {
    number: "03",
    title: "Time",
    lines: ["10:00 AM – 5:00 PM", "Daily, both event days"],
  },
  {
    number: "04",
    title: "Capacity",
    lines: ["100 participants per day"],
  },
  {
    number: "05",
    title: "Category",
    lines: ["Primary School (U12)", "Applies to both events"],
  },
  {
    number: "06",
    title: "Organised By",
    lines: ["ABSEE Enterprise", "& Creative Robotics"],
  },
];

// ----------------------------------------------------------------------------
// Format / The Games — two side-by-side cards
// ----------------------------------------------------------------------------
export const games = [
  {
    name: "Soccer Challenge",
    day: "Day 1 — 19 September 2026",
    entryType: "2-pax teams",
    structure: "Group stage round-robin, followed by knockout finals",
    category: "Primary School (U12)",
  },
  {
    name: "Sumo Battle",
    day: "Day 2 — 20 September 2026",
    entryType: "Individual entries",
    structure: "Head-to-head best-of-3 short bouts, followed by knockout finals",
    category: "Primary School (U12)",
  },
];

// ----------------------------------------------------------------------------
// Daily flow — numbered 1–5 (same structure both days)
// ----------------------------------------------------------------------------
export const dailyFlow = [
  {
    step: 1,
    title: "Check-in",
    time: "9:00 AM",
    description: "Collect kit",
  },
  {
    step: 2,
    title: "Briefing",
    time: "9:20 AM",
    description: "Rules explained",
  },
  {
    step: 3,
    title: "Workshop",
    time: "9:30 AM",
    description:
      "Free guided build with facilitator support — participants only pay for kit rental/materials, no obligation to join the afternoon competition",
  },
  {
    step: 4,
    title: "Competition",
    time: "1:30 PM",
    description: "Preliminary rounds then knockout finals",
  },
  {
    step: 5,
    title: "Prize Ceremony",
    time: "5:00 PM",
    description: "Awards & closing",
  },
];

export const goodieBagNote = "Every participant receives a goodie bag.";

// ----------------------------------------------------------------------------
// Schedule — same schedule applies to both event days
// ----------------------------------------------------------------------------
export const scheduleNote = "Same schedule applies to both days.";

export const scheduleRows = [
  { time: "9:00 AM", activity: "Check-in & kit distribution" },
  { time: "9:20 AM", activity: "Rules briefing" },
  { time: "9:30 AM", activity: "Session 1: Workshop (free, guided build)" },
  { time: "1:30 PM", activity: "Session 2: Competition (prelims to knockout finals)" },
  { time: "5:00 PM", activity: "Prize presentation & closing" },
];

// ----------------------------------------------------------------------------
// Prizes
// ----------------------------------------------------------------------------
export const prizes = [
  {
    badge: "1ST",
    title: "Champion",
    amount: "RM550",
    highlight: true,
  },
  {
    badge: "2ND",
    title: "Runner-up",
    amount: "RM300",
    highlight: false,
  },
  {
    badge: "3RD",
    title: "3rd Place",
    amount: "RM200",
    highlight: false,
  },
  {
    badge: "BPS",
    title: "Best Programming Strategy (Soccer)",
    amount: "RM100",
    highlight: false,
  },
  {
    badge: "JCA",
    title: "Judges' Choice Award",
    amount: "RM100",
    highlight: false,
  },
];

export const totalPrizePool = "RM1,250";
export const prizePoolNote = `Total prize pool: ${totalPrizePool}, plus goodie bags for all participants.`;

// ----------------------------------------------------------------------------
// Registration form
// ----------------------------------------------------------------------------
export const registrationEventOptions = [
  { value: "soccer", label: "Soccer Challenge (Day 1 - 19 Sep)" },
  { value: "sumo", label: "Sumo Battle (Day 2 - 20 Sep)" },
];

export const registrationNote =
  "Workshop session is free — you only pay for kit rental/materials on the day. No obligation to join the afternoon competition.";

// ----------------------------------------------------------------------------
// Contact / Footer
// ----------------------------------------------------------------------------
export const contact = {
  email: "limszekee702@gmail.com",
  organiserBlurb: "A joint robotics competition by ABSEE Enterprise & Creative Robotics, held at Sunway Putra Mall.",
  registrationInfo: "ABSEE Enterprise (Reg. No. 202403245983)",
  copyright: "© 2026 ABSEE Enterprise & Creative Robotics. All rights reserved.",
};

export const footerQuickLinks = [
  { label: "Event", href: "#event" },
  { label: "Schedule", href: "#schedule" },
  { label: "Prizes", href: "#prizes" },
];
