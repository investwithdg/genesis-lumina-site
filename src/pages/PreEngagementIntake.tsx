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
  Layers,
  Calendar,
  AlertCircle,
  BarChart3,
  Cpu,
} from "lucide-react";

const NOTIFICATION_EMAIL = "info@wearegenesislumina.com";
const SUPABASE_URL = "https://bqsfdgfstkzbjxdotquo.supabase.co";
const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJxc2ZkZ2ZzdGt6Ymp4ZG90cXVvIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc4MTk3NTMyMiwiZXhwIjoyMDk3NTUxMzIyfQ.vRXrYuAvYu0iuECLR54Y71BqigYpJnRauLOLIeMt-Nw";
const STORAGE_KEY = "gl_pre_intake_v1";

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
    desc: "Urgent daily execution and emergency requests constantly drowning out strategic leadership priorities.",
  },
  {
    key: "handoff_friction",
    title: "Internal Coordination & Handoff Friction",
    desc: "Chasing staff for deliverables, unclear cross-functional ownership, and buried inbox threads.",
  },
  {
    key: "repetitive_inquiries",
    title: "Repetitive External Inquiries",
    desc: "Answering the same community, customer, or intake questions over and over manually without an automated pipeline.",
  },
  {
    key: "process_inconsistency",
    title: "Process Inconsistency & Knowledge Silos",
    desc: "Work quality varies wildly depending on which individual handles it; key institutional knowledge lives only in people's heads.",
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
    title: "Ad-Hoc / Personal Use",
    desc: "Individuals experiment privately (e.g. drafting copy), but no standardized operational workflow exists.",
  },
  {
    key: "testing",
    title: "Light Testing / Pilot",
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
    label: "1–3 hours/week per person",
    sub: "Low friction (~5–10% of weekly capacity lost to admin)",
  },
  {
    key: "4-8",
    label: "4–8 hours/week per person",
    sub: "Moderate drag (~15–20% of operational capacity consumed)",
  },
  {
    key: "9-15",
    label: "9–15 hours/week per person",
    sub: "Severe drag (~25–35% of capacity drained by manual tasks)",
  },
  {
    key: "15+",
    label: "15+ hours/week per person",
    sub: "Critical bottleneck (>40% capacity lost; severe burnout risk)",
  },
];

