import React from 'react';
import './CompanyLogin.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function CompanyLogin() {
  return (
    <div className=" StdReg  bg-blue-200">

<div className="row justify-content-center">
<div className=" col-md-4">
      <h3 className="text-center mb-4">Company Login</h3>
  
      <form >
        <div className="form-group">
          <label htmlFor="loginUsername">Username</label>
          <input type="text" className="form-control" id="loginUsername" placeholder="Enter username" />
        </div>
        <div className="form-group">
          <label htmlFor="loginPassword">Password</label>
          <input type="password" className="form-control" id="loginPassword" placeholder="Enter password" />
        </div>
        <button type="submit" className="btn btn-primary mt-2">Login</button>
        <div className="mt-3">
          <a href="/forgot-password">Forgot Password?</a>
          <br />
          <a href="/CompanyRegistration">New User? Register Here</a>
        </div>
      </form>
      </div>
    
    </div>

    </div>
  
  );
}

export default CompanyLogin;
