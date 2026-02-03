import STRING from "constants/string";
import { Button } from "@/components/ui/button";

const CtaStrip = () => {
  const { cta } = STRING;

  return (
    <section className="bg-muted/60 py-12">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h3 className="whitespace-pre-line text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
            {cta.title}
          </h3>

          <div className="mt-6 flex justify-center">
            <Button className="rounded-xl px-6">{cta.button}</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaStrip;
