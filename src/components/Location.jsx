import React from "react";

const Location = () => {
  return (
    <div id="location" className="mb-10 pt-16 -mt-16">
      <div className="mx-10 mt-5 rounded-2xl md:mx-40 lg:mx-80 xl:mx-500px overflow-hidden">
        {/* google maps */}
        <div className="">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.1393008360646!2d110.34935961167609!3d-6.992869568458499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708b73d48f2f67%3A0x9a94c3d2dc218708!2sAzhar%20Dental%20Space%20(drg.%20Syaiful%20Azhar)!5e0!3m2!1sid!2sid!4v1732193174691!5m2!1sid!2sid"
            width="100%"
            height="250" // asilnya 450
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Lokasi Klinik Gigi"
          ></iframe>
        </div>

        <div className=" bg-location">
          {/* location detail */}
          <div className="">
            <div className="mx-10 pt-4">
              <div className="text-lg p-3 rounded-2xl flex justify-center text-center bg-white">
                Azhar Dental Space
              </div>
              <div className="text-lg my-2 p-2 rounded-2xl flex justify-center text-center bg-white">
                Ruko Ngaliyan Square.1A, Kota Semarang, Jawa Tengah 50184
              </div>
              <div className="text-lg my-2 p-2 rounded-2xl flex justify-center text-center bg-white">
                082123456789
              </div>
            </div>
          </div>

          {/* button get direction */}
          <div className="flex justify-center pt-2 pb-3">
            <button
              onClick={() =>
                window.open(
                  "https://maps.app.goo.gl/xFcRB5RPV41t9r6B8",
                  "_blank"
                )
              }
              className="bg-green hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"
            >
              Get Direction
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
