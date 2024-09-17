import React from 'react';
import './Footer.css';


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <h5 className="contact-info">Contact Information</h5>
        
        <h6 className='address'>Address</h6>
        <p className='addressinfo'>
          Tata STRIVE Skill Development Centre
          <br />
          3rd floor, NSL Centrum Mall, KPHB Phase III, KPHB,
          <br />
          KPHB Phase 2, Kukatpally, Hyderabad, Telangana 500072.
        </p>
        <div className="social-media-icons ">
          <a href="https://www.facebook.com/TataStriveOfficial/" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-facebook fa-xl "></i>
          </a>

          <a href="https://www.instagram.com/tatastrive/?hl=en" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-instagram fa-xl"></i>
          </a>

          <a href="https://x.com/TataSTRIVE?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-twitter fa-xl"></i>
          </a>

          <a href="https://www.linkedin.com/school/tata-strive/?originalSubdomain=in" target="_blank" rel="noopener noreferrer"> 
            <i className="fa-brands fa-linkedin fa-xl"></i>
          </a>
          
          <a href="https://www.youtube.com/channel/UCbt-yGfcgpl4czc4kyGC3zA" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-youtube fa-xl"></i>
          </a>
        </div>
      </div>
      
      <div className="footer-middle">
        <i className="fa-solid fa-phone custom-icon disabled-link"></i>
        <span className="phone-number ">1800-419-2112</span>

        <div className="mail ">
          <svg xmlns="http://www.w3.org/2000/svg" className="disabled-link" width="32" height="32" viewBox="-0.5 -0.5 16 16" fill="currentColor" id="Brand-Google--Streamline-Tabler-Filled">
            <path d="M7.5 1.25a6.2250000000000005 6.2250000000000005 0 0 1 3.93125 1.3912499999999999a0.625 0.625 0 0 1 0.025 0.95l-0.94375 0.8512500000000001a0.625 0.625 0 0 1 -0.7906249999999999 0.0375a3.75 3.75 0 1 0 1.314375 4.2725l0.000625 -0.0025h-2.2875a0.625 0.625 0 0 1 -0.62 -0.551875l-0.004375 -0.07312500000000001v-1.25a0.625 0.625 0 0 1 0.625 -0.625h4.340625a0.625 0.625 0 0 1 0.62125 0.55625c0.025 0.229375 0.038125 0.460625 0.038125 0.6937500000000001c0 3.451875 -2.798125 6.25 -6.25 6.25s-6.25 -2.798125 -6.25 -6.25s2.798125 -6.25 6.25 -6.25z" strokeWidth="1"></path>
          </svg>
          <span>STRIVE@tatastrive.com</span>
        </div>
        <div className="career">
        <p>About US</p>
       
          <p>Tata STRIVE in the news</p>
    
          <p>Life@STRIVE</p>
       
          
        </div>
      </div>

      <div className="footer-right">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.497395260881!2d78.38902828885496!3d17.483754100000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb918e4d4bfb07%3A0xf78beffbe7405b05!2sTata%20STRIVE%20Skill%20Development%20Centre!5e0!3m2!1sen!2sin!4v1722933860244!5m2!1sen!2sin" 
          width="250" 
          height="200" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade" 
          title="Google Maps - Tata STRIVE Skill Development Centre">
        </iframe>
      </div>
    </footer>
  );
}

export default Footer;
