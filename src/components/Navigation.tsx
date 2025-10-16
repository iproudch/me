import { sections } from "../constants/info";
import { useRouteParameter } from "../context/RouteParameter";

export default function Navigation() {
  const { handleChangeView, view } = useRouteParameter();

  return (
    <div className="sticky top-0 bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-lime-400 font-bold text-sm">
              CL
            </div>
            <span className="font-semibold text-gray-800">Chitchanok</span>
          </div>
          <div className="flex gap-2">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => handleChangeView(section.id)}
                className={`px-4 py-2 rounded-lg transition-all font-medium ${
                  view === section.id
                    ? "bg-black text-lime-400"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                {section.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
