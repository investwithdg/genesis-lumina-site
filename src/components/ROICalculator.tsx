import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { TrendingUp, Clock, DollarSign, Zap } from "lucide-react";

const ROICalculator = () => {
  const [hoursPerWeek, setHoursPerWeek] = useState(10);
  const [hourlyRate, setHourlyRate] = useState(50);
  const [teamSize, setTeamSize] = useState(1);
  const [automationCoverage, setAutomationCoverage] = useState([70]);

  const weeklyTimeSaved = (hoursPerWeek * (automationCoverage[0] / 100)) * teamSize;
  const yearlyCostSavings = weeklyTimeSaved * 52 * hourlyRate;
  const monthlyTimeSaved = weeklyTimeSaved * 4.33;
  const productivityGain = ((weeklyTimeSaved / (hoursPerWeek * teamSize)) * 100).toFixed(0);

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-2xl">
          <TrendingUp className="w-6 h-6 text-primary" />
          ROI Calculator
        </CardTitle>
        <p className="text-foreground/60">Calculate how much time and money automation could save your team</p>
      </CardHeader>
      
      <CardContent className="space-y-8">
        {/* Inputs */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="hours">Hours spent on manual tasks (per week)</Label>
            <Input
              id="hours"
              type="number"
              min="1"
              max="40"
              value={hoursPerWeek}
              onChange={(e) => setHoursPerWeek(Number(e.target.value))}
              className="text-lg"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="rate">Average hourly rate ($)</Label>
            <Input
              id="rate"
              type="number"
              min="10"
              max="500"
              value={hourlyRate}
              onChange={(e) => setHourlyRate(Number(e.target.value))}
              className="text-lg"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="team">Team size</Label>
            <Input
              id="team"
              type="number"
              min="1"
              max="100"
              value={teamSize}
              onChange={(e) => setTeamSize(Number(e.target.value))}
              className="text-lg"
            />
          </div>

          <div className="space-y-4">
            <Label>Tasks that can be automated: {automationCoverage[0]}%</Label>
            <Slider
              value={automationCoverage}
              onValueChange={setAutomationCoverage}
              min={10}
              max={95}
              step={5}
              className="w-full"
            />
          </div>
        </div>

        {/* Results */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t">
          <div className="text-center p-4 bg-accent/30 rounded-lg">
            <Clock className="w-6 h-6 text-primary mx-auto mb-2" />
            <div className="text-2xl font-semibold text-foreground">{weeklyTimeSaved.toFixed(1)}h</div>
            <div className="text-sm text-foreground/60">Weekly Time Saved</div>
          </div>

          <div className="text-center p-4 bg-accent/30 rounded-lg">
            <DollarSign className="w-6 h-6 text-primary mx-auto mb-2" />
            <div className="text-2xl font-semibold text-foreground">${yearlyCostSavings.toLocaleString()}</div>
            <div className="text-sm text-foreground/60">Yearly Cost Savings</div>
          </div>

          <div className="text-center p-4 bg-accent/30 rounded-lg">
            <Zap className="w-6 h-6 text-primary mx-auto mb-2" />
            <div className="text-2xl font-semibold text-foreground">{monthlyTimeSaved.toFixed(0)}h</div>
            <div className="text-sm text-foreground/60">Monthly Time Saved</div>
          </div>

          <div className="text-center p-4 bg-accent/30 rounded-lg">
            <TrendingUp className="w-6 h-6 text-primary mx-auto mb-2" />
            <div className="text-2xl font-semibold text-foreground">+{productivityGain}%</div>
            <div className="text-sm text-foreground/60">Productivity Gain</div>
          </div>
        </div>

        <div className="bg-primary/10 border border-primary/20 p-6 rounded-lg space-y-3">
          <p className="text-lg font-medium text-foreground">Your Potential ROI</p>
          <p className="text-foreground/70 leading-relaxed">
            By automating {automationCoverage[0]}% of manual tasks, your team could save{" "}
            <strong className="text-foreground">{weeklyTimeSaved.toFixed(1)} hours per week</strong> and{" "}
            <strong className="text-foreground">${yearlyCostSavings.toLocaleString()} per year</strong>.
          </p>
          <p className="text-sm text-foreground/60">
            * Estimates based on typical automation success rates. Actual results vary by workflow complexity.
          </p>
        </div>

        <Button size="lg" className="w-full">
          Get Your Custom Automation Plan
        </Button>
      </CardContent>
    </Card>
  );
};

export default ROICalculator;