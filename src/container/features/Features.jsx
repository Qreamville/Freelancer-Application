import React from 'react'
import './features.css'
import { Feature } from '../../components'
import { Container, Row, Col } from 'react-bootstrap'

const Features = () => {
  return (
    <div className="features mb-5">
      <Container className='text-center' >
        <div className="features-text">
          <h2>Our <span>Features</span></h2>
          <p>Letter of on become he tended active to. Vicinity relation sensible sociable surprise screened no up as.</p>
        </div>
        <Row className='features-cards'>
          <Col md={4}>
            <Feature title='Work Load' />
          </Col>
          <Col md={4}>
            <Feature title='Time Tracking' />
          </Col>
          <Col md={4}>
            <Feature title='Collaborations' />
          </Col>
        </Row>
        <div className="features-btn">
          <button className="btn">Explore All</button>
        </div>
      </Container>
    </div>
  )
}

export default Features