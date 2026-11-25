import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import SectionDark from "@/components/SectionDark";
import Footer from "@/components/Footer";
import MobileStickyBar from "@/components/MobileStickyBar";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Building2,
  Sliders,
  Sparkles,
  Users,
  Calendar,
  AlertCircle,
  BarChart3,
  Cpu,
} from "lucide-react";

const NOTIFICATION_EMAIL = "info@wearegenesislumina.com";
const STORAGE_KEY = "gl_pre_intake_v1";

const PARTICIPANT_ROLES = [
  {
    key: "leadership",
    label: "Executive Leadership / Owner / Sponsor",
    sub: "Setting strategic direction, resource allocation, and organizational governance",
  },
  {
    key: "management",
    label: "Department / Operations Lead / Manager",
    sub: "Directing daily pipelines, managing team bandwidth, and driving departmental throughput",
  },
  {
    key: "frontline",
    label: "Frontline Operator / Team Specialist",
    sub: "Hands-on execution of daily tasks, client/donor interactions, and core workflow operations",
  },
  {
    key: "crossfunctional",
    label: "Cross-Functional Partner / Key Contributor",
    sub: "Collaborating across departmental handoffs or contributing specialized domain expertise",
  },
];

const OPERATING_MODELS = [
  "Non-Profit / Community Service",
  "B2B Services / Professional Advisory",
  "Industrial Logistics / Field Operations",
  "Manufacturing / Physical Operations",
  "SaaS / Digital Product",
  "Real Estate / Asset Management",
  "Healthcare / Clinical Practice",
  "Other",
];

const BOTTLENECK_OPTIONS = [
  {
    key: "manual_data",
    title: "Manual Data & Documentation Drag",
    desc: "Re-entering records across spreadsheets, donor/client tracking, and duplicate weekly status reports.",
  },
  {
    key: "endless_todo",
    title: "Endless Firefighting & Task Triage",
    desc: "Urgent daily execution and emergency requests constantly drowning out strategic priorities and deep work.",
  },
  {
    key: "handoff_friction",
    title: "Internal Coordination & Handoff Friction",
    desc: "Chasing colleagues for task status, unclear cross-functional ownership, and buried inbox/chat threads.",
  },
  {
    key: "repetitive_inquiries",
    title: "Repetitive External Inquiries",
    desc: "Answering the same community, customer, or intake questions over and over manually without an automated pipeline.",
  },
  {
    key: "process_inconsistency",
    title: "Process Inconsistency & Knowledge Silos",
    desc: "Work quality varies depending on who handles it; core operational knowledge lives only in people's heads.",
  },
];

const TOOL_OPTIONS = [
  "Google Workspace (Gmail, Docs, Sheets, Drive)",
  "Microsoft 365 (Outlook, Teams, Excel, SharePoint)",
  "Project Management (Asana, Monday, ClickUp, Notion, Trello)",
  "CRM / Database (Salesforce, HubSpot, Bloomerang, DonorPerfect, Airtable)",
  "AI Tools (ChatGPT, Claude, Microsoft Copilot, Perplexity)",
  "Accounting / ERP (QuickBooks, NetSuite, Xero)",
];

const AI_STATUS_OPTIONS = [
  {
    key: "none",
    title: "Zero Adoption",
    desc: "AI is not currently utilized in any official or daily workflows.",
  },
  {
    key: "adhoc",
    title: "Ad-Hoc / Personal Experimentation",
    desc: "I or a few colleagues use it privately (e.g. drafting copy), but no standardized operational workflow exists.",
  },
  {
    key: "testing",
    title: "Light Testing / Department Pilot",
    desc: "We have tested a few tools or prompts, but nothing is reliably integrated into core business pipelines.",
  },
  {
    key: "systematized",
    title: "Systematized & Governed",
    desc: "AI agents and SOPs are structured into team operations with formal quality boundaries.",
  },
];

const DRAG_HOURS_OPTIONS = [
  {
    key: "1-3",
    label: "1–3 hours/week (Low personal drag)",
    sub: "Only 5–10% of my weekly time is spent on repetitive admin",
  },
  {
    key: "4-8",
    label: "4–8 hours/week (Moderate personal drag)",
    sub: "~15–20% of my weekly capacity is consumed by manual tasks",
  },
  {
    key: "9-15",
    label: "9–15 hours/week (Severe operational drag)",
    sub: "~25–35% of my bandwidth is drained by manual data, updates, or chasing status",
  },
  {
    key: "15+",
    label: "15+ hours/week (Critical constraint)",
    sub: "Over 40% of my work week is lost to administrative overhead; high burnout risk",
  },
];

