import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Lightbulb, Layers, Rocket } from "lucide-react";

const WaypointDiagram = () => {
  const waypoints = [
    {
      icon: Lightbulb,
      name: "AI Literacy",
      tagline: "Learn what AI can actually do for you",
      outcomes: ["Identify automation opportunities", "Build AI fluency", "Assess tool readiness"],
      color: "text-blue-500",
      bgColor: "bg-blue-50",
    },
    {
      icon: Layers,
      name: "System Integration",
      tagline: "Connect your tools and eliminate manual work",
      outcomes: ["Integrate existing tools", "Automate workflows", "Clean up data chaos"],
      color: "text-purple-500",
      bgColor: "bg-purple-50",
    },
    {
      icon: Rocket,
      name: "S³ (Scale·Sale·Succession)",
      tagline: "Build a business that runs without you",
      outcomes: ["Document all processes", "Prepare for scale or exit", "Build transferable systems"],
      color: "text-green-500",
      bgColor: "bg-green-50",
    },
  ];

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-2xl">The Waypoint Framework</CardTitle>
        <p className="text-foreground/60">
          Three stages to transform your business from chaos to clarity
        </p>
      </CardHeader>
      
      <CardContent className="space-y-8">
        {/* Visual Diagram */}
        <div className="relative">
          <div className="grid md:grid-cols-3 gap-6">
            {waypoints.map((waypoint, index) => (
              <div key={waypoint.name} className="relative">
                <div className={`${waypoint.bgColor} rounded-lg p-6 space-y-4 border-2 border-border hover:border-primary transition-all duration-300 hover:shadow-lg`}>
                  <div className="flex items-start gap-3">
                    <div className={`${waypoint.color} bg-white p-3 rounded-lg shadow-sm`}>
                      <waypoint.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <Badge variant="secondary" className="mb-2">
                        Waypoint {index + 1}
                      </Badge>
                      <h3 className="text-lg font-semibold text-foreground mb-1">
                        {waypoint.name}
                      </h3>
                      <p className="text-sm text-foreground/70 italic">
                        {waypoint.tagline}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <p className="text-xs font-semibold text-foreground/60 uppercase tracking-wide">
                      Key Outcomes
                    </p>
                    <ul className="space-y-1.5">
                      {waypoint.outcomes.map((outcome) => (
                        <li key={outcome} className="text-sm text-foreground/80 flex items-start gap-2">
                          <span className="text-primary mt-0.5">✓</span>
                          {outcome}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Arrow Connector (not on last item) */}
                {index < waypoints.length - 1 && (
                  <div className="hidden md:flex absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-6 h-6 text-primary" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Progress Flow */}
        <div className="bg-accent/30 p-6 rounded-lg space-y-3 border border-border">
          <p className="text-sm font-semibold text-foreground/80 uppercase tracking-wide">
            Your Journey
          </p>
          <p className="text-foreground/70 leading-relaxed">
            Most businesses start at <strong>AI Literacy</strong> (understanding the landscape), 
            move to <strong>System Integration</strong> (fixing the foundation), and finish at{" "}
            <strong>S³</strong> (building for scale or exit). But you don't have to go in order—we 
            meet you wherever you are and solve the problem that's blocking you right now.
          </p>
        </div>

        {/* How to Start */}
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <div className="flex-1 text-center p-4 bg-primary/5 rounded-lg border border-primary/20">
            <p className="text-sm font-medium text-foreground mb-2">Not sure where to start?</p>
            <p className="text-xs text-foreground/60">Take the 2-minute quiz to find your Waypoint</p>
          </div>
          <div className="flex-1 text-center p-4 bg-primary/5 rounded-lg border border-primary/20">
            <p className="text-sm font-medium text-foreground mb-2">Already know your path?</p>
            <p className="text-xs text-foreground/60">Book a call and we'll build your custom roadmap</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default WaypointDiagram;