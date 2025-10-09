import { profile } from "@/data/profile";

export default function ProjectTab() {
  return (
    <div className="border-1 p-4 rounded-b">
        {profile.projects.map((project, index) => (
            <div key={index} className="border-b border-primary">
                <h3 className="text-lg font-semibold text-primary">{project.title}</h3>
                <p className="text-primary">{project.description}</p>
                {project.img && (
                    <a href={project.url} target="_blank" rel="noopener noreferrer">
                    <img
                    src={project.img}
                    alt={`${project.title} screenshot`}
                    className="mt-2 rounded-lg shadow-sm w-[380px] h-[240px]"
                    />
                    </a>
                )}
                <a href={project.url}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="text-blue-500 underline hover:trext-blue-700 mt-1 inline-block py-4"   
                   >
                    View Project - GitHub
                </a>
            </div>
        ))}
    </div>
    );
}