export default function PreEngagementIntake() {
  // Participant & Organization State
  const [orgName, setOrgName] = useState("");
  const [participantName, setParticipantName] = useState("");
  const [participantTitle, setParticipantTitle] = useState("");
  const [participantRole, setParticipantRole] = useState("frontline");
  const [workEmail, setWorkEmail] = useState("");
  const [operatingModel, setOperatingModel] = useState("");
  const [teamSize, setTeamSize] = useState("");

  // Friction & Workflow State
  const [bottleneck, setBottleneck] = useState("");
  const [selectedTools, setSelectedTools] = useState<string[]>([]);
  const [customTools, setCustomTools] = useState("");
  const [aiStatus, setAiStatus] = useState("");

  // 5-Dimension Scorecard (1 to 5)
  const [reliability, setReliability] = useState<number>(3);
  const [efficiency, setEfficiency] = useState<number>(3);
  const [measurability, setMeasurability] = useState<number>(3);
  const [transferability, setTransferability] = useState<number>(3);
  const [adaptability, setAdaptability] = useState<number>(3);

  // Administrative Drag & Win Definition
  const [dragHours, setDragHours] = useState("");
  const [winDefinition, setWinDefinition] = useState("");

  // Status
  const [submitting, setSubmitting] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const toggleTool = (tool: string) => {
    setSelectedTools((prev) =>
      prev.includes(tool) ? prev.filter((t) => t !== tool) : [...prev, tool]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (!orgName.trim() || !participantName.trim() || !workEmail.trim()) {
      setErrorMsg("Please provide your organization name, your full name, and your work email.");
      return;
    }
    if (!bottleneck) {
      setErrorMsg("Please identify your primary operational bottleneck.");
      return;
    }
    if (!aiStatus) {
      setErrorMsg("Please indicate your current AI adoption level.");
      return;
    }
    if (!dragHours) {
      setErrorMsg("Please estimate your personal weekly administrative drag hours.");
      return;
    }
    if (!winDefinition.trim()) {
      setErrorMsg("Please describe your definition of a win for this session.");
      return;
    }

    setSubmitting(true);

    const payload = {
      formType: "Pre-Engagement Operational Baseline & Cohort Intake",
      client_name: orgName.trim(),
      participant_name: participantName.trim(),
      participant_title: participantTitle.trim() || "Team Member",
      participant_role: participantRole,
      work_email: workEmail.trim(),
      operating_model: operatingModel || "Not specified",
      team_size: teamSize || "Not specified",
      primary_bottleneck: bottleneck,
      tool_stack: [...selectedTools, ...(customTools ? [customTools.trim()] : [])].join("; "),
      ai_adoption_status: aiStatus,
      baseline_scorecard: {
        reliability,
        efficiency,
        measurability,
        transferability,
        adaptability,
      },
      average_baseline_score: (
        (reliability + efficiency + measurability + transferability + adaptability) /
        5
      ).toFixed(1),
      personal_drag_hours: dragHours,
      win_definition: winDefinition.trim(),
      submitted_at: new Date().toISOString(),
    };

    // 1. Send email notification via FormSubmit
    try {
      await fetch(`https://formsubmit.co/ajax/${NOTIFICATION_EMAIL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });
    } catch (err) {
      console.warn("FormSubmit notice", err);
    }

    // 2. Cache locally
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          orgName,
          participantName,
          workEmail,
          submittedAt: new Date().toISOString(),
        })
      );
    } catch (err) {
      console.warn("Local storage write notice", err);
    }

    setSubmitting(false);
    setCompleted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white text-foreground">
      <Navigation />

      {/* Header Banner */}
      <SectionDark className="pt-28 md:pt-36 pb-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-mono text-white/80 mb-6 tracking-wide uppercase">
            <Users className="w-3.5 h-3.5 text-ember" />
            All-Cohort Diagnostic Standard · Leadership &amp; Operations
          </div>

          <h1 className="text-3xl md:text-5xl font-light tracking-tight text-white mb-6 leading-tight">
            Operational Baseline &amp; Engine Intake
          </h1>

          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-8 leading-relaxed">
            Designed for <strong>every member of your engagement cohort</strong>. Every seat in an organization experiences operational friction from a different angle. When leadership, managers, and frontline operators all complete this 3-minute diagnostic, we map the exact gaps between strategy and daily execution.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-white/60">
            <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-md border border-white/10">
              <Clock className="w-3.5 h-3.5 text-emerald-400" /> ~3 Minutes
            </span>
            <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-md border border-white/10">
              <Users className="w-3.5 h-3.5 text-blue-400" /> For Every Team Participant
            </span>
            <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-md border border-white/10">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" /> 100% Confidential to Donovan Green
            </span>
          </div>
        </div>
      </SectionDark>

      {/* Form Container */}
      <section className="px-6 md:px-8 py-16 bg-neutral-50 border-y border-foreground/10">
        <div className="max-w-3xl mx-auto">
          {completed ? (
            <Card className="p-8 md:p-12 border-2 border-emerald-600 bg-white shadow-lg text-center">
              <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <div className="text-xs font-mono text-emerald-700 tracking-wider uppercase mb-2">
                OPERATIONAL PERSPECTIVE LOGGED
              </div>
              <h2 className="text-2xl md:text-3xl font-light text-foreground mb-4">
                Thank You, {participantName}
              </h2>
              <p className="text-foreground/70 max-w-xl mx-auto mb-8 leading-relaxed">
                Your operational feedback from the <strong>{participantTitle || "team"}</strong> vantage point at <strong>{orgName}</strong> has been transmitted directly to Donovan Green.
                We cross-reference every team member's inputs to isolate the root bottlenecks that cost your organization time and energy.
              </p>

              <div className="bg-neutral-50 p-6 rounded-md border border-foreground/10 text-left mb-8 max-w-lg mx-auto">
                <div className="text-xs font-mono text-foreground/50 uppercase mb-3">
                  What Happens Next
                </div>
                <ul className="space-y-2 text-sm text-foreground/80">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2 flex-shrink-0" />
                    <span>Donovan synthesizes your answers alongside the rest of your organization's cohort.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2 flex-shrink-0" />
                    <span>In-session, we bypass surface symptoms and engineer the specific workflow holding your team back.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2 flex-shrink-0" />
                    <span>Have other teammates in this engagement? Make sure they complete this 3-minute intake too!</span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild size="lg" className="bg-foreground text-white hover:bg-foreground/90 gap-2">
                  <Link to="/engines">
                    Explore Engine Library
                    <ArrowRight className="w-4 h-4 text-ember" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/case-studies">View Verified Case Studies</Link>
                </Button>
              </div>
            </Card>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-10">
              {errorMsg && (
                <div className="p-4 bg-red-50 border border-red-200 text-red-700 rounded-md flex items-center gap-3 text-sm">
                  <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              {/* SECTION 1: PARTICIPANT IDENTITY & ROLE */}
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-ember font-semibold tracking-wider uppercase mb-2">
                  <span>01 // Participant Identity &amp; Role in the Organization</span>
                </div>
                <p className="text-sm text-foreground/60 mb-6">
                  Please identify yourself and the seat you hold. This ensures we interpret your answers in the right operational context.
                </p>

                <Card className="p-6 md:p-8 space-y-6 border border-foreground/15 bg-white">
                  <div>
                    <label className="block text-sm font-medium mb-1.5 text-foreground">
                      Organization / Company Name <span className="text-red-500">*</span>
                    </label>
                    <Input
                      placeholder="e.g. CAFE, Propane Service Technologies, or Optimist Advisory"
                      value={orgName}
                      onChange={(e) => setOrgName(e.target.value)}
                      required
                      className="bg-neutral-50"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1.5 text-foreground">
                        Your Full Name <span className="text-red-500">*</span>
                      </label>
                      <Input
                        placeholder="e.g. Jane Doe"
                        value={participantName}
                        onChange={(e) => setParticipantName(e.target.value)}
                        required
                        className="bg-neutral-50"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1.5 text-foreground">
                        Your Job Title / Position <span className="text-red-500">*</span>
                      </label>
                      <Input
                        placeholder="e.g. Intake Specialist, Dispatch Lead, Executive Director"
                        value={participantTitle}
                        onChange={(e) => setParticipantTitle(e.target.value)}
                        required
                        className="bg-neutral-50"
                      />
                    </div>
                  </div>

                  {/* Role in Engagement / Organization */}
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-1">
                      Your Primary Seat in This Engagement <span className="text-red-500">*</span>
                    </label>
                    <p className="text-xs text-foreground/60 mb-3">
                      Select the category that best describes your vantage point in the organization:
                    </p>
                    <div className="grid md:grid-cols-2 gap-3">
                      {PARTICIPANT_ROLES.map((role) => {
                        const isSelected = participantRole === role.key;
                        return (
                          <button
                            type="button"
                            key={role.key}
                            onClick={() => setParticipantRole(role.key)}
                            className={`p-3.5 rounded-md border text-left transition-all ${
                              isSelected
                                ? "border-foreground bg-foreground/5 ring-1 ring-foreground"
                                : "border-foreground/15 hover:border-foreground/40 bg-white"
                            }`}
                          >
                            <div className="flex items-start gap-2.5">
                              <span
                                className={`w-3.5 h-3.5 mt-0.5 rounded-full border flex-shrink-0 flex items-center justify-center ${
                                  isSelected ? "border-foreground bg-foreground" : "border-foreground/40"
                                }`}
                              >
                                {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                              </span>
                              <div>
                                <div className="text-xs font-semibold text-foreground">{role.label}</div>
                                <div className="text-[11px] text-foreground/60 mt-0.5">{role.sub}</div>
                              </div>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1.5 text-foreground">
                      Your Work Email <span className="text-red-500">*</span>
                    </label>
                    <Input
                      type="email"
                      placeholder="yourname@organization.com"
                      value={workEmail}
                      onChange={(e) => setWorkEmail(e.target.value)}
                      required
                      className="bg-neutral-50"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1.5 text-foreground">
                        Primary Operating Model
                      </label>
                      <select
                        value={operatingModel}
                        onChange={(e) => setOperatingModel(e.target.value)}
                        className="w-full px-3 py-2 border border-foreground/15 rounded-md text-sm bg-neutral-50 text-foreground"
                      >
                        <option value="">Select Operating Model...</option>
                        {OPERATING_MODELS.map((model) => (
                          <option key={model} value={model}>
                            {model}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1.5 text-foreground">
                        Total Team Size (Entire Organization)
                      </label>
                      <select
                        value={teamSize}
                        onChange={(e) => setTeamSize(e.target.value)}
                        className="w-full px-3 py-2 border border-foreground/15 rounded-md text-sm bg-neutral-50 text-foreground"
                      >
                        <option value="">Select Team Size...</option>
                        <option value="1-5">1–5 (Solopreneur / Core Nucleus)</option>
                        <option value="6-15">6–15 (Emerging Team)</option>
                        <option value="16-50">16–50 (Mid-Market Operation)</option>
                        <option value="50+">50+ (Scaled Enterprise)</option>
                      </select>
                    </div>
                  </div>
                </Card>
              </div>

              {/* SECTION 2: WORKFLOW FRICTION & BOTTLENECKS */}
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-ember font-semibold tracking-wider uppercase mb-2">
                  <span>02 // Daily Workflow Friction &amp; Bottlenecks</span>
                </div>
                <p className="text-sm text-foreground/60 mb-6">
                  What slows you or your immediate team down on a weekly basis? Be completely frank.
                </p>

                <Card className="p-6 md:p-8 space-y-6 border border-foreground/15 bg-white">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-1">
                      The Recurring Primary Bottleneck (In Your Daily Work) <span className="text-red-500">*</span>
                    </label>
                    <p className="text-xs text-foreground/60 mb-3">
                      When you look at your own weekly tasks and team execution, which friction point consumes the most unrecoverable time?
                    </p>
                    <div className="space-y-3">
                      {BOTTLENECK_OPTIONS.map((item) => {
                        const isSelected = bottleneck === item.key;
                        return (
                          <button
                            type="button"
                            key={item.key}
                            onClick={() => setBottleneck(item.key)}
                            className={`w-full text-left p-4 rounded-md border transition-all ${
                              isSelected
                                ? "border-foreground bg-foreground/5 ring-1 ring-foreground"
                                : "border-foreground/15 hover:border-foreground/40 bg-white"
                            }`}
                          >
                            <div className="flex items-start gap-3">
                              <span
                                className={`w-4 h-4 mt-0.5 rounded-full border flex-shrink-0 flex items-center justify-center ${
                                  isSelected ? "border-foreground bg-foreground" : "border-foreground/40"
                                }`}
                              >
                                {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                              </span>
                              <div>
                                <div className="text-sm font-medium text-foreground">{item.title}</div>
                                <div className="text-xs text-foreground/60 mt-0.5">{item.desc}</div>
                              </div>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Tool Stack */}
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-1">
                      Your Daily Tool Stack
                    </label>
                    <p className="text-xs text-foreground/60 mb-3">
                      Which digital tools do you personally touch in your daily work? (Check all that apply)
                    </p>
                    <div className="grid md:grid-cols-2 gap-2.5">
                      {TOOL_OPTIONS.map((tool) => {
                        const checked = selectedTools.includes(tool);
                        return (
                          <label
                            key={tool}
                            className={`flex items-start gap-2.5 p-3 rounded-md border text-xs cursor-pointer transition-all ${
                              checked
                                ? "border-foreground bg-neutral-100 font-medium text-foreground"
                                : "border-foreground/15 bg-white text-foreground/70 hover:border-foreground/40"
                            }`}
                          >
                            <input
                              type="checkbox"
                              checked={checked}
                              onChange={() => toggleTool(tool)}
                              className="mt-0.5 rounded text-foreground focus:ring-foreground"
                            />
                            <span>{tool}</span>
                          </label>
                        );
                      })}
                    </div>
                    <div className="mt-3">
                      <Input
                        placeholder="Other custom tools or databases you touch (e.g. legacy ERP, specialized dispatch, custom CRM)..."
                        value={customTools}
                        onChange={(e) => setCustomTools(e.target.value)}
                        className="text-xs bg-neutral-50"
                      />
                    </div>
                  </div>

                  {/* AI & Automation Reality */}
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-1">
                      Your AI &amp; Automation Reality <span className="text-red-500">*</span>
                    </label>
                    <p className="text-xs text-foreground/60 mb-3">
                      How do you and your immediate department currently utilize AI tools in daily execution?
                    </p>
                    <div className="space-y-2.5">
                      {AI_STATUS_OPTIONS.map((opt) => {
                        const isSelected = aiStatus === opt.key;
                        return (
                          <button
                            type="button"
                            key={opt.key}
                            onClick={() => setAiStatus(opt.key)}
                            className={`w-full text-left p-3.5 rounded-md border text-xs transition-all ${
                              isSelected
                                ? "border-foreground bg-foreground/5 ring-1 ring-foreground"
                                : "border-foreground/15 hover:border-foreground/40 bg-white"
                            }`}
                          >
                            <div className="flex items-start gap-2.5">
                              <span
                                className={`w-3.5 h-3.5 mt-0.5 rounded-full border flex-shrink-0 flex items-center justify-center ${
                                  isSelected ? "border-foreground bg-foreground" : "border-foreground/40"
                                }`}
                              >
                                {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                              </span>
                              <div>
                                <span className="font-semibold text-foreground">{opt.title}:</span>{" "}
                                <span className="text-foreground/70">{opt.desc}</span>
                              </div>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </Card>
              </div>

              {/* SECTION 3: 5-DIMENSION SCORECARD FROM YOUR VANTAGE POINT */}
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-ember font-semibold tracking-wider uppercase mb-2">
                  <span>03 // The 5-Dimension Engine Scorecard (From Your Vantage Point)</span>
                </div>
                <p className="text-sm text-foreground/60 mb-6">
                  Rate your organization’s operational health from where <strong>you sit</strong> (1 = Severely Impaired / Reactive, 5 = Engineered / Predictable).
                  Variance between leadership and frontline scores is one of the highest-leverage discoveries we make.
                </p>

                <Card className="p-6 md:p-8 space-y-6 border border-foreground/15 bg-white">
                  {[
                    {
                      label: "Reliability",
                      sub: "Do your daily workflows run consistently and error-free without emergency firefighting?",
                      val: reliability,
                      setVal: setReliability,
                    },
                    {
                      label: "Efficiency",
                      sub: "How much of your own week is focused on high-value work vs. manual administrative friction?",
                      val: efficiency,
                      setVal: setEfficiency,
                    },
                    {
                      label: "Measurability",
                      sub: "Does your team possess a clear, real-time scoreboard showing daily capacity and status?",
                      val: measurability,
                      setVal: setMeasurability,
                    },
                    {
                      label: "Transferability",
                      sub: "Could a new teammate step into your seat tomorrow and execute smoothly using documented SOPs?",
                      val: transferability,
                      setVal: setTransferability,
                    },
                    {
                      label: "Adaptability",
                      sub: "Can your organization absorb modern AI tools and workflow changes without friction or confusion?",
                      val: adaptability,
                      setVal: setAdaptability,
                    },
                  ].map((dim) => (
                    <div key={dim.label} className="border-b border-foreground/10 pb-5 last:border-0 last:pb-0">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-semibold text-foreground">{dim.label}</span>
                        <span className="text-xs font-mono text-foreground/60">
                          Your Score: <strong className="text-foreground font-bold">{dim.val}</strong> / 5
                        </span>
                      </div>
                      <p className="text-xs text-foreground/60 mb-3">{dim.sub}</p>
                      <div className="grid grid-cols-5 gap-2">
                        {[1, 2, 3, 4, 5].map((num) => {
                          const active = dim.val === num;
                          return (
                            <button
                              type="button"
                              key={num}
                              onClick={() => dim.setVal(num)}
                              className={`py-2 text-xs font-mono font-semibold rounded border transition-all ${
                                active
                                  ? "bg-foreground text-white border-foreground shadow-sm"
                                  : "bg-neutral-50 text-foreground/70 border-foreground/15 hover:border-foreground/40"
                              }`}
                            >
                              {num}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </Card>
              </div>

              {/* SECTION 4: PERSONAL ADMINISTRATIVE DRAG & WIN DEFINITION */}
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-ember font-semibold tracking-wider uppercase mb-2">
                  <span>04 // Personal Administrative Drag &amp; Session Target</span>
                </div>
                <p className="text-sm text-foreground/60 mb-6">
                  Quantifying your personal capacity drain and what would make this engagement an undeniable success for you.
                </p>

                <Card className="p-6 md:p-8 space-y-6 border border-foreground/15 bg-white">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-1">
                      Your Personal Administrative Drag <span className="text-red-500">*</span>
                    </label>
                    <p className="text-xs text-foreground/60 mb-3">
                      Roughly how many hours per week do <strong>you personally</strong> spend on manual administrative tasks, copy-pasting records, or chasing colleagues for updates?
                    </p>
                    <div className="space-y-2.5">
                      {DRAG_HOURS_OPTIONS.map((opt) => {
                        const isSelected = dragHours === opt.key;
                        return (
                          <button
                            type="button"
                            key={opt.key}
                            onClick={() => setDragHours(opt.key)}
                            className={`w-full text-left p-3.5 rounded-md border text-xs transition-all ${
                              isSelected
                                ? "border-foreground bg-foreground/5 ring-1 ring-foreground"
                                : "border-foreground/15 hover:border-foreground/40 bg-white"
                            }`}
                          >
                            <div className="flex items-start gap-2.5">
                              <span
                                className={`w-3.5 h-3.5 mt-0.5 rounded-full border flex-shrink-0 flex items-center justify-center ${
                                  isSelected ? "border-foreground bg-foreground" : "border-foreground/40"
                                }`}
                              >
                                {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                              </span>
                              <div>
                                <span className="font-semibold text-foreground">{opt.label}</span>
                                <div className="text-foreground/60 mt-0.5">{opt.sub}</div>
                              </div>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-1">
                      Your Definition of a Home Run <span className="text-red-500">*</span>
                    </label>
                    <p className="text-xs text-foreground/60 mb-2">
                      From your specific seat in the organization, what is the single tangible workflow fix or breakthrough that would make this working session an unconditional home run for you?
                    </p>
                    <textarea
                      rows={4}
                      value={winDefinition}
                      onChange={(e) => setWinDefinition(e.target.value)}
                      placeholder="e.g. If we could eliminate our 4-step manual client onboarding spreadsheet so I don't have to spend every Monday morning re-typing records..."
                      required
                      className="w-full p-3 rounded-md border border-foreground/15 text-sm bg-neutral-50 text-foreground focus:ring-1 focus:ring-foreground"
                    />
                  </div>
                </Card>
              </div>

              {/* Submit CTA */}
              <div className="pt-4">
                <Button
                  type="submit"
                  size="lg"
                  disabled={submitting}
                  className="w-full text-base py-6 bg-foreground text-white hover:bg-foreground/90 gap-2 font-medium"
                >
                  {submitting ? "Transmitting Operational Feedback..." : "Submit My Operational Baseline"}
                  <ArrowRight className="w-5 h-5 text-ember" />
                </Button>
                <p className="text-center text-xs font-mono text-foreground/50 mt-3">
                  Delivered directly to Donovan Green · Confidentiality guaranteed under BPE Standard.
                </p>
              </div>
            </form>
          )}
        </div>
      </section>

      <Footer />
      <MobileStickyBar />
    </div>
  );
}
