// https://blog.logto.io/css-only-infinite-scroll

export default function Home() {
  return (
    <>
      {/* carousel edukasi */}
      <div className="carousel">
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
    </>
  );
}
