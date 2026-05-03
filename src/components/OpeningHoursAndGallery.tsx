import Image from "next/image";
import { SunIcon } from "./icons/CustomIcons";
import SectionReveal from "./SectionReveal";
import Button from "./ui/Button";

const galleryImages = [
  { src: "/images/view-1.jpg", alt: "Taras z parasolami nad wodą" },
  { src: "/images/view-2.jpg", alt: "Marina z żaglówkami nad jeziorem" },
  { src: "/images/view-3.jpg", alt: "Zachód słońca nad wodą" },
  { src: "/images/view-4.jpg", alt: "Wieczorny widok tarasu z lampkami" },
];

export default function OpeningHoursAndGallery() {
  return (
    <SectionReveal>
      <section className="bg-navy-dark py-20">
        <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-12 px-5 text-white lg:grid-cols-[0.95fr_1.55fr] lg:px-6">
          <div className="rounded-xl bg-navy-medium p-8">
            <h2 className="script-font hand-underline mb-8 text-[42px] leading-none font-bold text-white">Godziny otwarcia</h2>
            <div className="mb-8 space-y-4 text-base">
              <p className="flex justify-between gap-4">
                <span>Poniedziałek - Czwartek</span>
                <span>12:00 - 20:00</span>
              </p>
              <p className="flex justify-between gap-4">
                <span>Piątek - Sobota</span>
                <span>12:00 - 22:00</span>
              </p>
              <p className="flex justify-between gap-4">
                <span>Niedziela</span>
                <span>12:00 - 20:00</span>
              </p>
            </div>
            <p className="script-font flex items-center gap-3 text-[34px] leading-none">
              <SunIcon className="size-9" />
              Zapraszamy codziennie!
            </p>
          </div>

          <div>
            <h2 className="script-font hand-underline mb-8 text-[42px] leading-none font-bold text-white">Zobacz nasz widok</h2>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {galleryImages.map((image) => (
                <Image
                  key={image.src}
                  src={image.src}
                  alt={image.alt}
                  width={320}
                  height={220}
                  className="h-[122px] w-full rounded-lg object-cover"
                />
              ))}
            </div>
            <Button
              href="#"
              className="mt-6 border border-white bg-transparent text-white hover:bg-white hover:text-navy-dark"
            >
              ZOBACZ WIĘCEJ ZDJĘĆ
            </Button>
          </div>
        </div>
      </section>
    </SectionReveal>
  );
}
