import './Forms.css';

const Forms = () => {
  const FileIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  );

  const DownloadIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );

  const InfoIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="16" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12.01" y2="8" />
    </svg>
  );

  const forms = [
    {
      name: 'Health Questionnaire',
      description: 'General health questionnaire for patient visits',
      filename: 'health-questionnaire.pdf'
    },
    {
      name: 'Post-partum Depression Form',
      description: 'Screening form for post-partum depression assessment',
      filename: 'postpartum-depression.pdf'
    },
    {
      name: 'Adolescent Depression Form',
      description: 'Depression screening form for adolescent patients',
      filename: 'adolescent-depression.pdf'
    },
    {
      name: 'Vanderbilt Form',
      description: 'ADHD assessment and diagnostic form',
      filename: 'vanderbilt.pdf'
    },
  ];

  return (
    <main className="main-content">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Patient Forms</h1>
          <p>Download and complete forms before your visit to save time</p>
        </div>
      </section>

      {/* Instructions */}
      <section className="instructions-section">
        <div className="container">
          <div className="instructions-card">
            <h3>Form Submission Instructions</h3>
            <div className="instructions-content">
              <div className="instruction-step">
                <span className="step-number">1</span>
                <div>
                  <h4>Download & Print</h4>
                  <p>Download the forms you need and print them at home.</p>
                </div>
              </div>
              <div className="instruction-step">
                <span className="step-number">2</span>
                <div>
                  <h4>Complete in Full</h4>
                  <p>Fill out all sections completely. Use black or blue ink.</p>
                </div>
              </div>
              <div className="instruction-step">
                <span className="step-number">3</span>
                <div>
                  <h4>Bring to Appointment</h4>
                  <p>Bring completed forms to your appointment along with your ID and insurance card.</p>
                </div>
              </div>
            </div>
            
            <div className="instructions-note">
              <InfoIcon />
              <p>
                <strong>Note:</strong> Digital form submission is not currently available. 
                All forms must be completed on paper and submitted in person.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Forms List */}
      <section className="forms-section">
        <div className="container">
          <div className="section-header">
            <h2>Available Forms</h2>
            <p>Download the forms you need for your visit</p>
          </div>
          
          <div className="forms-grid">
            {forms.map((form, index) => (
              <div key={index} className="form-card">
                <div className="form-icon">
                  <FileIcon />
                </div>
                <div className="form-content">
                  <h3>{form.name}</h3>
                  <p>{form.description}</p>
                </div>
                <a href="#" className="form-download" aria-label={`Download ${form.name}`}>
                  <DownloadIcon />
                  <span>Download PDF</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Forms;