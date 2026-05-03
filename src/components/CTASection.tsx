import { PinIcon } from "./icons/CustomIcons";
import SectionReveal from "./SectionReveal";
import Button from "./ui/Button";

function RopeIcon() {
  return (
    <svg viewBox="0 0 280 84" fill="none" className="h-14 w-[210px] text-navy-dark/80">
      <path
        d="M5 45c15-28 43-41 73-29 20 8 40 43 63 36 20-6 22-35 44-42 26-8 52 8 90 20"
        stroke="currentColor"
        strokeWidth="8"
        strokeLinecap="round"
      />
      <path
        d="M5 58c15-28 43-41 73-29 20 8 40 43 63 36 20-6 22-35 44-42 26-8 52 8 90 20"
        stroke="#d7c6ae"
        strokeWidth="8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function CTASection() {
  return (
    <SectionReveal>
      <section className="bg-cream-bg py-14">
        <div className="mx-auto flex max-w-[1240px] flex-col items-center gap-8 px-5 text-center lg:flex-row lg:justify-between lg:px-6 lg:text-left">
          <div className="flex items-center gap-5">
            <RopeIcon />
            <h2 className="script-font hand-underline text-[48px] leading-none font-bold text-navy-dark">Wpadnij do nas!</h2>
          </div>
          <p className="max-w-[420px] text-xl leading-snug text-navy-dark">
            Dobre jedzenie, zimne napoje i widok, który zostaje w pamięci.
          </p>
          <Button href="#" className="bg-red-accent px-10 py-4 text-white hover:bg-red-hover">
            <PinIcon className="mr-2 size-5" />
            ZNAJDŹ NAS W PORCIE WODNIK
          </Button>
        </div>
      </section>
    </SectionReveal>
  );
}
