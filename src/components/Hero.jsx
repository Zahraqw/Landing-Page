import { Button } from "@/components/ui/button";
import STRING from "constants/string.js";
import Images from "assets/images.js";

const Hero = () => {
  const { badge, title, highlight, subtitle, primaryCta, secondaryCta, stats } =
    STRING.hero;

  return (
    <section className="relative">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 md:grid-cols-2 md:py-20">
        {/* Left */}
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border bg-white/60 px-3 py-1 text-xs text-muted-foreground">
            <span className="h-2 w-2 rounded-full bg-primary" />
            {badge}
          </div>

          <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
            {title}{" "}
            <span className="bg-gradient-to-r from-primary to-[hsl(var(--accent))] bg-clip-text text-transparent">
              {highlight}
            </span>
          </h1>

          <p className="mt-4 max-w-xl text-sm leading-6 text-muted-foreground md:text-base">
            {subtitle}
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Button className="rounded-xl px-7">{primaryCta}</Button>
            <Button variant="secondary" className="rounded-xl px-7">
              {secondaryCta}
            </Button>
          </div>

          <div className="mt-8 grid max-w-md grid-cols-3 gap-3">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border bg-white/60 p-3 text-center"
              >
                <div className="text-lg font-semibold">{s.value}</div>
                <div className="text-xs text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right - Image */}
        <div className="flex justify-center md:justify-end">
          <div className="relative w-full max-w-[560px]">
            <div className="pointer-events-none absolute -inset-6 rounded-[2rem] bg-gradient-to-r from-primary/10 to-[hsl(var(--accent))/0.10] blur-2xl" />

            <div className="relative overflow-hidden rounded-3xl border bg-white/70 shadow-sm backdrop-blur">
              <div className="flex items-center gap-2 border-b bg-white/60 px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
                <div className="ml-2 h-6 flex-1 rounded-full bg-muted" />
              </div>

              <img
                src={Images.dash_board}
                alt="Dashboard Preview"
                className="h-[420px] w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
