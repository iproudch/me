import { Github, Linkedin, Mail } from "lucide-react";
import { contactLinks } from "../../constants/info";
import { useRouteParameter } from "../../context/RouteParameter";

type ContactLinkProps = {
  showMail?: boolean;
};

export default function ContactLink(props: ContactLinkProps) {
  const { showMail = true } = props;
  const { handleChangeView } = useRouteParameter();

  return (
    <>
      <a
        href={contactLinks.github}
        target="_blank"
        className="w-12 h-12 bg-white/40 backdrop-blur rounded-full flex items-center justify-center hover:bg-white/60 transition-colors cursor-pointer"
      >
        <Github className="w-6 h-6 text-gray-800" />
      </a>
      <a
        href={contactLinks.linkedin}
        target="_blank"
        className="w-12 h-12 bg-white/40 backdrop-blur rounded-full flex items-center justify-center hover:bg-white/60 transition-colors cursor-pointer"
      >
        <Linkedin className="w-6 h-6 text-gray-800" />
      </a>
      {showMail && (
        <div
          onClick={() => handleChangeView("contact")}
          className="w-12 h-12 bg-white/40 backdrop-blur rounded-full flex items-center justify-center hover:bg-white/60 transition-colors cursor-pointer"
        >
          <Mail className="w-6 h-6 text-gray-800" />
        </div>
      )}
    </>
  );
}
