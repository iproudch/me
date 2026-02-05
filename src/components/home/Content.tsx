import { useMemo } from "react";
import { useRouteParameter } from "../../context/RouteParameter";
import AboutMe from "../about/AboutMe";
// import Contact from "../contact/Contact";
import Experience from "../experience/Experience";
import Projects from "../projects/Projects";
import HomePage from "./HomePage";

export default function Content() {
  const { view } = useRouteParameter();

  const viewComponent = useMemo(() => {
    switch (view) {
      case "home":
        return <HomePage />;
      case "about":
        return <AboutMe />;
      case "experience":
        return <Experience />;
      case "projects":
        return <Projects />;
      // case "contact":
      //   return <Contact />;
      default:
        return <HomePage />;
    }
  }, [view]);

  return <div className="max-w-7xl mx-auto px-6 py-12">{viewComponent}</div>;
}
