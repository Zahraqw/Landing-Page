import { ArrowRight } from "lucide-react";
import STRING from "constants/string";
import { Button } from "@/components/ui/button";

function MarketingCard({ title, image, href, readMore }) {
  return (
    <article className="group">
      <div className="relative overflow-hidden rounded-2xl ring-1 ring-border bg-card">
        <img
          src={image}
          alt={title}
          className="h-64 w-full object-cover transition duration-300 group-hover:scale-[1.03]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black/20" />

        <div className="absolute inset-x-0 bottom-4 px-4">
          <div className="mx-auto max-w-[18rem] rounded-xl bg-background/95 px-4 py-3 text-center shadow-lg ring-1 ring-border backdrop-blur">
            <p className="text-sm font-medium leading-snug text-foreground">
              {title}
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center pt-4">
        <Button variant="link" asChild className="gap-2 text-primary">
          <a href={href} aria-label={`${readMore}: ${title}`}>
            {readMore} <ArrowRight className="h-4 w-4" />
          </a>
        </Button>
      </div>
    </article>
  );
}

const Marketing = () => {
  const { marketing } = STRING;

  return (
    <section className="py-10">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            {marketing.title}
          </h2>
          <p className="mt-3 text-sm leading-6 text-muted-foreground md:text-base">
            {marketing.subtitle}
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {marketing.posts.map((p) => (
            <MarketingCard
              key={p.title}
              title={p.title}
              image={p.image}
              href={p.href}
              readMore={marketing.readMore}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Marketing;
