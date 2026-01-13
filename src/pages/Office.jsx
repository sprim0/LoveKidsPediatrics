import './Office.css';

const Office = ({ onScheduleClick }) => {
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

  const MailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );

  const PrinterIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 6 2 18 2 18 9" />
      <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
      <rect x="6" y="14" width="12" height="8" />
    </svg>
  );

  const CreditCardIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
      <line x1="1" y1="10" x2="23" y2="10" />
    </svg>
  );

  const hours = [
    { day: 'Monday', hours: '8:00 AM – 5:00 PM' },
    { day: 'Tuesday', hours: '8:00 AM – 5:00 PM' },
    { day: 'Wednesday', hours: '8:00 AM – 5:00 PM' },
    { day: 'Thursday', hours: '8:00 AM – 5:00 PM' },
    { day: 'Friday', hours: '8:00 AM – 5:00 PM' },
    { day: 'Saturday', hours: '9:00 AM – 12:00 PM' },
    { day: 'Sunday', hours: 'Closed' },
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
      content: 'We request at least 24 hours notice for appointment cancellations. This allows us to offer the appointment slot to another family. Repeated no-shows may result in dismissal from the practice.'
    },
    {
      title: 'Medical Records & Privacy',
      content: 'Your medical information is protected under HIPAA regulations. Records requests require a signed authorization form. We respond to records requests within 5-7 business days.'
    },
  ];

  const appointmentTypes = [
    {
      type: 'Well-Child Visit',
      duration: '30-45 minutes',
      description: 'Comprehensive checkup including growth assessment, developmental screening, immunizations, and anticipatory guidance.'
    },
    {
      type: 'Sick Visit',
      duration: '15-20 minutes',
      description: 'Evaluation and treatment of acute illnesses such as fever, ear infections, colds, rashes, and minor injuries.'
    },
    {
      type: 'Follow-Up Visit',
      duration: '15 minutes',
      description: 'Brief appointment to review test results, monitor ongoing conditions, or assess recovery from illness.'
    },
    {
      type: 'Sports Physical',
      duration: '20-30 minutes',
      description: 'Pre-participation exam for school athletics and activities, including required documentation.'
    },
  ];

  const paymentMethods = ['Cash', 'Check', 'Visa', 'Mastercard', 'American Express', 'Discover', 'HSA/FSA Cards'];

  return (
    <main className="main-content">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Office Information</h1>
          <p>Everything you need to know about visiting our practice</p>
        </div>
      </section>

      {/* Contact & Hours */}
      <section className="contact-hours-section">
        <div className="container">
          <div className="contact-hours-grid">
            {/* Hours */}
            <div className="hours-card">
              <div className="card-header">
                <ClockIcon />
                <h2>Hours of Operation</h2>
              </div>
              <div className="hours-list">
                {hours.map((item, index) => (
                  <div key={index} className={`hours-row ${item.hours === 'Closed' ? 'closed' : ''}`}>
                    <span className="day">{item.day}</span>
                    <span className="time">{item.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div className="contact-card">
              <div className="card-header">
                <PhoneIcon />
                <h2>Contact Information</h2>
              </div>
              
              <div className="contact-list">
                <div className="contact-row">
                  <PhoneIcon />
                  <div>
                    <strong>Phone</strong>
                    <span className="phone-display">(301) 262-4784</span>
                    <a href="tel:3012624784" className="phone-mobile">(301) 262-4784</a>
                  </div>
                </div>
                
                <div className="contact-row">
                  <PrinterIcon />
                  <div>
                    <strong>Fax</strong>
                    <span>(301) 262-4785</span>
                  </div>
                </div>
                
                <div className="contact-row">
                  <MailIcon />
                  <div>
                    <strong>Email</strong>
                    <a href="mailto:info@lovekidspediatrics.com">info@lovekidspediatrics.com</a>
                  </div>
                </div>
                
                <div className="contact-row">
                  <MapPinIcon />
                  <div>
                    <strong>Address</strong>
                    <a href="https://share.google/4tQWH04mRax80DTln" target="_blank" rel="noopener noreferrer">
                      14300 Gallant Fox Ln, Suite 203<br />Bowie, MD 20715
                    </a>
                  </div>
                </div>
              </div>
              
              <button className="btn btn-coral" onClick={onScheduleClick}>
                Schedule Appointment
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Policies */}
      <section className="policies-section">
        <div className="container">
          <div className="section-header">
            <h2>Office Policies</h2>
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

      {/* Appointment Types */}
      <section className="appointments-section">
        <div className="container">
          <div className="section-header">
            <h2>Appointment Types</h2>
            <p>What to expect from different visit types</p>
          </div>
          
          <div className="appointments-grid">
            {appointmentTypes.map((apt, index) => (
              <div key={index} className="appointment-card">
                <div className="appointment-header">
                  <h3>{apt.type}</h3>
                  <span className="duration">{apt.duration}</span>
                </div>
                <p>{apt.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment & Billing */}
      <section className="payment-section">
        <div className="container">
          <div className="payment-container">
            <div className="payment-info">
              <div className="card-header">
                <CreditCardIcon />
                <h2>Payment & Billing</h2>
              </div>
              
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
                </div>
                
                <div className="payment-block">
                  <h4>Self-Pay Patients</h4>
                  <p>We offer competitive rates for uninsured families. Payment is due at the time of service. Ask about our payment plan options.</p>
                </div>
                
                <div className="payment-block">
                  <h4>Billing Questions</h4>
                  <p>For billing inquiries, please call our billing department at (301) 262-4784 ext. 2 or email billing@lovekidspediatrics.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Office;
