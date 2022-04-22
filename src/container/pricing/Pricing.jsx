import React from 'react'
import "./pricing.css"
import { Container, Card } from 'react-bootstrap'
import { BsCheckCircleFill } from 'react-icons/bs'

const Pricing = () => {
  return (
    <Container>
      <div className="pricing mb-5">
        <div className="pricing__head">
          <h2>Our <span>Pricing Plan</span></h2>
        </div>
        <div className='pricing__card' >
          <div>
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <div className="card__title text-center">
                  <h3>For Starters</h3>
                  <h2>$59</h2>
                </div>
                <div className="card__list">
                  <p><BsCheckCircleFill /> Feedback Categorization</p>
                  <p><BsCheckCircleFill /> Features Prioritization</p>
                  <p><BsCheckCircleFill /> Real-Time Collaboration</p>
                  <p><BsCheckCircleFill /> Feedback Loop Notification</p>
                  <p><BsCheckCircleFill /> Essential Dev Tools Integrations</p>
                </div>
                <div className="card__button text-center">
                  <button className="btn">Request Demo</button>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div >
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <div className="card__title text-center">
                  <h3>For Teams</h3>
                  <h2>$99</h2>
                </div>
                <div className="card__list">
                  <p><BsCheckCircleFill /> Feedback Categorization</p>
                  <p><BsCheckCircleFill /> Features Prioritization</p>
                  <p><BsCheckCircleFill /> Real-Time Collaboration</p>
                  <p><BsCheckCircleFill /> Feedback Loop Notification</p>
                  <p><BsCheckCircleFill /> Essential Dev Tools Integrations</p>
                </div>
                <div className="card__button text-center">
                  <button className="btn">Request Demo</button>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <div className="card__title text-center">
                  <h3>For Company</h3>
                  <h2>Custom</h2>
                </div>
                <div className="card__list">
                  <p><BsCheckCircleFill /> Feedback Categorization</p>
                  <p><BsCheckCircleFill /> Features Prioritization</p>
                  <p><BsCheckCircleFill /> Real-Time Collaboration</p>
                  <p><BsCheckCircleFill /> Feedback Loop Notification</p>
                  <p><BsCheckCircleFill /> Essential Dev Tools Integrations</p>
                </div>
                <div className="card__button text-center">
                  <button className="btn">Request Demo</button>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Pricing