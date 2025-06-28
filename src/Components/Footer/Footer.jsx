import React from 'react';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import '../Footer/footer.css'

function Footer() {
  return (
    <>
      <div className='footer-main'>
        <div className='inner-footer'>
          <div className='footer-icons'>
            <FacebookIcon/>
            <InstagramIcon/>
            <YouTubeIcon/>
          </div>
          <div className='footer-data'>
            <div>
              <ul>
                <li>Audio Description</li>
                <li>Investor Relations</li>
                <li>Legal Notice</li>
              </ul>
            </div>
          <div>
            <ul>
              <li>Help Center</li>
              <li>Jobs</li>
              <li>Cookie Preferences</li>
            </ul>
            </div>
            <div>
              <ul>
                <li>Gift Cards</li>
                <li>Terms Of Use</li>
                <li>Corporate Information</li>
              </ul>
            </div>  
            <div>
              <ul>
                <li>Media Center</li>
                <li>Privacy</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
          <div className='Service-code'>
            <p>
              Service Code
            </p>
          </div>
          <div className='copy-write'>
            &copy; 1997-2025 Netflix, Inc.
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
