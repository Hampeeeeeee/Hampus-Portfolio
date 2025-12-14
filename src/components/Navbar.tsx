import { useEffect, useState } from "react";
import { GitHubBadge } from "@/badges/GithubBadge";
import { LinkedInBadge } from "@/badges/LinkedInBadge";
import { MailtoButton } from "./ContactButton";
import { ThemeToggle } from "./ThemeToggle";
import { cn } from "@/lib/utils";
import { ProjectButton } from "./ProjectButton";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  //   const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "z-50 fixed w-full transition-all duration-300",
        isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        <a
          className="text-xl font-bold text-primary flex items-center"
          href="#hero"
        >
          <span className="relative z-10">
            <span className="text-glow text-foreground"> Hampus Svensson </span>{" "}
            Portfolio
          </span>
        </a>

        {/* Desktop Nav */}

        <div className="hidden md:flex space-x-4">
          <ProjectButton aria-label="Projects Button" />
          <MailtoButton aria-label="Contact Button" />
          <span className="flex space-x-2">
            <GitHubBadge aria-label="Link to GitHub Profile" />
            <LinkedInBadge aria-label="Link to LinkedIn Profile" />
            <ThemeToggle />
          </span>
        </div>
      </div>
    </nav>
  );
}
