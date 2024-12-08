export default function Services() {
  return (
    <>
      {/* daftar layanan */}
      <div
        id="services"
        className="p-3 md:grid md:grid-cols-2 md:mx-9 lg:mx-32 xl:mx-56 pt-16 -mt-16"
      >
        <div className="flex m-3 rounded-3xl shadow-lg overflow-hidden">
          <img
            src="/images/tambal-gigi.jpg"
            alt="tambal gigi"
            width={130}
            height={65}
            className="w-1/3 object-cover"
          />
          <div className="w-2/3 bg-blue-500 flex justify-center items-center">
            <p className="font-bold font-service text-4xl sm:text-6xl md:text-4xl text-white">
              Tambal Gigi
            </p>
          </div>
        </div>

        <div className="flex m-3 rounded-3xl shadow-lg overflow-hidden">
          <img
            src="/images/scalling.jpg"
            alt="scalling"
            width={130}
            height={65}
            className="w-1/3 object-cover"
          />
          <div className="w-2/3 bg-yellow flex justify-center items-center">
            <p className="font-bold font-service text-4xl sm:text-6xl md:text-4xl text-white">
              Scalling
            </p>
          </div>
        </div>

        <div className="flex m-3 rounded-3xl shadow-lg overflow-hidden">
          <img
            src="/images/veneer.jpg"
            alt="veneer"
            width={130}
            height={65}
            className="w-1/3 object-cover"
          />
          <div className="w-2/3 bg-green flex justify-center items-center">
            <p className="font-bold font-service text-4xl sm:text-6xl md:text-4xl text-white">
              Veneer
            </p>
          </div>
        </div>

        <div className="flex m-3 rounded-3xl shadow-lg overflow-hidden">
          <img
            src="/images/behel.jpg"
            alt="behel gigi"
            width={130}
            height={65}
            className="w-1/3 object-cover"
          />
          <div className="w-2/3 bg-orange flex justify-center items-center">
            <p className="font-bold font-service text-4xl sm:text-6xl md:text-4xl text-white">
              Behel Gigi
            </p>
          </div>
        </div>

        <div className="flex m-3 rounded-3xl shadow-lg overflow-hidden">
          <img
            src="/images/cabut-gigi.jpg"
            alt="cabut gigi"
            width={130}
            height={65}
            className="w-1/3 object-cover"
          />
          <div className="w-2/3 bg-pink flex justify-center items-center">
            <p className="font-bold font-service text-4xl sm:text-6xl md:text-4xl text-white">
              Cabut Gigi
            </p>
          </div>
        </div>

        <div className="flex m-3 rounded-3xl shadow-lg overflow-hidden">
          <img
            src="/images/cabut-gigi.jpg"
            alt="cabut gigi"
            width={130}
            height={65}
            className="w-1/3 object-cover"
          />
          <div className="w-2/3 bg-pink flex justify-center items-center">
            <p className="font-bold  font-service text-4xl sm:text-6xl md:text-4xl text-white">
              Gatau
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
