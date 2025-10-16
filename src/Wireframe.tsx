import React, { useState } from "react";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Calendar,
  ExternalLink,
  Download,
  Code,
  Database,
  Layout,
  Server,
} from "lucide-react";
import { experiences, projects, sections } from "./constants/info";

const PortfolioWireframe = () => {
  const [activeSection, setActiveSection] = useState("hero");

  const skills = [
    {
      name: "Frontend",
      icon: <Layout className="w-5 h-5" />,
      color: "bg-blue-500",
    },
    {
      name: "Backend",
      icon: <Server className="w-5 h-5" />,
      color: "bg-green-500",
    },
    {
      name: "Database",
      icon: <Database className="w-5 h-5" />,
      color: "bg-purple-500",
    },
    {
      name: "Full Stack",
      icon: <Code className="w-5 h-5" />,
      color: "bg-orange-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
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
                  onClick={() => setActiveSection(section.id)}
                  className={`px-4 py-2 rounded-lg transition-all font-medium ${
                    activeSection === section.id
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

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {activeSection === "hero" && (
          <div className="space-y-8">
            {/* Split Screen Hero */}
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
                      Accomplished software developer with 6 years of experience
                      in software development cycle.
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
                <div className="bg-gradient-to-br from-lime-400 via-lime-300 to-yellow-300 p-12 flex items-center justify-center">
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

            {/* Centered Hero Alternative */}
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
                  Building elegant solutions with modern technologies.
                  Specialized in React, TypeScript, and backend systems.
                </p>
                <div className="flex gap-4 justify-center pt-4">
                  <button className="px-8 py-4 bg-lime-400 text-black font-semibold rounded-lg hover:bg-lime-500 transition-all text-lg flex items-center gap-2">
                    <Mail className="w-5 h-5" />
                    Get In Touch
                  </button>
                  <button className="px-8 py-4 bg-white/10 backdrop-blur text-white font-semibold rounded-lg hover:bg-white/20 transition-all text-lg">
                    View Work
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeSection === "about" && (
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
              <div className="grid grid-cols-3 gap-8">
                <div className="col-span-2 space-y-6">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      About Me
                    </h2>
                    <div className="space-y-4 text-gray-700 leading-relaxed">
                      <p>
                        I'm an accomplished software developer with 6 years of
                        experience across the full software development
                        lifecycle. My expertise spans from designing intuitive
                        user interfaces to architecting robust backend systems.
                      </p>
                      <p>
                        Throughout my career, I've worked with leading companies
                        like Make Digital, Ttb Bank, and AIS, where I've
                        contributed to critical projects ranging from mobile
                        banking applications to enterprise web systems.
                      </p>
                      <p>
                        I'm passionate about creating efficient, scalable
                        solutions and staying current with the latest
                        technologies. My approach combines technical excellence
                        with a focus on user experience and business value.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-6 pt-4">
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin className="w-5 h-5 text-lime-500" />
                      <span>Nakhon Ratchasima, Thailand</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar className="w-5 h-5 text-lime-500" />
                      <span>6+ Years Experience</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Core Skills
                  </h3>
                  {skills.map((skill, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <div
                        className={`${skill.color} w-10 h-10 rounded-lg flex items-center justify-center text-white`}
                      >
                        {skill.icon}
                      </div>
                      <span className="font-medium text-gray-800">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                  <div className="pt-4">
                    <h4 className="text-sm font-semibold text-gray-600 mb-3">
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "React",
                        "TypeScript",
                        "Node.js",
                        "Java",
                        "MongoDB",
                        "PostgreSQL",
                      ].map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-lime-100 text-lime-800 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeSection === "experience" && (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-900">
              Work Experience
            </h2>

            {/* Timeline Layout */}
            <div className="space-y-6 relative pl-8">
              <div className="absolute left-3 top-4 bottom-4 w-0.5 bg-lime-400"></div>

              {experiences.map((exp, index) => (
                <div key={index} className="relative">
                  <div className="absolute -left-7 w-4 h-4 bg-lime-500 rounded-full border-4 border-white shadow"></div>
                  <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-bold text-gray-900">
                        {exp.title}
                      </h3>
                      <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-lime-600 font-semibold mb-4">
                      {exp.company}
                    </p>
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
        )}

        {activeSection === "projects" && (
          <div className="space-y-8">
            <div className="flex justify-between items-center">
              <h2 className="text-3xl font-bold text-gray-900">My Projects</h2>
              <button className="px-4 py-2 text-gray-600 hover:text-gray-900 font-medium flex items-center gap-2">
                View All <ExternalLink className="w-4 h-4" />
              </button>
            </div>

            {/* Project Grid */}
            <div className="grid grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <div
                  key={index}
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
                </div>
              ))}
            </div>
          </div>
        )}

        {activeSection === "contact" && (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
              Get In Touch
            </h2>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
              <div className="grid grid-cols-2 gap-0">
                <div className="bg-gradient-to-br from-lime-400 via-lime-500 to-lime-600 p-12 text-gray-900">
                  <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
                  <p className="text-gray-800 mb-8">
                    I'm always interested in hearing about new projects and
                    opportunities. Feel free to reach out!
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-center gap-4 p-4 bg-white/20 backdrop-blur rounded-lg">
                      <div className="w-12 h-12 bg-white/40 rounded-full flex items-center justify-center">
                        <Mail className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-800">Email</p>
                        <p className="font-semibold">chitchanok@example.com</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 p-4 bg-white/20 backdrop-blur rounded-lg">
                      <div className="w-12 h-12 bg-white/40 rounded-full flex items-center justify-center">
                        <MapPin className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-800">Location</p>
                        <p className="font-semibold">
                          Nakhon Ratchasima, Thailand
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8">
                    <p className="text-sm text-gray-800 mb-3">Follow me on</p>
                    <div className="flex gap-3">
                      <div className="w-12 h-12 bg-white/40 backdrop-blur rounded-full flex items-center justify-center hover:bg-white/60 transition-colors cursor-pointer">
                        <Github className="w-6 h-6" />
                      </div>
                      <div className="w-12 h-12 bg-white/40 backdrop-blur rounded-full flex items-center justify-center hover:bg-white/60 transition-colors cursor-pointer">
                        <Linkedin className="w-6 h-6" />
                      </div>
                      <div className="w-12 h-12 bg-white/40 backdrop-blur rounded-full flex items-center justify-center hover:bg-white/60 transition-colors cursor-pointer">
                        <Mail className="w-6 h-6" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-12">
                  <div className="space-y-5">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        placeholder="Your name"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-lime-400 focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        placeholder="your.email@example.com"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-lime-400 focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Message
                      </label>
                      <textarea
                        rows={5}
                        placeholder="Tell me about your project..."
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-lime-400 focus:outline-none transition-colors resize-none"
                      ></textarea>
                    </div>

                    <button className="w-full py-4 bg-lime-400 text-black font-bold rounded-lg hover:bg-lime-500 transition-colors flex items-center justify-center gap-2">
                      <Mail className="w-5 h-5" />
                      Send Message
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="bg-gray-900 text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2025 Chitchanok Laicharoen. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PortfolioWireframe;
