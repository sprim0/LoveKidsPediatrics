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

  const acceptedInsurance = [
    'Aetna',
    'Allegiant',
    'APWU',
    'Blue Cross Blue Shield',
    'Cigna',
    'Conifer',
    'ConnectCare',
    'CoreSource',
    'Coventry',
    'Evergreen Health',
    'First Health',
    'HealthScope',
    'Humana',
    'InforMed',
    'Johns Hopkins',
    'Maryland Physicians Care',
    'Medstar',
    'Meritan Health',
    'Multiplan',
    'Multiplan PPO',
    'NCAS',
    'One Net PPO',
    'Optima Health',
    'PHCS',
    'Priority Partners',
    'StarMark',
    'Tricare Standard',
    'UMR',
    'United HealthCare',
    'Wellpointe',
  ];

  const annualVisitBenefits = [
    'Track height, weight, and growth patterns',
    'Monitor developmental milestones',
    'Update vaccinations',
    'Screen for vision and hearing issues',
    'Discuss nutrition and physical activity',
    'Address behavioral and mental health',
    'Request routine bloodwork',
    'Build a relationship with your pediatrician',
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
          
          <div className="insurance-list">
            {acceptedInsurance.map((name, index) => (
              <span key={index} className="insurance-item">{name}</span>
            ))}
          </div>
          
          <p className="insurance-note">
            Don't see your insurance? Contact us at (301) 262-4784 to verify coverage.
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
              <span className="btn btn-coral phone-display">Call (301) 262-4784</span>
              <a href="tel:3012624784" className="btn btn-coral phone-mobile">Call to Schedule</a>
            </div>
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

    </main>
  );
};

export default Resources;