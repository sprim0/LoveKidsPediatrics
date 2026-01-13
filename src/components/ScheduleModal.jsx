import { useState, useEffect, useCallback } from 'react';
import './ScheduleModal.css';

// Configuration - Easy to update
const CONFIG = {
  phone: '(555) 123-4567',
  minAge: 0,
  maxAge: 18,
  acceptedInsurance: [
    'Aetna',
    'Blue Cross Blue Shield',
    'Cigna',
    'Humana',
    'Kaiser Permanente',
    'Medicaid',
    'Medicare',
    'Oxford',
    'UnitedHealthcare',
    'Self-Pay',
  ],
};

const ScheduleModal = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [patientType, setPatientType] = useState(null); // 'new' or 'existing'
  const [formData, setFormData] = useState({
    insurance: '',
    age: '',
  });
  const [result, setResult] = useState(null); // 'success', 'insurance-rejected', 'age-rejected'

  // Reset state when modal closes
  useEffect(() => {
    if (!isOpen) {
      // Delay reset to allow close animation
      const timer = setTimeout(() => {
        setStep(1);
        setPatientType(null);
        setFormData({ insurance: '', age: '' });
        setResult(null);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handlePatientTypeSelect = (type) => {
    setPatientType(type);
    if (type === 'existing') {
      setStep(3);
      setResult('existing');
    } else {
      setStep(2);
    }
  };

  const handleFormChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = useCallback(() => {
    const { insurance, age } = formData;
    const ageNum = parseInt(age, 10);
    const isInsuranceAccepted = CONFIG.acceptedInsurance.includes(insurance);
    const isAgeValid = ageNum >= CONFIG.minAge && ageNum <= CONFIG.maxAge;

    if (isInsuranceAccepted && isAgeValid) {
      setResult('success');
    } else if (!isInsuranceAccepted) {
      setResult('insurance-rejected');
    } else {
      setResult('age-rejected');
    }
    setStep(3);
  }, [formData]);

  const canContinue = formData.insurance !== '' && formData.age !== '';

  const handleBack = () => {
    if (step === 2) {
      setStep(1);
      setPatientType(null);
    } else if (step === 3 && patientType === 'new') {
      setStep(2);
      setResult(null);
    }
  };

  // Icons as components
  const CalendarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );

  const CloseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );

  const UserPlusIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <line x1="19" y1="8" x2="19" y2="14" />
      <line x1="22" y1="11" x2="16" y2="11" />
    </svg>
  );

  const UserCheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <polyline points="16 11 18 13 22 9" />
    </svg>
  );

  const CheckCircleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );

  const PhoneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );

  const InfoIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="16" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12.01" y2="8" />
    </svg>
  );

  const AlertIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="12" />
      <line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
  );

  // Render step content
  const renderStepContent = () => {
    // Step 1: New or Existing Patient
    if (step === 1) {
      return (
        <div className="step-content">
          <p className="step-question">Are you a new or existing patient?</p>
          <div className="patient-type-options">
            <button
              className="patient-type-btn new-patient"
              onClick={() => handlePatientTypeSelect('new')}
            >
              <div className="patient-type-icon">
                <UserPlusIcon />
              </div>
              <div className="patient-type-text">
                <h4>New Patient</h4>
                <p>First time visiting our practice</p>
              </div>
            </button>
            <button
              className="patient-type-btn existing-patient"
              onClick={() => handlePatientTypeSelect('existing')}
            >
              <div className="patient-type-icon">
                <UserCheckIcon />
              </div>
              <div className="patient-type-text">
                <h4>Existing Patient</h4>
                <p>I've visited before</p>
              </div>
            </button>
          </div>
        </div>
      );
    }

    // Step 2: Insurance & Age (New Patients Only)
    if (step === 2) {
      return (
        <div className="step-content">
          <p className="step-question">Tell us a bit about your child</p>
          
          <div className="form-group">
            <label className="form-label" htmlFor="insurance">
              Insurance Provider
            </label>
            <select
              id="insurance"
              className="form-select"
              value={formData.insurance}
              onChange={(e) => handleFormChange('insurance', e.target.value)}
            >
              <option value="">Select your insurance</option>
              {CONFIG.acceptedInsurance.map((ins) => (
                <option key={ins} value={ins}>
                  {ins}
                </option>
              ))}
              <option value="Other">Other (not listed)</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="age">
              Child's Age
            </label>
            <div className="age-input-wrapper">
              <input
                type="number"
                id="age"
                className="form-input"
                placeholder="Enter age"
                min="0"
                max="25"
                value={formData.age}
                onChange={(e) => handleFormChange('age', e.target.value)}
              />
              <span className="age-suffix">years old</span>
            </div>
          </div>
        </div>
      );
    }

    // Step 3: Results
    if (step === 3) {
      // Existing patient result
      if (result === 'existing') {
        return (
          <div className="step-content">
            <div className="result-container">
              <div className="result-icon success">
                <CheckCircleIcon />
              </div>
              <h3 className="result-title">Welcome Back!</h3>
              <p className="result-message">
                We're so happy to see you again. Please give us a call to schedule your next appointment.
              </p>
              <a href={`tel:${CONFIG.phone.replace(/\D/g, '')}`} className="result-phone">
                <PhoneIcon />
                {CONFIG.phone}
              </a>
            </div>
          </div>
        );
      }

      // Success - Insurance accepted & age valid
      if (result === 'success') {
        return (
          <div className="step-content">
            <div className="result-container">
              <div className="result-icon success">
                <CheckCircleIcon />
              </div>
              <h3 className="result-title">Congratulations!</h3>
              <p className="result-message">
                We'd love to care for your child. Please call us to schedule your first appointment.
              </p>
              <a href={`tel:${CONFIG.phone.replace(/\D/g, '')}`} className="result-phone">
                <PhoneIcon />
                {CONFIG.phone}
              </a>
            </div>
          </div>
        );
      }

      // Insurance not accepted
      if (result === 'insurance-rejected') {
        return (
          <div className="step-content">
            <div className="result-container">
              <div className="result-icon info">
                <InfoIcon />
              </div>
              <h3 className="result-title">Insurance Not Accepted</h3>
              <p className="result-message">
                We're sorry, but we don't currently accept {formData.insurance}. However, we do accept the following insurance plans:
              </p>
              <div className="insurance-list">
                <p className="insurance-list-title">Accepted Insurance</p>
                <ul>
                  {CONFIG.acceptedInsurance.filter(i => i !== 'Self-Pay').map((ins) => (
                    <li key={ins}>{ins}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        );
      }

      // Age outside range
      if (result === 'age-rejected') {
        return (
          <div className="step-content">
            <div className="result-container">
              <div className="result-icon warning">
                <AlertIcon />
              </div>
              <h3 className="result-title">Age Outside Our Range</h3>
              <p className="result-message">
                Our practice provides care for children ages {CONFIG.minAge} to {CONFIG.maxAge}. Please contact us if you need a referral to another provider.
              </p>
              <a href={`tel:${CONFIG.phone.replace(/\D/g, '')}`} className="result-phone">
                <PhoneIcon />
                {CONFIG.phone}
              </a>
            </div>
          </div>
        );
      }
    }

    return null;
  };

  // Determine progress
  const getProgressSteps = () => {
    const steps = [
      { id: 1, active: step === 1, completed: step > 1 },
      { id: 2, active: step === 2, completed: step > 2 },
      { id: 3, active: step === 3, completed: false },
    ];
    
    // If existing patient, skip step 2 visually
    if (patientType === 'existing') {
      return [
        { id: 1, active: false, completed: true },
        { id: 2, active: true, completed: false },
      ];
    }
    
    return steps;
  };

  return (
    <div
      className={`modal-overlay ${isOpen ? 'open' : ''}`}
      onClick={(e) => e.target === e.currentTarget && onClose()}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="modal">
        {/* Header */}
        <div className="modal-header">
          <button
            className="modal-close"
            onClick={onClose}
            aria-label="Close modal"
          >
            <CloseIcon />
          </button>
          <h2 className="modal-title" id="modal-title">Schedule Appointment</h2>
          <p className="modal-subtitle">Let's get you on our calendar</p>
        </div>

        {/* Progress */}
        <div className="modal-progress">
          {getProgressSteps().map((s) => (
            <div
              key={s.id}
              className={`progress-step ${s.active ? 'active' : ''} ${s.completed ? 'completed' : ''}`}
            />
          ))}
        </div>

        {/* Body */}
        <div className="modal-body">
          {renderStepContent()}
        </div>

        {/* Footer */}
        {step === 2 && (
          <div className="modal-footer">
            <button className="btn btn-back" onClick={handleBack}>
              Back
            </button>
            <button
              className="btn btn-continue"
              onClick={handleSubmit}
              disabled={!canContinue}
            >
              Continue
            </button>
          </div>
        )}

        {step === 3 && (
          <div className="modal-footer">
            <button className="btn btn-primary" onClick={onClose} style={{ width: '100%' }}>
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ScheduleModal;
