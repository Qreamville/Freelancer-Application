import React from 'react'
import { Navigation } from '../../components'
import "./header.css"
import { Container, Row, Col } from 'react-bootstrap'
import bgImage from '../../assets/Group1382.png'

const Header = () => {
  return (
    <div className="header">
      <Container>
        <Navigation />
        <header>
          <Row>
            <Col md={6}>
              <div className="header-heading">
                <h1>Providing <br /> Best <br /><span>WEB Services</span></h1>
              </div>
              <div className="header-text">
                <p>Letter of on become he tended active enable to. Vicinity relation sensible surprise screened no up as.</p>
              </div>
              <div className="header-button">
                <button className='btn'>Get Started</button>
                <button className='btn'>Explore</button>
              </div>
            </Col>
            <Col md={6}>
              <div className="header-image">
                <img src={bgImage} alt="girl" />
              </div>
            </Col>
          </Row>
        </header>
      </Container>
    </div>
  )
}

export default Header