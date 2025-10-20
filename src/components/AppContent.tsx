import Navigation from "./Navigation";
import Content from "./home/Content";

export default function AppContent() {
  return (
    <div className={"min-h-screen bg-gray-50"}>
      <Navigation />
      <Content />
    </div>
  );
}
