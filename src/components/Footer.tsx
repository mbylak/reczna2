import Image from "next/image";
import Link from "next/link";
import { AnchorIcon, FacebookIcon, MailIcon, PhoneIcon } from "./icons/CustomIcons";

export default function Footer() {
  return (
    <footer className="bg-navy-dark pt-14 pb-7 text-white">
      <div className="mx-auto max-w-[1240px] px-5 lg:px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-[180px_1fr_1fr_1fr_220px]">
          <div className="relative h-[118px] w-[138px]">
            <Image src="/logo.svg" alt="Logo Ręczna Robota 2.0 Wodnik" fill className="object-contain" />
          </div>

          <div className="space-y-1 text-sm leading-relaxed">
            <p className="text-base font-bold">Ręczna Robota 2.0 Wodnik</p>
            <p>Port Wodnik</p>
            <p>ul. Zegrzyńska 10</p>
            <p>05-126 Nieporęt</p>
          </div>

          <div className="space-y-3 text-sm">
            <p className="flex items-center gap-2">
              <PhoneIcon className="size-5" />
              +48 123 456 789
            </p>
            <p className="flex items-center gap-2">
              <MailIcon className="size-5" />
              kontakt@recznarobota2.pl
            </p>
            <p className="flex items-center gap-2">
              <FacebookIcon className="size-5" />
              /recznarobota2.wodnik
            </p>
          </div>

          <div className="space-y-2 text-sm">
            <p className="mb-2 text-base font-bold">Szybkie linki</p>
            <Link href="#" className="block hover:text-red-300">
              Strona główna
            </Link>
            <Link href="#" className="block hover:text-red-300">
              Menu
            </Link>
            <Link href="#" className="block hover:text-red-300">
              Wydarzenia
            </Link>
            <Link href="#" className="block hover:text-red-300">
              Kontakt
            </Link>
          </div>

          <div className="flex flex-col items-start justify-center gap-2 lg:items-end">
            <AnchorIcon className="size-11" />
            <p className="script-font text-[36px] leading-[0.9]">Do zobaczenia nad wodą!</p>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-5 text-center text-[13px] opacity-70">
          © 2024 Ręczna Robota 2.0 Wodnik. Wszelkie prawa zastrzeżone.
        </div>
      </div>
    </footer>
  );
}
