import { Link } from "react-router-dom";
import {FaHome, FaUtensils, FaInfoCircle, FaPhoneAlt} from "react-icons/fa";

export default function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src="/logo.png" alt="Shuddhi Gram Kitchen Logo" />
        <span>Shuddhi's Ayurvedic Kitchen</span>
      </div>
      <nav>
        <Link to="/">
        <FaHome /> Home
        </Link>


        <Link to="/menu">
        <FaUtensils /> Menu
        </Link>


        <Link to="/about">
        <FaInfoCircle /> About
        </Link>


        <Link to="/contact">
        <FaPhoneAlt /> Contact
        </Link>
      </nav>
      
    </header>
  );
}