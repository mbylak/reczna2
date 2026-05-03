import { AnchorIcon, ChefHatIcon, DrinkIcon, SunIcon } from "./icons/CustomIcons";
import SectionReveal from "./SectionReveal";

const features = [
  {
    title: "NAD WODĄ",
    text: "Wyjątkowa lokalizacja w porcie Wodnik",
    icon: AnchorIcon,
  },
  {
    title: "PYSZNE JEDZENIE",
    text: "Świeże składniki i autorskie dania",
    icon: ChefHatIcon,
  },
  {
    title: "ZIMNE NAPOJE",
    text: "Orzeźwiające drinki, piwa i lemoniady",
    icon: DrinkIcon,
  },
  {
    title: "RELAKS I KLIMAT",
    text: "Idealne miejsce na odpoczynek z rodziną i przyjaciółmi",
    icon: SunIcon,
  },
];

export default function FeaturesBar() {
  return (
    <SectionReveal className="relative z-10 mx-auto -mt-[50px] max-w-[1240px] px-5 lg:px-6">
      <section className="rounded-xl bg-white px-6 py-10 shadow-[0_10px_40px_rgba(0,0,0,0.08)] md:px-10">
        <div className="grid grid-cols-1 gap-y-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-x-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`flex items-start gap-4 ${
                index < features.length - 1 ? "lg:border-r lg:border-gray-light lg:pr-6" : ""
              }`}
            >
              <feature.icon className="mt-1 size-10 shrink-0 text-navy-dark" />
              <div>
                <p className="mb-2 text-sm font-bold tracking-[0.05em] text-navy-dark">{feature.title}</p>
                <p className="text-[13px] leading-[1.5] text-gray-text">{feature.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </SectionReveal>
  );
}
