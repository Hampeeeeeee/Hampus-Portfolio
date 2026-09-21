import { Button } from "@/components/ui/button";
import { Link } from "react-router";

export function ProjectButton() {
    return (
        <Link to="/projects">
            <Button
                variant="default"
                className="
                cosmic-button,
                cursor-pointer
                "
                >
                Projects
                </Button>
        </Link>
    );
}