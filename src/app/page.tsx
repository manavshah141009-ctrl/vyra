import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Workflow } from "@/components/Workflow";
import { Features } from "@/components/Features";
import { WhyVyra, FutureVision } from "@/components/Narrative";
import { Waitlist, Footer } from "@/components/Waitlist";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black overflow-x-hidden">
      {/* Global Background Noise/Grain */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[100] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      
      <Navbar />
      
      <Hero />
      
      <div className="relative z-10 space-y-20">
        <Workflow />
        <Features />
        <WhyVyra />
        <FutureVision />
        <Waitlist />
      </div>
      
      <Footer />
    </main>
  );
}
