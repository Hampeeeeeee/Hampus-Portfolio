import { Button } from "@/components/ui/button";

export function ProjectButton() {
    return (
        <a href="/projects">
            <Button
                variant="default"
                className="
                cosmic-button"
                >
                Projects
                </Button>
        </a>
    );
}