import { Mail, MapPin } from "lucide-react";
import ContactLink from "./ContactLink";
import { contactDetails } from "../../constants/info";

export default function Contact() {
  return (
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
                  <p className="font-semibold">{contactDetails.email}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-white/20 backdrop-blur rounded-lg">
                <div className="w-12 h-12 bg-white/40 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-800">Location</p>
                  <p className="font-semibold">{contactDetails.address}</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <p className="text-sm text-gray-800 mb-3">Follow me on</p>
              <div className="flex gap-3">
                <ContactLink showMail={false} />
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
  );
}
