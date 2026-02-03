import STRING from "constants/string";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send, Instagram, Twitter, Youtube } from "lucide-react";

function FooterCol({ title, links }) {
  return (
    <div>
      <h4 className="text-sm font-semibold text-white">{title}</h4>
      <ul className="mt-4 space-y-2 text-sm">
        {links.map((label) => (
          <li key={label}>
            <a href="#" className="text-white/70 transition hover:text-white">
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

const Footer = () => {
  const { brand, footer } = STRING;

  return (
    <footer className="mt-10 bg-foreground text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-4">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2">
            <div className="grid h-9 w-9 place-items-center rounded-xl bg-white/10 ring-1 ring-white/10">
              <span className="text-sm font-semibold text-white">
                {brand?.[0] ?? "A"}
              </span>
            </div>
            <span className="text-lg font-semibold tracking-tight">
              {brand}
            </span>
          </div>

          <p className="mt-4 whitespace-pre-line text-sm leading-6 text-white/70">
            {footer.description}
          </p>

          <div className="mt-5 flex items-center gap-3">
            <a
              href="#"
              className="grid h-9 w-9 place-items-center rounded-xl bg-white/5 ring-1 ring-white/10 transition hover:bg-white/10"
              aria-label="Instagram"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="#"
              className="grid h-9 w-9 place-items-center rounded-xl bg-white/5 ring-1 ring-white/10 transition hover:bg-white/10"
              aria-label="Twitter"
            >
              <Twitter className="h-4 w-4" />
            </a>
            <a
              href="#"
              className="grid h-9 w-9 place-items-center rounded-xl bg-white/5 ring-1 ring-white/10 transition hover:bg-white/10"
              aria-label="YouTube"
            >
              <Youtube className="h-4 w-4" />
            </a>
          </div>
        </div>

        <FooterCol title={footer.company.title} links={footer.company.links} />
        <FooterCol title={footer.support.title} links={footer.support.links} />

        <div>
          <h4 className="text-sm font-semibold text-white">
            {footer.newsletter.title}
          </h4>

          <div className="mt-4 flex items-center gap-2">
            <div className="relative flex-1">
              <Input
                placeholder={footer.newsletter.placeholder}
                className="h-11 rounded-xl border-white/10 bg-white/5 text-white placeholder:text-white/50 focus-visible:ring-2 focus-visible:ring-ring"
              />
            </div>

            <Button
              className="h-11 rounded-xl px-4"
              aria-label={footer.newsletter.buttonAria}
              type="button"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>

          <p className="mt-3 text-xs leading-5 text-white/60">
            {footer.disclaimer}
          </p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-5 text-xs text-white/60">
          {footer.description}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
