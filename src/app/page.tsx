import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProjectGrid from "@/components/ProjectGrid";
import StackSection from "@/components/StackSection";
import Contact from "@/components/Contact";
import EnvironmentSwitcher from "@/components/EnvironmentSwitcher";
import Experience from "@/components/Experience";
import Achievements from "@/components/Achievements";

export default function Home() {
  return (
    <main className="relative bg-background overflow-x-hidden">
      <Navbar />
      <Hero />
      <ProjectGrid />
      <Experience />
      <Achievements />
      <StackSection />
      <Contact />
      <EnvironmentSwitcher />
      
      {/* Global Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-primary/5 blur-[150px] rounded-full" />
        <div className="absolute bottom-[10%] left-[-5%] w-[500px] h-[500px] bg-secondary/5 blur-[120px] rounded-full" />
      </div>
    </main>
  );
}
