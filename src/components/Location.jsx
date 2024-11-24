import React from "react";

const Location = () => {
  return (
    <div className="">
      <div className="mx-5 mb-20 mt-5 rounded-lg border-4 md:mx-auto md:max-w-2xl">
        {/* google maps */}
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.1393008360646!2d110.34935961167609!3d-6.992869568458499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708b73d48f2f67%3A0x9a94c3d2dc218708!2sAzhar%20Dental%20Space%20(drg.%20Syaiful%20Azhar)!5e0!3m2!1sid!2sid!4v1732193174691!5m2!1sid!2sid"
            width="100%"
            height="350" // asilnya 450
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Lokasi Klinik"
          ></iframe>
        </div>

        {/* location detail */}
        <div className="mx-5 my-3">
          <div className="my-2 p-2 rounded-full border-4">
            Azhar Dental Space
          </div>
          <div className="my-2 p-2 rounded-full border-4">
            Ruko Ngaliyan Square.1A, Kota Semarang, Jawa Tengah 50184
          </div>
          <div className="my-2 p-2 rounded-full border-4">0821xxxxxxx</div>
        </div>

        {/* button get direction */}
        <div className="flex justify-center py-3">
          <button className=" bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">
            Get Direction
          </button>
        </div>
      </div>
    </div>
  );
};

export default Location;
