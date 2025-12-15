import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import BookCallButton from "@/components/BookCallButton";
import { Compass, ArrowRight, ArrowLeft } from "lucide-react";

type Answer = "a" | "b" | "c" | null;
type Answers = [Answer, Answer, Answer, Answer, Answer];

const Quiz = () => {
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
    setCurrentQuestion(0);
    setAnswers([null, null, null, null, null]);
    setShowResults(false);
  };

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
      <div className="min-h-screen bg-white text-foreground">
        <Navigation />
        
        <section className="px-8 py-24 max-w-3xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <div className="text-6xl mb-6">{data.icon}</div>
            <h1 className="text-4xl md:text-5xl font-light mb-4">
              Your Waypoint: <span className="font-medium">{data.waypoint}</span>
            </h1>
            <p className="text-xl text-foreground/70">{data.tagline}</p>
          </div>

          <Card className={`p-8 border-2 border-[hsl(var(--${data.color}))] mb-8 animate-slide-in`}>
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
    <div className="min-h-screen bg-white text-foreground">
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
