import React from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { RxDropdownMenu } from 'react-icons/rx';  // Import the icon
import './NavBar.css';
import navbarlogooo from '../assets/navbarlogooo.png';

function NavBar() {
  return (
    <div className="container">
      <Link to="/">
        <img src={navbarlogooo} alt="navbarlogo" className="Logo" />
      </Link>
      <ul className="nav">
        {/* Main navbar for login links */}
        <li className="nav-item">
          <Link className="nav-link disabled-link" to="/companylogin">Company Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link disabled-link" to="/adminlogin">Admin Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link disabled-link" to="/studentlogin">Student Login</Link>
        </li>

        {/* Dropdown menu for other links */}
        <li className="nav-item dropdown-menu-icon">
          <DropdownButton
            id="dropdown-basic-button"
            title={<RxDropdownMenu size={24} />}
            variant="link"
            className="custom-dropdown-toggle"  // Custom class for styling
          >
            <Dropdown.Item as={Link} to="/">Home</Dropdown.Item>
            <Dropdown.Item as={Link} to="/contactus">Contact Us</Dropdown.Item>
            <Dropdown.Item as={Link} to="/companyregistration">Company Registration</Dropdown.Item>
            <Dropdown.Item as={Link} to="/studentregistration">Student Registration</Dropdown.Item>
            <Dropdown.Item as={Link} to="/studentprofile">Student Profile</Dropdown.Item>
          </DropdownButton>
        </li>


      </ul>
    </div>
  );
}

export default NavBar;
