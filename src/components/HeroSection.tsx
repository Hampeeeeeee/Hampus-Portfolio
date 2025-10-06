// import { GritAcademyBadge } from "@/badges/GritAcademyBadge";
import { InfoTabs } from "./InformationTabs";
import { ProfileHeader } from "./ProfileHeader";

export function HeroSection() {
    return (
        <section 
        id="hero"
        className="relative min-h-screen flex flex-col items-center justify-center px-4"
        >
            <div className="container mx-auto text-center z-10">
            <ProfileHeader />
            <InfoTabs />
            {/* <GritAcademyBadge /> */}
            </div>
        </section>
    )
}