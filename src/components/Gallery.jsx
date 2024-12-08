export default function Gallery() {
  return (
    <>
      <div id="gallery" className="my-10 pt-16 -mt-16">
        <h2 className="flex justify-center text-5xl font-semibold mb-5">
          Galery
        </h2>
        <div className=" flex flex-col lg:flex-row lg:w-3/4 gap-4 mx-auto w-80">
          <div className="">
            <img src="./images/cabut-gigi.jpg" alt="" />
          </div>
          <div className="">
            <img src="./images/cabut-gigi.jpg" alt="" />
          </div>
          <div className="">
            <img src="./images/cabut-gigi.jpg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
