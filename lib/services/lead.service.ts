export interface LeadData {
  hasCompany?: boolean
  hasService?: boolean
  messageLength?: number
  timeOnSite?: number
  pageViews?: number
  formSubmits?: number
  quoteRequests?: number
  contactClicks?: number
}

export class LeadScoringService {
  static calculateScore(data: LeadData): number {
    let score = 0

    // Company information (+15 points)
    if (data.hasCompany) score += 15

    // Service specified (+10 points)
    if (data.hasService) score += 10

    // Message quality (0-15 points)
    if (data.messageLength) {
      if (data.messageLength > 200) score += 15
      else if (data.messageLength > 100) score += 10
      else if (data.messageLength > 50) score += 5
    }

    // Time on site (0-10 points)
    if (data.timeOnSite) {
      const minutes = data.timeOnSite / 60
      score += Math.min(Math.floor(minutes * 2), 10)
    }

    // Page views (2 points each, max 10)
    if (data.pageViews) {
      score += Math.min(data.pageViews * 2, 10)
    }

    // Form submissions (20 points each)
    if (data.formSubmits) {
      score += data.formSubmits * 20
    }

    // Quote requests (30 points each)
    if (data.quoteRequests) {
      score += data.quoteRequests * 30
    }

    // Contact clicks (25 points each)
    if (data.contactClicks) {
      score += data.contactClicks * 25
    }

    return Math.min(score, 100) // Cap at 100
  }

  static getLeadQuality(score: number): "hot" | "warm" | "cold" {
    if (score >= 70) return "hot"
    if (score >= 40) return "warm"
    return "cold"
  }

  static getPriority(quality: "hot" | "warm" | "cold"): number {
    switch (quality) {
      case "hot":
        return 1
      case "warm":
        return 2
      case "cold":
        return 3
    }
  }

  static getFollowUpTime(quality: "hot" | "warm" | "cold"): string {
    switch (quality) {
      case "hot":
        return "1 hour"
      case "warm":
        return "24 hours"
      case "cold":
        return "48 hours"
    }
  }

  static getRecommendedAction(quality: "hot" | "warm" | "cold"): string {
    switch (quality) {
      case "hot":
        return "Immediate phone call or WhatsApp follow-up"
      case "warm":
        return "Send personalized email within 24 hours"
      case "cold":
        return "Add to nurture email sequence"
    }
  }
}
