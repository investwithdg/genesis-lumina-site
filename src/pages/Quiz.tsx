import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import BookCallButton from "@/components/BookCallButton";
import { Compass, ArrowRight, ArrowLeft, Brain, Network, TrendingUp } from "lucide-react";

type Answer = "a" | "b" | "c" | null;
type Answers = [Answer, Answer, Answer, Answer, Answer];

const Quiz = () => {
  const [started, setStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Answers>([null, null, null, null, null]);
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      q: "How would you describe your current understanding of AI?",
      options: [
        { label: "a", text: "I've heard the buzzwords but don't really understand how AI works" },
        { label: "b", text: "I understand AI basics but haven't implemented anything yet" },
        { label: "c", text: "We have some AI tools running but they're not integrated" }
      ]
    },
    {
      q: "What's your biggest operational challenge right now?",
      options: [
        { label: "a", text: "I don't know where to start with AI or what's even possible" },
        { label: "b", text: "Too many manual tasks eating up my team's time" },
        { label: "c", text: "Our growth is limited by our current operational capacity" }
      ]
    },
    {
      q: "How do you currently handle repetitive business tasks?",
      options: [
        { label: "a", text: "Mostly manual - we haven't explored automation yet" },
        { label: "b", text: "Some basic automation but nothing connected or sophisticated" },
        { label: "c", text: "We have automation but it's fragmented and hard to scale" }
      ]
    },
    {
      q: "What's your primary business goal for the next 12 months?",
      options: [
        { label: "a", text: "Learn enough about AI to make informed decisions" },
        { label: "b", text: "Eliminate manual work and free up my team's time" },
        { label: "c", text: "Scale revenue without scaling headcount proportionally" }
      ]
    },
    {
      q: "If you had to pick one area that needs the most help:",
      options: [
        { label: "a", text: "Understanding AI strategy and what's right for my business" },
        { label: "b", text: "Implementing practical automations that actually work" },
        { label: "c", text: "Building enterprise systems that support long-term growth" }
      ]
    }
  ];

  const waypoints = [
    {
      icon: Brain,
      name: "AI Literacy",
      tagline: "Build your foundation",
      description: "Learn what AI can do for your business and develop strategic thinking.",
      color: "waypoint-literacy"
    },
    {
      icon: Network,
      name: "System Integration",
      tagline: "Turn knowledge into action",
      description: "Build automations that eliminate manual work and connect your systems.",
      color: "waypoint-integration"
    },
    {
      icon: TrendingUp,
      name: "S³ (Scale·Sale·Succession)",
      tagline: "Build enterprise infrastructure",
      description: "Create AI systems that scale infinitely and increase business valuation.",
      color: "waypoint-s3"
    }
  ];

  const handleAnswer = (answer: "a" | "b" | "c") => {
    const newAnswers = [...answers] as Answers;
    newAnswers[currentQuestion] = answer;
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setTimeout(() => setCurrentQuestion(currentQuestion + 1), 300);
    } else {
      setTimeout(() => setShowResults(true), 300);
    }
  };

  const calculateResult = () => {
    const counts = { a: 0, b: 0, c: 0 };
    answers.forEach(answer => {
      if (answer) counts[answer]++;
    });

    if (counts.a >= 3) return "literacy";
    if (counts.c >= 3) return "s3";
    return "integration";
  };

  const goBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const resetQuiz = () => {
    setStarted(false);
    setCurrentQuestion(0);
    setAnswers([null, null, null, null, null]);
    setShowResults(false);
  };

  // Landing Page
  if (!started) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Navigation />

        {/* Hero */}
        <section className="px-8 py-24 md:py-32 max-w-5xl mx-auto">
          <div className="animate-fade-in">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-foreground text-background flex items-center justify-center">
                <Compass className="w-6 h-6" />
              </div>
              <span className="text-sm font-medium text-foreground/60">2 minutes • 5 questions</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-light leading-tight mb-6 tracking-tight">
              Find Your <span className="font-medium">AI Waypoint</span>
            </h1>

            <p className="text-xl md:text-2xl text-foreground/70 leading-relaxed mb-8 max-w-2xl">
              Not sure where to start with AI? This quick assessment reveals exactly where you are in your transformation journey—and the fastest path forward.
            </p>

            <Button size="lg" className="text-lg px-8" onClick={() => setStarted(true)}>
              Start the Assessment
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </section>

        {/* What You'll Discover */}
        <section className="px-8 py-16 bg-foreground/[0.02]">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-light mb-4">What You'll <span className="font-medium">Discover</span></h2>
              <p className="text-lg text-foreground/70 mb-12 max-w-2xl mx-auto">
              Based on your answers, we'll recommend one of three waypoints tailored to your current stage and goals.
            </p>

            <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6">
              {waypoints.map((outcome, idx) => (
                <Card 
                  key={idx} 
                  className="p-6 text-left border-2 hover:border-foreground/20 transition-all h-full flex flex-col"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className={`w-10 h-10 rounded-lg bg-[hsl(var(--${outcome.color}))]/10 text-[hsl(var(--${outcome.color}))] flex items-center justify-center mb-4`}>
                    <outcome.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-medium mb-1">{outcome.name}</h3>
                  <p className="text-sm text-foreground/60 mb-3">{outcome.tagline}</p>
                  <p className="text-sm text-foreground/70 flex-grow">{outcome.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="px-8 py-24 max-w-4xl mx-auto">
          <h2 className="text-3xl font-light mb-12 text-center">How It <span className="font-medium">Works</span></h2>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { step: "1", title: "Answer 5 Questions", desc: "About your current AI understanding and business goals" },
              { step: "2", title: "Get Your Waypoint", desc: "We identify which of our three waypoints fits your stage" },
              { step: "3", title: "See Your Path", desc: "Get a recommended program and resources to move forward" }
            ].map((item, idx) => (
              <div key={idx} className="animate-fade-in" style={{ animationDelay: `${idx * 150}ms` }}>
                <div className="w-12 h-12 rounded-full bg-foreground text-background flex items-center justify-center mx-auto mb-4 text-lg font-medium">
                  {item.step}
                </div>
                <h3 className="text-lg font-medium mb-2">{item.title}</h3>
                <p className="text-foreground/60">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="px-8 py-24 bg-gradient-to-b from-background to-foreground/[0.02]">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-light mb-6">
              Ready to Find Your <span className="font-medium">Starting Point</span>?
            </h2>
            <p className="text-lg text-foreground/70 mb-8">
              Take 2 minutes to get clarity on your AI transformation journey.
            </p>
            <Button size="lg" className="text-lg px-8" onClick={() => setStarted(true)}>
              Start the Assessment
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </section>

        {/* Footer */}
        <footer className="px-8 py-16 max-w-6xl mx-auto text-center border-t border-foreground/10">
          <div className="flex flex-wrap justify-center gap-8 mb-8 text-sm">
            <Link to="/about" className="hover:text-primary transition-colors">About</Link>
            <span className="text-foreground/30">│</span>
            <Link to="/newsletter" className="hover:text-primary transition-colors">Newsletter</Link>
            <span className="text-foreground/30">│</span>
            <Link to="/faq" className="hover:text-primary transition-colors">FAQ</Link>
          </div>
          <p className="text-xs text-foreground/50">
            © 2025 Genesis Lumina. All rights reserved.
          </p>
        </footer>
      </div>
    );
  }

  if (showResults) {
    const result = calculateResult();
    
    const resultData = {
      literacy: {
        waypoint: "AI Literacy",
        tagline: "Build your foundation",
        description: "You're in the curiosity phase. You need clarity on what AI can do for your business and how to think strategically about implementation.",
        path: "/waypoints/ai-literacy",
        color: "waypoint-literacy",
        icon: "🧠",
        fieldGuide: {
          name: "Analog",
          description: "Pre-build system design",
          url: "/field-guides/analog"
        }
      },
      integration: {
        waypoint: "System Integration",
        tagline: "Turn knowledge into action",
        description: "You understand the basics. Now you need practical automations that eliminate manual work and connect your systems seamlessly.",
        path: "/waypoints/system-integration",
        color: "waypoint-integration",
        icon: "🔗",
        fieldGuide: {
          name: "Harvest",
          description: "AI harvest infrastructure",
          url: "/field-guides/harvest"
        }
      },
      s3: {
        waypoint: "S³ (Scale · Sale · Succession)",
        tagline: "Build enterprise infrastructure",
        description: "You're ready to scale. You need AI infrastructure that supports explosive growth, increases valuation, and runs independently.",
        path: "/waypoints/s3",
        color: "waypoint-s3",
        icon: "📈",
        fieldGuide: {
          name: "Audit",
          description: "Enterprise AI readiness",
          url: "/field-guides/audit"
        }
      }
    };

    const data = resultData[result];

    return (
      <div className="min-h-screen bg-background text-foreground">
        <Navigation />
        
        <section className="px-8 py-24 max-w-3xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <div className="text-6xl mb-6">{data.icon}</div>
            <h1 className="text-4xl md:text-5xl font-light mb-4">
              Your Waypoint: <span className="font-medium">{data.waypoint}</span>
            </h1>
            <p className="text-xl text-foreground/70">{data.tagline}</p>
          </div>

          <Card className={`p-8 border-2 border-[hsl(var(--${data.color}))] mb-8 animate-fade-in`}>
            <p className="text-lg text-foreground/80 leading-relaxed mb-6">
              {data.description}
            </p>

            <div className="flex flex-col gap-4">
              <BookCallButton size="lg" className="w-full">
                Book Your Free Strategy Session
              </BookCallButton>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild variant="outline" size="lg" className="flex-1">
                  <Link to={data.path}>
                    Learn More About {data.waypoint}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="flex-1">
                  <Link to={data.fieldGuide.url}>
                    Get the {data.fieldGuide.name} Guide
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </Card>

          <div className="text-center">
            <button 
              onClick={resetQuiz}
              className="text-sm text-foreground/60 hover:text-foreground transition-colors"
            >
              Retake Quiz
            </button>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <section className="px-8 py-24 max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Compass className="w-8 h-8 text-foreground/70" />
          </div>
          <h1 className="text-4xl md:text-5xl font-light mb-4 tracking-tight">
            Find Your <span className="font-medium">Waypoint</span>
          </h1>
          <p className="text-lg text-foreground/70">
            Answer 5 quick questions to discover where you are in your AI transformation journey.
          </p>
        </div>

        {/* Progress */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-foreground/60">
              Question {currentQuestion + 1} of {questions.length}
            </span>
            <span className="text-sm text-foreground/60">
              {Math.round(((currentQuestion + 1) / questions.length) * 100)}%
            </span>
          </div>
          <div className="h-2 bg-foreground/10 rounded-full overflow-hidden">
            <div 
              className="h-full bg-foreground transition-all duration-300"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Question */}
        <Card className="p-8 mb-8 animate-fade-in">
          <h2 className="text-2xl font-medium mb-6">
            {questions[currentQuestion].q}
          </h2>

          <div className="space-y-3">
            {questions[currentQuestion].options.map((option) => (
              <button
                key={option.label}
                onClick={() => handleAnswer(option.label as "a" | "b" | "c")}
                className="w-full text-left p-4 rounded-lg border-2 border-foreground/10 hover:border-foreground/30 hover:bg-foreground/[0.02] transition-all"
              >
                <span className="font-medium text-foreground/60 mr-3">{option.label.toUpperCase()}.</span>
                {option.text}
              </button>
            ))}
          </div>
        </Card>

        {/* Navigation */}
        {currentQuestion > 0 && (
          <div className="text-center">
            <button
              onClick={goBack}
              className="inline-flex items-center gap-2 text-sm text-foreground/60 hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Previous Question
            </button>
          </div>
        )}
      </section>
    </div>
  );
};

export default Quiz;
