import React, { useState } from 'react'
import './accordion.css'
import { BsPlus } from 'react-icons/bs'
import { BiMinus } from 'react-icons/bi'

const Accordion = ({ title, text }) => {
  const [isTrue, setIsTrue] = useState(true)
  const [toggle, setToggle] = useState("content")

  const handleToggle = () => {
    setIsTrue(!isTrue)
    if (toggle === 'content') {
      setToggle('active')
    }
    else {
      setToggle('content')
    }
  }

  return (
    <section className="accordion__section">
      <div className='accordion'>
        <p className="accordion__title" onClick={handleToggle}>
          {isTrue ? <BsPlus size={24} /> : <BiMinus size={24} />}
          {title}</p>
      </div>
      <div className={`accordion__${toggle}`}>
        <div className="accordion__text">
          {text}
        </div>
      </div>
    </section>
  )
}

export default Accordion