import { Briefcase, Code, User } from "lucide-react";
import { InfoTabs } from "./InformationTabs";
import { ProfileHeader } from "./ProfileHeader";

export function AboutSection() {
  return (
    <>
      <section className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col items-center justify-center px-4">
            <div className="flex gap-8 items-start">
              <div className="flex flex-col gap-4 items-start">
                <ProfileHeader />
                <InfoTabs />
              </div>

              <div className="grid grid-cols-1 gap-6">
                <div className="gradient-border p-6 card-hover">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-primary/10">
                      <Code className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                </div>
                <div className="gradient-border p-6 card-hover">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-primary/10">
                      <User className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                </div>
                <div className="gradient-border p-6 card-hover">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-primary/10">
                      <Briefcase className="h-6 w-6 text-primary" />
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
