import { experiences } from "../../constants/info";

export default function Experience() {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-gray-900">Work Experience</h2>

      <div className="space-y-6 relative pl-8">
        <div className="absolute left-3 top-4 bottom-4 w-0.5 bg-lime-400"></div>

        {experiences.map((exp, index) => (
          <div key={index} className="relative">
            <div className="absolute -left-7 w-4 h-4 bg-lime-500 rounded-full border-4 border-white shadow"></div>
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
                <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                  {exp.period}
                </span>
              </div>
              <p className="text-lime-600 font-semibold mb-4">{exp.company}</p>
              <p className="text-gray-700 leading-relaxed mb-4">
                {exp.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {exp.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
