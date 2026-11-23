export interface ClientReview {
  id: string;
  clientName: string;
  clientTitle: string;
  participantRole?: string; // "Executive Sponsor", "Operations Lead", "Frontline Specialist", "Team Member"
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

// Zero mock reviews: only genuine reviews submitted by clients are displayed.
export const INITIAL_REVIEWS: ClientReview[] = [];

const LOCAL_STORAGE_KEY = "gl_client_reviews_v1";

export const getStoredReviews = (): ClientReview[] => {
  if (typeof window === "undefined") return INITIAL_REVIEWS;
  try {
    const raw = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (!raw) return INITIAL_REVIEWS;
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed) && parsed.length > 0) {
      return parsed;
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
