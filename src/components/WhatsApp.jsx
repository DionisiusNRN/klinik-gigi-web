export default function WhatsApp() {
  return (
    <>
      <div className="fixed right-0 z-50 inset-y-2/3 shadow-lg rounded-full">
        <button
          onClick={() =>
            window.open(
              "https://wa.me/6282133767539?text=Halo,%20saya%20ingin%20bertanya%20tentang%20pelayanan%20di%20Azhral%20Dental",
              "_blank"
            )
          }
        >
          <img
            src="/images/whatsapp.jpg"
            alt="whatsapp logo"
            className="max-w-14 absolute right-0"
          />
        </button>
      </div>
    </>
  );
}
