import Link from "next/link";
import { ArrowRight, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function CTA() {
  return (
    <section>
      <div className="mx-auto max-w-5xl px-6 py-24">
        <Card className="border-primary/20 from-primary/5 to-accent/5 overflow-hidden border bg-gradient-to-br shadow-sm">
          <CardContent className="relative flex flex-col items-center gap-6 p-10 text-center md:p-16">
            <div className="bg-background/80 text-primary inline-flex size-12 items-center justify-center rounded-xl border shadow-sm">
              <Terminal className="size-6" />
            </div>
            <h2 className="font-serif text-3xl font-medium tracking-tight md:text-4xl">
              Ready to peek under the hood?
            </h2>
            <p className="text-muted-foreground max-w-xl text-pretty text-lg leading-relaxed">
              The first chapter is short, visual, and assumes nothing. By the
              end of it, you&rsquo;ll have run real code that processes tokens
              like a real LLM.
            </p>
            <Button asChild size="lg" className="rounded-full px-8">
              <Link href="/docs">
                Open the docs
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
