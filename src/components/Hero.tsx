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

      <div className="boat-float absolute bottom-[160px] right-[8%] hidden w-[360px] opacity-95 lg:block">
        <svg viewBox="0 0 500 160" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="100" y="50" width="235" height="52" rx="3" fill="#f8fafc" stroke="#1a3a5c" strokeWidth="3" />
          <rect x="124" y="30" width="66" height="20" fill="#f8fafc" stroke="#1a3a5c" strokeWidth="3" />
          <line x1="170" y1="50" x2="170" y2="30" stroke="#1a3a5c" strokeWidth="3" />
          <rect x="88" y="102" width="268" height="18" rx="8" fill="#f1f5f9" stroke="#1a3a5c" strokeWidth="3" />
          <circle cx="134" cy="120" r="10" fill="#fff" stroke="#1a3a5c" strokeWidth="3" />
          <circle cx="198" cy="120" r="10" fill="#fff" stroke="#1a3a5c" strokeWidth="3" />
          <circle cx="262" cy="120" r="10" fill="#fff" stroke="#1a3a5c" strokeWidth="3" />
          <path d="M54 132H442" stroke="#1a3a5c" strokeWidth="4" strokeLinecap="round" />
        </svg>
      </div>
    </section>
  );
}
