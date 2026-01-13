import './Resources.css';

const Resources = () => {
  const ExternalLinkIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );

  const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
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

  const AlertIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="12" />
      <line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
  );

  const acceptedInsurance = [
    { name: 'Aetna', logo: 'A' },
    { name: 'Blue Cross Blue Shield', logo: 'BC' },
    { name: 'Cigna', logo: 'C' },
    { name: 'Humana', logo: 'H' },
    { name: 'Kaiser Permanente', logo: 'KP' },
    { name: 'Medicaid', logo: 'M' },
    { name: 'Medicare', logo: 'MC' },
    { name: 'Oxford', logo: 'O' },
    { name: 'UnitedHealthcare', logo: 'UH' },
    { name: 'Self-Pay', logo: '$' },
  ];

  const annualVisitBenefits = [
    'Track height, weight, and growth patterns',
    'Monitor developmental milestones',
    'Update vaccinations',
    'Screen for vision and hearing issues',
    'Discuss nutrition and physical activity',
    'Address behavioral and mental health',
    'Complete school and sports forms',
    'Build a relationship with your pediatrician',
  ];

  const vaccineScheduleInfant = [
    { age: 'Birth', vaccines: 'Hepatitis B (1st dose)' },
    { age: '2 months', vaccines: 'DTaP, Hib, IPV, PCV, RV, HepB (2nd)' },
    { age: '4 months', vaccines: 'DTaP, Hib, IPV, PCV, RV' },
    { age: '6 months', vaccines: 'DTaP, Hib, PCV, RV, HepB (3rd), Flu' },
    { age: '12 months', vaccines: 'MMR, Varicella, HepA, PCV (4th)' },
    { age: '15-18 months', vaccines: 'DTaP (4th), Hib (4th)' },
  ];

  const vaccineScheduleChild = [
    { age: '4-6 years', vaccines: 'DTaP (5th), IPV (4th), MMR (2nd), Varicella (2nd)' },
    { age: '11-12 years', vaccines: 'Tdap, HPV, MenACWY' },
    { age: '16 years', vaccines: 'MenACWY booster' },
    { age: 'Annually', vaccines: 'Influenza (6 months and older)' },
  ];

  const externalResources = [
    {
      name: 'Centers for Disease Control (CDC)',
      url: 'https://www.cdc.gov',
      description: 'Official health information and vaccine schedules'
    },
    {
      name: 'HealthyChildren.org',
      url: 'https://www.healthychildren.org',
      description: 'Parenting tips from the American Academy of Pediatrics'
    },
    {
      name: 'KidsHealth',
      url: 'https://www.kidshealth.org',
      description: 'Health information for parents, kids, and teens'
    },
    {
      name: 'Poison Control',
      url: 'https://www.poison.org',
      description: 'Emergency poison information - Call 1-800-222-1222'
    },
  ];

  const newsUpdates = [
    {
      date: 'January 2026',
      title: 'Flu Season Update',
      content: 'Flu activity remains high in our area. Please ensure your child has received their annual flu vaccine.'
    },
    {
      date: 'December 2025',
      title: 'Holiday Hours',
      content: 'Our office will have modified hours during the holiday season. Please call ahead for availability.'
    },
    {
      date: 'November 2025',
      title: 'New Patient Portal Coming Soon',
      content: 'We are excited to announce our upcoming patient portal for easier appointment scheduling and record access.'
    },
  ];

  return (
    <main className="main-content">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Patient Resources</h1>
          <p>Helpful information for your family's health journey</p>
        </div>
      </section>

      {/* Accepted Insurance */}
      <section className="insurance-section">
        <div className="container">
          <div className="section-header">
            <h2>Accepted Insurance Plans</h2>
            <p>We accept most major insurance providers</p>
          </div>
          
          <div className="insurance-grid">
            {acceptedInsurance.map((ins, index) => (
              <div key={index} className="insurance-card">
                <div className="insurance-logo">{ins.logo}</div>
                <span>{ins.name}</span>
              </div>
            ))}
          </div>
          
          <p className="insurance-note">
            Don't see your insurance? Contact us at (555) 123-4567 to verify coverage.
          </p>
        </div>
      </section>

      {/* Annual Visits */}
      <section className="annual-section">
        <div className="container">
          <div className="annual-container">
            <div className="annual-content">
              <h2>The Importance of Annual Well-Child Visits</h2>
              <p className="annual-intro">
                Regular checkups are essential for monitoring your child's growth and development, 
                even when they appear healthy. Annual visits help catch potential issues early and 
                keep vaccinations up to date.
              </p>
              
              <div className="benefits-list">
                <h4>What happens at a well-child visit:</h4>
                <ul>
                  {annualVisitBenefits.map((benefit, index) => (
                    <li key={index}>
                      <CheckIcon />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="annual-cta">
              <CalendarIcon />
              <h3>Schedule Your Child's Checkup</h3>
              <p>Is your child due for their annual visit?</p>
              <a href="tel:5551234567" className="btn btn-coral">Call to Schedule</a>
            </div>
          </div>
        </div>
      </section>

      {/* Vaccination Information */}
      <section className="vaccines-section">
        <div className="container">
          <div className="section-header">
            <h2>Vaccination Information</h2>
            <p>Recommended immunization schedules based on CDC guidelines</p>
          </div>
          
          <div className="vaccines-grid">
            <div className="vaccine-schedule">
              <h3>Infant & Toddler (Birth – 2 years)</h3>
              <div className="schedule-table">
                {vaccineScheduleInfant.map((item, index) => (
                  <div key={index} className="schedule-row">
                    <span className="schedule-age">{item.age}</span>
                    <span className="schedule-vaccines">{item.vaccines}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="vaccine-schedule">
              <h3>School-Age & Adolescent</h3>
              <div className="schedule-table">
                {vaccineScheduleChild.map((item, index) => (
                  <div key={index} className="schedule-row">
                    <span className="schedule-age">{item.age}</span>
                    <span className="schedule-vaccines">{item.vaccines}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="vaccine-note">
            <AlertIcon />
            <p>
              This is a general guide. Your child's actual vaccine schedule may vary based on their 
              health history and individual needs. Talk to your pediatrician about what's right for your child.
            </p>
          </div>
        </div>
      </section>

      {/* External Resources */}
      <section className="resources-section">
        <div className="container">
          <div className="section-header">
            <h2>Recommended Websites & Resources</h2>
            <p>Trusted sources for pediatric health information</p>
          </div>
          
          <div className="resources-grid">
            {externalResources.map((resource, index) => (
              <a 
                key={index} 
                href={resource.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="resource-card"
              >
                <h3>
                  {resource.name}
                  <ExternalLinkIcon />
                </h3>
                <p>{resource.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* News & Updates */}
      <section className="news-section">
        <div className="container">
          <div className="section-header">
            <h2>News & Updates</h2>
            <p>Important announcements from our practice</p>
          </div>
          
          <div className="news-grid">
            {newsUpdates.map((news, index) => (
              <article key={index} className="news-card">
                <span className="news-date">{news.date}</span>
                <h3>{news.title}</h3>
                <p>{news.content}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Resources;
