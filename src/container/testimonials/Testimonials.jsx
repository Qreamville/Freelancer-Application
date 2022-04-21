import React from 'react'
import './testimonials.css'
import { Container } from 'react-bootstrap'
import { Stars } from '../../components'
import imgOne from '../../assets/Rectangle.png'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'

const Testimonials = () => {
  return (
    <Container id='testimonials'>
      <div className='testimonials'>
        <div className="testimonials__head text-center">
          <h2>What <span>Clients</span> Say</h2>
          <p>Letter of on become he tended active to. Vicinity relation sensible sociable surprise screened no up as.</p>
        </div>
        <div className="testimonials__card">
          <div className='testimonials__card-image'>
            <img src={imgOne} alt="Rectangle" />
          </div>
          <div className="testimonials__card-text">
            <h3>Best Developers</h3>
            <p>Outward clothes promise at gravity do exited. Sufficient particular impossible by reasonable oh expressionism. Yet preference connection unplesant yet melancholy but end appearance</p>
            <Stars />
            <h4>Robert Johnson</h4>
            <p>Director at Behance</p>
          </div>
        </div>
        <div className='testimonials__arrow'>
          <div className="arrow1">
            <AiOutlineArrowLeft color='#25a4ad' />
          </div>
          <div className="arrow2">
            <AiOutlineArrowRight color='#25a4ad' />
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Testimonials