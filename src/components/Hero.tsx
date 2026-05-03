import Image from "next/image";
import Button from "./ui/Button";

export default function Hero() {
  return (
    <section className="relative min-h-[700px] w-full overflow-hidden pt-36 lg:pt-40">
      <Image
        src="/images/hero-lake.jpg"
        alt="Jezioro Zegrzyńskie z białym statkiem i błękitnym niebem"
        fill
        priority
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.42)_0%,rgba(255,255,255,0.12)_48%,rgba(255,255,255,0)_100%)]" />

      <div className="relative mx-auto flex max-w-[1240px] px-5 pb-32 lg:px-6">
        <div className="max-w-[560px] text-navy-dark">
          <p className="mb-6 text-xs font-bold tracking-[0.15em] text-red-accent sm:text-sm">
            BAR NA JEZIORZE ZEGRZYŃSKIM
          </p>
          <h1 className="script-font mb-7 text-[56px] leading-[0.95] font-bold sm:text-[76px] lg:text-[96px]">
            Smak lata
            <br />
            nad Zegrzem
          </h1>
          <p className="mb-10 max-w-[490px] text-base leading-relaxed font-medium sm:text-lg">
            Pyszne jedzenie, orzeźwiające napoje i najlepszy widok na Zalew Zegrzyński. Witaj w{" "}
            <strong>Ręczna Robota 2.0 Wodnik</strong>!
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button href="#" className="bg-red-accent text-white hover:bg-red-hover">
              ZOBACZ MENU
            </Button>
            <Button href="#" className="border-2 border-white bg-white/95 text-navy-dark hover:bg-white">
              ZOBACZ WIDOK
            </Button>
          </div>
        </div>
      </div>

    </section>
  );
}
