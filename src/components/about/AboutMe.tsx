import { Calendar, Code, Database, Layout, MapPin, Server } from "lucide-react";
import { contactDetails } from "../../constants/info";

export default function AboutMe() {
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

  const techs = [
    "React",
    "TypeScript",
    "Node.js",
    "Java",
    "MongoDB",
    "PostgreSQL",
  ];

  return (
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
                  experience across the full software development lifecycle. My
                  expertise spans from designing intuitive user interfaces to
                  architecting robust backend systems.
                </p>
                <p>
                  Throughout my career, I've worked with leading companies like
                  Make Digital, Ttb Bank, and AIS, where I've contributed to
                  critical projects ranging from mobile banking applications to
                  enterprise web systems.
                </p>
                <p>
                  I'm passionate about creating efficient, scalable solutions
                  and staying current with the latest technologies. My approach
                  combines technical excellence with a focus on user experience
                  and business value.
                </p>
              </div>
            </div>
            <div className="flex gap-6 pt-4">
              <div className="flex items-center gap-2 text-gray-600">
                <MapPin className="w-5 h-5 text-lime-500" />
                <span>{contactDetails.address}</span>
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
                <span className="font-medium text-gray-800">{skill.name}</span>
              </div>
            ))}
            <div className="pt-4">
              <h4 className="text-sm font-semibold text-gray-600 mb-3">
                Technologies
              </h4>
              <div className="flex flex-wrap gap-2">
                {techs.map((tech, index) => (
                  <span
                    key={index}
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
  );
}
