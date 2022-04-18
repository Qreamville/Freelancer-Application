import React from 'react'
import './brand.css'
import { Container } from 'react-bootstrap'
import plandayOne from '../../assets/Group542.png'
import umbraco from '../../assets/Group543.png'
import pearlfisher from '../../assets/Group544.png'
import brightPearl from '../../assets/Group545.png'
import plandayTwo from '../../assets/Group546.png'

const Brand = () => {
  return (
    <div className="brands">
      <Container className='brand-images'>
        <div>
          <img src={plandayOne} alt="Brand" />
        </div>
        <div>
          <img src={umbraco} alt="Brand" />
        </div>
        <div>
          <img src={pearlfisher} alt="Brand" />
        </div>
        <div>
          <img src={brightPearl} alt="Brand" />
        </div>
        <div>
          <img src={plandayTwo} alt="Brand" />
        </div>
      </Container>
    </div>
  )
}

export default Brand