import "./App.css";
import Home from "./components/Home";
import Services from "./components/Services";
import Location from "./components/Location";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  return (
    <>
      <Home />
      <Services />
      <Location />
      <Gallery />
      <Footer />
    </>
  );
}

export default App;
