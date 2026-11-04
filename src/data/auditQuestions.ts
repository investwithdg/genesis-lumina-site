export interface AuditOption {
  text: string;
  points: number; // 2, 1.5, 0.5, 0
}

export interface AuditQuestion {
  id: number;
  dimensionId: DimensionId;
  question: string;
  options: AuditOption[];
}

export type DimensionId =
  | "data-systems"
  | "documentation"
  | "succession"
  | "culture"
  | "resilience";

export interface DimensionMeta {
  id: DimensionId;
  name: string;
  shortName: string;
  coreQuestion: string;
  color: string;
}

export const DIMENSIONS: Record<DimensionId, DimensionMeta> = {
  "data-systems": {
    id: "data-systems",
    name: "Data Systems & Leadership Dashboards",
    shortName: "Data & Dashboards",
    coreQuestion: "Can leadership make informed decisions with real-time operational visibility?",
    color: "hsl(233 100% 62%)",
  },
  "documentation": {
    id: "documentation",
    name: "Documentation & Knowledge Architecture",
    shortName: "Documentation",
    coreQuestion: "Is your institutional knowledge captured, accessible, and transferable?",
    color: "hsl(157 61% 40%)",
  },
  "succession": {
    id: "succession",
    name: "Succession Systems & Equity Preparation",
    shortName: "Succession & Equity",
    coreQuestion: "Can the business operate and create enterprise value without the founder?",
    color: "hsl(13 79% 57%)",
  },
  "culture": {
    id: "culture",
    name: "Cultural & Leadership Continuity",
    shortName: "Culture & Leadership",
    coreQuestion: "Are your values, culture, and leadership standards transferable and durable?",
    color: "hsl(39 45% 82%)",
  },
  "resilience": {
    id: "resilience",
    name: "Operational Resilience & Founder Dependency",
    shortName: "Resilience & Autonomy",
    coreQuestion: "Can the business survive disruption, scale, and founder absence?",
    color: "hsl(280 65% 60%)",
  },
};

