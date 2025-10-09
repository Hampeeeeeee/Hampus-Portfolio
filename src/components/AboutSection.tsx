import { Briefcase, Code, User } from "lucide-react";
import { InfoTabs } from "./InformationTabs";
import { ProfileHeader } from "./ProfileHeader";

export function AboutSection() {
  return (
    <>
      <section className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            About <span className="text-primary"> Me</span>
          </h2>
          <div className="flex flex-col items-center justify-center px-4">
            <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center w-full gap-8">
              <div className="flex flex-col gap-4 items-start">
                <ProfileHeader />
                <InfoTabs />
              </div>

              <div className="grid grid-cols-1 gap-6  min-w-[400px]">
                <div className="gradient-border p-6 card-hover">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-primary/10">
                      <Code className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-left">
                      <h4 className="font-semibold text-lg">Web Development</h4>
                      <p className="text-muted-foreground">
                        Creating responsive & clean designs using modern
                        technologies.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="gradient-border p-6 card-hover">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-primary/10">
                      <User className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-left">
                      <h4 className="font-semibold text-lg">UI/UX Design</h4>
                      <p className="text-muted-foreground">
                        Designing projects with seamless UI & UX in mind.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="gradient-border p-6 card-hover">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-primary/10">
                      <Briefcase className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-left">
                      <h4 className="font-semibold text-lg">
                        Project Management
                      </h4>
                      <p className="text-muted-foreground">
                        Creating projects with an agile mindset from beginning
                        till finished product.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
