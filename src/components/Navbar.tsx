import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { GitHubBadge } from "@/badges/GithubBadge";
import { LinkedInBadge } from "@/badges/LinkedInBadge";
import { MailtoButton } from "./ContactButton";
import { ThemeToggle } from "./ThemeToggle";
import { cn } from "@/lib/utils";
// import { Menu, X } from "lucide-react";

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

        <div className="hidden md:flex space-x-8">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className="
                  flex items-center justify-between rounded-md py-4 px-4
                bg-gray-100 text-black border border-blue-200 shadow-sm cursor-pointer
                  hover:bg-transparent hover:text-primary hover:shadow-none"
                  aria-label="Projects"
                >
                  Projects
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink
                    asChild
                    className="text-primary rounded py-2 hover:bg-gray-50"
                  >
                    <Link to="/projects" aria-label="Projects">
                      Projects
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <MailtoButton aria-label="Contact Button" />
          <span className="flex gap-2 justify-between">
            <GitHubBadge aria-label="Link to GitHub Profile" />
            <LinkedInBadge aria-label="Link to LinkedIn Profile" />
            <ThemeToggle />
          </span>
        </div>
      </div>
    </nav>
  );
}
