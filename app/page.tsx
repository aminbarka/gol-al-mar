import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import InfoStrip from "@/components/InfoStrip";
import MarqueeBar from "@/components/MarqueeBar";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import MarqueeBarAlt from "@/components/MarqueeBarAlt";
import Schedule from "@/components/Schedule";
import Footer from "@/components/Footer";
import { ReservationProvider } from "@/components/ReservationContext";

export default function Home() {
  return (
    <ReservationProvider>
      <main className="flex flex-col min-h-screen">
        <Navbar />
        <Hero />
        <InfoStrip />
        <MarqueeBar />
        <About />
        <Gallery />
        <MarqueeBarAlt />
        <Schedule />
        <Footer />
      </main>
    </ReservationProvider>
  );
}
