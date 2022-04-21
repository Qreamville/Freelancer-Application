import React from 'react'
import './services.css'
import { Container } from 'react-bootstrap'
import { Stars } from '../../components'

const Services = () => {
  return (
    <Container id="about" >
      <div className="services">
        <div className="services-text">
          <h2>Best <span>Services</span></h2>
          <p>Letter of on become he tended active to. Vicinity relation sensible sociable surprise screened no up as.</p>
        </div>
        <div className="services-cards">
          <div className="service-card__one">
            <div className="service-card__text">
              <h3>Web <br />Development</h3>
              <div>
                <Stars />
              </div>
            </div>
          </div>
          <div className="service-card__two">
            <div className="service-card__text">
              <h3>Web <br />Designing</h3>
              <Stars />
            </div>
          </div>
          <div className="service-card__three">
            <div className="service-card__text">
              <h3>Database <br /> Management</h3>
              <Stars />
            </div>
          </div>
          <div className="service-card__four">
            <div className="service-card__text">
              <h3>SEO</h3>
              <Stars />
            </div>
          </div>
        </div>
        <div className="services-btn">
          <button className='btn'> Explore All</button>
        </div>
      </div>
    </Container>
  )
}

export default Services