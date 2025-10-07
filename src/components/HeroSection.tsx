// import { GritAcademyBadge } from "@/badges/GritAcademyBadge";
import { ArrowDown } from "lucide-react";
import { AboutSection } from "./AboutSection";

export function HeroSection() {
  return (
    <>
      <section
        id="hero"
        className="relative min-h-screen flex flex-col items-center justify-center px-4"
      >
        <div className="container mx-auto text-center z-10">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              <span className="opacity-0 animate-fade-in"> Hi, I'm </span>
              <span className="text-primary opacity-0 animate-fade-in-delay-1">
                {" "}
                Hampus
              </span>
              <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
                {" "}
                Svensson{" "}
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
              I'm a frontend web developer student looking to create clean and
              resposive web applications using modern technologies.
            </p>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
              <span className="text-sm text-muted-foreground mb-2">Scroll</span>
              <ArrowDown className="h-5 w-5 text-primary" />
            </div>
          </div>
        </div>
      </section>
      <AboutSection />
    </>
  );
}
