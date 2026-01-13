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

  const ClipboardIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
    </svg>
  );

  const InfoIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="16" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12.01" y2="8" />
    </svg>
  );

  const newPatientForms = [
    {
      name: 'Patient Registration Form',
      description: 'Basic demographics, emergency contacts, and family information',
      filename: 'patient-registration.pdf'
    },
    {
      name: 'Medical History Form',
      description: 'Complete health history, current medications, and allergies',
      filename: 'medical-history.pdf'
    },
    {
      name: 'Insurance Information Form',
      description: 'Insurance details and authorization for billing',
      filename: 'insurance-info.pdf'
    },
  ];

  const additionalForms = [
    {
      name: 'Sports Physical Form',
      description: 'Pre-participation physical exam form for school athletics',
      filename: 'sports-physical.pdf',
      note: 'Fee applies'
    },
    {
      name: 'Records Release Form',
      description: 'Authorization to release or receive medical records',
      filename: 'records-release.pdf',
      note: null
    },
    {
      name: 'HIPAA Acknowledgment',
      description: 'Privacy practices acknowledgment form',
      filename: 'hipaa-acknowledgment.pdf',
      note: null
    },
  ];

  const prescreeningQuestions = [
    "What is your child's current age?",
    "Do you have health insurance?",
    "Has your child been seen by a pediatrician before?",
    "Are there any specific health concerns you'd like to discuss?",
    "How did you hear about our practice?",
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

      {/* Important Notice */}
      <section className="notice-section">
        <div className="container">
          <div className="notice-card">
            <InfoIcon />
            <div className="notice-content">
              <h3>Before Your First Visit</h3>
              <p>
                Please download, print, and complete all New Patient Forms before your appointment. 
                Bring the completed forms along with your insurance card and photo ID to your first visit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pre-Screening Section */}
      <section className="prescreening-section">
        <div className="container">
          <div className="prescreening-container">
            <div className="prescreening-content">
              <div className="card-header">
                <ClipboardIcon />
                <h2>New Patient Pre-Screening</h2>
              </div>
              <p className="prescreening-intro">
                Thinking about joining our practice? Complete this brief pre-screening to help us 
                determine if we're the right fit for your family. This is provided at no cost and 
                helps streamline your first visit.
              </p>
              
              <div className="prescreening-preview">
                <h4>Questions include:</h4>
                <ul>
                  {prescreeningQuestions.map((q, index) => (
                    <li key={index}>{q}</li>
                  ))}
                </ul>
              </div>
              
              <a href="#" className="btn btn-primary">
                <FileIcon />
                Download Pre-Screening Form (PDF)
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* New Patient Forms */}
      <section className="forms-section">
        <div className="container">
          <div className="section-header">
            <h2>New Patient Forms</h2>
            <p>Required forms for all new patients</p>
          </div>
          
          <div className="forms-grid">
            {newPatientForms.map((form, index) => (
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
          
          <div className="forms-bundle">
            <div className="bundle-content">
              <h4>Download All New Patient Forms</h4>
              <p>Get all required forms in a single download</p>
            </div>
            <a href="#" className="btn btn-coral">
              <DownloadIcon />
              Download Bundle (PDF)
            </a>
          </div>
        </div>
      </section>

      {/* Additional Forms */}
      <section className="forms-section alt">
        <div className="container">
          <div className="section-header">
            <h2>Additional Forms</h2>
            <p>Other forms you may need</p>
          </div>
          
          <div className="forms-grid">
            {additionalForms.map((form, index) => (
              <div key={index} className="form-card">
                <div className="form-icon secondary">
                  <FileIcon />
                </div>
                <div className="form-content">
                  <h3>
                    {form.name}
                    {form.note && <span className="form-note">{form.note}</span>}
                  </h3>
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
                  <p>Bring completed forms to your first appointment along with your ID and insurance card.</p>
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
    </main>
  );
};

export default Forms;
