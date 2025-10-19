import { Download } from "lucide-react";
import { useRouteParameter } from "../../context/RouteParameter";
import ContactLink from "../contact/ContactLink";

export default function HomePage() {
  const { handleChangeView } = useRouteParameter();
  const fileUrl = `${import.meta.env.BASE_URL}Chitchanok_Laicharoen_Resume.pdf`;

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
        <div className="grid grid-cols-2 gap-0 min-h-[500px]">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-12 flex flex-col justify-center text-white">
            <div className="space-y-6">
              <h1 className="text-5xl font-bold">
                Hello,
                <br />
                I'm Chitchanok Laicharoen
              </h1>
              <p className="text-xl text-gray-300">
                Accomplished software developer with 6 years of experience in
                software development cycle.
              </p>
              <div className="flex gap-4 pt-4">
                <a
                  href={fileUrl}
                  download
                  target="_blank"
                  className="px-6 py-3 bg-lime-400 text-black font-semibold rounded-lg hover:bg-lime-500 transition-colors flex items-center gap-2"
                >
                  <Download className="w-5 h-5" />
                  Download Resume
                </a>
                <button
                  onClick={() => handleChangeView("projects")}
                  className="px-6 py-3 bg-white/10 backdrop-blur text-white font-semibold rounded-lg hover:bg-white/20 transition-colors"
                >
                  View Projects
                </button>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-lime-300 via-lime-300 to-blue-300 p-12 flex items-center justify-center">
            <div className="text-center">
              <div className="w-56 h-56 bg-white/30 backdrop-blur-sm rounded-full mx-auto mb-6 flex items-center justify-center border-4 border-white/50">
                <div className="text-6xl font-bold text-gray-800">CL</div>
              </div>
              <div className="flex gap-4 justify-center">
                <ContactLink />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
