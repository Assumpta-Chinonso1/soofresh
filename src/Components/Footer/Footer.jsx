// Footer.js
import './Footer.css';
import { assets } from '../../assets/assests';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <div className="footer-socials-container">
           <div className="footer-socials">
  <div className="social-icon">
    <img src={assets.facebook} alt="Facebook" className="icon-default" />
    <img src={assets.fb_or} alt="Facebook orange" className="icon-hover" />
  </div>
  <div className="social-icon">
    <img src={assets.twitter} alt="Twitter" className="icon-default" />
    <img src={assets.twit_or} alt="Twitter orange" className="icon-hover" />
  </div>
  <div className="social-icon">
    <img src={assets.instagram} alt="Instagram" className="icon-default" />
    <img src={assets.ig_or} alt="Instagram orange" className="icon-hover" />
  </div>
</div>

<br />

          <div className="footer-copy">
            SoFresh Neighbourhood Market © 2025.
          </div>
        </div>
        <div>
          <h4>Company</h4>
          <ul>
            <li>The So Fresh Story</li>
          </ul>
        </div>
        <div>
          <h4>Policies</h4>
          <ul>
            <li>Return Policy</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <h4>Support</h4>
          <ul>
            <li>Contact Us</li>
            <li>Locations</li>
          </ul>
        </div>
        <div>
          <h4>Media</h4>
          <ul>
            <li>Blogs</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;



