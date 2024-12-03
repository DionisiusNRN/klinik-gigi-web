import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faYoutube,
  faXTwitter,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

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
