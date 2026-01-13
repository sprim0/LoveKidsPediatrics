import './About.css';

const About = () => {
  const ImageIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <polyline points="21 15 16 10 5 21" />
    </svg>
  );

  const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );

  const staffMembers = [
    { name: 'Sarah Johnson', role: 'Office Manager', placeholder: 'Staff photo' },
    { name: 'Maria Garcia', role: 'Pediatric Nurse', placeholder: 'Staff photo' },
    { name: 'Emily Chen', role: 'Medical Assistant', placeholder: 'Staff photo' },
    { name: 'James Wilson', role: 'Patient Coordinator', placeholder: 'Staff photo' },
  ];

  const credentials = [
    'American Board of Pediatrics - Board Certified',
    'Fellow, American Academy of Pediatrics (FAAP)',
    'State Medical License',
    'DEA Certification',
    'BLS/PALS Certified',
    'Member, County Medical Society',
  ];

  const affiliations = [
    { name: 'American Academy of Pediatrics', abbr: 'AAP' },
    { name: 'American Medical Association', abbr: 'AMA' },
    { name: 'State Pediatric Society', abbr: 'SPS' },
  ];

  return (
    <main className="main-content">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>About Us</h1>
          <p>Get to know the team dedicated to your child's health and happiness</p>
        </div>
      </section>

      {/* Dr. Jackson Profile */}
      <section className="doctor-section">
        <div className="container">
          <div className="doctor-container">
            <div className="doctor-image">
              <div className="doctor-image-wrapper">
                <div className="image-placeholder">
                  <ImageIcon />
                  <span>Dr. Jackson Photo</span>
                </div>
              </div>
              <div className="doctor-credentials-badge">
                <span>Board Certified Pediatrician</span>
              </div>
            </div>
            
            <div className="doctor-content">
              <div className="doctor-name-title">
                <h2>Dr. Patricia Jackson, MD, FAAP</h2>
                <p className="doctor-title">Founder & Lead Pediatrician</p>
              </div>
              
              <div className="doctor-bio">
                <p>
                  Dr. Jackson has been providing compassionate pediatric care to families in our 
                  community for over 20 years. Her approach combines evidence-based medicine with 
                  a genuine love for children and their families.
                </p>
                <p>
                  After completing her pediatric residency at Children's National Medical Center, 
                  Dr. Jackson founded Jackson Pediatrics with a simple mission: to provide the 
                  kind of care she would want for her own children.
                </p>
                <p>
                  When she's not caring for patients, Dr. Jackson enjoys spending time with her 
                  two grown children, gardening, and volunteering at local schools to promote 
                  children's health education.
                </p>
              </div>

              <div className="doctor-education">
                <h4>Education & Training</h4>
                <ul>
                  <li>MD, Johns Hopkins University School of Medicine</li>
                  <li>Pediatric Residency, Children's National Medical Center</li>
                  <li>BS Biology, University of Virginia</li>
                </ul>
              </div>

              <div className="doctor-specializations">
                <h4>Areas of Interest</h4>
                <div className="specialization-tags">
                  <span className="tag">Newborn Care</span>
                  <span className="tag">Developmental Pediatrics</span>
                  <span className="tag">Adolescent Medicine</span>
                  <span className="tag">Preventive Care</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Staff Section */}
      <section className="staff-section">
        <div className="container">
          <div className="section-header">
            <h2>Meet Our Team</h2>
            <p>The friendly faces you'll see at every visit</p>
          </div>
          
          <div className="staff-grid">
            {staffMembers.map((member, index) => (
              <div key={index} className="staff-card">
                <div className="staff-image">
                  <div className="image-placeholder small">
                    <ImageIcon />
                  </div>
                </div>
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="container">
          <div className="mission-container">
            <div className="mission-content">
              <h2>Our Mission</h2>
              <p className="mission-statement">
                To provide exceptional pediatric care in a warm, welcoming environment where 
                every child is treated with compassion and every family feels like part of ours.
              </p>
              
              <div className="mission-values">
                <div className="value-item">
                  <h4>Compassionate Care</h4>
                  <p>We treat every child as if they were our own, with patience and understanding.</p>
                </div>
                <div className="value-item">
                  <h4>Family Partnership</h4>
                  <p>We believe parents are partners in their child's healthcare journey.</p>
                </div>
                <div className="value-item">
                  <h4>Medical Excellence</h4>
                  <p>We stay current with the latest research to provide the best care possible.</p>
                </div>
              </div>
            </div>
            
            <div className="mission-image">
              <div className="image-placeholder large">
                <ImageIcon />
                <span>Office / Team Photo</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="credentials-section">
        <div className="container">
          <div className="credentials-container">
            <div className="credentials-list">
              <h3>Credentials & Certifications</h3>
              <ul>
                {credentials.map((item, index) => (
                  <li key={index}>
                    <CheckIcon />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="affiliations-list">
              <h3>Professional Affiliations</h3>
              <div className="affiliation-badges">
                {affiliations.map((item, index) => (
                  <div key={index} className="affiliation-badge">
                    <span className="abbr">{item.abbr}</span>
                    <span className="name">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="community-section">
        <div className="container">
          <div className="section-header">
            <h2>Community Involvement</h2>
            <p>Giving back to the families we serve</p>
          </div>
          
          <div className="community-grid">
            <div className="community-item">
              <h4>School Health Programs</h4>
              <p>We partner with local schools to provide health education and screenings.</p>
            </div>
            <div className="community-item">
              <h4>Youth Sports Physicals</h4>
              <p>Annual free sports physical events for underserved youth in our community.</p>
            </div>
            <div className="community-item">
              <h4>Parent Education</h4>
              <p>Regular workshops on child development, nutrition, and safety topics.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