export const AUDIT_QUESTIONS: AuditQuestion[] = [
  // --- Dimension 1: Data Systems & Leadership Dashboards ---
  {
    id: 1,
    dimensionId: "data-systems",
    question: "Do you have a live dashboard tracking your top 5–10 KPIs in real-time?",
    options: [
      { text: "Yes — live, automated, and always current.", points: 2 },
      { text: "Yes — but someone manually pulls and updates the data.", points: 1.5 },
      { text: "Partially — we track a few numbers, but others are blind spots.", points: 0.5 },
      { text: "No — no central dashboard exists.", points: 0 },
    ],
  },
  {
    id: 2,
    dimensionId: "data-systems",
    question: "Can leadership see live revenue, expenses, and cash in bank within 24 hours of asking?",
    options: [
      { text: "Yes — instant access via live dashboard.", points: 2 },
      { text: "Yes — within 24 hours with manual reports.", points: 1.5 },
      { text: "Hit or miss — depends heavily on what's being requested.", points: 0.5 },
      { text: "No — takes 3+ days or waiting on external help.", points: 0 },
    ],
  },
  {
    id: 3,
    dimensionId: "data-systems",
    question: "Does everyone define core metrics (like 'lead', 'churn', 'gross margin') the exact same way?",
    options: [
      { text: "Yes — fully documented and agreed across the company.", points: 2 },
      { text: "Mostly — but teams still argue over what counts.", points: 1.5 },
      { text: "No formal definitions — relies on tribal knowledge.", points: 0.5 },
      { text: "No — every department has their own version of the numbers.", points: 0 },
    ],
  },
  {
    id: 4,
    dimensionId: "data-systems",
    question: "How often does leadership sit down and review actual operational performance data?",
    options: [
      { text: "Daily or weekly via automated reporting.", points: 2 },
      { text: "Monthly in structured leadership reviews.", points: 1.5 },
      { text: "Quarterly or whenever something breaks.", points: 0.5 },
      { text: "Rarely — usually only when there's an emergency.", points: 0 },
    ],
  },
  {
    id: 5,
    dimensionId: "data-systems",
    question: "If an investor or lender asked for a complete P&L, balance sheet, and cash flow, how fast could you deliver?",
    options: [
      { text: "Under 48 hours — instant via integrated accounting.", points: 2 },
      { text: "Within 48 hours — requires a scramble and manual cleanup.", points: 1.5 },
      { text: "1 to 2 weeks — lots of spreadsheets to stitch together.", points: 0.5 },
      { text: "No way — would take weeks of intense reconstruction.", points: 0 },
    ],
  },
  {
    id: 6,
    dimensionId: "data-systems",
    question: "Do you actively track Customer Acquisition Cost (CAC), Lifetime Value (LTV), and churn rate?",
    options: [
      { text: "Yes — all three are tracked and reviewed regularly.", points: 2 },
      { text: "Partially — we track one or two, but not the full picture.", points: 1.5 },
      { text: "Sporadically — we estimate them every once in a while.", points: 0.5 },
      { text: "No — no systematic unit economics tracking.", points: 0 },
    ],
  },
  {
    id: 7,
    dimensionId: "data-systems",
    question: "Is your data architecture documented (where data lives, how tools sync, who owns each source)?",
    options: [
      { text: "Yes — fully mapped, documented, and maintained.", points: 2 },
      { text: "Partially — some notes exist, but lots of blind spots.", points: 1.5 },
      { text: "In heads only — only one or two people know how it connects.", points: 0.5 },
      { text: "No documentation — it's complete software spaghetti.", points: 0 },
    ],
  },
  {
    id: 8,
    dimensionId: "data-systems",
    question: "Could you pull a complete customer list ranked by revenue contribution in under 1 hour?",
    options: [
      { text: "Yes — 1 click via our CRM or billing system.", points: 2 },
      { text: "Yes — but takes manual export and spreadsheet work.", points: 1.5 },
      { text: "Maybe in a few hours of digging through invoices.", points: 0.5 },
      { text: "No — customer and revenue data is scattered across tools.", points: 0 },
    ],
  },
  {
    id: 9,
    dimensionId: "data-systems",
    question: "Do you have early-warning triggers that alert leadership before a problem turns into a crisis?",
    options: [
      { text: "Yes — automated alerts flag bottlenecks before they hurt us.", points: 2 },
      { text: "Yes — but we catch them through manual inspection.", points: 1.5 },
      { text: "Partially — some areas have triggers, others catch us by surprise.", points: 0.5 },
      { text: "No — we usually find out after clients complain or cash dips.", points: 0 },
    ],
  },
  {
    id: 10,
    dimensionId: "data-systems",
    question: "If your head of finance left today, could someone else step in and pull accurate numbers within a week?",
    options: [
      { text: "Yes — our systems, SOPs, and books are clean and documented.", points: 2 },
      { text: "Probably — but it would be painful and messy.", points: 1.5 },
      { text: "No — heavy knowledge transfer required to keep the lights on.", points: 0.5 },
      { text: "No — we don't have dedicated finance infrastructure.", points: 0 },
    ],
  },

  // --- Dimension 2: Documentation & Knowledge Architecture ---
  {
    id: 11,
    dimensionId: "documentation",
    question: "Do you have a single, searchable place where team processes and decisions live?",
    options: [
      { text: "Yes — actively maintained, searchable, and used daily.", points: 2 },
      { text: "Yes — but it's cluttered, outdated, or rarely touched.", points: 1.5 },
      { text: "Partially — scattered across Slack, Google Drive, and Notion.", points: 0.5 },
      { text: "No central knowledge hub exists.", points: 0 },
    ],
  },
  {
    id: 12,
    dimensionId: "documentation",
    question: "Are your core business workflows written down in step-by-step SOPs?",
    options: [
      { text: "Yes — every critical process has a documented SOP.", points: 2 },
      { text: "Most core workflows are documented.", points: 1.5 },
      { text: "Only a few random processes are written down.", points: 0.5 },
      { text: "Almost nothing is documented — it's all in people's heads.", points: 0 },
    ],
  },
  {
    id: 13,
    dimensionId: "documentation",
    question: "If your best person in a critical role left tomorrow, how long until their replacement is fully ramped?",
    options: [
      { text: "Under 2 weeks — documentation and handoffs are locked in.", points: 2 },
      { text: "1 to 2 months — some docs exist, but needs shadowing.", points: 1.5 },
      { text: "3 to 6 months — mostly learning on the job by trial and error.", points: 0.5 },
      { text: "6+ months — massive crisis; tribal knowledge walks out the door.", points: 0 },
    ],
  },
  {
    id: 14,
    dimensionId: "documentation",
    question: "Do you have a consistent way to record why major strategic decisions and pivots were made?",
    options: [
      { text: "Yes — meeting notes, choices, and rationale are logged systematically.", points: 2 },
      { text: "Yes — but captured inconsistently depending on who led the call.", points: 1.5 },
      { text: "Rarely — scattered in emails or buried in chat channels.", points: 0.5 },
      { text: "No — we rely entirely on collective memory.", points: 0 },
    ],
  },
  {
    id: 15,
    dimensionId: "documentation",
    question: "Can a new hire find answers to routine operational questions without tapping someone on the shoulder?",
    options: [
      { text: "Yes — comprehensive self-serve wiki or onboarding hub.", points: 2 },
      { text: "Mostly — they can find basic stuff on their own.", points: 1.5 },
      { text: "Rarely — they have to ask a teammate every couple hours.", points: 0.5 },
      { text: "No — 100% of onboarding requires hand-holding.", points: 0 },
    ],
  },
  {
    id: 16,
    dimensionId: "documentation",
    question: "Are your vendor contracts, client agreements, and legal files centrally organized and accessible?",
    options: [
      { text: "Yes — organized, secure, and searchable in one place.", points: 2 },
      { text: "Mostly organized — but a few missing or misplaced.", points: 1.5 },
      { text: "Scattered across personal inboxes and desktop folders.", points: 0.5 },
      { text: "Disorganized chaos — finding a contract takes hours.", points: 0 },
    ],
  },
  {
    id: 17,
    dimensionId: "documentation",
    question: "When new leaders join, can they read the backstory behind why previous strategic initiatives succeeded or failed?",
    options: [
      { text: "Yes — strategic context and retrospective learnings are documented.", points: 2 },
      { text: "Some context exists, but gaps are common.", points: 1.5 },
      { text: "Very little — founders have to retell the stories orally.", points: 0.5 },
      { text: "None — we constantly repeat old mistakes.", points: 0 },
    ],
  },
  {
    id: 18,
    dimensionId: "documentation",
    question: "When was your operational documentation last reviewed and refreshed?",
    options: [
      { text: "Within the last 3 months — it's a living system.", points: 2 },
      { text: "Within the last 6 to 12 months.", points: 1.5 },
      { text: "Over a year ago — half of it is obsolete.", points: 0.5 },
      { text: "Significantly outdated or doesn't exist.", points: 0 },
    ],
  },
  {
    id: 19,
    dimensionId: "documentation",
    question: "Does the company follow a standardized template for creating SOPs and process docs?",
    options: [
      { text: "Yes — standardized, clear, and enforced across all teams.", points: 2 },
      { text: "We have a template, but people use it inconsistently.", points: 1.5 },
      { text: "No template — everyone writes notes their own way.", points: 0.5 },
      { text: "No format standards at all.", points: 0 },
    ],
  },
  {
    id: 20,
    dimensionId: "documentation",
    question: "If an acquirer asked for a complete due diligence data room tomorrow, how long would it take?",
    options: [
      { text: "Under 1 week — everything is structured, indexed, and ready.", points: 2 },
      { text: "2 to 4 weeks — mostly organized, just needs packaging.", points: 1.5 },
      { text: "1 to 3 months — serious cleanup and missing files.", points: 0.5 },
      { text: "3+ months — would have to build the plane while flying.", points: 0 },
    ],
  },

  // --- Dimension 3: Succession Systems & Equity Preparation ---
  {
    id: 21,
    dimensionId: "succession",
    question: "What percentage of client relationships require the founder's direct presence?",
    options: [
      { text: "0–25% — team owns client relationships completely.", points: 2 },
      { text: "26–50% — founder touches key accounts occasionally.", points: 1.5 },
      { text: "51–75% — founder is still the primary relationship anchor.", points: 0.5 },
      { text: "76–100% — founder is the sole face; clients only trust the founder.", points: 0 },
    ],
  },
  {
    id: 22,
    dimensionId: "succession",
    question: "Do team members have written scorecards with clear accountabilities and decision authority?",
    options: [
      { text: "Yes — clear roles, measurable KPIs, and explicit decision rights.", points: 2 },
      { text: "Yes — for most key leadership seats.", points: 1.5 },
      { text: "Partially — job titles exist, but boundaries are blurry.", points: 0.5 },
      { text: "No — everyone just pitches in on whatever's burning.", points: 0 },
    ],
  },
  {
    id: 23,
    dimensionId: "succession",
    question: "Is there a second-in-command who could run the business for 30 days if the founder stepped away?",
    options: [
      { text: "Yes — and they have already done it successfully.", points: 2 },
      { text: "Yes — but it would be stressful and messy.", points: 1.5 },
      { text: "Partially — they could handle day-to-day, but no big decisions.", points: 0.5 },
      { text: "No — the entire company would grind to a halt.", points: 0 },
    ],
  },
  {
    id: 24,
    dimensionId: "succession",
    question: "How are major strategic decisions made inside the business?",
    options: [
      { text: "Collaboratively, using a documented decision framework.", points: 2 },
      { text: "Mostly collaborative with executive team input.", points: 1.5 },
      { text: "Founder makes 80%+ of calls with light feedback.", points: 0.5 },
      { text: "Founder unilaterally makes every single decision.", points: 0 },
    ],
  },
  {
    id: 25,
    dimensionId: "succession",
    question: "Do you have an up-to-date org chart that clearly reflects accountability and reporting lines?",
    options: [
      { text: "Yes — current, clear, and referenced regularly.", points: 2 },
      { text: "Yes — but needs a quick tune-up.", points: 1.5 },
      { text: "Informal — people vaguely know who reports to whom.", points: 0.5 },
      { text: "No org chart exists.", points: 0 },
    ],
  },
  {
    id: 26,
    dimensionId: "succession",
    question: "How dependent is customer demand on the founder's personal reputation or brand?",
    options: [
      { text: "Not dependent — the company brand stands on its own.", points: 2 },
      { text: "Somewhat dependent — but the company brand is taking over.", points: 1.5 },
      { text: "Heavily dependent — clients buy the founder, not the company.", points: 0.5 },
      { text: "100% dependent — without the founder, there is no business.", points: 0 },
    ],
  },
  {
    id: 27,
    dimensionId: "succession",
    question: "Is there a documented succession path for critical leadership positions?",
    options: [
      { text: "Yes — documented, reviewed, and key talent is being groomed.", points: 2 },
      { text: "Yes — we have informal ideas, but nothing formal.", points: 1.5 },
      { text: "We've talked about it, but haven't planned anything.", points: 0.5 },
      { text: "No succession planning whatsoever.", points: 0 },
    ],
  },
  {
    id: 28,
    dimensionId: "succession",
    question: "Can your business fulfill and deliver services without the founder touching client work?",
    options: [
      { text: "Yes — team delivers 90%+ completely independently.", points: 2 },
      { text: "Yes — team delivers 50–90% independently.", points: 1.5 },
      { text: "Partially — founder is still pulled into 50%+ of delivery.", points: 0.5 },
      { text: "No — the founder is the primary service delivery engine.", points: 0 },
    ],
  },
  {
    id: 29,
    dimensionId: "succession",
    question: "Is your ownership structure, cap table, and legal entity setup clean and investor-ready?",
    options: [
      { text: "Yes — clean structure, fully documented, zero handshake deals.", points: 2 },
      { text: "Mostly clean with minor tidy-up needed.", points: 1.5 },
      { text: "A few messy agreements or past promises that need untangling.", points: 0.5 },
      { text: "Complicated, undocumented, or contested arrangements.", points: 0 },
    ],
  },
  {
    id: 30,
    dimensionId: "succession",
    question: "If you sold the company tomorrow, what percentage of its real value walks out the door with you?",
    options: [
      { text: "0–25% — value is locked inside the systems and brand.", points: 2 },
      { text: "26–50% — some goodwill tied to founder, but mostly transferable.", points: 1.5 },
      { text: "51–75% — significant enterprise value is attached to the founder.", points: 0.5 },
      { text: "76–100% — the founder IS the asset; buyer gets an empty shell.", points: 0 },
    ],
  },

  // --- Dimension 4: Cultural & Leadership Continuity ---
  {
    id: 31,
    dimensionId: "culture",
    question: "Are company values actively used to hire, fire, and make hard business calls?",
    options: [
      { text: "Yes — documented, modeled, and enforced daily.", points: 2 },
      { text: "Documented, but we don't always refer to them.", points: 1.5 },
      { text: "Values exist informally, but nothing is written down.", points: 0.5 },
      { text: "No clear values or culture framework.", points: 0 },
    ],
  },
  {
    id: 32,
    dimensionId: "culture",
    question: "Do you have a deliberate process for turning high performers into managers and leaders?",
    options: [
      { text: "Yes — structured leadership coaching and clear promotion paths.", points: 2 },
      { text: "Informal — we mentor promising talent when time permits.", points: 1.5 },
      { text: "Minimal — mostly throwing people into management and seeing if they swim.", points: 0.5 },
      { text: "No leadership development exists.", points: 0 },
    ],
  },
  {
    id: 33,
    dimensionId: "culture",
    question: "What happens to team decision-making speed when the founder is offline or traveling?",
    options: [
      { text: "Fast — team is fully empowered and keeps moving.", points: 2 },
      { text: "Moderate — minor decisions move, major ones pause.", points: 1.5 },
      { text: "Slow — most work backs up waiting for founder approval.", points: 0.5 },
      { text: "Paralyzed — work grinds to a halt until founder responds.", points: 0 },
    ],
  },
  {
    id: 34,
    dimensionId: "culture",
    question: "Do new team members go through a structured onboarding that teaches company ethos and rhythm?",
    options: [
      { text: "Yes — structured onboarding that instills culture from day one.", points: 2 },
      { text: "Basic onboarding exists, but focuses mostly on tech setup.", points: 1.5 },
      { text: "Informal — new hires learn through osmosis.", points: 0.5 },
      { text: "No onboarding — sink or swim.", points: 0 },
    ],
  },
  {
    id: 35,
    dimensionId: "culture",
    question: "Are performance standards and accountability enforced fairly across all departments?",
    options: [
      { text: "Yes — transparent metrics and consistent accountability.", points: 2 },
      { text: "Mostly clear, though some departments get a pass.", points: 1.5 },
      { text: "Inconsistent — accountability depends on who is managing.", points: 0.5 },
      { text: "No clear standards — underperformance is tolerated.", points: 0 },
    ],
  },
  {
    id: 36,
    dimensionId: "culture",
    question: "Do team rituals, standups, and reviews run smoothly without the founder in the room?",
    options: [
      { text: "Yes — fully team-led; runs like clockwork.", points: 2 },
      { text: "Yes — but energy and discipline drop when founder is absent.", points: 1.5 },
      { text: "Partially — some meetings happen, others get canceled.", points: 0.5 },
      { text: "No — founder has to run every meeting.", points: 0 },
    ],
  },
  {
    id: 37,
    dimensionId: "culture",
    question: "If you asked 5 random team members what the company's core mission is, would they give the same answer?",
    options: [
      { text: "Yes — unified, consistent, and recited with conviction.", points: 2 },
      { text: "Mostly — the general theme is consistent.", points: 1.5 },
      { text: "Only the senior leaders know; front-line staff have no clue.", points: 0.5 },
      { text: "No — only the founder can articulate what we do.", points: 0 },
    ],
  },
  {
    id: 38,
    dimensionId: "culture",
    question: "How frequently does leadership collect and actually act on team feedback?",
    options: [
      { text: "Regularly through structured quarterly reviews and surveys.", points: 2 },
      { text: "Periodically in all-hands or 1-on-1s.", points: 1.5 },
      { text: "Rarely — usually only when someone threatens to quit.", points: 0.5 },
      { text: "Never — feedback only flows downward.", points: 0 },
    ],
  },
  {
    id: 39,
    dimensionId: "culture",
    question: "Do you have written 'rules of the road' for how teams communicate, collaborate, and execute?",
    options: [
      { text: "Yes — documented operating principles that everyone references.", points: 2 },
      { text: "Yes — but not everyone follows them.", points: 1.5 },
      { text: "Informally understood conventions only.", points: 0.5 },
      { text: "No operating principles exist.", points: 0 },
    ],
  },
  {
    id: 40,
    dimensionId: "culture",
    question: "If the founder stepped away for 6 months, would the company culture remain intact?",
    options: [
      { text: "Yes — culture is deeply institutionalized in the team.", points: 2 },
      { text: "Mostly — but it would drift without reinforcement.", points: 1.5 },
      { text: "Fragile — parts of the culture would deteriorate quickly.", points: 0.5 },
      { text: "No — the founder is the only glue holding culture together.", points: 0 },
    ],
  },

  // --- Dimension 5: Operational Resilience & Founder Dependency ---
  {
    id: 41,
    dimensionId: "resilience",
    question: "How many roles or workflows have only one person who knows how they work?",
    options: [
      { text: "0–1 — fully cross-trained with automated redundancy.", points: 2 },
      { text: "2–3 — a couple key bottlenecks, but manageable.", points: 1.5 },
      { text: "4–6 — several dangerous single dependencies.", points: 0.5 },
      { text: "7+ — the whole company is a chain of single points of failure.", points: 0 },
    ],
  },
  {
    id: 42,
    dimensionId: "resilience",
    question: "If your top revenue generator or sales lead quit today, what percentage of revenue is at risk?",
    options: [
      { text: "0–10% — revenue is diversified and protected by process.", points: 2 },
      { text: "11–25% — a hit, but the business will weather it.", points: 1.5 },
      { text: "26–50% — severe hit that would compromise cash flow.", points: 0.5 },
      { text: "51%+ — existential threat to company survival.", points: 0 },
    ],
  },
  {
    id: 43,
    dimensionId: "resilience",
    question: "Do you have redundancy in critical software, vendors, and core processes?",
    options: [
      { text: "Yes — comprehensive backups, failovers, and secondary plans.", points: 2 },
      { text: "Yes — for our primary systems, but gaps in secondary ones.", points: 1.5 },
      { text: "Bare minimum — if a key tool goes down, we're stuck.", points: 0.5 },
      { text: "No redundancy — a single outage brings operations down.", points: 0 },
    ],
  },
  {
    id: 44,
    dimensionId: "resilience",
    question: "Can the founder take a 2-week vacation completely off-grid with zero phone calls or check-ins?",
    options: [
      { text: "Yes — happens regularly with zero operational hiccups.", points: 2 },
      { text: "Yes — but requires weeks of frantic prep beforehand.", points: 1.5 },
      { text: "Barely — fires would start piling up by week two.", points: 0.5 },
      { text: "Impossible — business requires daily founder triage.", points: 0 },
    ],
  },
  {
    id: 45,
    dimensionId: "resilience",
    question: "What percentage of total revenue comes from your single largest customer or contract?",
    options: [
      { text: "Under 15% — healthy, well-diversified revenue base.", points: 2 },
      { text: "16–30% — noticeable concentration, but survivable.", points: 1.5 },
      { text: "31–50% — dangerous dependency on one client.", points: 0.5 },
      { text: "Over 50% — we are essentially outsourced labor for one client.", points: 0 },
    ],
  },
  {
    id: 46,
    dimensionId: "resilience",
    question: "Do you have a written business continuity and disaster recovery plan?",
    options: [
      { text: "Yes — documented, updated, and tested annually.", points: 2 },
      { text: "Yes — documented on paper, but never tested.", points: 1.5 },
      { text: "Informal ideas in leadership's heads.", points: 0.5 },
      { text: "No continuity or disaster plan exists.", points: 0 },
    ],
  },
  {
    id: 47,
    dimensionId: "resilience",
    question: "Are all company software licenses, domain names, and admin logins centrally managed?",
    options: [
      { text: "Yes — secure password manager with enterprise ownership.", points: 2 },
      { text: "Mostly managed, with a few personal accounts mixed in.", points: 1.5 },
      { text: "Scattered across team members' personal logins.", points: 0.5 },
      { text: "Unmanaged — tracking down passwords is a nightmare.", points: 0 },
    ],
  },
  {
    id: 48,
    dimensionId: "resilience",
    question: "If your #1 marketing channel (e.g., Google Ads, referral partner) shut down tomorrow, how long would you survive?",
    options: [
      { text: "12+ months — well-diversified multi-channel engine.", points: 2 },
      { text: "6 to 12 months — we have secondary channels to ramp up.", points: 1.5 },
      { text: "3 to 6 months — we would be in immediate trouble.", points: 0.5 },
      { text: "Under 3 months — total collapse; zero channel diversification.", points: 0 },
    ],
  },
  {
    id: 49,
    dimensionId: "resilience",
    question: "How many company systems are tied to the founder's personal email, credit card, or personal logins?",
    options: [
      { text: "Zero — all systems run on company cards and business domains.", points: 2 },
      { text: "1 or 2 legacy tools.", points: 1.5 },
      { text: "3 to 5 critical systems.", points: 0.5 },
      { text: "Almost all of them — founder's personal card pays for everything.", points: 0 },
    ],
  },
  {
    id: 50,
    dimensionId: "resilience",
    question: "If your sales volume tripled overnight, could your operational delivery handle it without breaking down?",
    options: [
      { text: "Yes — systems and architecture are built to scale 3x+ effortlessly.", points: 2 },
      { text: "Probably — would require minor adjustments and hiring.", points: 1.5 },
      { text: "Doubtful — operations are already creaking at current volume.", points: 0.5 },
      { text: "Impossible — the business would implode under that load.", points: 0 },
    ],
  },
];

