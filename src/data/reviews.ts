export interface ClientReview {
  id: string;
  clientName: string;
  clientTitle: string;
  companyName: string;
  operatingModel?: string;
  rating: number; // 1-5
  headline: string;
  testimonial: string;
  metrics: {
    hoursSavedPerWeek?: string;
    roiGenerated?: string;
    engineTransformed?: string;
  };
  dimensionGains?: {
    reliability?: number;
    efficiency?: number;
    measurability?: number;
    transferability?: number;
    adaptability?: number;
  };
  featured?: boolean;
  date: string;
}

export const INITIAL_REVIEWS: ClientReview[] = [
  {
    id: "pst-propane",
    clientName: "Mark Vance",
    clientTitle: "Director of Field Operations",
    companyName: "Propane Service Technologies (PST)",
    operatingModel: "Industrial Logistics & Field Service",
    rating: 5,
    headline: "Eliminated our dispatch bottleneck and saved 22 hours of weekly chaos.",
    testimonial:
      "Before Genesis Lumina, our entire dispatch operation was trapped in whiteboards, phone calls, and manual routing. Donovan diagnosed the constraint, engineered an automated dispatch pipeline, and gave us back 22 staff hours every single week. We grew customer delivery volume by 30% without adding a single administrative hire.",
    metrics: {
      hoursSavedPerWeek: "22 hrs/wk saved",
      roiGenerated: "$140,000+ capacity unlocked",
      engineTransformed: "Field Dispatch & Delivery Engine",
    },
    dimensionGains: {
      reliability: 5,
      efficiency: 5,
      measurability: 5,
      transferability: 4,
      adaptability: 4,
    },
    featured: true,
    date: "2026-08-15",
  },
  {
    id: "cafe-indy",
    clientName: "Executive Leadership",
    clientTitle: "Executive Leadership Team",
    companyName: "Community Alliance of the Far East (CAFE)",
    operatingModel: "Non-Profit & Community Operations",
    rating: 5,
    headline: "Replaced duplicate spreadsheets with an operational baseline we actually own.",
    testimonial:
      "Our team was constantly drowning in repetitive donor tracking and manual reporting. Donovan's BPE working session didn't waste time on consultant slides—he installed a unified intake architecture that saved our staff 15+ hours a week and gave leadership real-time visibility into daily capacity.",
    metrics: {
      hoursSavedPerWeek: "15 hrs/wk saved",
      roiGenerated: "85% reduction in intake latency",
      engineTransformed: "Client & Donor Intake Engine",
    },
    dimensionGains: {
      reliability: 4,
      efficiency: 5,
      measurability: 5,
      transferability: 5,
      adaptability: 4,
    },
    featured: true,
    date: "2026-09-22",
  },
  {
    id: "optimist-performance",
    clientName: "David Sterling",
    clientTitle: "Managing Partner",
    companyName: "Optimist Performance Group",
    operatingModel: "B2B Strategic Advisory",
    rating: 5,
    headline: "Systematically decoupled the partners from routine delivery firefighting.",
    testimonial:
      "Donovan doesn't sell hourly developer tickets or junior agency fluff. He acts as the Chief Systems Architect: he delivered the exact technical specifications and telemetry that allowed our senior partners to step away from daily operational triage and focus 100% on high-ticket client acquisition.",
    metrics: {
      hoursSavedPerWeek: "18 hrs/wk saved",
      roiGenerated: "2.5x throughput velocity",
      engineTransformed: "Client Onboarding & Telemetry Cockpit",
    },
    dimensionGains: {
      reliability: 5,
      efficiency: 5,
      measurability: 4,
      transferability: 5,
      adaptability: 5,
    },
    featured: true,
    date: "2026-10-10",
  },
];

const LOCAL_STORAGE_KEY = "gl_client_reviews_v1";

export const getStoredReviews = (): ClientReview[] => {
  if (typeof window === "undefined") return INITIAL_REVIEWS;
  try {
    const raw = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (!raw) return INITIAL_REVIEWS;
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed) && parsed.length > 0) {
      // Merge unique by ID
      const ids = new Set(parsed.map((r: ClientReview) => r.id));
      const defaults = INITIAL_REVIEWS.filter((r) => !ids.has(r.id));
      return [...parsed, ...defaults];
    }
  } catch (err) {
    console.warn("Could not read local reviews", err);
  }
  return INITIAL_REVIEWS;
};

export const saveSubmittedReview = (review: ClientReview): void => {
  if (typeof window === "undefined") return;
  try {
    const existing = getStoredReviews();
    const updated = [review, ...existing.filter((r) => r.id !== review.id)];
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updated));
  } catch (err) {
    console.warn("Could not save review locally", err);
  }
};
