import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";
export default function NavBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const checkboxRef = useRef(null);

  // Fungsi untuk menutup navbar
  const closeNavbar = () => {
    if (checkboxRef.current) {
      checkboxRef.current.checked = false; // Uncheck checkbox
    }
  };

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

  // Gabungkan kedua fungsi
  const handleClick = (target) => {
    closeNavbar();
    handleNavigation(target);
  };

  const handleBlog = (target) => {
    closeNavbar();
    navigate(target);
  };
  return (
    <>
      <header className="fixed top-0 left-0 w-full mb-2 bg-white shadow px-4 z-50">
        <div className="relative mx-auto flex flex-col sm:flex-row max-w-screen-lg sm:items-center sm:justify-between py-4">
          <a
            className="flex items-center text-2xl font-black"
            href="#home"
            onClick={() => {
              closeNavbar();
              navigate("/");
            }}
          >
            <span>Azhral Dental</span>
          </a>
          <input
            type="checkbox"
            className="peer hidden"
            id="navbar-open"
            ref={checkboxRef}
          />
          <label
            className="sm:hidden cursor-pointer absolute right-0 mt-1 text-xl"
            htmlFor="navbar-open"
          >
            <span className="sr-only">Toggle Navigation</span>
            <FontAwesomeIcon icon={faBars} />
          </label>

          <nav
            aria-label="Header Navigation"
            className="peer-checked:block hidden sm:block py-4 sm:py-0"
          >
            <ul className="flex flex-col gap-y-4 sm:flex-row sm:gap-x-8">
              <li>
                <button
                  className="hover:text-blue-600"
                  onClick={() => handleClick("services")}
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  className="hover:text-blue-600"
                  onClick={() => handleClick("location")}
                >
                  Location
                </button>
              </li>

              <li>
                <button
                  className="hover:text-blue-600"
                  onClick={() => handleClick("gallery")}
                >
                  Gallery
                </button>
              </li>
              <li>
                <button
                  className="hover:text-blue-600"
                  onClick={() => handleBlog("/blog")}
                >
                  Blog
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
