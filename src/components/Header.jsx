import { useState } from "react";
import { Button } from "@/components/ui/button";
import STRING from "constants/string";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/60 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <div className="grid h-9 w-9 place-items-center rounded-xl bg-primary/15 ring-1 ring-primary/20">
            <span className="text-sm font-semibold text-primary">A</span>
          </div>
          <span className="text-lg font-semibold tracking-tight">
            {STRING.brand}
          </span>
        </div>

        <nav className="hidden items-center gap-1 text-sm md:flex">
          {STRING.nav.map((item) => (
            <a
              key={item}
              href="#"
              className="relative rounded-full px-3 py-2 text-muted-foreground transition hover:bg-white/60 hover:text-foreground"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#"
            className="hidden text-sm text-muted-foreground hover:text-foreground md:inline"
          >
            {STRING.actions.login}
          </a>
          <Button className="hidden rounded-xl px-5 md:inline-flex">
            {STRING.actions.signup}
          </Button>

          <Button className="rounded-xl px-4 md:hidden">
            {STRING.actions.signup}
          </Button>

          <button
            type="button"
            className="ml-1 grid h-10 w-10 place-items-center rounded-xl border bg-white/60 text-foreground md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t bg-background/70 backdrop-blur md:hidden">
          <div className="mx-auto max-w-6xl space-y-2 px-4 py-4">
            {STRING.nav.map((item) => (
              <a
                key={item}
                href="#"
                onClick={() => setOpen(false)}
                className="block rounded-xl border bg-white/60 px-4 py-3 text-sm text-foreground hover:bg-white"
              >
                {item}
              </a>
            ))}

            <div className="grid gap-2 pt-2">
              <Button
                variant="secondary"
                className="w-full rounded-xl"
                onClick={() => setOpen(false)}
              >
                {STRING.actions.login}
              </Button>
              <Button
                className="w-full rounded-xl"
                onClick={() => setOpen(false)}
              >
                {STRING.actions.signup}
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