export interface ScoreBand {
  min: number;
  max: number;
  title: string;
  badge: string;
  summary: string;
  bullets: string[];
  recommendation: string;
  ctaText: string;
  ctaPath: string;
}

export const SCORE_BANDS: ScoreBand[] = [
  {
    min: 85,
    max: 100,
    title: "Investment-Grade Infrastructure",
    badge: "INVESTMENT-GRADE",
    summary: "Your organization demonstrates robust operational autonomy and institutionalized systems.",
    bullets: [
      "Ready for institutional capital, acquisition, or founder succession",
      "Systems operate independently of founder and key single points of failure",
      "Documentation is comprehensive, structured, and actively maintained",
      "Leadership bench strength and independent decision velocity are evident",
    ],
    recommendation: "S³ Engagement for optimization and strategic exit/scale positioning.",
    ctaText: "Review S³ Transformation →",
    ctaPath: "/s3",
  },
  {
    min: 70,
    max: 84,
    title: "Scale-Ready with Gaps",
    badge: "SCALE-READY",
    summary: "Strong organizational foundation in place, but strategic dependencies constrain your full compounding potential.",
    bullets: [
      "Core operations function well, but residual founder dependency remains",
      "Documentation exists across most areas but requires systematization",
      "Clear, actionable path to investment-grade readiness with targeted engineering",
      "Eliminating the weakest engine will unlock significant enterprise value",
    ],
    recommendation: "S³ Engagement to systematically close identified operational gaps.",
    ctaText: "Explore S³ Transformation →",
    ctaPath: "/s3",
  },
  {
    min: 50,
    max: 69,
    title: "Operational but Founder-Dependent",
    badge: "FOUNDER-DEPENDENT",
    summary: "Business generates solid revenue and delivers value, but daily execution and client trust still rely heavily on founder presence.",
    bullets: [
      "Business functions day-to-day but leaks margin and founder bandwidth",
      "Documentation is incomplete, tribal, or outdated across key workflows",
      "Limited leadership autonomy when founder is offline or unavailable",
      "Significant systems engineering required before scale or sale readiness",
    ],
    recommendation: "Lumina Compass + Ignite to engineer foundational business engines and decouple founder from daily delivery.",
    ctaText: "Explore Lumina Compass (4-Week Sprint) →",
    ctaPath: "/compass",
  },
  {
    min: 35,
    max: 49,
    title: "Early-Stage Infrastructure",
    badge: "EARLY INFRASTRUCTURE",
    summary: "Heavy founder dependency across nearly every operational function. Critical single points of failure threaten throughput.",
    bullets: [
      "Founder is primary driver of sales, delivery, and critical decisions",
      "Minimal formal documentation or shared operational knowledge repository",
      "Vulnerable to key employee churn and disruption cycles",
      "Requires foundational systems work before scale/sale consideration",
    ],
    recommendation: "Lumina Labs + Compass to establish baseline infrastructure and operational literacy.",
    ctaText: "Explore Lumina Labs →",
    ctaPath: "/labs",
  },
  {
    min: 0,
    max: 34,
    title: "Founder-Centric Operations",
    badge: "FOUNDER-CENTRIC",
    summary: "The business is currently operating as a founder-led consultancy or craft practice rather than a scalable enterprise engine.",
    bullets: [
      "No transferable systems or independent business asset value yet",
      "Institutional knowledge and client relationships reside entirely with the founder",
      "Not currently scale-ready or acquirable as an independent entity",
      "Growth requires building foundational systems from the ground up",
    ],
    recommendation: "AI Literacy pathway + System Integration to begin engineering baseline operating architecture.",
    ctaText: "Read the BPE Doctrine →",
    ctaPath: "/approach",
  },
];

export function shuffleQuestions(questions: AuditQuestion[]): AuditQuestion[] {
  const array = [...questions];
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export function getScoreBand(totalScore: number): ScoreBand {
  const band = SCORE_BANDS.find(
    (b) => totalScore >= b.min && totalScore <= b.max
  );
  return band || SCORE_BANDS[SCORE_BANDS.length - 1];
}
