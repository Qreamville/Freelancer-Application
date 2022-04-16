import React from 'react'
import { Navigation } from '../../components'
import "./header.css"
import { Container } from 'react-bootstrap'

const Header = () => {
  return (
    <Container>
      <Navigation />
      <header>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi illo laborum ad soluta dolorem aliquam aperiam accusamus eaque, at, nisi laudantium recusandae exercitationem et autem ea. Corporis illum a ullam.</header>
    </Container>
  )
}

export default Header