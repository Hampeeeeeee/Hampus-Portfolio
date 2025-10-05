import { Badge } from "@/components/ui/badge"
import { Github } from "lucide-react"
import { profile } from "@/data/profile"

export function GitHubBadge() {
  return (
    <a href={profile.contact.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
      <Badge variant="default" className="flex items-center text-1xl rounded-full gap-1 px-2 py-1 bg-blue-600 hover:bg-blue-50 hover:text-black transition-colors shadow-lg">
        <Github className="h-4 w-4" />
        GitHub
      </Badge>
    </a>
  )
}