import { Link } from "react-router-dom";
import "./App.css";
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
import { GitHubBadge } from "./badges/GithubBadge";
import { LinkedInBadge } from "./badges/LinkedInBadge";
import { MailtoButton } from "./components/ContactButton";
import { ProfileHeader } from "./components/ProfileHeader";
import { InfoTabs } from "./components/InformationTabs";
import { GritAcademyBadge } from "./badges/GritAcademyBadge";
import { ThemeToggle } from "./components/ThemeToggle";

function App() {
  return (
    <>
      <div className="min-h-screen bg-background text-foreground overflow-hidden">
        <header className="flex items-center justify-between p-4 bg-blue-100 border-b border-blue-200 rounded-b-sm shadow-sm">
          <NavigationMenu className="gap-5">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className="hover:bg-blue-50 shadow-sm"
                  aria-label="Projects"
                >
                  Projects
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink
                    asChild
                    className="text-black rounded px-4 py-2"
                  >
                    <Link to="/projects" aria-label="Projects">
                      Projects
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
            <MailtoButton aria-label="Contact Button" />
          </NavigationMenu>

          <h1
            className="text-2xl font-serif justify-center"
            aria-label="Portofolio of Hampus Svensson"
          >
            Portfolio of Hampus Svensson
          </h1>
          <span className="flex gap-2 justify-between">
            <ThemeToggle />
            <GitHubBadge aria-label="Link to GitHub Profile" />
            <LinkedInBadge aria-label="Link to LinkedIn Profile" />
          </span>
        </header>
        <article className="p-4">
          <ProfileHeader />
          <section className="flex py-4">
            <InfoTabs />
            <GritAcademyBadge />
          </section>
        </article>
      </div>
    </>
  );
}

export default App;
