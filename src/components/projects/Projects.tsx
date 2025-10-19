import { Code } from "lucide-react";
import { projects } from "../../constants/info";

export default function Projects() {
  return (
    <div className="space-y-8">
      <div className="flex  items-center">
        <h2 className="text-3xl font-bold text-gray-900">My Projects</h2>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-200 hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer"
          >
            <div
              className={`h-40 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}
            >
              <Code className="w-16 h-16 text-white/80" />
            </div>
            <div className="p-5">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
