import { useRouteParameter } from "../context/RouteParameter";
import { EViews } from "../enums/views";
import Navigation from "./Navigation";
import Content from "./home/Content";

export default function AppContent() {
  const { view } = useRouteParameter();

  return (
    <div className={view !== EViews.HOME ? "min-h-screen bg-gray-50" : ""}>
      <Navigation />
      <Content />
    </div>
  );
}
