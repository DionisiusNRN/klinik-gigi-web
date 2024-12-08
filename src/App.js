import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./Home/Home";
import WhatsApp from "./components/WhatsApp";
import Footer from "./components/Footer";
import Blog from "./components/Blog/Blog";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />

      <main className="flex-grow">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                {/* <Services />
                <Location />
                <Gallery /> */}
              </>
            }
          />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </main>
      <WhatsApp />
      <Footer />
    </div>
  );
}

export default App;
