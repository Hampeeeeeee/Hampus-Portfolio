import { profile } from "@/data/profile";

export default function ProjectTab() {
  return (
    <div className="border-1 p-4 rounded-b">
        {profile.projects.map((project, index) => (
            <div key={index} className="bg-gray-200 p-4 rounded shadow-md hover:shadow-lg transition-shadow m-2">
                <h3 className="text-lg font-semibold text-blue-600">{project.title}</h3>
                <p className="text-gray-700">{project.description}</p>
                {project.img && (
                    <a href={project.url} target="_blank" rel="noopener noreferrer">
                    <img
                    src={project.img}
                    alt={`${project.title} screenshot`}
                    className="mt-2 rounded-lg shadow-sm w-[300px] h-[240px]"
                    />
                    </a>
                )}
                <a href={project.url}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="text-blue-500 underline hover:trext-blue-700 mt-1 inline-block"   
                   >
                    View Project - GitHub
                </a>
            </div>
        ))}
    </div>
    );
}