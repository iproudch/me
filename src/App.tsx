import "./App.css";
import AppContent from "./components/AppContent";
import Footer from "./components/home/Footer";
import { RouteParameterProvider } from "./context/RouteParameter";

function App() {
  return (
    <RouteParameterProvider>
      <AppContent />
      <Footer />
    </RouteParameterProvider>
  );
}

export default App;