export default function PreEngagementIntake() {
  // Form State
  const [orgName, setOrgName] = useState("");
  const [leaderName, setLeaderName] = useState("");
  const [leaderTitle, setLeaderTitle] = useState("");
  const [workEmail, setWorkEmail] = useState("");
  const [operatingModel, setOperatingModel] = useState("");
  const [teamSize, setTeamSize] = useState("");

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

  const [dragHours, setDragHours] = useState("");
  const [winDefinition, setWinDefinition] = useState("");

  // Submission Status
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

    if (!orgName.trim() || !leaderName.trim() || !workEmail.trim()) {
      setErrorMsg("Please provide your organization name, your name, and work email.");
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
      setErrorMsg("Please estimate the weekly administrative drag.");
      return;
    }
    if (!winDefinition.trim()) {
      setErrorMsg("Please describe your definition of an engagement win.");
      return;
    }

    setSubmitting(true);

    const payload = {
      formType: "Pre-Engagement Operational Baseline & Engine Intake",
      client_name: orgName.trim(),
      leader_name: leaderName.trim(),
      leader_title: leaderTitle.trim() || "Not specified",
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
      estimated_drag_hours: dragHours,
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

    // 2. Synchronize to Supabase client_intakes table
    try {
      await fetch(`${SUPABASE_URL}/rest/v1/client_intakes`, {
        method: "POST",
        headers: {
          apikey: SUPABASE_KEY,
          Authorization: `Bearer ${SUPABASE_KEY}`,
          "Content-Type": "application/json",
          Prefer: "return=minimal",
        },
        body: JSON.stringify({
          client_name: orgName.trim(),
          leader_name: `${leaderName.trim()} (${leaderTitle.trim() || "Executive"})`,
          team_size: teamSize || "Not specified",
          primary_bottleneck: bottleneck,
          ai_status: aiStatus,
          drag_hours: dragHours,
          win_definition: winDefinition.trim(),
          raw_payload: payload,
          created_at: new Date().toISOString(),
        }),
      });
    } catch (err) {
      console.warn("Supabase intake sync notice", err);
    }

    // 3. Cache locally
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          orgName,
          leaderName,
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
            <Sliders className="w-3.5 h-3.5 text-ember" />
            Operational Diagnostic · Pre-Engagement Standard
          </div>

          <h1 className="text-3xl md:text-5xl font-light tracking-tight text-white mb-6 leading-tight">
            Operational Baseline &amp; Engine Intake
          </h1>

          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-8 leading-relaxed">
            Please complete this 3-minute diagnostic before our working session. Your responses allow us
            to bypass generic introductory chatter and focus 100% of our session on high-leverage engine
            breakthroughs.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-white/60">
            <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-md border border-white/10">
              <Clock className="w-3.5 h-3.5 text-emerald-400" /> ~3 Minutes
            </span>
            <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-md border border-white/10">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-400" /> Executive Confidentiality Standard
            </span>
            <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-md border border-white/10">
              <BarChart3 className="w-3.5 h-3.5 text-amber-400" /> In-Session Baseline Telemetry
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
                DIAGNOSTIC TRANSMITTED
              </div>
              <h2 className="text-2xl md:text-3xl font-light text-foreground mb-4">
                Operational Baseline Logged
              </h2>
              <p className="text-foreground/70 max-w-xl mx-auto mb-8 leading-relaxed">
                Thank you, <strong>{leaderName}</strong>. Your institutional context, friction audit, and
                5-dimension baseline for <strong>{orgName}</strong> have been dispatched directly to Donovan
                Green. We will use this exact telemetry to isolate your bottleneck in-session.
              </p>

              <div className="bg-neutral-50 p-6 rounded-md border border-foreground/10 text-left mb-8 max-w-lg mx-auto">
                <div className="text-xs font-mono text-foreground/50 uppercase mb-3">
                  Engagement Next Steps
                </div>
                <ul className="space-y-2 text-sm text-foreground/80">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2 flex-shrink-0" />
                    <span>Donovan will review your baseline metrics prior to the calendar appointment.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2 flex-shrink-0" />
                    <span>We will skip boilerplate intros and pinpoint your #1 operational constraint in the first 10 minutes.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2 flex-shrink-0" />
                    <span>You will leave with a precise Architecture Blueprint and ROI path.</span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild size="lg" className="bg-foreground text-white hover:bg-foreground/90 gap-2">
                  <a
                    href="https://calendar.app.google/wPxj3Ct5uukBsjuc6"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Calendar className="w-4 h-4 text-emerald-400" />
                    View / Confirm Strategy Calendar
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/engines">Explore Engine Library</Link>
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

              {/* SECTION 1: INSTITUTIONAL CONTEXT */}
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-ember font-semibold tracking-wider uppercase mb-2">
                  <span>01 // Institutional Context (The Chassis)</span>
                </div>
                <p className="text-sm text-foreground/60 mb-6">
                  Basic organizational telemetry so we understand your scale, operating model, and leadership structure.
                </p>

                <Card className="p-6 md:p-8 space-y-6 border border-foreground/15 bg-white">
                  <div>
                    <label className="block text-sm font-medium mb-1.5 text-foreground">
                      Organization / Company Name <span className="text-red-500">*</span>
                    </label>
                    <Input
                      placeholder="e.g. Acme Logistics, CAFE, or Optimist Advisory"
                      value={orgName}
                      onChange={(e) => setOrgName(e.target.value)}
                      required
                      className="bg-neutral-50"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1.5 text-foreground">
                        Leader Full Name <span className="text-red-500">*</span>
                      </label>
                      <Input
                        placeholder="e.g. Donovan Green"
                        value={leaderName}
                        onChange={(e) => setLeaderName(e.target.value)}
                        required
                        className="bg-neutral-50"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1.5 text-foreground">
                        Executive Title / Role
                      </label>
                      <Input
                        placeholder="e.g. Managing Director / Founder"
                        value={leaderTitle}
                        onChange={(e) => setLeaderTitle(e.target.value)}
                        className="bg-neutral-50"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1.5 text-foreground">
                      Work Email <span className="text-red-500">*</span>
                    </label>
                    <Input
                      type="email"
                      placeholder="executive@organization.com"
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
                        Core Team Size
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

              {/* SECTION 2: TIME & FRICTION AUDIT */}
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-ember font-semibold tracking-wider uppercase mb-2">
                  <span>02 // The Time &amp; Friction Audit (Where Horsepower Bleeds)</span>
                </div>
                <p className="text-sm text-foreground/60 mb-6">
                  Per Business Performance Engineering doctrine, throughput is dictated by your single weakest bottleneck.
                </p>

                <Card className="p-6 md:p-8 space-y-6 border border-foreground/15 bg-white">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-1">
                      The Recurring Primary Bottleneck <span className="text-red-500">*</span>
                    </label>
                    <p className="text-xs text-foreground/60 mb-3">
                      When looking at your weekly operations, which friction point consumes the most unrecoverable time?
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

                  {/* Tool Stack Inventory */}
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-1">
                      Tool Stack Inventory
                    </label>
                    <p className="text-xs text-foreground/60 mb-3">
                      Which digital systems does your organization rely on every day? (Check all that apply)
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
                        placeholder="Other custom tools or proprietary software (e.g., custom dispatch, legacy database)..."
                        value={customTools}
                        onChange={(e) => setCustomTools(e.target.value)}
                        className="text-xs bg-neutral-50"
                      />
                    </div>
                  </div>

                  {/* AI & Automation Reality */}
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-1">
                      Current AI &amp; Automation Reality <span className="text-red-500">*</span>
                    </label>
                    <p className="text-xs text-foreground/60 mb-3">
                      How does your team currently utilize generative AI or automation platforms?
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

              {/* SECTION 3: THE 5-DIMENSION ENGINE SCORECARD */}
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-ember font-semibold tracking-wider uppercase mb-2">
                  <span>03 // The 5-Dimension Engine Scorecard (Baseline Metrics)</span>
                </div>
                <p className="text-sm text-foreground/60 mb-6">
                  Rate your organization’s operational health from <strong>1</strong> (Severely Impaired /
                  Reactive) to <strong>5</strong> (Engineered / Predictable).
                </p>

                <Card className="p-6 md:p-8 space-y-6 border border-foreground/15 bg-white">
                  {[
                    {
                      label: "Reliability",
                      sub: "Do daily workflows run consistently and error-free without emergency firefighting?",
                      val: reliability,
                      setVal: setReliability,
                    },
                    {
                      label: "Efficiency",
                      sub: "How much of staff time is focused on high-value mission work vs. manual administrative friction?",
                      val: efficiency,
                      setVal: setEfficiency,
                    },
                    {
                      label: "Measurability",
                      sub: "Does leadership possess real-time cockpit visibility into daily capacity, throughput, and output?",
                      val: measurability,
                      setVal: setMeasurability,
                    },
                    {
                      label: "Transferability",
                      sub: "Could a new operator step into a core role tomorrow and execute cleanly from documented systems?",
                      val: transferability,
                      setVal: setTransferability,
                    },
                    {
                      label: "Adaptability",
                      sub: "Can your organization absorb modern AI tools and changes without chaos or cultural rejection?",
                      val: adaptability,
                      setVal: setAdaptability,
                    },
                  ].map((dim) => (
                    <div key={dim.label} className="border-b border-foreground/10 pb-5 last:border-0 last:pb-0">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-semibold text-foreground">{dim.label}</span>
                        <span className="text-xs font-mono text-foreground/60">
                          Score: <strong className="text-foreground font-bold">{dim.val}</strong> / 5
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

              {/* SECTION 4: TANGIBLE ROI & ENGAGEMENT WIN */}
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-ember font-semibold tracking-wider uppercase mb-2">
                  <span>04 // Tangible ROI &amp; Session Outcome</span>
                </div>
                <p className="text-sm text-foreground/60 mb-6">
                  Establishing the economic and operational stakes before we step into the room.
                </p>

                <Card className="p-6 md:p-8 space-y-6 border border-foreground/15 bg-white">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-1">
                      Estimated Administrative Drag <span className="text-red-500">*</span>
                    </label>
                    <p className="text-xs text-foreground/60 mb-3">
                      Roughly how many hours per week does an average staff member spend on repetitive administrative tasks?
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
                      The Definition of a Home Run <span className="text-red-500">*</span>
                    </label>
                    <p className="text-xs text-foreground/60 mb-2">
                      By the end of our working session, what is the single tangible deliverable or operational breakthrough that would make this an unconditional home run?
                    </p>
                    <textarea
                      rows={4}
                      value={winDefinition}
                      onChange={(e) => setWinDefinition(e.target.value)}
                      placeholder="e.g. A clear automated system to triage client intake requests and eliminate duplicate data entry so our team saves 15+ hours a week..."
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
                  {submitting ? "Transmitting Operational Baseline..." : "Transmit Baseline Diagnostic"}
                  <ArrowRight className="w-5 h-5 text-ember" />
                </Button>
                <p className="text-center text-xs font-mono text-foreground/50 mt-3">
                  Transmits securely to Donovan Green · Confidentiality guaranteed under BPE Standard.
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
