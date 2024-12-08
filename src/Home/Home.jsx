// https://blog.logto.io/css-only-infinite-scroll
import "./Home.css";
import Services from "../components/Services";
import Location from "../components/Location";
import Gallery from "../components/Gallery";

export default function Home() {
  return (
    <>
      {/* carousel edukasi */}
      <div id="home" className="carousel">
        <div className="group">
          <div className="card">A</div>
          <div className="card">B</div>
          <div className="card">C</div>
        </div>
        {/* aria-hidden to hidden the duplicated car from screen readers */}
        <div aria-hidden className="group">
          <div className="card">A</div>
          <div className="card">B</div>
          <div className="card">C</div>
        </div>
      </div>

      <div id="services">
        <Services />
      </div>
      <div id="location">
        <Location />
      </div>
      <div id="gallery">
        <Gallery />
      </div>
    </>
  );
}
