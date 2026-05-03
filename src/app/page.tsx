import About from "@/components/About";
import CTASection from "@/components/CTASection";
import FeaturesBar from "@/components/FeaturesBar";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import OpeningHoursAndGallery from "@/components/OpeningHoursAndGallery";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FeaturesBar />
        <About />
        <OpeningHoursAndGallery />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
