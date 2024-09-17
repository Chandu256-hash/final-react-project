import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AdminLogin.css'

function AdminLogin() {
  return (
    <div className="StdReg">
      <div className="row justify-content-center content">
        <div className="col-md-4">
          <div className="login-form">
            <h2 className="text-center">Admin Login</h2>
            <form>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input type="text" className="form-control" id="username" required />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" id="password" required />
              </div>
              <button type="submit" className="btn btn-primary btn-block mt-2">Login</button>
              {/* <div className="text-center mt-3">
                <a href="#forgot-password" className="d-block">Forget Password?</a>
                <a href="/StudentRegistration" className="d-block">New User? Register here</a>
              </div> */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
