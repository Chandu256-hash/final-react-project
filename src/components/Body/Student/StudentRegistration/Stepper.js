import React from 'react';
import './Stepper.css'; 

function Stepper({ currentStep }) {
  const steps = ['1', '2', '3'];

  return (
    <div className="stepper-wrapper">
      {/* Stepper Circles */}
           {steps.map((step, index) => (
        <div key={index} className="step-container">
          <div
            className={`step-circle ${currentStep > index ? 'completed' : ''} ${
              currentStep === index + 1 ? 'active' : ''
            }`}
          >
            {currentStep > index ? '✓' : step}
          </div>
          <div className="step-label">Step {step}</div>
        </div>
      ))}
      {/* Lines between steps */}
      <div className="step-lines">
        <div className={`line ${currentStep > 1 ? 'completed' : ''}`}></div>
        <div className={`line ${currentStep > 2 ? 'completed' : ''}`}></div>
      </div>
    </div>
  );
}

export default Stepper;

