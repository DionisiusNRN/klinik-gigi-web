import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faYoutube,
  faXTwitter,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  // Fungsi untuk menangani navigasi
  const handleNavigation = (target) => {
    if (location.pathname !== "/") {
      // Pindah ke halaman utama, lalu scroll
      navigate("/");
      setTimeout(() => {
        document.getElementById(target)?.scrollIntoView({ behavior: "smooth" });
      }, 100); // Delay agar navigasi selesai terlebih dahulu
    } else {
      // Jika sudah di halaman utama, langsung scroll
      document.getElementById(target)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="mt-auto">
      <div className="bottom-0 left-0 w-full bg-blue-300">
        <div className="flex justify-center text-center gap-3 py-5">
          <div className="text-black hover:text-blue-700 hover:underline">
            <button
              className="hover:text-blue-600"
              onClick={() => handleNavigation("services")}
            >
              Services
            </button>
          </div>
          <div>
            <button
              className="hover:text-blue-600"
              onClick={() => navigate("/blog")}
            >
              Blog
            </button>
          </div>
          <div>
            <button
              className="hover:text-blue-600"
              onClick={() => handleNavigation("gallery")}
            >
              Gallery
            </button>
          </div>
        </div>

        <div className="flex justify-center text-center mb-3">
          <ul className="flex flex-row gap-3">
            <li>
              <FontAwesomeIcon icon={faInstagram} />
            </li>
            <li>
              <FontAwesomeIcon icon={faYoutube} />
            </li>
            <li>
              <FontAwesomeIcon icon={faXTwitter} />
            </li>
            <li>
              <FontAwesomeIcon icon={faTiktok} />
            </li>
          </ul>
        </div>

        <div className="text-center text-xs">
          <p>Copyright&copy; 2024</p>
          <p>Azhral Dental Care- All Right Reserved</p>
        </div>
      </div>
    </footer>
  );
}
