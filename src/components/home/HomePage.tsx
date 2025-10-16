import { Download, Github, Linkedin, Mail } from "lucide-react";
import { useRouteParameter } from "../../context/RouteParameter";

export default function HomePage() {
  const { handleChangeView } = useRouteParameter();
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
                <button className="px-6 py-3 bg-lime-400 text-black font-semibold rounded-lg hover:bg-lime-500 transition-colors flex items-center gap-2">
                  <Download className="w-5 h-5" />
                  Download Resume
                </button>
                <button className="px-6 py-3 bg-white/10 backdrop-blur text-white font-semibold rounded-lg hover:bg-white/20 transition-colors">
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
                <div className="w-12 h-12 bg-white/40 backdrop-blur rounded-full flex items-center justify-center hover:bg-white/60 transition-colors cursor-pointer">
                  <Github className="w-6 h-6 text-gray-800" />
                </div>
                <div className="w-12 h-12 bg-white/40 backdrop-blur rounded-full flex items-center justify-center hover:bg-white/60 transition-colors cursor-pointer">
                  <Linkedin className="w-6 h-6 text-gray-800" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 rounded-2xl shadow-lg p-16 text-white text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="w-32 h-32 bg-lime-400 rounded-full mx-auto flex items-center justify-center border-4 border-lime-300">
            <span className="text-4xl font-bold text-gray-900">CL</span>
          </div>
          <h1 className="text-6xl font-bold">Chitchanok Laicharoen</h1>
          <p className="text-2xl text-gray-300">
            Software Developer | Full Stack Engineer
          </p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Building elegant solutions with modern technologies. Specialized in
            React, TypeScript, and backend systems.
          </p>
          <div className="flex gap-4 justify-center pt-4">
            <button
              className="px-8 py-4 bg-lime-400 text-black font-semibold rounded-lg hover:bg-lime-500 transition-all text-lg flex items-center gap-2"
              onClick={() => handleChangeView("contact")}
            >
              <Mail className="w-5 h-5" />
              Get In Touch
            </button>
            <button
              className="px-8 py-4 bg-white/10 backdrop-blur text-white font-semibold rounded-lg hover:bg-white/20 transition-all text-lg"
              onClick={() => handleChangeView("projects")}
            >
              View Work
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
