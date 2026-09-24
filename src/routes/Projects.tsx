import { useState } from "react";
import { Navbar } from "../components/Navbar";
import { StarBackground } from "../components/StarBackground";
import { profile, techIcons } from "@/data/profile";
import type { Project } from "@/data/profile";

export default function Projects() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <>
      <div className="min-h-screen bg-background text-foreground overflow-hidden">
        <Navbar />
        <StarBackground />
        <main className="p-4">
          <div className="mx-auto max-w-5xl px-4 py-16">
            <h1 className="mb-10 text-3xl font-semibold text-foreground">
              Projects
            </h1>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {profile.projects.map((project: Project) => {
                const isOpen = openId === project.id;

                return (
                  <div
                    key={project.id}
                    className="py-2 hover:border border-primary/20 hover:bg-primary/10 rounded-lg p-4"
                  >
                    <button
                      onClick={() => setOpenId(isOpen ? null : project.id)}
                      aria-expanded={isOpen}
                      className="flex w-full items-baseline justify-between gap-4 py-4 text-left transition-colors hover:text-primary"
                    >
                      <span className="text-lg font-medium text-foreground cursor-pointer">
                        {project.title}
                      </span>
                      <span
                        className={`shrink-0 text-muted-foreground transition-transform duration-300 cursor-pointer ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      >
                        v
                      </span>
                    </button>

                    <div
                      className={`grid overflow-hidden transition-all duration-300 ease-out ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="min-h-0 pb-4">
                        <img
                          src={project.img}
                          alt={project.title}
                          className="mb-3 aspect-video w-full rounded-md border border-border/40 object-contain"
                        />
                        <p className="max-w-prose leading-relaxed text-muted-foreground text-left text-lg text-primary">
                          {project.description}
                        </p>
                        {project.stack && (
                          <div className="my-3 flex flex-wrap gap-2">
                            {project.stack.map((tech) => {
                              const Icon = techIcons[tech];

                              return Icon ? (
                                <span
                                  key={tech}
                                  title={tech}
                                  className="flex items-center justify-center rounded-full border border-border/60 p-1.5 text-muted-foreground bg-primary"
                                >
                                  <Icon
                                    className="h-4 w-4"
                                    aria-hidden="true"
                                  />
                                  <span className="sr-only">{tech}</span>
                                </span>
                              ) : (
                                <span
                                  key={tech}
                                  className="rounded-full border border-border/60 px-2.5 py-0.5 text-xs text-muted-foreground"
                                >
                                  {tech}
                                </span>
                              );
                            })}
                          </div>
                        )}
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-primary underline underline-offset-4"
                        >
                          View source
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <h1 className="mb-10 text-3xl font-semibold text-foreground">
            Have a look at my GitHub for more projects:{" "}
            <a
              href="https://github.com/Hampeeeeeee"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline underline-offset-4"
            >
              GitHub
            </a>
          </h1>
        </main>
      </div>
    </>
  );
}
