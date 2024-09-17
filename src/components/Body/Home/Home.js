import React from 'react';
import './Home.css'; // Make sure to update this CSS file accordingly
import Accenture from "../assets/Accenture-logo.png";
import Cognizant from '../assets/Cognizant-Logo.png';
import Deloitte from '../assets/deloitte.png';
import InfosysLogo from '../assets/infosys-logo.png';
import TCS from '../assets/TCS.png';
import Wipro from '../assets/Wipro.png.png';
import Carousel from 'react-bootstrap/Carousel';

import logo1 from '../assets/assets/logo1.svg';
import logo2 from '../assets/assets/logo2.svg';
import logo3 from '../assets/assets/logo3.svg';
import logo4 from '../assets/assets/logo-4.png';
import logo5 from '../assets/assets/logo5.png';
import logo6 from '../assets/assets/logo6.png';
import logo7 from '../assets/assets/logo7.png';
import logo8 from '../assets/assets/8.svg';




const Home = () => {


  

  return (
    <div className='home-container'>




      {/* Scrolling Text Section */}
      <div className="scrolling-navbar">
        <div className="scrolling-text">
          <p className='text'>
            Greetings from Campus Management Team! Congratulations to our recently placed champions: Manoj in Accenture, Priya in TCS, and Neeraj in Ediko.
          </p>
        </div>
      </div>

      <div className="fixed-banner">
        <p>Eligible students, please register for the upcoming placement drives!</p>
      </div>

      {/* Carousel Section */}
      <div className="carousel-section">
        <Carousel>
          <Carousel.Item>
            <div className="carousel-card">
              <img src={InfosysLogo} className="carousel-image" alt="Infosys" />
              <Carousel.Caption>
                <h3>Infosys</h3>
                <p>Elevate your career</p>
                <p>LPA: 7,00,000</p>
                <a href="/JD/Infosys.pdf">
                <button type="button" className="btn btn-primary mx-10">Job Description</button>
                </a>
                
                <button type="button" className="btn btn-success">Register</button>
              </Carousel.Caption>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="carousel-card">
              <img src={Cognizant} className="carousel-image" alt="Cognizant" />
              <Carousel.Caption>
                <h3>Cognizant</h3>
                <p>Empowering businesses worldwide</p>
                <p>LPA: 4,00,000</p>
                <a href="/JD/Cognizant.pdf">
                <button type="button" className="btn btn-primary mx-10">Job Description</button>
                </a>
               
                <button type="button" className="btn btn-success">Register</button>
              </Carousel.Caption>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="carousel-card">
              <img src={Wipro} className="carousel-image" alt="Wipro" />
              <Carousel.Caption>
                <h3>Wipro</h3>
                <p>Innovating for the future</p>
                <p>LPA: 3,30,000</p>

                <a href="/JD/Wipro.pdf">
                <button type="button" className="btn btn-primary mx-10">Job Description</button>
                </a>
              
                <button type="button" className="btn btn-success">Register</button>
              </Carousel.Caption>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="carousel-card">
              <img src={TCS} className="carousel-image" alt="TCS" />
              <Carousel.Caption>
                <h3>TCS</h3>
                <p>Leading the way in IT</p>
                <p>LPA: 9,00,000</p>

                <a href="/JD/TCS.pdf">
                <button type="button" className="btn btn-primary mx-10">Job Description</button>
                </a>
               
                <button type="button" className="btn btn-success">Register</button>
              </Carousel.Caption>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="carousel-card">
              <img src={Accenture} className="carousel-image" alt="Accenture" />
              <Carousel.Caption>
                <h3>Accenture</h3>
                <p>New applied now</p>
                <p>LPA: 7,00,000</p>

                <a href="/JD/Accenture.pdf">
                <button type="button" className="btn btn-primary mx-10">Job Description</button>
                </a>
               
                <button type="button" className="btn btn-success">Register</button>
              </Carousel.Caption>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="carousel-card">
              <img src={Deloitte} className="carousel-image" alt="Deloitte" />
              <Carousel.Caption>
                <h3>Deloitte</h3>
                <p>Shaping tomorrow today</p>
                <p>LPA: 4,00,000</p>
                <a href="/JD/Deloitte.pdf">
                <button type="button" className="btn btn-primary mx-10">Job Description</button>
                </a>
               
                <button type="button" className="btn btn-success">Register</button>
              </Carousel.Caption>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
      


<div class="containerrr">
  
    <div class="heading">
      <h1>Our Partners</h1>
    </div>
    <div class="cards-container">
    
     <div class="card ">
    <img src={logo1} alt="" />
  </div>
  
  <div class="card">
  <img src={logo2} alt="" />
  </div>
  <div class="card">
    <img src={logo3} alt="" />
  </div>
  <div class="card">
    <img src={logo4} alt="" />
  </div>
  <div class="card">
    <img src={logo5} alt="" />
  </div>
  <div class="card">
    <img src={logo6} alt="" />
  </div>
  <div class="card">
    <img src={logo7} alt="" />
  </div>
  <div class="card">
    <img src={logo8} alt="" />

     </div>
    </div>
  
</div>

     
    </div>
  );
};

export default Home;
