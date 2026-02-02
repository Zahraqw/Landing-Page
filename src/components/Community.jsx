import STRING from "constants/string";
import { Blocks, Palette, BookOpen } from "lucide-react";

const ICONS = [Blocks, Palette, BookOpen];

const Community = () => {
  const { title, subtitle, cards, hint, sectionTitle } = STRING.community;

  return (
    <section id="product" className="py-10 md:py-14">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border bg-white/70 px-3 py-1 text-xs text-muted-foreground">
            <span className="h-2 w-2 rounded-full bg-primary" />
            {sectionTitle}
          </div>

          <h2 className="mt-4 text-2xl font-semibold tracking-tight md:text-3xl">
            {title}
          </h2>
          <p className="mt-2 text-sm text-muted-foreground md:text-base">
            {subtitle}
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {cards.map((c, idx) => {
            const Icon = ICONS[idx] || Blocks;

            return (
              <div
                key={c.title}
                className="group relative overflow-hidden rounded-3xl border bg-white/60 p-6 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:bg-white"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary/70 to-[hsl(var(--accent))]/60 opacity-70" />

                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/10 ring-1 ring-primary/15 transition group-hover:bg-primary/15">
                  <Icon className="h-5 w-5 text-primary" />
                </div>

                <h3 className="mt-5 text-lg font-semibold tracking-tight">
                  {c.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {c.desc}
                </p>

                <div className="mt-5 inline-flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary/60" />
                  {hint}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Community;
