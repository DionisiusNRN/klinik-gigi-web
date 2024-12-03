import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
export default function NavBar() {
  return (
    <>
      <header className="fixed top-0 left-0 w-full mb-2 bg-white shadow px-4 z-50">
        <div className="relative mx-auto flex flex-col sm:flex-row max-w-screen-lg sm:items-center sm:justify-between py-4">
          <a className="flex items-center text-2xl font-black" href="/">
            <span>Home</span>
          </a>
          <input type="checkbox" className="peer hidden" id="navbar-open" />
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
                <a className="hover:text-blue-600" href="/">
                  Services
                </a>
              </li>
              <li>
                <a className="hover:text-blue-600" href="/">
                  Location
                </a>
              </li>
              <li>
                <a className="hover:text-blue-600" href="/">
                  Blog
                </a>
              </li>
              <li>
                <a className="hover:text-blue-600" href="/">
                  Gallery
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
