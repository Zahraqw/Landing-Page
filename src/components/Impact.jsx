import { Button } from "@/components/ui/button";
import STRING from "constants/string";
import Images from "assets/images";

const Impact = () => {
  const { badge, title, subtitle, cta, stats } = STRING.impact;

  return (
    <section id="resources" className="py-10 md:py-14">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 md:grid-cols-2">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border bg-white/70 px-3 py-1 text-xs text-muted-foreground">
            <span className="h-2 w-2 rounded-full bg-primary" />
            {badge}
          </div>

          <h2 className="mt-4 text-2xl font-semibold tracking-tight md:text-3xl">
            {title}
          </h2>

          <p className="mt-3 text-sm leading-6 text-muted-foreground md:text-base">
            {subtitle}
          </p>

          <div className="mt-6 grid grid-cols-2 gap-3">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border bg-white/60 p-4 shadow-sm backdrop-blur"
              >
                <div className="text-lg font-semibold">{s.value}</div>
                <div className="mt-1 text-xs text-muted-foreground">
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-7">
            <Button variant="secondary" className="rounded-xl px-6">
              {cta}
            </Button>
          </div>
        </div>
        <div className="flex justify-center md:justify-end">
          <img
            src={Images.reinvent}
            alt="Impact preview"
            className="h-[260px] w-full object-contain p-6 md:h-[320px]"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default Impact;
