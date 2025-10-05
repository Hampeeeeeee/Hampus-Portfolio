import { Badge } from "@/components/ui/badge"
import { Linkedin } from "lucide-react"
import { profile } from "@/data/profile"


export function LinkedInBadge() {
  return (
    <a href={profile.contact.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
      <Badge variant="default" className="flex items-center text-1xl rounded-full gap-1 px-2 py-1 bg-blue-600 hover:bg-blue-50 hover:text-black transition-colors shadow-lg">
        <Linkedin className="h-4 w-4" />
        LinkedIn
      </Badge>
    </a>
  )
}