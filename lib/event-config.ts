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
  { label: "Rules", href: "#rules" },
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
    lines: ["100+ participants per day"],
  },
  {
    number: "05",
    title: "Category",
    lines: ["Primary School (U12)", "Applies to both events"],
  },
  {
    number: "06",
    title: "Managed By",
    lines: ["Creative Robotics"],
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
// Rules & Regulations — one rule set per game
// ----------------------------------------------------------------------------
export const rules = [
  {
    game: "Soccer Challenge",
    botName: "SoccerBot",
    items: [
      "Robot must not exceed W150mm x L150mm x H120mm and weigh no more than 500g.",
      "Modifying or “hacking” LEGO parts is not allowed. Tape, glue, 3D printed parts, and zip-ties are not allowed as assembly components.",
      "Max 2 motors (limited to XL Motors or L Motors). Bring spare batteries — rechargeable is recommended.",
      "Robots can be built at home. Each team must have 2 robots, and members may take on roles such as striker or defender.",
      "A sparring period is allocated before the competition to test your robot on the playing field.",
      "Intentionally damaging the playing field or other robots will not be tolerated. Players may not touch their robots during a match — offenders will be removed.",
      "Match line-up is decided by computerized randomization. Teams that don't report to the staging area when called are considered a surrender.",
      "Match style is Double Elimination. Matches run 4 minutes. Ties are resolved with the Penalty Kick Rule.",
      "Referees return the ball and any damaged/incapacitated robots to the middle of the field. Match time is not stopped for this.",
      "The Referee sets channel settings for the match. Surrender your controller before the match begins — write your name on it.",
      "Referees' decisions are final. Attempts to argue may result in disqualification.",
    ],
  },
  {
    game: "Sumo Battle",
    botName: "SumoBot",
    items: [
      "Robot must not exceed W150mm x L150mm x H120mm and weigh no more than 500g.",
      "Modifying or “hacking” LEGO parts is not allowed. Tape, glue, 3D printed parts, and zip-ties are not allowed as assembly components.",
      "Max 2 motors (limited to XL Motors or L Motors). Bring spare batteries — rechargeable is recommended.",
      "Robots can be built at home.",
      "A sparring period is allocated before the competition to test your robot on the playing field.",
      "Intentionally damaging the playing field or other robots will not be tolerated. Players may not touch their robots during a match — offenders will be removed.",
      "Match line-up is decided by computerized randomization. Teams that don't report to the staging area when called are considered a surrender.",
      "Match style is Single Elimination. Matches run 1 minute. If neither robot is eliminated, the robot closest to the centre of the arena wins the round (judge's decision is final).",
      "Battle rules: robots start facing away from each other at the starting strip; a robot no longer fully supported by the arena is considered fallen and a loss; the first robot fully off the arena loses.",
      "The Referee sets channel settings for the match. Surrender your controller before the match begins — write your name on it.",
      "Referees' decisions are final. Attempts to argue may result in disqualification.",
    ],
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
// Registration — external Google Form. Update `href` to change where the
// "Registration" button sends people.
// ----------------------------------------------------------------------------
export const registrationCta = {
  label: "Registration",
  href: "https://forms.gle/Fs5uhj58HyGfqRMG7",
};

export const registrationNote =
  "Workshop session is free — you only pay for kit rental/materials on the day. No obligation to join the afternoon competition.";

// ----------------------------------------------------------------------------
// Contact / Footer
// ----------------------------------------------------------------------------
export const contact = {
  phones: [
    { number: "014-930 4733", name: "Ms. Rebecca" },
    { number: "016-923 7918", name: "Mr. Leong" },
  ],
  organiserBlurb: "A joint robotics competition by ABSEE Enterprise & Creative Robotics, held at Sunway Putra Mall.",
  registrationInfo: "ABSEE Enterprise (Reg. No. 202403245983)",
  copyright: "© 2026 ABSEE Enterprise (Reg. No. 202403245983). All rights reserved.",
};

export const footerQuickLinks = [
  { label: "Event", href: "#event" },
  { label: "Schedule", href: "#schedule" },
  { label: "Prizes", href: "#prizes" },
];
