import { FaInstagram, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <p>
        Visit ShuddhiGramNepal:{" "}
        <a
          href="https://shuddhigramnepal.com/"
          target="_blank"
          rel="noreferrer"
        >
          Click here
        </a>
      </p>
      

      {/* Social Icons */}
      <div className="footer-social">
        <a
          href="https://www.instagram.com/shuddhigramnepal"
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>

        <a
          href="https://www.facebook.com/ShuddhiGramNepal"
          target="_blank"
          rel="noreferrer"
          aria-label="Facebook"
        >
          <FaFacebook />
        </a>
      </div>
      <p>Address:Sanepa-02, Lalitpur 44600</p>
      <p>Contact No: 9704553254</p>

      <div className="copyright">
        <p>© ShuddhiGram Nepal</p>
      </div>
    </footer>
  );
}
