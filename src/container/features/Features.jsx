import React from 'react'
import './features.css'
import { Feature } from '../../components'
import { Container, Row } from 'react-bootstrap'

const Features = () => {
  return (
    <div className="features">
      <Container className='text-center' >
        <div className="features-text">
          <h2>Our <span>Features</span></h2>
          <p>Letter of on become he tended active to. Vicinity relation sensible sociable surprise screened no up as.</p>
        </div>
        <div className='features-cards'>
          <div >
            <Feature title='Work Load' />
          </div>
          <div >
            <Feature title='Time Tracking' />
          </div>
          <div>
            <Feature title='Collaborations' />
          </div>
        </div>
        <div className="features-btn">
          <button className="btn">Explore All</button>
        </div>
      </Container>
    </div>
  )
}

export default Features