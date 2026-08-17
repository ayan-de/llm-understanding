import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Cpu, MessageSquare, Workflow } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Minds, not magic",
    description:
      "Strip away the hype. Understand LLMs as pattern-matching machines that learned to talk by reading a lot of the internet.",
    accent: "from-primary/10 to-primary/0",
  },
  {
    icon: Cpu,
    title: "Built from scratch",
    description:
      "Follow the construction of a real, working LLM — every tensor, every layer, every hyperparameter explained along the way.",
    accent: "from-accent/10 to-accent/0",
  },
  {
    icon: MessageSquare,
    title: "Plain English",
    description:
      "No PhD required. Every concept gets a friendly explanation first, then the technical version once the intuition is in place.",
    accent: "from-chart-3/10 to-chart-3/0",
  },
  {
    icon: Workflow,
    title: "From token to thought",
    description:
      "Trace a single prompt all the way through the model and back out — and watch meaning emerge from a pile of numbers.",
    accent: "from-chart-4/10 to-chart-4/0",
  },
];

export function Features() {
  return (
    <section className="border-b border-border/60">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <div className="mb-12 flex flex-col items-center gap-3 text-center">
          <Badge variant="outline" className="rounded-full">
            What you&rsquo;ll get
          </Badge>
          <h2 className="font-serif text-3xl font-medium tracking-tight md:text-4xl">
            The whole picture, without the hand-waving
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            Four ideas, once you have them, everything else is just details.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="group relative overflow-hidden border-border/60 transition-all hover:border-primary/40 hover:shadow-md"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.accent} opacity-60 transition-opacity group-hover:opacity-100`}
              />
              <CardHeader className="relative">
                <div className="bg-primary/10 text-primary mb-3 inline-flex size-10 items-center justify-center rounded-lg">
                  <feature.icon className="size-5" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
