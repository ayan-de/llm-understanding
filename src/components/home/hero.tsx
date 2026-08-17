import Link from "next/link";
import { ArrowRight, BookOpen, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border/60">
      <div className="from-primary/5 via-background to-accent/5 absolute inset-0 bg-gradient-to-br" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,var(--primary)/10%,transparent_50%)]" />

      <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-8 px-6 py-24 text-center md:py-32">
        <Badge variant="secondary" className="rounded-full px-4 py-1.5 text-sm">
          <Sparkles className="mr-1.5 size-3.5" />
          Learning notes from &ldquo;Build an LLM from Scratch&rdquo;
        </Badge>

        <h1 className="text-balance font-serif text-5xl font-medium tracking-tight md:text-7xl">
          What the heck is{" "}
          <span className="from-primary to-accent bg-gradient-to-r bg-clip-text text-transparent">
            LLM
          </span>
          ?
        </h1>

        <p className="text-muted-foreground max-w-2xl text-pretty text-lg leading-relaxed md:text-xl">
          A no-jargon, beginner-friendly walkthrough of how large language models
          actually work — from tokens and embeddings to transformers and
          training. Written while learning, explained for humans.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Button asChild size="lg" className="rounded-full px-6">
            <Link href="/docs">
              <BookOpen className="size-4" />
              Start reading
              <ArrowRight className="size-4" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="rounded-full px-6"
          >
            <Link href="#learning-path">See the path</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
