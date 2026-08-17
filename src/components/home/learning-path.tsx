import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const steps = [
  {
    chapter: "Ch. 1",
    title: "Tokens & embeddings",
    blurb: "How text becomes numbers a model can chew on.",
  },
  {
    chapter: "Ch. 2",
    title: "The transformer block",
    blurb: "Attention, layer norm, MLPs — the engine room.",
  },
  {
    chapter: "Ch. 3",
    title: "Putting it together",
    blurb: "Stacking blocks, sampling outputs, generating text.",
  },
  {
    chapter: "Ch. 4",
    title: "Training & fine-tuning",
    blurb: "Loss, gradients, and teaching an old model new tricks.",
  },
];

export function LearningPath() {
  return (
    <section id="learning-path" className="border-b border-border/60">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <div className="mb-12 flex flex-col items-center gap-3 text-center">
          <Badge variant="outline" className="rounded-full">
            The learning path
          </Badge>
          <h2 className="font-serif text-3xl font-medium tracking-tight md:text-4xl">
            From zero to &ldquo;oh, that&rsquo;s how it works&rdquo;
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            A rough map of the chapters. Each one ends with a working piece of
            the model and a clear explanation of why it matters.
          </p>
        </div>

        <ol className="relative space-y-3">
          {steps.map((step, idx) => (
            <li
              key={step.chapter}
              className="group border-border/60 hover:border-primary/40 relative flex items-center gap-6 rounded-lg border bg-card p-6 transition-all hover:shadow-sm"
            >
              <span className="text-primary/60 font-mono text-sm font-medium tracking-wider">
                {step.chapter}
              </span>
              <div className="flex-1">
                <h3 className="text-lg font-semibold tracking-tight">
                  {step.title}
                </h3>
                <p className="text-muted-foreground mt-1 text-sm leading-relaxed">
                  {step.blurb}
                </p>
              </div>
              <ArrowRight className="text-muted-foreground group-hover:text-primary size-5 transition-colors" />
              {idx < steps.length - 1 && (
                <span className="bg-border absolute -bottom-3 left-1/2 hidden h-3 w-px -translate-x-1/2 md:block" />
              )}
            </li>
          ))}
        </ol>

        <div className="mt-12 text-center">
          <Button asChild size="lg" className="rounded-full px-8">
            <Link href="/docs">
              Read the full notes
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
