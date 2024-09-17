import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CompanyRegistration.css';


function CompanyRegistration() {
  return (
    <div className='classs p-6 '>
      <div className="row justify-content-center ">
        <div className="col-md-8">
          <h3 className="text-center mb-4">Company Registration</h3>
          <form>
            <div className="row">
              <div className="col-md-6 mb-3">
                <div className="form-group">
                  <label htmlFor="companyName">Company Name</label>
                  <input type="text" className="form-control" id="companyName" placeholder="Enter company name" />
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <div className="form-group">
                  <label htmlFor="established">Established</label>
                  <input type="date" className="form-control" id="established" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-3">
                <div className="form-group">
                  <label htmlFor="hrName">HR Name</label>
                  <input type="text" className="form-control" id="hrName" placeholder="Enter HR name" />
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" className="form-control" id="email" placeholder="Enter email" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-3">
                <div className="form-group">
                  <label htmlFor="contact">Contact No</label>
                  <input type="tel" className="form-control" id="contact" placeholder="Enter contact number" />
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <div className="form-group">
                  <label htmlFor="yourId">Your ID</label>
                  <input type="text" className="form-control" id="yourId" placeholder="Enter your ID" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-3">
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <input type="text" className="form-control" id="username" placeholder="Enter username" />
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input type="password" className="form-control" id="password" placeholder="Enter password" />
                </div>
              </div>
            </div>
            <div className="text-center">
            <button type="submit" className="btn btn-primary mt-2">Register</button>

            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CompanyRegistration;
