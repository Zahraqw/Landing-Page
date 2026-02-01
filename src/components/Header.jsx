import { Button } from "@/components/ui/button";
import STRING from "constants/string";

const Header = () => {
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
          {STRING.nav.map((item, idx) => (
            <a
              key={item}
              href="#"
              className="
        relative rounded-full px-3 py-2 text-muted-foreground
        transition
        hover:bg-white/60 hover:text-foreground
        after:absolute after:inset-x-3 after:-bottom-0.5 after:h-[2px]
        after:origin-left after:scale-x-0 after:rounded-full after:bg-primary
        after:transition-transform hover:after:scale-x-100
      "
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <a
            href="#"
            className="hidden text-sm text-muted-foreground hover:text-foreground md:inline"
          >
            {STRING.actions.login}
          </a>
          <Button className="rounded-xl px-5">{STRING.actions.signup}</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
