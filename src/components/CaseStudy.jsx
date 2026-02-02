import { Button } from "@/components/ui/button";
import STRING from "constants/string";
import Images from "assets/images";

const CaseStudy = () => {
  const { badge, title, subtitle, cta } = STRING.caseStudy;

  return (
    <section id="solutions" className="py-10 md:py-14 border bg-white/70 ">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 md:grid-cols-2">
        <div className="flex justify-center md:justify-start">
          <img
            src={Images.pixel_grade}
            alt="Case study preview"
            className="h-[280px] w-full object-cover md:h-[320px]"
            loading="lazy"
          />
        </div>

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

          <div className="mt-6">
            <Button className="rounded-xl px-6">{cta}</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
