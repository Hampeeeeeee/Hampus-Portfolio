import { MailIcon } from "../icons/MailIcon";
import { FaLinkedin } from "react-icons/fa";
import { MapIcon } from "lucide-react";
import { profile } from "@/data/profile";

export default function ContactTab() {
  return (
    <div className="bg-blue-50 p-4 rounded-b">
      <section className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <strong>Email:</strong>
          <a href={profile.contact.email}>
            <MailIcon />
          </a>
        </div>
        <div className="flex items-center gap-2">
          <strong>LinkedIn:</strong>
          <a href={profile.contact.linkedin}>
            <FaLinkedin className="h-6 w-6 text-blue-600" />
          </a>
        </div>
        <div className="flex items-center gap-2">
          <strong>Location:</strong>
          <i>{profile.contact.location}</i>
          <a
            href="https://www.google.se/maps/place/Malm%C3%B6/@55.570058,12.8511676,11z/data=!3m1!4b1!4m6!3m5!1s0x465305a574c491ff:0xd3a905dfbd4888e5!8m2!3d55.604981!4d13.003822!16s%2Fm%2F011l894y?entry=ttu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MapIcon />
          </a>
        </div>
      </section>
    </div>
  );
}