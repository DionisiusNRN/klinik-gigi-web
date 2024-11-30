export default function Footer() {
  return (
    <footer>
      <div className="bg-blue-300">
        <div className="flex justify-center text-center gap-3 py-5">
          <div className="text-black hover:text-blue-700 hover:underline">
            <a href="#">Services</a>
          </div>
          <div>
            <a href="#">Blog</a>
          </div>
          <div>
            <a href="#">Gallery</a>
          </div>
        </div>

        <div className="mx-24">
          <div className="bg-blue-500 my-2">
            <p className="text-white">Follow us on Instagram</p>
          </div>
          <div className="bg-red-500 my-2">
            <p className="text-white">Follow us on YouTube</p>
          </div>
          <div className="bg-green my-2">
            <p className="text-white">Follow us on X</p>
          </div>
          <div className="bg-black my-2">
            <p className="text-white">Follow us on TikTok</p>
          </div>
        </div>

        <div className="text-center text-xs">
          <p>Copyright&copy; 2024</p>
          <p>Azhral Dental Care- All Right Reserved</p>
        </div>
      </div>
    </footer>
  );
}
