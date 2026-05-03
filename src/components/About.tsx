import Image from "next/image";
import { AnchorIcon } from "./icons/CustomIcons";
import SectionReveal from "./SectionReveal";
import Button from "./ui/Button";

export default function About() {
  return (
    <SectionReveal>
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-[1240px] grid-cols-1 items-center gap-10 px-5 lg:grid-cols-2 lg:gap-[60px] lg:px-6">
          <div>
            <h2 className="script-font hand-underline mb-8 text-[56px] leading-none font-bold text-navy-dark">O nas</h2>
            <p className="mb-6 max-w-[520px] text-[15px] leading-[1.7] text-[#4b5563]">
              Ręczna Robota 2.0 Wodnik to nowe miejsce na kulinarnej mapie Nieporętu. Powstał z miłości do dobrego
              jedzenia, wspaniałej atmosfery i niezwykłych widoków.
            </p>
            <p className="mb-8 max-w-[520px] text-[15px] leading-[1.7] text-[#4b5563]">
              Znajdziesz nas w porcie Wodnik - tu, gdzie Jezioro Zegrzyńskie prezentuje się najpiękniej.
            </p>
            <Button href="#" className="border border-navy-dark bg-white text-navy-dark hover:bg-navy-dark hover:text-white">
              DOWIEDZ SIĘ WIĘCEJ
            </Button>
          </div>

          <div className="relative">
            <Image
              src="/images/burger.jpg"
              alt="Burger z frytkami podany na drewnianej desce"
              width={900}
              height={560}
              className="h-[360px] w-full rounded-lg object-cover"
            />
            <div className="absolute bottom-5 right-5 flex h-28 w-28 items-center justify-center rounded-full border-2 border-white/70 bg-navy-dark/35 text-white">
              <AnchorIcon className="size-12" />
            </div>
          </div>
        </div>
      </section>
    </SectionReveal>
  );
}
