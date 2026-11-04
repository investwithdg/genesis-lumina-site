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
    coreQuestion: "Can leadership make informed decisions with real-time visibility into operations?",
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
    coreQuestion: "Can the business operate and create value without the founder(s)?",
    color: "hsl(13 79% 57%)",
  },
  "culture": {
    id: "culture",
    name: "Cultural & Leadership Continuity",
    shortName: "Culture & Leadership",
    coreQuestion: "Are your values, culture, and leadership principles transferable and sustainable?",
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
    question: "Do you have a centralized dashboard that tracks your top 5-10 KPIs in real-time?",
    options: [
      { text: "Yes, updated automatically", points: 2 },
      { text: "Yes, but requires manual updates", points: 1.5 },
      { text: "Partially—some metrics tracked, others aren't", points: 0.5 },
      { text: "No centralized dashboard exists", points: 0 },
    ],
  },
  {
    id: 2,
    dimensionId: "data-systems",
    question: "Can your leadership team access financial performance data (revenue, expenses, cash flow) within 24 hours of request?",
    options: [
      { text: "Yes, instantly via dashboard", points: 2 },
      { text: "Yes, within 24 hours via manual reporting", points: 1.5 },
      { text: "Sometimes—depends on what's being requested", points: 0.5 },
      { text: "No, takes 3+ days or requires external help", points: 0 },
    ],
  },
  {
    id: 3,
    dimensionId: "data-systems",
    question: "Do you have documented data definitions that ensure everyone interprets metrics the same way?",
    options: [
      { text: "Yes, fully documented and accessible", points: 2 },
      { text: "Partially—some definitions exist", points: 1.5 },
      { text: "No formal definitions, relies on institutional knowledge", points: 0.5 },
      { text: "Definitions are inconsistent across departments", points: 0 },
    ],
  },
  {
    id: 4,
    dimensionId: "data-systems",
    question: "How often does leadership review operational performance data?",
    options: [
      { text: "Daily or weekly via automated reports", points: 2 },
      { text: "Monthly in structured reviews", points: 1.5 },
      { text: "Quarterly or ad hoc", points: 0.5 },
      { text: "Rarely or only during crises", points: 0 },
    ],
  },
  {
    id: 5,
    dimensionId: "data-systems",
    question: "Can you generate a complete financial snapshot (P&L, balance sheet, cash flow) for an investor in under 48 hours?",
    options: [
      { text: "Yes, instantly via integrated systems", points: 2 },
      { text: "Yes, within 48 hours with manual consolidation", points: 1.5 },
      { text: "Possible but would take 1-2 weeks", points: 0.5 },
      { text: "No, would require significant work to compile", points: 0 },
    ],
  },
  {
    id: 6,
    dimensionId: "data-systems",
    question: "Do you track customer acquisition cost (CAC), lifetime value (LTV), and churn rate?",
    options: [
      { text: "Yes, all three tracked and reviewed regularly", points: 2 },
      { text: "Yes, but only one or two of these", points: 1.5 },
      { text: "We track them sporadically", points: 0.5 },
      { text: "No systematic tracking", points: 0 },
    ],
  },
  {
    id: 7,
    dimensionId: "data-systems",
    question: "Is your data architecture documented (where data lives, how it flows, who owns what)?",
    options: [
      { text: "Yes, fully documented and maintained", points: 2 },
      { text: "Partially documented", points: 1.5 },
      { text: "No documentation exists", points: 0.5 },
      { text: "Only a few people know how it works", points: 0 },
    ],
  },
  {
    id: 8,
    dimensionId: "data-systems",
    question: "Can you produce a complete customer list with revenue contribution in under 1 hour?",
    options: [
      { text: "Yes, via CRM or automated system", points: 2 },
      { text: "Yes, but requires manual work", points: 1.5 },
      { text: "Possible but would take several hours", points: 0.5 },
      { text: "No, data is fragmented across systems", points: 0 },
    ],
  },
  {
    id: 9,
    dimensionId: "data-systems",
    question: "Do you have early-warning indicators that alert leadership to problems before they become crises?",
    options: [
      { text: "Yes, automated alerts trigger proactively", points: 2 },
      { text: "Yes, but relies on manual review", points: 1.5 },
      { text: "Partially—some areas covered, others aren't", points: 0.5 },
      { text: "No systematic early-warning system", points: 0 },
    ],
  },
  {
    id: 10,
    dimensionId: "data-systems",
    question: "If your CFO or finance lead left today, could someone else generate accurate financial reports within a week?",
    options: [
      { text: "Yes, systems and documentation are sufficient", points: 2 },
      { text: "Probably, but it would be difficult", points: 1.5 },
      { text: "No, significant knowledge transfer required", points: 0.5 },
      { text: "We don't have a dedicated finance lead", points: 0 },
    ],
  },

  // --- Dimension 2: Documentation & Knowledge Architecture ---
  {
    id: 11,
    dimensionId: "documentation",
    question: "Do you have a centralized knowledge repository where critical processes and decisions are documented?",
    options: [
      { text: "Yes, actively maintained and searchable", points: 2 },
      { text: "Yes, but outdated or incomplete", points: 1.5 },
      { text: "Partially—scattered across multiple systems", points: 0.5 },
      { text: "No central repository exists", points: 0 },
    ],
  },
  {
    id: 12,
    dimensionId: "documentation",
    question: "Are your core business processes documented with step-by-step SOPs?",
    options: [
      { text: "Yes, all critical processes documented", points: 2 },
      { text: "Most processes documented", points: 1.5 },
      { text: "Some processes documented", points: 0.5 },
      { text: "Little to no documentation exists", points: 0 },
    ],
  },
  {
    id: 13,
    dimensionId: "documentation",
    question: "If your top performer in a critical role left tomorrow, how long would it take to train a replacement?",
    options: [
      { text: "Under 2 weeks—everything is documented", points: 2 },
      { text: "1-2 months—some documentation exists", points: 1.5 },
      { text: "3-6 months—mostly tribal knowledge", points: 0.5 },
      { text: "6+ months—complete knowledge transfer required", points: 0 },
    ],
  },
  {
    id: 14,
    dimensionId: "documentation",
    question: "Do you have a system for capturing and organizing decisions (meeting notes, strategic choices, rationale)?",
    options: [
      { text: "Yes, systematically captured and accessible", points: 2 },
      { text: "Yes, but inconsistently maintained", points: 1.5 },
      { text: "Partially—some meetings documented", points: 0.5 },
      { text: "No systematic capture process", points: 0 },
    ],
  },
  {
    id: 15,
    dimensionId: "documentation",
    question: "Can a new employee find answers to common questions without asking someone?",
    options: [
      { text: "Yes, comprehensive self-service knowledge base", points: 2 },
      { text: "Most questions can be answered", points: 1.5 },
      { text: "Some questions can be answered", points: 0.5 },
      { text: "No, requires asking team members", points: 0 },
    ],
  },
  {
    id: 16,
    dimensionId: "documentation",
    question: "Are your vendor contracts, insurance policies, and legal documents centrally organized and accessible?",
    options: [
      { text: "Yes, fully organized in a secure system", points: 2 },
      { text: "Mostly organized but some gaps", points: 1.5 },
      { text: "Partially organized, some docs missing", points: 0.5 },
      { text: "Scattered across emails and file systems", points: 0 },
    ],
  },
  {
    id: 17,
    dimensionId: "documentation",
    question: 'Do you have documented "institutional memory"—the why behind major decisions and strategic pivots?',
    options: [
      { text: "Yes, strategic decisions are documented with context", points: 2 },
      { text: "Some decisions documented", points: 1.5 },
      { text: "Rarely documented", points: 0.5 },
      { text: "Relies entirely on people's memory", points: 0 },
    ],
  },
  {
    id: 18,
    dimensionId: "documentation",
    question: "How current is your documentation?",
    options: [
      { text: "Updated within the last 3 months", points: 2 },
      { text: "Updated within the last 6-12 months", points: 1.5 },
      { text: "More than a year old", points: 0.5 },
      { text: "Documentation is significantly outdated or nonexistent", points: 0 },
    ],
  },
  {
    id: 19,
    dimensionId: "documentation",
    question: "Do you have a standard format/template for documenting processes across the organization?",
    options: [
      { text: "Yes, standardized and enforced", points: 2 },
      { text: "Yes, but inconsistently used", points: 1.5 },
      { text: "No standard format", points: 0.5 },
      { text: "Each team/person documents differently", points: 0 },
    ],
  },
  {
    id: 20,
    dimensionId: "documentation",
    question: "If you had to prepare a data room for due diligence today, how long would it take?",
    options: [
      { text: "Under 1 week—everything organized and ready", points: 2 },
      { text: "2-4 weeks—mostly organized, needs compilation", points: 1.5 },
      { text: "1-3 months—significant work required", points: 0.5 },
      { text: "3+ months—would need to build from scratch", points: 0 },
    ],
  },

  // --- Dimension 3: Succession Systems & Equity Preparation ---
  {
    id: 21,
    dimensionId: "succession",
    question: "What percentage of client/customer relationships require the founder's direct involvement?",
    options: [
      { text: "0-25%—team owns relationships", points: 2 },
      { text: "26-50%—shared ownership", points: 1.5 },
      { text: "51-75%—founder is primary contact", points: 0.5 },
      { text: "76-100%—founder is sole relationship owner", points: 0 },
    ],
  },
  {
    id: 22,
    dimensionId: "succession",
    question: "Do you have documented role descriptions with clear responsibilities and decision-making authority?",
    options: [
      { text: "Yes, for all key roles", points: 2 },
      { text: "Yes, for most roles", points: 1.5 },
      { text: "Partially—some roles defined", points: 0.5 },
      { text: "No formal role documentation", points: 0 },
    ],
  },
  {
    id: 23,
    dimensionId: "succession",
    question: "Is there a second-in-command who could run the business for 30 days if the founder disappeared?",
    options: [
      { text: "Yes, and they've successfully done it", points: 2 },
      { text: "Yes, but it would be challenging", points: 1.5 },
      { text: "Partially—could handle some functions", points: 0.5 },
      { text: "No, business would halt", points: 0 },
    ],
  },
  {
    id: 24,
    dimensionId: "succession",
    question: "Are strategic decisions made collaboratively, or does the founder make most calls unilaterally?",
    options: [
      { text: "Collaborative with documented decision framework", points: 2 },
      { text: "Mostly collaborative", points: 1.5 },
      { text: "Founder makes most decisions with input", points: 0.5 },
      { text: "Founder makes all major decisions alone", points: 0 },
    ],
  },
  {
    id: 25,
    dimensionId: "succession",
    question: "Do you have an organizational chart that clearly shows reporting structure and accountability?",
    options: [
      { text: "Yes, current and accurate", points: 2 },
      { text: "Yes, but needs updating", points: 1.5 },
      { text: "Informal/unclear structure", points: 0.5 },
      { text: "No org chart exists", points: 0 },
    ],
  },
  {
    id: 26,
    dimensionId: "succession",
    question: "How dependent is the business on the founder's personal brand or reputation?",
    options: [
      { text: "Not dependent—business has independent brand", points: 2 },
      { text: "Somewhat dependent but team is building reputation", points: 1.5 },
      { text: "Heavily dependent—founder is the brand", points: 0.5 },
      { text: "Entirely dependent—founder IS the business", points: 0 },
    ],
  },
  {
    id: 27,
    dimensionId: "succession",
    question: "Do you have a succession plan (even informal) for key leadership positions?",
    options: [
      { text: "Yes, documented and reviewed regularly", points: 2 },
      { text: "Yes, but informal/not documented", points: 1.5 },
      { text: "Partially—thought about but not planned", points: 0.5 },
      { text: "No succession planning exists", points: 0 },
    ],
  },
  {
    id: 28,
    dimensionId: "succession",
    question: "Can your business generate revenue without the founder's direct involvement in delivery?",
    options: [
      { text: "Yes, team delivers 90%+ independently", points: 2 },
      { text: "Yes, team delivers 50-90% independently", points: 1.5 },
      { text: "Partially—founder involved in 50%+ of delivery", points: 0.5 },
      { text: "No, founder is primary/sole delivery mechanism", points: 0 },
    ],
  },
  {
    id: 29,
    dimensionId: "succession",
    question: "Are your equity structure and cap table clean and investor-ready?",
    options: [
      { text: "Yes, clean structure with proper documentation", points: 2 },
      { text: "Mostly clean with minor issues", points: 1.5 },
      { text: "Some complications that need resolution", points: 0.5 },
      { text: "Significant complications or undocumented arrangements", points: 0 },
    ],
  },
  {
    id: 30,
    dimensionId: "succession",
    question: "If you were to exit/sell the business, what percentage of value would walk out the door with you?",
    options: [
      { text: "0-25%—business value is independent", points: 2 },
      { text: "26-50%—some value tied to founder", points: 1.5 },
      { text: "51-75%—significant value tied to founder", points: 0.5 },
      { text: "76-100%—founder is the value", points: 0 },
    ],
  },

  // --- Dimension 4: Cultural & Leadership Continuity ---
  {
    id: 31,
    dimensionId: "culture",
    question: "Are your core values documented and actively used in decision-making?",
    options: [
      { text: "Yes, documented and embedded in operations", points: 2 },
      { text: "Yes, documented but inconsistently applied", points: 1.5 },
      { text: "Values exist informally but not documented", points: 0.5 },
      { text: "No defined values or culture framework", points: 0 },
    ],
  },
  {
    id: 32,
    dimensionId: "culture",
    question: "Do you have a leadership development program or clear path for growing future leaders?",
    options: [
      { text: "Yes, formal program in place", points: 2 },
      { text: "Yes, informal but intentional development", points: 1.5 },
      { text: "Partially—some leadership training", points: 0.5 },
      { text: "No intentional leadership development", points: 0 },
    ],
  },
  {
    id: 33,
    dimensionId: "culture",
    question: "How would you describe decision-making speed when the founder isn't available?",
    options: [
      { text: "Fast—team empowered to decide independently", points: 2 },
      { text: "Moderate—some decisions require founder", points: 1.5 },
      { text: "Slow—most decisions wait for founder", points: 0.5 },
      { text: "Frozen—nothing moves without founder", points: 0 },
    ],
  },
  {
    id: 34,
    dimensionId: "culture",
    question: "Do new hires receive structured onboarding that teaches company culture and values?",
    options: [
      { text: "Yes, comprehensive onboarding program", points: 2 },
      { text: "Yes, basic onboarding exists", points: 1.5 },
      { text: "Informal/inconsistent onboarding", points: 0.5 },
      { text: "No structured onboarding process", points: 0 },
    ],
  },
  {
    id: 35,
    dimensionId: "culture",
    question: "Are performance expectations and accountability standards clear and consistent across the organization?",
    options: [
      { text: "Yes, documented and consistently enforced", points: 2 },
      { text: "Mostly clear but some inconsistency", points: 1.5 },
      { text: "Unclear or inconsistently applied", points: 0.5 },
      { text: "No formal standards exist", points: 0 },
    ],
  },
  {
    id: 36,
    dimensionId: "culture",
    question: "Do you have rituals, routines, or practices that reinforce culture independent of the founder?",
    options: [
      { text: "Yes, well-established and team-led", points: 2 },
      { text: "Yes, but founder-dependent", points: 1.5 },
      { text: "Partially—some team rituals exist", points: 0.5 },
      { text: "No, culture is entirely founder-driven", points: 0 },
    ],
  },
  {
    id: 37,
    dimensionId: "culture",
    question: "Can your team articulate the company's mission and strategy without prompting?",
    options: [
      { text: "Yes, consistently and accurately", points: 2 },
      { text: "Mostly, with some variation", points: 1.5 },
      { text: "Partially—leadership can, but not team", points: 0.5 },
      { text: "No, only founder can articulate clearly", points: 0 },
    ],
  },
  {
    id: 38,
    dimensionId: "culture",
    question: "How often do you solicit and act on employee feedback?",
    options: [
      { text: "Regularly through structured channels", points: 2 },
      { text: "Periodically through surveys/meetings", points: 1.5 },
      { text: "Rarely or only when problems arise", points: 0.5 },
      { text: "Never—no feedback mechanism exists", points: 0 },
    ],
  },
  {
    id: 39,
    dimensionId: "culture",
    question: 'Do you have documented "cultural principles" or "operating principles" that guide how work gets done?',
    options: [
      { text: "Yes, documented and actively referenced", points: 2 },
      { text: "Yes, documented but not widely used", points: 1.5 },
      { text: "Informally understood but not documented", points: 0.5 },
      { text: "No operating principles exist", points: 0 },
    ],
  },
  {
    id: 40,
    dimensionId: "culture",
    question: "If the founder left, would the company culture survive intact?",
    options: [
      { text: "Yes, culture is institutionalized", points: 2 },
      { text: "Mostly, but would need reinforcement", points: 1.5 },
      { text: "Partially—some elements would survive", points: 0.5 },
      { text: "No, culture would dissolve without founder", points: 0 },
    ],
  },

  // --- Dimension 5: Operational Resilience & Founder Dependency ---
  {
    id: 41,
    dimensionId: "resilience",
    question: "How many single points of failure exist in your operations (roles/systems where only one person knows how it works)?",
    options: [
      { text: "0-1—fully redundant systems", points: 2 },
      { text: "2-3—minimal single points of failure", points: 1.5 },
      { text: "4-6—several critical dependencies", points: 0.5 },
      { text: "7+—many single points of failure", points: 0 },
    ],
  },
  {
    id: 42,
    dimensionId: "resilience",
    question: "If your top revenue generator left today, what percentage of revenue would be at risk?",
    options: [
      { text: "0-10%—distributed across team", points: 2 },
      { text: "11-25%—some concentration but manageable", points: 1.5 },
      { text: "26-50%—significant risk", points: 0.5 },
      { text: "51%+—critical risk to business", points: 0 },
    ],
  },
  {
    id: 43,
    dimensionId: "resilience",
    question: "Do you have redundancy built into critical systems (backups, secondary vendors, cross-trained staff)?",
    options: [
      { text: "Yes, comprehensive redundancy", points: 2 },
      { text: "Yes, for most critical systems", points: 1.5 },
      { text: "Partially—some redundancy exists", points: 0.5 },
      { text: "No, single dependencies throughout", points: 0 },
    ],
  },
  {
    id: 44,
    dimensionId: "resilience",
    question: "Can the business operate normally if the founder takes a 2-week vacation with no contact?",
    options: [
      { text: "Yes, happens regularly without issues", points: 2 },
      { text: "Yes, but requires significant pre-planning", points: 1.5 },
      { text: "Partially—some functions would suffer", points: 0.5 },
      { text: "No, business requires daily founder involvement", points: 0 },
    ],
  },
  {
    id: 45,
    dimensionId: "resilience",
    question: "How dependent is your revenue on a single customer, client, or contract?",
    options: [
      { text: "Not dependent—no customer >15% of revenue", points: 2 },
      { text: "One customer represents 16-30% of revenue", points: 1.5 },
      { text: "One customer represents 31-50% of revenue", points: 0.5 },
      { text: "One customer represents 51%+ of revenue", points: 0 },
    ],
  },
  {
    id: 46,
    dimensionId: "resilience",
    question: "Do you have disaster recovery and business continuity plans?",
    options: [
      { text: "Yes, documented and tested", points: 2 },
      { text: "Yes, documented but not tested", points: 1.5 },
      { text: "Partially—informal plans exist", points: 0.5 },
      { text: "No formal disaster recovery plans", points: 0 },
    ],
  },
  {
    id: 47,
    dimensionId: "resilience",
    question: "Are critical systems and tools properly managed with documented access, licenses, and renewal tracking?",
    options: [
      { text: "Yes, centrally managed with documentation", points: 2 },
      { text: "Mostly managed but some gaps", points: 1.5 },
      { text: "Partially—scattered across individuals", points: 0.5 },
      { text: "No, ad hoc management only", points: 0 },
    ],
  },
  {
    id: 48,
    dimensionId: "resilience",
    question: "If your primary revenue channel disappeared tomorrow (platform, partner, market), how long would the business survive?",
    options: [
      { text: "12+ months—diversified revenue", points: 2 },
      { text: "6-12 months—some diversification", points: 1.5 },
      { text: "3-6 months—limited options", points: 0.5 },
      { text: "Under 3 months—single channel dependency", points: 0 },
    ],
  },
  {
    id: 49,
    dimensionId: "resilience",
    question: "How many of your systems require the founder's personal login, credit card, or account to function?",
    options: [
      { text: "None—all systems under business accounts", points: 2 },
      { text: "1-2 systems", points: 1.5 },
      { text: "3-5 systems", points: 0.5 },
      { text: "6+ systems or most systems", points: 0 },
    ],
  },
  {
    id: 50,
    dimensionId: "resilience",
    question: "Can your business scale revenue 2-3x without major operational breakdown?",
    options: [
      { text: "Yes, systems can handle 3x+ growth", points: 2 },
      { text: "Probably, with minor adjustments", points: 1.5 },
      { text: "Maybe, would require significant changes", points: 0.5 },
      { text: "No, current operations at capacity", points: 0 },
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

/**
 * Deterministically shuffles an array using Fisher-Yates
 */
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
