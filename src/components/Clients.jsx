import STRING from "constants/string";

export default function Clients() {
  const { title, subtitle, logos } = STRING.clients;

  return (
    <section id="customers" className="py-10 md:py-14">
      <div className="mx-auto max-w-6xl px-4">
        <div className="rounded-3xl border bg-white/50 p-6 shadow-sm backdrop-blur md:p-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full border bg-white/70 px-3 py-1 text-xs text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-primary" />
              Our clients
            </div>

            <h2 className="mt-4 text-2xl font-semibold tracking-tight md:text-3xl">
              {title}
            </h2>
            <p className="mt-2 text-sm text-muted-foreground md:text-base">
              {subtitle}
            </p>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 md:gap-4">
            {logos.map((name) => (
              <div
                key={name}
                className="group rounded-2xl border bg-white/60 px-5 py-3 text-sm font-semibold text-muted-foreground shadow-sm transition hover:-translate-y-0.5 hover:bg-white hover:text-foreground"
              >
                <span className="opacity-80 group-hover:opacity-100">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
