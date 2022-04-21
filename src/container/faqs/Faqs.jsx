import React from 'react'
import './faqs.css'
import { Accordion, Data } from '../../components'
import { Container } from 'react-bootstrap'

const Faqs = () => {
  return (
    <Container id='contact' className='faqs'>
      <div className="faqs__text">
        <h2>FAQs</h2>
      </div>
      <div>
        <Accordion title={Data[0].que} text={Data[0].ans} />
        <Accordion title={Data[1].que} text={Data[1].ans} />
        <Accordion title={Data[2].que} text={Data[2].ans} />
        <Accordion title={Data[3].que} text={Data[3].ans} />
      </div>
    </Container>
  )
}

export default Faqs