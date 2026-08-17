import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const reasons = [
  {
    title: "It's not as hard as the internet says.",
    body: "Once you see what a transformer actually does, the mystique evaporates. We pull apart the moving parts piece by piece.",
  },
  {
    title: "You can't use what you don't understand.",
    body: "Prompting, fine-tuning, evaluating — every practical skill is built on a mental model of what's happening under the hood.",
  },
  {
    title: "The field changes; the foundations don't.",
    body: "Models come and go. Tokenization, attention, sampling, training loops — these ideas stick around longer than any specific release.",
  },
];

export function Why() {
  return (
    <section className="border-b border-border/60 bg-muted/30">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <div className="grid items-start gap-10 md:grid-cols-3 md:gap-16">
          <div className="md:col-span-1">
            <Badge variant="outline" className="mb-4 rounded-full">
              Why bother?
            </Badge>
            <h2 className="font-serif text-3xl font-medium tracking-tight md:text-4xl">
              You don&rsquo;t need another API wrapper tutorial.
            </h2>
            <p className="text-muted-foreground mt-4 text-pretty leading-relaxed">
              You need to actually understand the thing you&rsquo;re talking to.
              Here&rsquo;s why the rabbit hole is worth it.
            </p>
          </div>

          <div className="md:col-span-2">
            <Card className="border-border/60">
              <CardContent className="space-y-6 p-8">
                {reasons.map((reason, idx) => (
                  <div key={reason.title}>
                    {idx > 0 && <Separator className="my-6" />}
                    <div className="flex gap-4">
                      <span className="text-primary font-mono text-sm font-medium">
                        0{idx + 1}
                      </span>
                      <div className="space-y-2">
                        <h3 className="text-lg font-semibold tracking-tight">
                          {reason.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {reason.body}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
