import { Mail, MapPin } from "lucide-react";
import ContactLink from "./ContactLink";
import { contactDetails } from "../../constants/info";
import { useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    defaultValues: { name: "", email: "", message: "" },
  });
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => emailjs.init(PUBLIC_KEY), []);

  const onSubmit = () => {
    if (!formRef.current) return;
    console.log("PUBLIC_KEY", PUBLIC_KEY);

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(
        () => alert("Email sent!"),
        (error) => {
          alert("Failed to send email: " + error.text);
          console.log(error);
        }
      )
      .finally(() => {
        reset();
      });
  };

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact Me</h2>

      <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
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
            <form
              ref={formRef}
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-5"
            >
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Name
                </label>
                <input
                  {...register("name", { required: "Name is required" })}
                  type="text"
                  placeholder="Your name"
                  className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors ${
                    errors.name
                      ? "border-red-400 focus:border-red-400"
                      : "border-gray-200 focus:border-lime-400"
                  }`}
                />
                {errors.name && (
                  <p className="text-sm text-red-500 mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email
                </label>
                <input
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Invalid email format",
                    },
                  })}
                  type="email"
                  placeholder="your.email@example.com"
                  className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors ${
                    errors.email
                      ? "border-red-400 focus:border-red-400"
                      : "border-gray-200 focus:border-lime-400"
                  }`}
                />
                {errors.email && (
                  <p className="text-sm text-red-500 mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  {...register("message", { required: "Message is required" })}
                  rows={5}
                  placeholder="Tell me about your project..."
                  className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors resize-none ${
                    errors.message
                      ? "border-red-400 focus:border-red-400"
                      : "border-gray-200 focus:border-lime-400"
                  }`}
                />
                {errors.message && (
                  <p className="text-sm text-red-500 mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-lime-400 text-black font-bold rounded-lg hover:bg-lime-500 transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
              >
                <Mail className="w-5 h-5" />
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
