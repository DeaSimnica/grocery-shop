import React from 'react';
import '../styles/Footer.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon  from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import "../styles/Footer.css";

function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <FacebookIcon />
            <InstagramIcon />
            <TwitterIcon />
        </div>
{/* 
        <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d366.7917030475798!2d21.153372327106265!3d42.65428502616708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13549f069911e159%3A0xf2369798b9ee240!2sBill%20Clinton%20Statue!5e0!3m2!1sen!2s!4v1715026683620!5m2!1sen!2s"
  width="900"  
  height="500" 
  className="left-align-iframe"
  allowfullscreen=""
  loading="lazy"
  referrerpolicy="no-referrer-when-downgrade"
></iframe> */}


      <p> &copy;2024 onlinegroceryshopping.com</p>
    </div>
  );
}

export default Footer;
