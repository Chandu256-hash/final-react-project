// Importing React and useState hook from the 'react' library
import React, { useState } from 'react';
// Importing Bootstrap CSS for styling
import 'bootstrap/dist/css/bootstrap.min.css';
// Importing custom CSS for additional styling
import './StudentRegistration.css';
// Importing the Stepper component to display progress
import Stepper from './Stepper';
// Importing the StepperControl component to handle navigation
import StepperControl from './StepperControl';

// Functional component definition
function StudentRegistration() {
  // State hook for managing the current step in the multi-step form
  const [currentStep, setCurrentStep] = useState(1);
  
  // State hook for managing form data
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    dob: '',
    sscYear: '',
    sscPercentage: '',
    interYear: '',
    interPercentage: '',
    btechStream: '',
    btechPercentage: '',
    backlogs: '',
    resume: null,
  });
  
  // State hook for managing validation errors
  const [errors, setErrors] = useState({});
  
  // State hook for displaying success message
  const [showSuccess, setShowSuccess] = useState(false);

  // Function to handle changes in text inputs
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Function to handle changes in file inputs
  const handleFileChange = (e) => {
    setFormData({ ...formData, resume: e.target.files[0] });
  };

  // Function to handle navigation between steps
  const handleClick = (direction) => {
    // Check if navigating to the next step
    if (direction === 'next') {
      // Validate the current step's fields
      if (currentStep === 1) {
        if (!formData.email || !formData.password || !formData.dob) {
          setErrors({ ...errors, step1: 'Please fill all required fields.' });
          return;
        } else {
          setErrors({ ...errors, step1: '' });
        }
      } else if (currentStep === 2) {
        if (
          !formData.sscYear ||
          !formData.sscPercentage ||
          !formData.interYear ||
          !formData.interPercentage ||
          !formData.btechStream ||
          !formData.btechPercentage ||
          !formData.backlogs
        ) {
          setErrors({ ...errors, step2: 'Please fill all required fields.' });
          return;
        } else {
          setErrors({ ...errors, step2: '' });
        }
      }

      // Move to the next step if valid
      if (currentStep < 3) {
        setCurrentStep(currentStep + 1);
      }
    } else if (direction === 'prev') {
      // Move to the previous step
      if (currentStep > 1) {
        setCurrentStep(currentStep - 1);
      }
    }
  };

  // Function to handle form submission
  const handleSubmit = () => {
    if (currentStep === 3) {
      // Validate that the resume is uploaded
      if (!formData.resume) {
        setErrors({ ...errors, step3: 'Please attach your resume.' });
        return;
      } else {
        setErrors({ ...errors, step3: '' });
      }

      // Display success message
      setShowSuccess(true);
    }
  };

  return (
    <div className="main-contenttt">
      {/* Conditionally render success message */}
      {showSuccess && (
        <div className="success-popup">
          <p>Your Profile Successfully Created. Waiting for Approval from Admin.</p>
        </div>
      )}
      {/* Render Stepper component to show progress */}
      <Stepper currentStep={currentStep} />
      <div className="step-content">
        {/* Render step 1 content */}
        {currentStep === 1 && (
          <>
            <h2 className='text-center'>Basic Information</h2>
            <div className="form-group row ">
              <div className="col-md-4 ">
                <label>Email <span className="text-danger">*</span></label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Enter your email"
                />
                {errors.step1 && <p className="error-message">{errors.step1}</p>}
              </div>
              <div className="col-md-4">
                <label>Password <span className="text-danger">*</span></label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Enter your password"
                />
                {errors.step1 && <p className="error-message">{errors.step1}</p>}
              </div>
              <div className="col-md-4">
                <label>Date of Birth <span className="text-danger">*</span></label>
                <input
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  className="form-control"
                />
                {errors.step1 && <p className="error-message">{errors.step1}</p>}
              </div>
            </div>
          </>
        )}
        {/* Render step 2 content */}
        {currentStep === 2 && (
          <>
            <h2 className='text-center'>Educational Details</h2>
            <div className="form-group row">
              <div className="col-md-4">
                <label>SSC Year of Passing <span className="text-danger">*</span></label>
                <input
                  type="number"
                  name="sscYear"
                  value={formData.sscYear}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Enter SSC passing year"
                />
                {errors.step2 && <p className="error-message">{errors.step2}</p>}
              </div>
              <div className="col-md-4">
                <label>SSC Percentage <span className="text-danger">*</span></label>
                <input
                  type="number"
                  name="sscPercentage"
                  value={formData.sscPercentage}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Enter SSC percentage"
                />
                {errors.step2 && <p className="error-message">{errors.step2}</p>}
              </div>
              <div className="col-md-4">
                <label>Intermediate Year of Passing <span className="text-danger">*</span></label>
                <input
                  type="number"
                  name="interYear"
                  value={formData.interYear}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Enter Intermediate passing year"
                />
                {errors.step2 && <p className="error-message">{errors.step2}</p>}
              </div>
              <div className="col-md-4">
                <label>Intermediate Percentage <span className="text-danger">*</span></label>
                <input
                  type="number"
                  name="interPercentage"
                  value={formData.interPercentage}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Enter Intermediate percentage"
                />
                {errors.step2 && <p className="error-message">{errors.step2}</p>}
              </div>
              <div className="col-md-4">
                <label>B.Tech Stream <span className="text-danger">*</span></label>
                <input
                  type="text"
                  name="btechStream"
                  value={formData.btechStream}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Enter B.Tech stream"
                />
                {errors.step2 && <p className="error-message">{errors.step2}</p>}
              </div>
              <div className="col-md-4">
                <label>B.Tech Percentage (Up to Current Semester) <span className="text-danger">*</span></label>
                <input
                  type="number"
                  name="btechPercentage"
                  value={formData.btechPercentage}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Enter B.Tech percentage"
                />
                {errors.step2 && <p className="error-message">{errors.step2}</p>}
              </div>
              <div className="col-md-4">
                <label>Backlogs <span className="text-danger">*</span></label>
                <select
                  name="backlogs"
                  value={formData.backlogs}
                  onChange={handleChange}
                  className="form-control"
                >
                  <option value="">Select</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
                {errors.step2 && <p className="error-message">{errors.step2}</p>}
              </div>
            </div>
          </>
        )}
        {/* Render step 3 content */}
        {currentStep === 3 && (
          <>
            <h2 className='text-center'>Upload Resume</h2>
            <div className="form-group row">
              <div className="col-md-4">
                <label>Attach Resume <span className="text-danger">*</span></label>
                <input
                  type="file"
                  name="resume"
                  onChange={handleFileChange}
                  className="form-control"
                />
                {errors.step3 && <p className="error-message">{errors.step3}</p>}
              </div>
            </div>
          </>
        )}
      </div>
      {/* Render StepperControl component to navigate between steps */}
      <StepperControl
        handleClick={direction => {
          if (currentStep === 3 && direction === 'next') {
            handleSubmit();
          } else {
            handleClick(direction);
          }
        }}
        currentStep={currentStep}
      />
    </div>
  );
}

// Exporting the component for use in other parts of the application
export default StudentRegistration;
