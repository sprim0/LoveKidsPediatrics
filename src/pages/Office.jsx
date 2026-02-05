import { useState } from 'react';
import './Office.css';
import buildingImage from '../assets/images/Building.jpg';

const Office = ({ onScheduleClick }) => {
  const [insuranceOpen, setInsuranceOpen] = useState(false);

  const ClockIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
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

  const ChevronDownIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );

  const SwipeArrowIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );

  const appointmentTypes = [
    {
      type: 'Well-Child Visit',
      duration: '30-45 minutes',
      description: 'Comprehensive checkup including growth assessment, developmental screening, immunizations, and anticipatory guidance.',
      color: 'primary'
    },
    {
      type: 'Sick Visit',
      duration: '15-20 minutes',
      description: 'Evaluation and treatment of acute illnesses such as fever, ear infections, colds, rashes, and minor injuries.',
      color: 'secondary'
    },
    {
      type: 'Follow-Up Visit',
      duration: '15 minutes',
      description: 'Brief appointment to review test results, monitor ongoing conditions, or assess recovery from illness.',
      color: 'accent'
    },
    {
      type: 'Sports Physical',
      duration: '20-30 minutes',
      description: 'Pre-participation exam for school athletics and activities, including required documentation.',
      color: 'success'
    },
    {
      type: 'Pre-op Physical',
      duration: '20-30 minutes',
      description: 'Pre-operative examination and clearance for children scheduled for surgical procedures.',
      color: 'lavender'
    },
  ];

  const policies = [
    {
      title: 'Sign-In Procedures',
      content: 'Please arrive 10-15 minutes before your scheduled appointment to complete check-in. Have your insurance card and photo ID ready. If your child is ill, please notify our front desk upon arrival.'
    },
    {
      title: 'Late Arrival Policy',
      content: 'If you arrive more than 15 minutes late for your appointment, we may need to reschedule to ensure all patients receive adequate time with our providers. Please call ahead if you are running late.'
    },
    {
      title: 'Cancellation Policy',
      content: 'We request at least 24 hours notice for appointment cancellations. Cancellations not received within 24 hours will incur a $60 fee. This allows us to offer the appointment slot to another family. Repeated no-shows may result in dismissal from the practice.'
    },
    {
      title: 'Medical Records & Privacy',
      content: 'Your medical information is protected under HIPAA regulations. Records requests require a signed authorization form. We respond to records requests within 5-7 business days.'
    },
  ];

  const paymentMethods = ['Cash', 'Check', 'Visa', 'Mastercard', 'American Express', 'Discover', 'HSA/FSA Cards', 'Zelle'];

  const insurancePlans = [
    'Aetna', 'Allegiant', 'APWU', 'Blue Cross Blue Shield', 'Cigna', 'Conifer', 
    'ConnectCare', 'CoreSource', 'Coventry', 'Evergreen Health', 'First Health', 
    'HealthScope', 'Humana', 'InforMed', 'Johns Hopkins', 'Maryland Physicians Care', 
    'Medstar', 'Meritan Health', 'Multiplan', 'Multiplan PPO', 'NCAS', 'One Net PPO', 
    'Optima Health', 'PHCS', 'Priority Partners', 'StarMark', 'Tricare Standard', 
    'UMR', 'United HealthCare', 'Wellpointe'
  ];

  return (
    <main className="main-content">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Office Information</h1>
          <div className="page-header-divider"></div>
          <p>Everything you need to know about visiting our practice</p>
        </div>
      </section>

      {/* Appointment Types - Horizontal Swipe */}
      <section className="appointments-section">
        <div className="container">
          <div className="section-header">
            <h2>Appointment Types</h2>
            <div className="section-header-divider"></div>
            <p>What to expect from different visit types</p>
          </div>
        </div>
        
        <div className="appointments-scroll-wrapper">
          <div className="swipe-hint">
            <span>Swipe for more</span>
            <SwipeArrowIcon />
          </div>
          <div className="appointments-scroll-container">
            <div className="appointments-scroll">
              {appointmentTypes.map((apt, index) => (
                <div key={index} className={`appointment-card appointment-card-${apt.color}`}>
                  <div className="appointment-header">
                    <h3>{apt.type}</h3>
                    <span className="duration">{apt.duration}</span>
                  </div>
                  <p>{apt.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Payment & Billing */}
      <section className="payment-section">
        <div className="container">
          <div className="section-header">
            <h2>Payment & Billing</h2>
            <div className="section-header-divider"></div>
            <p>Flexible payment options for your family</p>
          </div>
          
          <div className="payment-container">
            <div className="payment-content">
              <div className="payment-block">
                <h4>Accepted Payment Methods</h4>
                <div className="payment-methods">
                  {paymentMethods.map((method, index) => (
                    <span key={index} className="payment-tag">{method}</span>
                  ))}
                </div>
              </div>
              
              <div className="payment-block">
                <h4>Insurance</h4>
                <p>We accept most major insurance plans. Please bring your insurance card to every visit. Co-pays and deductibles are due at the time of service.</p>
                
                <div className="insurance-dropdown">
                  <button 
                    className={`insurance-toggle ${insuranceOpen ? 'open' : ''}`}
                    onClick={() => setInsuranceOpen(!insuranceOpen)}
                  >
                    <span>View Accepted Insurance Plans</span>
                    <ChevronDownIcon />
                  </button>
                  
                  {insuranceOpen && (
                    <div className="insurance-list">
                      {insurancePlans.map((plan, index) => (
                        <span key={index} className="insurance-tag">{plan}</span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              
              <div className="payment-block">
                <h4>Self-Pay Patients</h4>
                <p>We offer competitive rates for uninsured families. Payment is due at the time of service. Ask about our payment plan options.</p>
              </div>
              
              <div className="payment-block">
                <h4>Billing Questions</h4>
                <p>For billing inquiries, please call our billing department at (301) 383-1261 or email lovekids1@live.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Policies - Green Background with Playful Boxes */}
      <section className="policies-section">
        <div className="container">
          <div className="section-header">
            <h2>Office Policies</h2>
            <div className="section-header-divider"></div>
            <p>Important information to help your visit go smoothly</p>
          </div>
          
          <div className="policies-grid">
            {policies.map((policy, index) => (
              <div key={index} className="policy-card">
                <h3>{policy.title}</h3>
                <p>{policy.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Hours - Yellow Background, Replica of Home */}
      <section className="contact-section">
        <div className="container">
          <div className="section-header">
            <h2>Visit Our Office</h2>
            <div className="section-header-divider-dark"></div>
            <p>We'd love to meet you and your family</p>
          </div>
          
          <div className="contact-container">
            <div className="contact-info">
              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-item-icon">
                    <MapPinIcon />
                  </div>
                  <div className="contact-item-content">
                    <h4>Location</h4>
                    <p>
                      <a href="https://www.google.com/maps/dir//Love+Kids,+14300+Gallant+Fox+Ln+%23+203,+Bowie,+MD+20715/@38.947687,-76.768277,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89b7ebde0e467ba1:0x8231fd791e2ba342!2m2!1d-76.7563945!2d38.9730096?entry=ttu&g_ep=EgoyMDI2MDEyMC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">
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
                    <p>Mon, Wed, Thu: 9am – 5pm<br />Fri: 9am – 4pm<br />Tue, Sat, Sun: Closed</p>
                  </div>
                </div>
              </div>
              
              <button className="btn btn-coral btn-lg" onClick={onScheduleClick}>
                Schedule Your Visit
              </button>
            </div>
            
            <div className="contact-map">
              <a href="https://www.google.com/maps/dir//Love+Kids,+14300+Gallant+Fox+Ln+%23+203,+Bowie,+MD+20715/@38.947687,-76.768277,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89b7ebde0e467ba1:0x8231fd791e2ba342!2m2!1d-76.7563945!2d38.9730096?entry=ttu&g_ep=EgoyMDI2MDEyMC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">
                <img src={buildingImage} alt="Office building" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Office;