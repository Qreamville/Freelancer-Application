import React from 'react'
import './feature.css'
import { Card } from 'react-bootstrap'

const Feature = ({ title }) => {
  return (
    <div className='feature'>
      <Card style={{ width: '24rem' }} className='feature-card' >
        <Card.Title>{title}</Card.Title>
        <Card.Text>Outward clothes promise at gravity do exited. Sufficient particular impossible by reasonable oh expressionism. Yet preference connection unplesant yet melancholy but end appearance</Card.Text>
        <Card.Link href="#learn">Learn More</Card.Link>
      </Card>
    </div>
  )
}

export default Feature