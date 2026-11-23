import {
  TrendingUp,
  Cog,
  Brain,
  Users,
  DollarSign,
  Heart,
  Package,
  Compass,
  LucideIcon,
} from "lucide-react";

export interface SubEngine {
  name: string;
  tagline: string;
  description: string;
  mechanism: string;
  impactMetric: string;
}

export interface DimensionCriteria {
  dimension: "Reliability" | "Efficiency" | "Measurability" | "Transferability" | "Adaptability";
  question: string;
  healthyRead: string;
  impairedRead: string;
}

export interface EngineFamilyData {
  slug: string;
  number: string;
  name: string;
  tagline: string;
  iconName: string; // for icon reference
  edge: string;
  whatItGoverns: string[];
  governingThesis: string;
  warningSigns: {
    symptom: string;
    impact: string;
  }[];
  subEngines: SubEngine[];
  dimensions: DimensionCriteria[];
  caseStudy?: {
    slug: string;
    client: string;
    headline: string;
    description: string;
  };
  recommendedOffer: {
    badge: string;
    title: string;
    description: string;
    href: string;
    cta: string;
  };
}

export const ENGINE_FAMILIES_DATA: Record<string, EngineFamilyData> = {
  growth: {
    slug: "growth",
    number: "01",
    name: "Growth Engine Family",
    tagline: "Engines that create new demand, engineer pipeline velocity, and convert market potential into revenue.",
    iconName: "TrendingUp",
    edge: "edge-green",
    whatItGoverns: [
      "Outbound opportunity discovery & market signal detection",
      "Inbound lead qualification, scoring, and speed-to-lead routing",
      "Sales pipeline velocity and follow-up choreography",
      "Referral multiplication & channel partnership loops",
      "Customer acquisition cost (CAC) and conversion predictability",
    ],
    governingThesis:
      "Revenue is not an outcome of hustle, charisma, or sporadic campaigns. In Business Performance Engineering, growth is treated as a repeatable mechanical pump: inputs of targeted attention are systematically filtered, qualified, and transformed into booked economic commitments.",
    warningSigns: [
      {
        symptom: "Founder-Dependent Selling",
        impact: "Deals only close when the founder or key partner steps into the room; there is no autonomous pipeline.",
      },
      {
        symptom: "Speed-to-Lead Decay (>4–24 Hours)",
        impact: "Qualified inbound inquiries sit in inboxes, resulting in a 70%+ drop-off in close probability.",
      },
      {
        symptom: "Rollercoaster Pipeline Months",
        impact: "The team oscillates between delivery firefighting and panic outbound prospecting because lead flow isn't continuous.",
      },
      {
        symptom: "Unattributed Lead Acquisition",
        impact: "Marketing and outbound spend occurs without granular telemetry showing which channel produces profitable margin.",
      },
    ],
    subEngines: [
      {
        name: "Opportunity Discovery Engine (ODE)",
        tagline: "Autonomous Market Scanning & Signal Detection",
        description:
          "Monitors corporate movements, executive changes, and digital triggers across target mid-market accounts to feed warm, qualified opportunities into your calendar.",
        mechanism: "Automated webhook monitoring → AI synthesis → personalized executive briefings.",
        impactMetric: "3–5x increase in qualified outbound conversations without sales headcount.",
      },
      {
        name: "Speed-to-Lead Inbound Router",
        tagline: "Sub-5-Minute Lead Triage & Enrichment",
        description:
          "Captures inbound inquiries, instantly cross-references company databases, enriches buyer telemetry, and routes qualified VITOs directly to your booking calendar.",
        mechanism: "Form webhook → enrichment API → AI qualification matrix → Google Calendar link.",
        impactMetric: "85% reduction in lead response latency; 40% increase in show-up rates.",
      },
      {
        name: "Referral & Peer Expansion Engine",
        tagline: "Systematic Word-of-Mouth Compounding",
        description:
          "Triggers post-delivery feedback and peer introduction requests at peak client satisfaction moments, systematically generating executive peer introductions.",
        mechanism: "Milestone completion hook → sentiment check → automated peer referral collector.",
        impactMetric: "Transforms one happy client into an average of 1.8 qualified warm referrals.",
      },
    ],
    dimensions: [
      {
        dimension: "Reliability",
        question: "Does your pipeline produce consistent, qualified discovery conversations every single week?",
        healthyRead: "Consistent weekly flow of qualified opportunities regardless of season or founder focus.",
        impairedRead: "Famine-or-feast pipeline; dry spells whenever leadership is heads-down in delivery.",
      },
      {
        dimension: "Efficiency",
        question: "How much staff time is consumed per booked discovery meeting?",
        healthyRead: "Automated qualification and calendar booking; reps only speak with pre-vetted decision makers.",
        impairedRead: "Dozens of manual emails, no-shows, and chasing unqualified leads across spreadsheets.",
      },
      {
        dimension: "Measurability",
        question: "Do you have real-time telemetry on CAC, pipeline velocity, and conversion by channel?",
        healthyRead: "Clear scoreboard showing lead origin, velocity through pipeline, and unit economics.",
        impairedRead: "Gut-feeling estimates; inability to predict quarterly revenue until invoices are sent.",
      },
      {
        dimension: "Transferability",
        question: "Can an operational sales specialist step in and run the conversion pipeline without the founder?",
        healthyRead: "Documented ICP qualification matrices, standard demos, and automated objection handling.",
        impairedRead: "Everything lives in the founder's head; junior hires struggle to close deals.",
      },
      {
        dimension: "Adaptability",
        question: "Can the growth engine expand into new industry verticals without starting from scratch?",
        healthyRead: "Modular messaging and signal scrapers re-target new niches in under 48 hours.",
        impairedRead: "Entering a new vertical requires rebuilding the entire marketing and sales process.",
      },
    ],
    caseStudy: {
      slug: "optimist",
      client: "Optimist Business Solutions",
      headline: "From Bottleneck to Breakthrough.",
      description: "An AI-routed intake engine that compressed a 2-week manual qualification process into a single day — eliminating 51% of process steps.",
    },
    recommendedOffer: {
      badge: "RECOMMENDED INSTALLATION",
      title: "Lumina Compass — 4-Week Systems Sprint",
      description:
        "We engineer, build, deploy, and hand off an autonomous Speed-to-Lead or Opportunity Discovery Engine tailored to your ICP.",
      href: "/compass",
      cta: "Explore Lumina Compass ($15K – $25K)",
    },
  },

  operations: {
    slug: "operations",
    number: "02",
    name: "Operations Engine Family",
    tagline: "Engines that transform business commitments into delivered value without key-person burnout.",
    iconName: "Cog",
    edge: "edge-blue",
    whatItGoverns: [
      "Client delivery fulfillment & service execution pipelines",
      "Field operations, routing, dispatch, and physical logistics",
      "Cross-departmental handoffs, status tracking, and SLA enforcement",
      "Operational capacity planning and bottleneck elimination",
      "Quality assurance, error reduction, and delivery standardization",
    ],
    governingThesis:
      "A business's ultimate throughput is bounded by its single weakest operational constraint. Operations engines decouple delivery capacity from human hours: tasks that can be automated are orchestrated by webhooks, freeing skilled operators to focus 100% on high-leverage execution.",
    warningSigns: [
      {
        symptom: "Whiteboard & Spreadsheet Dispatching",
        impact: "Core operational tracking relies on manual spreadsheets, SMS threads, or whiteboards vulnerable to human error.",
      },
      {
        symptom: "Handoff Friction & Chasing Updates",
        impact: "Staff spend 10–15 hours every week in meetings or Slack threads asking 'What's the status of job #104?'",
      },
      {
        symptom: "Key-Person Delivery Fragility",
        impact: "If one operational manager takes a vacation or calls in sick, the entire fulfillment pipeline grinds to a halt.",
      },
      {
        symptom: "Scale Breaking Quality",
        impact: "Taking on 20% more client volume results in errors, customer complaints, and severe employee burnout.",
      },
    ],
    subEngines: [
      {
        name: "Webhook-Native Dispatch & Routing Engine",
        tagline: "Automated Field Operations & Scheduling (PST Standard)",
        description:
          "Connects incoming customer orders directly to technician dispatch schedules, inventory verification, and customer notifications with zero manual data entry.",
        mechanism: "Webhook trigger → route optimization algorithm → SMS/app dispatch → completion logging.",
        impactMetric: "22 hours/week saved; enabled 30% volume expansion with zero administrative hires.",
      },
      {
        name: "Automated Client Onboarding Pipeline",
        tagline: "Frictionless Day-1 Project Bring-Up",
        description:
          "Collects initial assets, provisions accounts, sets up project management boards, and sends kickoff briefings automatically upon contract signature.",
        mechanism: "Stripe/DocuSign webhook → CRM trigger → project template generation → client portal link.",
        impactMetric: "Reduces onboarding latency from 5 business days to under 15 minutes.",
      },
      {
        name: "Operational Ticket Triage & SLA Monitor",
        tagline: "Autonomous Request Classification & Routing",
        description:
          "Scans incoming operational requests, classifies urgency, tags the responsible engineer, and alerts leadership before any customer SLA is breached.",
        mechanism: "Email/ticket intake → LLM classification → priority queue assignment → escalation watchdog.",
        impactMetric: "Eliminates triage bottlenecks; 99.4% SLA adherence across high-volume pipelines.",
      },
    ],
    dimensions: [
      {
        dimension: "Reliability",
        question: "Do daily fulfillment workflows run predictably without emergency interventions?",
        healthyRead: "Zero dropped handoffs; automated pipeline handles routing and confirmation.",
        impairedRead: "Constant fires; missed deadlines and jobs falling through administrative cracks.",
      },
      {
        dimension: "Efficiency",
        question: "What percentage of staff time is spent on actual delivery vs. administrative status chasing?",
        healthyRead: "Over 85% of staff bandwidth dedicated to core service delivery and customer value.",
        impairedRead: "Team spends 30–40% of their workday copy-pasting data and sending update emails.",
      },
      {
        dimension: "Measurability",
        question: "Can leadership see the real-time operational status of all active jobs in a single dashboard?",
        healthyRead: "Live cockpit telemetry showing active jobs, cycle times, and resource utilization.",
        impairedRead: "Must ask individual team members or dig through spreadsheets to understand capacity.",
      },
      {
        dimension: "Transferability",
        question: "Could a new operator step into the dispatch or delivery seat tomorrow and execute smoothly?",
        healthyRead: "Standard operating procedures are built directly into the software pipelines.",
        impairedRead: "Execution depends entirely on tribal knowledge and memory of key staff.",
      },
      {
        dimension: "Adaptability",
        question: "Can fulfillment capacity scale by 50% without needing a 50% increase in back-office headcount?",
        healthyRead: "Pipelines scale smoothly; marginal administrative cost per delivered job approaches zero.",
        impairedRead: "Every incremental client requires another project manager or coordinator.",
      },
    ],
    caseStudy: {
      slug: "pst",
      client: "Preferred Solutions Transport",
      headline: "From Manual to Machine.",
      description: "A webhook-native, 7-stage operational engine installed in a live logistics environment — saving 22 staff hours per week.",
    },
    recommendedOffer: {
      badge: "FEATURED ENGAGEMENT",
      title: "Lumina Compass — 4-Week Systems Sprint",
      description:
        "We architect, build, and deploy a webhook-native operations engine directly inside your business, then transfer complete ownership to your team.",
      href: "/compass",
      cta: "Explore Lumina Compass ($15K – $25K)",
    },
  },

  intelligence: {
    slug: "intelligence",
    number: "03",
    name: "Intelligence Engine Family",
    tagline: "Engines that turn ambient organizational data into real-time executive decision leverage.",
    iconName: "Brain",
    edge: "edge-hover",
    whatItGoverns: [
      "Executive telemetry cockpits and real-time operational scoreboards",
      "Institutional knowledge synthesis and AI retrieval systems",
      "Margin leakage detection and operational cost tracking",
      "Autonomous weekly reporting and performance exception alerts",
      "Cross-platform data synchronization and database governance",
    ],
    governingThesis:
      "Most mid-market businesses drown in data but starve for insight. Intelligence engines continuously aggregate fragmented data from CRMs, ERPs, inboxes, and spreadsheets into clean, actionable executive telemetry so leadership can make decisions with certainty rather than guesswork.",
    warningSigns: [
      {
        symptom: "Flying Blind on Daily Performance",
        impact: "Leadership has no real-time scoreboard and only learns about financial or operational problems weeks after they occur.",
      },
      {
        symptom: "Manual Monday Morning Reporting",
        impact: "Key managers spend 4–8 hours every Monday compiling duplicate spreadsheets for executive review.",
      },
      {
        symptom: "Fragmented Data Silos",
        impact: "Customer and project data lives in 5 disconnected tools, creating conflicting numbers across departments.",
      },
      {
        symptom: "Buried Institutional Knowledge",
        impact: "Crucial company policies, past solutions, and SOPs are buried in Google Drive folders nobody reads.",
      },
    ],
    subEngines: [
      {
        name: "Executive Telemetry Cockpit",
        tagline: "Real-Time Company Throughput Scoreboard",
        description:
          "Aggregates live operational, revenue, and capacity metrics from across your tool stack into a single executive command view updated continuously.",
        mechanism: "Database webhooks → telemetry aggregator → high-status visual telemetry dashboard.",
        impactMetric: "Replaces 15+ hours/week of manual executive reporting with 100% automated live data.",
      },
      {
        name: "Institutional Knowledge & Policy Assistant",
        tagline: "Autonomous Internal AI Co-Pilot",
        description:
          "Indexes your company's SOPs, client contracts, and technical playbooks, allowing staff to query organizational intelligence instantly via Slack or web.",
        mechanism: "Vector embedding engine → RAG pipeline → role-governed AI assistant.",
        impactMetric: "Cuts repeat internal staff inquiries to managers by over 75%.",
      },
      {
        name: "Margin & Bottleneck Exception Watchdog",
        tagline: "Autonomous Anomaly & Drift Detection",
        description:
          "Continuously monitors project cycle times, invoice collection delays, and labor hour spikes, alerting leadership the moment an operational engine drifts out of tolerance.",
        mechanism: "Hourly cron telemetry scanner → variance detection → executive alert webhook.",
        impactMetric: "Catches project margin leaks before monthly billing cycles close.",
      },
    ],
    dimensions: [
      {
        dimension: "Reliability",
        question: "Does your reporting reflect ground-truth operational numbers without manual spreadsheet manipulation?",
        healthyRead: "Automated pipelines feed clean, reconcilable numbers directly from primary systems.",
        impairedRead: "Conflicting numbers; reports depend on individual staff editing cells manually.",
      },
      {
        dimension: "Efficiency",
        question: "How long does it take leadership to get an accurate answer to a complex operational question?",
        healthyRead: "Seconds: queryable cockpit or AI assistant returns verified answers instantly.",
        impairedRead: "Days: requires scheduling meetings and asking analysts to pull custom CSVs.",
      },
      {
        dimension: "Measurability",
        question: "Does every operational department have 1–3 clear North Star metrics visible daily?",
        healthyRead: "Every manager knows their throughput, error rate, and cycle time in real time.",
        impairedRead: "Teams operate on subjective impressions; performance is only evaluated during quarterly reviews.",
      },
      {
        dimension: "Transferability",
        question: "Can key insights be retrieved when the person who created the report is absent?",
        healthyRead: "Institutional knowledge is centralized and indexed independently of individuals.",
        impairedRead: "If the spreadsheet author leaves, no one understands the macro formulas.",
      },
      {
        dimension: "Adaptability",
        question: "Can new data sources or acquisitions be plugged into your telemetry within 48 hours?",
        healthyRead: "Modular API architecture ingests new tools seamlessly.",
        impairedRead: "Adding a new tool requires rebuilding all downstream spreadsheets.",
      },
    ],
    recommendedOffer: {
      badge: "FRACTIONAL ARCHITECT",
      title: "Lumina Ignite — Fractional Systems Partner",
      description:
        "We serve as your dedicated Chief Systems Architect, managing your telemetry, data pipelines, and intelligence engines month over month.",
      href: "/ignite",
      cta: "Explore Lumina Ignite ($3,500 – $6,500/mo)",
    },
  },

  people: {
    slug: "people",
    number: "04",
    name: "People Engine Family",
    tagline: "Engines that build organizational horsepower by systematizing hiring, onboarding, and capability transfer.",
    iconName: "Users",
    edge: "edge-cream",
    whatItGoverns: [
      "Talent acquisition, candidate filtering, and structured interview pipelines",
      "New hire onboarding, systems access, and 30-day time-to-productivity",
      "Role clarity, capability scorecards, and cross-training protocols",
      "Knowledge capture from departing key personnel",
      "Team operational literacy and AI adoption standards",
    ],
    governingThesis:
      "A company cannot scale faster than its ability to onboard and align talent. People engines ensure that company culture, standards, and technical know-how are transferred systematically—turning raw talent into high-performing operators without draining executive time.",
    warningSigns: [
      {
        symptom: "Months to Ramp New Hires",
        impact: "New team members spend 60–90 days shadowing before they can execute core workflows autonomously.",
      },
      {
        symptom: "Tribal Knowledge Evaporation",
        impact: "When a senior team member departs, their entire operational playbook and passwords vanish with them.",
      },
      {
        symptom: "Inconsistent Execution Quality",
        impact: "Clients receive wildly different experiences depending on which team member handles their account.",
      },
      {
        symptom: "Leadership Trapped in Onboarding",
        impact: "Founders spend 10+ hours a week training new staff instead of focusing on strategic growth.",
      },
    ],
    subEngines: [
      {
        name: "Autonomous Candidate Screening Engine",
        tagline: "Automated Skills Verification & Filter",
        description:
          "Filters incoming job applicants against role-specific technical criteria and case prompts, advancing only verified top-tier candidates to human interviews.",
        mechanism: "ATS webhook → case study submission prompt → AI rubric grading → calendar link.",
        impactMetric: "Saves 20+ hours of resume triage per open role; eliminates interview mismatches.",
      },
      {
        name: "30-Day Automated Onboarding Engine",
        tagline: "Day-1 to Autonomous Contributor Pipeline",
        description:
          "Drips structured training modules, account credentials, and milestone quizzes over the employee's first 30 days, tracking progress automatically.",
        mechanism: "HRIS trigger → automated task sequence → milestone verification → manager check-in alert.",
        impactMetric: "Compresses time-to-productivity from 90 days to under 21 days.",
      },
      {
        name: "Role Clarity & SOP Engine",
        tagline: "Living Organizational Capability Map",
        description:
          "Maintains modular, video-documented standard operating procedures for every position, updated in real time as workflows evolve.",
        mechanism: "Process screen recording → automated SOP documentation → task checklist integration.",
        impactMetric: "Zero knowledge loss when staff transition or take extended leave.",
      },
    ],
    dimensions: [
      {
        dimension: "Reliability",
        question: "Does every new hire receive an identical, high-standard onboarding experience?",
        healthyRead: "Standardized 30-day curriculum guaranteed for every department.",
        impairedRead: "Ad-hoc onboarding: new hires sit at desks waiting for instructions or access.",
      },
      {
        dimension: "Efficiency",
        question: "How many executive hours are required to bring a new hire to full productivity?",
        healthyRead: "Under 5 hours of founder time; automated curriculum handles systems and doctrine.",
        impairedRead: "Dozens of hours of repetitive shadowing and 1-on-1 hand-holding.",
      },
      {
        dimension: "Measurability",
        question: "Do you have quantitative benchmarks for employee ramp-up velocity and retention?",
        healthyRead: "Clear tracking of Day 7, Day 14, and Day 30 capability milestones.",
        impairedRead: "Subjective gut checks; failure to identify struggling hires until month 3.",
      },
      {
        dimension: "Transferability",
        question: "Can an operational position be handed over to a new team member in under 48 hours?",
        healthyRead: "Documented SOPs and tools allow immediate, safe task execution.",
        impairedRead: "Single-point-of-failure roles: only one person knows how to run the system.",
      },
      {
        dimension: "Adaptability",
        question: "Does your team embrace modern tools and AI workflows without cultural friction?",
        healthyRead: "High operational literacy; team actively suggests workflow improvements.",
        impairedRead: "Resistance to new software; staff revert to manual habits.",
      },
    ],
    recommendedOffer: {
      badge: "TEAM WORKSHOP",
      title: "Lumina Labs — Interactive Team Workshop",
      description:
        "A half-day intensive that aligns your leadership and operational teams around Business Performance Engineering doctrine and engine thinking.",
      href: "/labs",
      cta: "Explore Lumina Labs ($7,500 – $15,000)",
    },
  },

  financial: {
    slug: "financial",
    number: "05",
    name: "Financial Engine Family",
    tagline: "Engines that convert delivered business value into predictable cash flow and safeguard margins.",
    iconName: "DollarSign",
    edge: "edge-green",
    whatItGoverns: [
      "Invoicing triggers, accounts receivable (AR), and collections automation",
      "Real-time gross margin tracking and operational labor cost allocation",
      "Cash flow forecasting and capital allocation choreography",
      "Pricing model optimization, retainer governance, and revenue recognition",
      "Vendor spend telemetry and SaaS subscription waste detection",
    ],
    governingThesis:
      "Profit is not what is left over at the end of the year; it is an engineered boundary condition. Financial engines automate the velocity of cash into the business, prevent silent margin leakage, and ensure unit economics improve as volume expands.",
    warningSigns: [
      {
        symptom: "Delayed Invoicing & Slow Collections",
        impact: "Invoices sit unsent for days after delivery; accounts receivable stretch beyond 45–60 days.",
      },
      {
        symptom: "Silent Gross Margin Erosion",
        impact: "Revenue increases on the P&L, but cash reserves remain flat because project scope creep eats profits.",
      },
      {
        symptom: "Manual Spreadsheet Reconciliations",
        impact: "Bookkeepers and owners spend hours matching Stripe/bank charges against project databases.",
      },
      {
        symptom: "Cash Flow Panic Spikes",
        impact: "Leadership has zero 60-day cash flow visibility, leading to unexpected payroll scrambles.",
      },
    ],
    subEngines: [
      {
        name: "Automated Invoicing & Collections Engine",
        tagline: "Zero-Latency Cash Realization Pipeline",
        description:
          "Triggers invoices automatically upon milestone approval, monitors payment deadlines, and executes polite automated escalation sequences before accounts go past due.",
        mechanism: "Project milestone webhook → Stripe/QuickBooks invoice dispatch → automated SMS/email reminders.",
        impactMetric: "Cuts Days Sales Outstanding (DSO) by 40%; eliminates manual collections chasing.",
      },
      {
        name: "Real-Time Gross Margin & Unit Cost Engine",
        tagline: "Live Project Profitability Telemetry",
        description:
          "Allocates labor hours, software licenses, and third-party costs directly against specific client deliverables in real time, alerting if a project dips below target margin.",
        mechanism: "Time tracking + vendor API ingestion → margin calculator → low-margin alert hook.",
        impactMetric: "Protects a minimum 65%+ gross margin floor across all active service delivery.",
      },
      {
        name: "Vendor & Subscription Optimization Engine",
        tagline: "Autonomous Overhead Shield",
        description:
          "Audits recurring software, contractor, and operational spend across bank feeds, identifying unused licenses and price increases automatically.",
        mechanism: "Plaid/accounting feed scanner → license usage API → monthly waste report.",
        impactMetric: "Uncovers an average of $8,000–$25,000/year in zombie subscriptions and redundant tools.",
      },
    ],
    dimensions: [
      {
        dimension: "Reliability",
        question: "Do invoices generate automatically the moment deliverables are accepted?",
        healthyRead: "Invoicing is 100% event-driven; no manual invoice drafting required.",
        impairedRead: "Invoices are created in batches weeks late when the founder gets around to it.",
      },
      {
        dimension: "Efficiency",
        question: "How much time does your finance team spend on manual data entry and reconciliation?",
        healthyRead: "Fully integrated pipes; transactions reconcile automatically between bank and ledger.",
        impairedRead: "Manual copy-pasting between billing platforms, spreadsheets, and QuickBooks.",
      },
      {
        dimension: "Measurability",
        question: "Can leadership see live gross profit by service line or client account today?",
        healthyRead: "Real-time unit economic dashboard updated on every delivery cycle.",
        impairedRead: "Margin is only known when tax returns or quarterly P&Ls are delivered.",
      },
      {
        dimension: "Transferability",
        question: "Can billing and payment exceptions be handled without founder sign-off?",
        healthyRead: "Documented payment policies and automated reminder sequences.",
        impairedRead: "Every past-due client requires a difficult personal phone call from the founder.",
      },
      {
        dimension: "Adaptability",
        question: "Can your financial engine handle new billing structures (retainers, usage, milestones) easily?",
        healthyRead: "Modular billing architecture supports hybrid retainer + success structures.",
        impairedRead: "Changing pricing models breaks current accounting workflows.",
      },
    ],
    recommendedOffer: {
      badge: "DIAGNOSTIC FIRST",
      title: "Strategy Session — No Fee Working Session",
      description:
        "45 minutes with Donovan Green to review your financial and operational throughput, isolate margin leaks, and map your engine architecture.",
      href: "/strategy-session",
      cta: "Schedule Strategy Session",
    },
  },

  customer: {
    slug: "customer",
    number: "06",
    name: "Customer Engine Family",
    tagline: "Engines that compound relationship lifetime value, maximize retention, and engineer client advocacy.",
    iconName: "Heart",
    edge: "edge-blue",
    whatItGoverns: [
      "Client health telemetry, sentiment tracking, and early churn alerts",
      "Account expansion triggers, upsell pathways, and renewal governance",
      "Customer support ticket routing, triage, and resolution speed",
      "Client milestone celebrations, gift choreography, and touchpoint cadences",
      "Case study generation and executive referral harvesting",
    ],
    governingThesis:
      "Customer retention is not achieved by heroic last-minute saves; it is engineered through systematic touchpoints, observable milestones, and proactive relationship telemetry. Customer engines turn one-time buyers into lifetime advocates.",
    warningSigns: [
      {
        symptom: "Surprise Client Cancellations",
        impact: "Clients cancel unexpectedly without early warning indicators showing relationship deterioration.",
      },
      {
        symptom: "Silent Unhappy Clients",
        impact: "Customers experience friction in delivery but say nothing until they refuse to renew their contract.",
      },
      {
        symptom: "Missed Account Expansion",
        impact: "Clients with growing needs look elsewhere because your team lacks an automated expansion trigger.",
      },
      {
        symptom: "Ad-Hoc Case Study Gathering",
        impact: "Case studies and testimonials are rarely collected because there is no automated post-win workflow.",
      },
    ],
    subEngines: [
      {
        name: "Client Health & Churn Early Warning Engine",
        tagline: "Predictive Relationship Telemetry",
        description:
          "Monitors client product usage, email sentiment, and ticket volume, alerting executive leadership the moment an account shows signs of disengagement.",
        mechanism: "Activity telemetry + sentiment NLP → health score index → red-flag account alert.",
        impactMetric: "Reduces preventable client churn by over 50% via 30-day early warnings.",
      },
      {
        name: "Post-Engagement Review & Referral Engine",
        tagline: "Automated Advocacy Harvesting",
        description:
          "Dispatches post-engagement impact surveys upon milestone completion, collecting verified ROI metrics and executive peer referrals automatically.",
        mechanism: "Milestone completion hook → survey dispatch → reviews database sync → peer referral alert.",
        impactMetric: "Turns 70%+ of completed client engagements into verified proof and warm referrals.",
      },
      {
        name: "Proactive Account Expansion Trigger",
        tagline: "Capacity-Driven Upsell Pipeline",
        description:
          "Identifies when a client hits 80% of their operational capacity or achieves key ROI benchmarks, generating a customized expansion proposal for account review.",
        mechanism: "Usage threshold monitor → ROI milestone calculator → executive expansion brief.",
        impactMetric: "Increases net revenue retention (NRR) by 25–40% across existing accounts.",
      },
    ],
    dimensions: [
      {
        dimension: "Reliability",
        question: "Do clients receive consistent check-ins and milestone reviews without anyone having to remember?",
        healthyRead: "Automated touchpoint calendar guaranteed across every single active account.",
        impairedRead: "Check-ins depend on memory; squeaky wheels get attention while quiet clients drift away.",
      },
      {
        dimension: "Efficiency",
        question: "How much manual effort is required to maintain high client satisfaction across your portfolio?",
        healthyRead: "Proactive health scoreboards highlight exactly which 3 accounts need attention today.",
        impairedRead: "Account managers drown in reactive email firefighting and unorganized check-in calls.",
      },
      {
        dimension: "Measurability",
        question: "Do you have an objective health score for every active client updated weekly?",
        healthyRead: "Real-time composite health index based on communication, usage, and milestone delivery.",
        impairedRead: "Account status is purely an opinion shared verbally during internal meetings.",
      },
      {
        dimension: "Transferability",
        question: "Could an account manager transition a major client to a colleague without relationship churn?",
        healthyRead: "Full relationship history, preferences, and telemetry documented in CRM.",
        impairedRead: "The relationship lives exclusively in one account manager's personal rapport.",
      },
      {
        dimension: "Adaptability",
        question: "Can your team roll out a new client service tier to 100% of accounts with zero manual outreach?",
        healthyRead: "Automated segment messaging and in-app triggers introduce new capabilities seamlessly.",
        impairedRead: "Requires weeks of manual 1-on-1 calls to inform existing clients.",
      },
    ],
    recommendedOffer: {
      badge: "RETAINER PARTNER",
      title: "Lumina Ignite — Fractional Systems Partner",
      description:
        "Every 30 days, we build and tune an operational or customer engine to protect margins and compound lifetime value.",
      href: "/ignite",
      cta: "Explore Lumina Ignite ($3,500 – $6,500/mo)",
    },
  },

  product: {
    slug: "product",
    number: "07",
    name: "Product Engine Family",
    tagline: "Engines that translate market insight and client friction into standardized, high-margin capabilities.",
    iconName: "Package",
    edge: "edge-hover",
    whatItGoverns: [
      "Service-to-product standardization and modular offer packaging",
      "Feature prioritization, client feedback loops, and roadmap governance",
      "Release cycles, deployment pipelines, and version control",
      "Quality assurance (QA), regression prevention, and delivery tolerances",
      "Proprietary IP asset creation and technical documentation",
    ],
    governingThesis:
      "Bespoke consulting and custom projects cap agency margins. Product engines standardize repeatable solutions into modular assets—allowing businesses to deliver premium outcomes in a fraction of the time with near-zero marginal reproduction cost.",
    warningSigns: [
      {
        symptom: "Reinventing the Wheel on Every Engagement",
        impact: "Every client engagement is treated as a blank canvas, preventing reuse of existing technical assets.",
      },
      {
        symptom: "Rampant Scope Creep",
        impact: "Projects run weeks over deadline because deliverables lack strict modular specifications.",
      },
      {
        symptom: "Slow Feature Iteration Cycles",
        impact: "Valuable improvements discovered in one client project take months to roll out to the rest of the business.",
      },
      {
        symptom: "Lack of Defensible Intellectual Property",
        impact: "The company sells commodities (hours and headcount) rather than proprietary engineered assets.",
      },
    ],
    subEngines: [
      {
        name: "Service-to-Asset Productization Engine",
        tagline: "Modular Deliverable Packaging Pipeline",
        description:
          "Transforms custom advisory and manual consulting work into standardized, pre-built components and repeatable field guides.",
        mechanism: "Deliverable audit → component abstraction → modular template architecture.",
        impactMetric: "Cuts delivery production time by 60% while commanding fixed-fee premium pricing.",
      },
      {
        name: "Client Feedback & Feature Ingestion Engine",
        tagline: "Automated Market Requirement Synthesis",
        description:
          "Collects client support questions, feature requests, and edge-case friction points, clustering them automatically into prioritized roadmap specs.",
        mechanism: "Support transcript ingest → NLP cluster analysis → engineering feature spec generator.",
        impactMetric: "Aligns engineering effort 100% with real-world client willingness-to-pay.",
      },
      {
        name: "Automated QA & Delivery Verification Gate",
        tagline: "Defect-Free Hand-Off Protocol",
        description:
          "Runs comprehensive regression, link, and schema checks across client deliverables before handoff, ensuring zero embarrassing client-facing bugs.",
        mechanism: "Pre-deployment checklist runner → automated test suite → acceptance sign-off.",
        impactMetric: "Virtually eliminates post-launch client defect tickets.",
      },
    ],
    dimensions: [
      {
        dimension: "Reliability",
        question: "Does your product or service deliver an identical, high-standard outcome every time?",
        healthyRead: "Standardized modules and checklists guarantee identical quality on every run.",
        impairedRead: "Delivery quality varies widely depending on which developer or consultant was assigned.",
      },
      {
        dimension: "Efficiency",
        question: "What percentage of a new deliverable is assembled from reusable institutional assets?",
        healthyRead: "70%+ pre-built modular components; only 30% custom configuration per client.",
        impairedRead: "0%: Every project starts with a blank IDE or empty Google Doc.",
      },
      {
        dimension: "Measurability",
        question: "Do you have clear telemetry on delivery cycle times and defect rates per release?",
        healthyRead: "Granular tracking of build hours, cycle times, and client acceptance speed.",
        impairedRead: "No objective tracking: projects finish when everyone runs out of energy.",
      },
      {
        dimension: "Transferability",
        question: "Can junior or mid-level team members assemble and ship deliverables using your modular assets?",
        healthyRead: "Productized architecture allows rapid delegation without quality degradation.",
        impairedRead: "Only senior partners understand how to build and deliver the core offering.",
      },
      {
        dimension: "Adaptability",
        question: "Can your productized offering be upgraded across all clients without manual reconfiguration?",
        healthyRead: "Centralized repository updates propagate to client environments cleanly.",
        impairedRead: "Updating a system requires logging into 50 different customer accounts by hand.",
      },
    ],
    recommendedOffer: {
      badge: "SYSTEMS SPRINT",
      title: "Lumina Compass — 4-Week Systems Sprint",
      description:
        "We productize your core service into an automated, modular engine that delivers repeatable value without custom consulting drag.",
      href: "/compass",
      cta: "Explore Lumina Compass ($15K – $25K)",
    },
  },

  leadership: {
    slug: "leadership",
    number: "08",
    name: "Leadership Engine Family",
    tagline: "Engines that establish strategic alignment, enforce operational cadence, and govern company throughput.",
    iconName: "Compass",
    edge: "edge-cream",
    whatItGoverns: [
      "Executive decision frameworks, delegation protocols, and authority matrices",
      "Strategic alignment rhythms: daily standups, weekly scoreboards, monthly audits",
      "Resource allocation, capital prioritization, and opportunity vetting",
      "Executive succession readiness and key-person risk elimination",
      "Business Performance Engineering (BPE) engine governance standards",
    ],
    governingThesis:
      "A leader’s primary job is not to make 100 small operational decisions every day; it is to design and govern the decision-making engines that run the company. Leadership engines protect executive bandwidth, eliminate strategic drift, and align teams around high-leverage outcomes.",
    warningSigns: [
      {
        symptom: "Executive Decision Bottleneck",
        impact: "Every small decision—from client discounts to software choices—is routed to the founder's desk.",
      },
      {
        symptom: "Strategic Priority Whiplash",
        impact: "The organization changes direction every few weeks based on the latest podcast, tweet, or conference.",
      },
      {
        symptom: "Meetings Without Action Items",
        impact: "Leadership spends 15+ hours a week in sync meetings that produce zero documented systems or accountable metrics.",
      },
      {
        symptom: "Zero Succession or Exit Readiness",
        impact: "The business cannot be sold, stepped away from, or expanded because the operating system is locked in one head.",
      },
    ],
    subEngines: [
      {
        name: "Executive Operating Cadence Engine",
        tagline: "Rhythm of Alignment & Execution",
        description:
          "Orchestrates structured 15-minute weekly scorecards, monthly engine health reviews, and quarterly strategic planning with automated preparation briefs.",
        mechanism: "Calendar triggers → automated KPI packet distribution → action item tracking pipeline.",
        impactMetric: "Cuts leadership meeting time by 60% while increasing cross-departmental accountability.",
      },
      {
        name: "Decision Delegation & Authority Engine",
        tagline: "Framework for Autonomous Subordinate Decision-Making",
        description:
          "Installs clear decision boundaries, budget thresholds, and escalation criteria, enabling department heads to make decisions without asking permission.",
        mechanism: "Decision rubric matrix → approval threshold logic → exception reporting.",
        impactMetric: "Frees 15+ hours/week of founder bandwidth previously spent on minor operational approvals.",
      },
      {
        name: "BPE Engine Governance & Audit Engine",
        tagline: "The Operating System for Your Operating System",
        description:
          "Periodically audits all 8 engine families against the 5 dimensions of health, ensuring operational engines never silently decay into chaos.",
        mechanism: "Quarterly 5-dimension diagnostic → health scoring radar → corrective engineering backlog.",
        impactMetric: "Guarantees the organization remains Compass-ready and primed for scale or succession.",
      },
    ],
    dimensions: [
      {
        dimension: "Reliability",
        question: "Does leadership maintain a consistent strategic cadence regardless of short-term emergencies?",
        healthyRead: "Weekly and monthly review cadences are non-negotiable and run on rails.",
        impairedRead: "Strategic meetings are routinely canceled because of daily operational fires.",
      },
      {
        dimension: "Efficiency",
        question: "How quickly can leadership make a high-stakes capital or resource allocation decision?",
        healthyRead: "Hours: decisions are guided by pre-agreed frameworks and telemetry.",
        impairedRead: "Months of agonizing, analysis paralysis, and inconclusive debate.",
      },
      {
        dimension: "Measurability",
        question: "Does every executive know whether the company is winning or losing by 9 AM every Monday?",
        healthyRead: "Real-time North Star metrics distributed to leadership automatically.",
        impairedRead: "Performance is an ambiguous feeling discussed during annual planning retreats.",
      },
      {
        dimension: "Transferability",
        question: "Could the CEO take a 30-day unplugged sabbatical without the business degrading?",
        healthyRead: "The business runs on engines and delegation frameworks; leadership is decoupled from daily triage.",
        impairedRead: "The business would collapse within 5 business days without the founder.",
      },
      {
        dimension: "Adaptability",
        question: "Can leadership pivot strategic focus without creating panic or organizational whiplash?",
        healthyRead: "Clear cascade mechanism communicates the 'why' and updates engine targets smoothly.",
        impairedRead: "Pivots cause confusion, cynicism, and staff resignation.",
      },
    ],
    recommendedOffer: {
      badge: "FULL TRANSFORMATION",
      title: "S³ Transformation — Full Network Overhaul",
      description:
        "The complete re-engineering of all 8 business engine families for operators preparing their company for scale, sale, or succession.",
      href: "/s3",
      cta: "Explore S³ Transformation",
    },
  },
};

export const getEngineFamilyBySlug = (slug: string): EngineFamilyData | undefined => {
  return ENGINE_FAMILIES_DATA[slug.toLowerCase()];
};

export const ALL_ENGINE_FAMILIES = Object.values(ENGINE_FAMILIES_DATA);
