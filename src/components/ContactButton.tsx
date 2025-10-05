import { Button } from "@/components/ui/button"

export function MailtoButton() {
  return (
    <a href="mailto:hampus_svensson99@hotmail.com">
      <Button variant="default" className="flex items-center justify-between rounded-md py-4 px-6 gap-4 bg-white text-black border-b border-blue-200 hover:bg-blue-50 shadow-sm">Contact</Button>
    </a>
  )
}