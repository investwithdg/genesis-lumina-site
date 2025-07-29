import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface BusinessSystem {
  id: string;
  name: string;
  description: string;
  demand: "high" | "medium" | "low";
  icon: string;
}

const businessSystems: BusinessSystem[] = [
  {
    id: "delivery-fulfillment",
    name: "Delivery & Fulfillment",
    description: "Automate order processing, shipping, and customer delivery tracking",
    demand: "high",
    icon: "📦"
  },
  {
    id: "finances-bookkeeping", 
    name: "Finances & Bookkeeping",
    description: "Streamline invoicing, expense tracking, and financial reporting",
    demand: "medium",
    icon: "💰"
  },
  {
    id: "sales-pipeline-crm",
    name: "Sales Pipeline & CRM",
    description: "Automate lead tracking, follow-ups, and deal management",
    demand: "medium", 
    icon: "🎯"
  },
  {
    id: "lead-generation",
    name: "Lead Generation",
    description: "Automate prospect identification, outreach, and qualification",
    demand: "low",
    icon: "🔍"
  },
  {
    id: "client-onboarding",
    name: "Client Onboarding", 
    description: "Streamline new client setup, documentation, and training",
    demand: "low",
    icon: "👋"
  },
  {
    id: "system-hygiene",
    name: "System Hygiene",
    description: "Automate data cleanup, backups, and system maintenance",
    demand: "low",
    icon: "🧹"
  },
  {
    id: "marketing-content",
    name: "Marketing & Content Creation",
    description: "Automate content scheduling, social media, and campaigns",
    demand: "low",
    icon: "📢"
  },
  {
    id: "reputation-reviews",
    name: "Reputation & Review Management", 
    description: "Automate review requests, responses, and reputation monitoring",
    demand: "low",
    icon: "⭐"
  },
  {
    id: "internal-operations",
    name: "Internal Operations",
    description: "Streamline team workflows, reporting, and communication",
    demand: "low",
    icon: "⚙️"
  }
];

interface BusinessSystemsSelectorProps {
  selectedSystem: string | null;
  onSystemSelect: (systemId: string) => void;
}

const BusinessSystemsSelector = ({ selectedSystem, onSystemSelect }: BusinessSystemsSelectorProps) => {
  return (
    <section className="px-8 py-16 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-medium mb-4">Choose Your Business System</h2>
        <p className="text-lg text-foreground/70">Select the area where you need automation most</p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {businessSystems.map((system) => (
          <Card 
            key={system.id}
            className={`cursor-pointer transition-all duration-200 hover:shadow-lg ${
              selectedSystem === system.id 
                ? 'border-primary bg-primary/5' 
                : 'border-border hover:border-primary/50'
            }`}
            onClick={() => onSystemSelect(system.id)}
          >
            <CardContent className="p-6">
              <div className="flex items-start gap-3 mb-3">
                <span className="text-2xl">{system.icon}</span>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-semibold text-lg">{system.name}</h3>
                    {system.demand === "high" && (
                      <Badge variant="destructive" className="text-xs">
                        High Demand
                      </Badge>
                    )}
                    {system.demand === "medium" && (
                      <Badge variant="secondary" className="text-xs">
                        Popular
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    {system.description}
                  </p>
                </div>
              </div>
              
              {selectedSystem === system.id && (
                <div className="mt-4 p-3 bg-primary/10 rounded-lg">
                  <p className="text-sm font-medium text-primary">
                    ✓ Selected for your Spark automation
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default BusinessSystemsSelector;