import './Home.css';

// Images
import heroImage from '../assets/images/Hero2.jpg';
import mainBanner from '../assets/images/MainBanner.jpg';
import headshotImage from '../assets/images/Headshot.jpg';
import buildingImage from '../assets/images/Building.jpg';

const Home = ({ onScheduleClick }) => {
  // Icons
  const HeartIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );

  const ImageIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <polyline points="21 15 16 10 5 21" />
    </svg>
  );

  const ShieldIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );

  const StarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );

  const ClockIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );

  const UsersIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );

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

  const AwardIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="7" />
      <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
    </svg>
  );

  const ActivityIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  );

  const ClipboardIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
    </svg>
  );

  const SyringeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m18 2 4 4" />
      <path d="m17 7 3-3" />
      <path d="M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5" />
      <path d="m9 11 4 4" />
      <path d="m5 19-3 3" />
      <path d="m14 4 6 6" />
    </svg>
  );

  const ThermometerIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z" />
    </svg>
  );

  const BrainIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z" />
      <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z" />
    </svg>
  );

  const services = [
    {
      icon: <ClipboardIcon />,
      title: 'Well-Child Visits',
      description: 'Comprehensive checkups to monitor growth, development, and overall health at every stage.',
      color: 'primary'
    },
    {
      icon: <SyringeIcon />,
      title: 'Vaccinations',
      description: 'Complete immunization services following CDC guidelines to protect your child.',
      color: 'accent'
    },
    {
      icon: <ThermometerIcon />,
      title: 'Sick Visits',
      description: 'Same-day appointments available when your little one isn\'t feeling their best.',
      color: 'secondary'
    },
    {
      icon: <ActivityIcon />,
      title: 'Sports Physicals',
      description: 'Pre-participation exams to ensure your child is ready for athletics and activities.',
      color: 'warm'
    },
    {
      icon: <BrainIcon />,
      title: 'Learning & Development',
      description: 'Assessment and support for developmental milestones and learning concerns.',
      color: 'lavender'
    },
    {
      icon: <HeartIcon />,
      title: 'Chronic Care',
      description: 'Ongoing management for asthma, allergies, ADHD, and other chronic conditions.',
      color: 'primary'
    }
  ];

  const whyChooseUs = [
    {
      icon: <AwardIcon />,
      title: '20+ Years Experience',
      description: 'Dr. Jackson has been caring for children in our community for over two decades.'
    },
    {
      icon: <UsersIcon />,
      title: 'Family-Centered Care',
      description: 'We treat the whole family, building relationships that last through generations.'
    },
    {
      icon: <ClockIcon />,
      title: 'Same-Day Sick Visits',
      description: 'When your child is ill, we make every effort to see them the same day you call.'
    },
    {
      icon: <ShieldIcon />,
      title: 'Board Certified',
      description: 'Our physicians are board-certified by the American Board of Pediatrics.'
    }
  ];

  return (
    <main className="main-content">
      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-container">
          <div className="hero-content">
            <div className="hero-badge">
              <HeartIcon />
              <span>Compassionate Pediatric Care</span>
            </div>
            
            <h1 className="hero-title">
              We <span className="hero-title-highlight">Love Kids</span> —<br />
              And It Shows
            </h1>
            
            <p className="hero-description">
              Welcome to Love Kids Pediatrics, where every child receives personalized, 
              compassionate care in a warm and welcoming environment. From newborns 
              to teens, we're here for every milestone.
            </p>
            
            <div className="hero-actions">
              <button className="btn btn-coral btn-lg" onClick={onScheduleClick}>
                Schedule Appointment
              </button>
              <span className="btn btn-secondary btn-lg phone-display">
                Call (301) 262-4784
              </span>
              <a href="tel:3012624784" className="btn btn-secondary btn-lg phone-mobile">
                Call (301) 262-4784
              </a>
            </div>
            
            <div className="hero-trust">
              <div className="trust-item">
                <StarIcon />
                <span>5-Star Rated</span>
              </div>
              <div className="trust-item">
                <ClockIcon />
                <span>Same-Day Sick Visits</span>
              </div>
              <div className="trust-item">
                <UsersIcon />
                <span>20+ Years Experience</span>
              </div>
            </div>
          </div>

          <div className="hero-image">
            <div className="hero-shape hero-shape-1" />
            <div className="hero-shape hero-shape-2" />
            <div className="hero-image-wrapper">
              <img src={heroImage} alt="Happy doctor with child" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Services</h2>
            <p>Comprehensive care for every stage of your child's journey</p>
          </div>
          
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className={`service-card service-card-${service.color}`}>
                <div className="service-icon">
                  {service.icon}
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Break */}
      <div className="image-overlay-section">
        <img src={mainBanner} alt="Love Kids Pediatrics" />
      </div>

      {/* Why Choose Us Section */}
      <section className="why-section">
        <div className="container">
          <div className="why-container">
            <div className="why-content">
              <h2>Why Families Choose Us</h2>
              <p className="why-intro">
                For over 20 years, families have trusted Love Kids Pediatrics with their children's 
                health. We combine medical excellence with genuine warmth to create an experience 
                that puts both parents and children at ease.
              </p>
              
              <div className="why-features">
                {whyChooseUs.map((item, index) => (
                  <div key={index} className="why-feature">
                    <div className="why-feature-icon">
                      {item.icon}
                    </div>
                    <div className="why-feature-content">
                      <h4>{item.title}</h4>
                      <p>{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="why-image">
              <div className="why-image-wrapper">
                <img src={headshotImage} alt="Dr. Jackson" />
              </div>
              <div className="why-stats">
                <div className="why-stat">
                  <span className="why-stat-number">5,000+</span>
                  <span className="why-stat-label">Families Served</span>
                </div>
                <div className="why-stat">
                  <span className="why-stat-number">20+</span>
                  <span className="why-stat-label">Years of Care</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-container">
            <div className="contact-info">
              <h2>Visit Our Office</h2>
              <p className="contact-intro">
                We'd love to meet you and your family. Our office is designed to be 
                welcoming for children of all ages.
              </p>
              
              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-item-icon">
                    <MapPinIcon />
                  </div>
                  <div className="contact-item-content">
                    <h4>Location</h4>
                    <p>
                      <a href="https://share.google/4tQWH04mRax80DTln" target="_blank" rel="noopener noreferrer">
                        14300 Gallant Fox Ln, Suite 203<br />Bowie, MD 20715
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-item-icon">
                    <PhoneIcon />
                  </div>
                  <div className="contact-item-content">
                    <h4>Phone</h4>
                    <p>
                      <span className="phone-display">(301) 262-4784</span>
                      <a href="tel:3012624784" className="phone-mobile">(301) 262-4784</a>
                    </p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-item-icon">
                    <ClockIcon />
                  </div>
                  <div className="contact-item-content">
                    <h4>Hours</h4>
                    <p>Monday – Friday: 8am – 5pm<br />Saturday: 9am – 12pm<br />Sunday: Closed</p>
                  </div>
                </div>
              </div>
              
              <button className="btn btn-coral btn-lg" onClick={onScheduleClick}>
                Schedule Your Visit
              </button>
            </div>
            
            <div className="contact-map">
              <a href="https://share.google/4tQWH04mRax80DTln" target="_blank" rel="noopener noreferrer">
                <img src={buildingImage} alt="Office building" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Join Our Family?</h2>
            <p>We're accepting new patients and would love to care for your child.</p>
            <div className="cta-actions">
              <button className="btn btn-white btn-lg" onClick={onScheduleClick}>
                Schedule Appointment
              </button>
              <span className="btn btn-outline-white btn-lg phone-display">
                Call Us Today
              </span>
              <a href="tel:3012624784" className="btn btn-outline-white btn-lg phone-mobile">
                Call Us Today
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
