import './Forms.css';

const Forms = () => {
  const FileIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  );

  const DownloadIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );

  const InfoIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="16" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12.01" y2="8" />
    </svg>
  );

  /*
   * ============================================================
   *  PDF MANAGEMENT — HOW TO UPDATE FORMS
   * ============================================================
   *  
   *  Each form links to a Google Drive file. To update a PDF:
   *
   *  1. Go to your Google Drive folder for patient forms
   *  2. Upload the new PDF (or replace the existing one)
   *  3. Right-click the file → "Share" → "Anyone with the link"
   *  4. Copy the share link — it looks like:
   *     https://drive.google.com/file/d/XXXXXX/view?usp=sharing
   *  5. Change "/view?usp=sharing" to "/view" in the link below
   *
   *  The download button automatically converts it to a direct
   *  download. You do NOT need a developer to change these links.
   *
   *  To ADD a new form, just copy one of the objects below,
   *  change the name/description, and paste in the new link.
   * ============================================================
   */
  const forms = [
    {
      name: 'Health Questionnaire',
      description: 'General health questionnaire for patient visits',
      // Replace this URL with your Google Drive share link (change /view?usp=sharing to /view)
      driveUrl: null, // e.g. 'https://drive.google.com/file/d/YOUR_FILE_ID/view'
    },
    {
      name: 'Post-partum Depression Form',
      description: 'Screening form for post-partum depression assessment',
      driveUrl: null,
    },
    {
      name: 'Adolescent Depression Form',
      description: 'Depression screening form for adolescent patients',
      driveUrl: null,
    },
    {
      name: 'Vanderbilt Form',
      description: 'ADHD assessment and diagnostic form',
      driveUrl: null,
    },
  ];

  // Converts a Google Drive view link to a direct download link
  const getDownloadUrl = (driveUrl) => {
    if (!driveUrl) return '#';
    // Extract file ID from Google Drive URL
    const match = driveUrl.match(/\/d\/([a-zA-Z0-9_-]+)/);
    if (match) {
      return `https://drive.google.com/uc?export=download&id=${match[1]}`;
    }
    return driveUrl;
  };

  return (
    <main className="main-content">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Patient Forms</h1>
          <div className="page-header-divider"></div>
          <p>Download and complete forms before your visit to save time</p>
        </div>
      </section>

      {/* Forms List */}
      <section className="forms-section">
        <div className="container">
          <div className="section-header">
            <h2>Available Forms</h2>
            <div className="section-header-divider"></div>
            <p>Download the forms you need for your visit</p>
          </div>
          
          <div className="forms-grid">
            {forms.map((form, index) => (
              <div key={index} className="form-card">
                <div className={`form-icon ${index % 2 !== 0 ? 'secondary' : ''}`}>
                  <FileIcon />
                </div>
                <div className="form-content">
                  <h3>{form.name}</h3>
                  <p>{form.description}</p>
                </div>
                <a 
                  href={getDownloadUrl(form.driveUrl)} 
                  className="form-download" 
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Download ${form.name}`}
                >
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
          <div className="section-header">
            <h2>How It Works</h2>
            <div className="section-header-divider"></div>
            <p>Simple steps to prepare for your visit</p>
          </div>

          <div className="instructions-card">
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
    </main>
  );
};

export default Forms;