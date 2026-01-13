import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = ({ onScheduleClick }) => {
  const currentYear = new Date().getFullYear();

  // Icons
  const PhoneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );

  const MapPinIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );

  const ClockIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );

  const MailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );

  const FacebookIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );

  const InstagramIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );

  const CalendarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* CTA Banner */}
        <div className="footer-cta">
          <div className="footer-cta-content">
            <h3>Ready to Schedule?</h3>
            <p>We're here to care for your little ones</p>
          </div>
          <button className="footer-cta-btn" onClick={onScheduleClick}>
            <CalendarIcon />
            <span>Book Appointment</span>
          </button>
        </div>

        {/* Main Footer Grid */}
        <div className="footer-main">
          {/* Brand Column */}
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="footer-logo-icon">JP</div>
              <span className="footer-logo-text">Jackson Pediatrics</span>
            </div>
            <p className="footer-tagline">
              Providing compassionate, comprehensive pediatric care for children from birth through adolescence. Your child's health is our priority.
            </p>
            <div className="footer-social">
              <a
                href="#"
                className="footer-social-link"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FacebookIcon />
              </a>
              <a
                href="#"
                className="footer-social-link"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-column">
            <h4>Quick Links</h4>
            <nav className="footer-links">
              <Link to="/" className="footer-link">Home</Link>
              <Link to="/about" className="footer-link">About Us</Link>
              <Link to="/office" className="footer-link">Office Info</Link>
              <Link to="/forms" className="footer-link">Forms</Link>
              <Link to="/resources" className="footer-link">Resources</Link>
            </nav>
          </div>

          {/* Services */}
          <div className="footer-column">
            <h4>Services</h4>
            <nav className="footer-links">
              <a href="#" className="footer-link">Well-Child Visits</a>
              <a href="#" className="footer-link">Vaccinations</a>
              <a href="#" className="footer-link">Sick Visits</a>
              <a href="#" className="footer-link">Sports Physicals</a>
              <a href="#" className="footer-link">Chronic Care</a>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="footer-column">
            <h4>Contact Us</h4>
            <div className="footer-contact-item">
              <span className="footer-contact-icon"><PhoneIcon /></span>
              <div className="footer-contact-text">
                <a href="tel:5551234567">(555) 123-4567</a>
              </div>
            </div>
            <div className="footer-contact-item">
              <span className="footer-contact-icon"><MailIcon /></span>
              <div className="footer-contact-text">
                <a href="mailto:info@jacksonpediatrics.com">info@jacksonpediatrics.com</a>
              </div>
            </div>
            <div className="footer-contact-item">
              <span className="footer-contact-icon"><MapPinIcon /></span>
              <div className="footer-contact-text">
                123 Healthcare Blvd<br />
                Suite 100<br />
                City, State 12345
              </div>
            </div>
            <div className="footer-contact-item">
              <span className="footer-contact-icon"><ClockIcon /></span>
              <div className="footer-contact-text">
                Mon–Fri: 8am – 5pm<br />
                Sat: 9am – 12pm
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} Jackson Pediatrics. All rights reserved.
          </p>
          <div className="footer-legal">
            <a href="#" className="footer-legal-link">Privacy Policy</a>
            <a href="#" className="footer-legal-link">Terms of Service</a>
            <a href="#" className="footer-legal-link">HIPAA Notice</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
