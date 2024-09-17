import React from 'react';
import './StepperControl.css';
function StepperControl({ handleClick, currentStep }) {
  return (
    <div className="stepper-control">
      <button
        onClick={() => handleClick('prev')}
        className="previous-button uppercase py-2 px-4 rounded-xl font-semibold cursor-pointer transition duration-200 ease-in-out"
        disabled={currentStep === 1}
      >
        Previous
      </button>
      {currentStep === 3 ? (
        <button
          onClick={() => handleClick('next')}
          className="register-button uppercase py-2 px-4 rounded-xl font-semibold cursor-pointer transition duration-200 ease-in-out"
        >
          Register
        </button>
      ) : (
        <button
          onClick={() => handleClick('next')}
          className="next-button uppercase py-2 px-4 rounded-xl font-semibold cursor-pointer transition duration-200 ease-in-out"
        >
          Next
        </button>
      )}
    </div>
  );
}

export default StepperControl;
