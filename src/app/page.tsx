import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Conflict from "@/components/Conflict";
import Procrastination from "@/components/Procrastination";
import BottomOfFunnel from "@/components/BottomOfFunnel";
import TurningPoint from "@/components/TurningPoint";
import Authority from "@/components/Authority";
import Methodology from "@/components/Methodology";
import ApplicationForm from "@/components/ApplicationForm";
import FinalCTA from "@/components/FinalCTA";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Conflict />
        <Procrastination />
        <BottomOfFunnel />
        <TurningPoint />
        <Authority />
        <Methodology />
        <ApplicationForm />
        <FinalCTA />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
