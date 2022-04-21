import React from 'react'
import { Container } from 'react-bootstrap'
import './footer.css'

const Footer = () => {
  return (
    <footer>
      <Container className='footer'>
        <div className="footer__head text-center">
          <h2>People who are <br /> ready to take these courses!</h2>
          <button className="btn">Schedule Demo</button>
        </div>
        <div className="footer__bottom">
          <div className='footer__list'>
            <ul>
              <li>Payme</li>
              <li>Crechterwood K12 182 DK Alknjkcb, All Rights Reserved</li>
            </ul>
          </div>
          <div className='footer__list'>
            <ul>
              <li>Links</li>
              <li>Overseas</li>
              <li>Social Media</li>
              <li>Counters</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className='footer__list'>
            <ul>
              <li>Company</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className='footer__list'>
            <ul>
              <li>Get in Touch</li>
              <li>Crechterwood K12 182 DK Alknjkcb</li>
              <li>085-132567</li>
              <li>info@payment</li>
            </ul>
          </div>
        </div>
        <div className='copyright'><p>&copy; 2022 Qreamville. All rights reserved</p></div>
      </Container>
    </footer >
  )
}

export default Footer