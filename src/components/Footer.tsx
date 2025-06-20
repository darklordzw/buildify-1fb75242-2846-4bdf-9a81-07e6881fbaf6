
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>AutoElite</h3>
            <p>Your trusted partner in finding the perfect vehicle for your lifestyle and needs.</p>
            <div className="social-links">
              <a href="#" aria-label="Facebook"><span>Facebook</span></a>
              <a href="#" aria-label="Instagram"><span>Instagram</span></a>
              <a href="#" aria-label="Twitter"><span>Twitter</span></a>
              <a href="#" aria-label="YouTube"><span>YouTube</span></a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#featured">Models</a></li>
              <li><a href="#why-choose-us">Why Choose Us</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li><a href="#">New Vehicles</a></li>
              <li><a href="#">Pre-Owned Vehicles</a></li>
              <li><a href="#">Financing</a></li>
              <li><a href="#">Service & Parts</a></li>
              <li><a href="#">Trade-In</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Newsletter</h4>
            <p>Subscribe to receive updates on new models and special offers.</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Your email address" required />
              <button type="submit" className="btn btn-primary">Subscribe</button>
            </form>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} AutoElite. All rights reserved.</p>
          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;