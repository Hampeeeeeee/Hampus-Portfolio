import { Button } from "@/components/ui/button";

export function MailtoButton() {
  return (
    <a href="mailto:hampus_svensson99@hotmail.com">
      <Button
        variant="default"
        className="
        flex justify-between rounded-md py-4 px-6
      bg-gray-100 text-black border border-blue-200 shadow-sm cursor-pointer
        hover:bg-transparent hover:text-primary hover:shadow-none"
      >
        Contact
      </Button>
    </a>
  );
}
