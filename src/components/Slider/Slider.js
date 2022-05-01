import React, {useState} from "react"
import {FaChevronUp, FaChevronDown} from 'react-icons/fa'

import slide1 from '../../img/slide1.jpeg'
import slide2 from '../../img/slide2.jpeg'
import slide3 from '../../img/slide3.jpeg'
import slide4 from '../../img/slide4.jpeg'

import './Slider.scss'


const img = [
  <img key={slide1} src={slide1} alt=''/>,
  <img key={slide2} src={slide2} alt=''/>,
  <img key={slide3} src={slide3} alt=''/>,
  <img key={slide4} src={slide4} alt=''/>,
]

export const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevImgIndex = activeIndex ? activeIndex - 1 : img.length - 1

  const nextImgIndex = activeIndex === img.length - 1 ? 0 : activeIndex + 1

  const handleUpArrowClick = () => {
    setActiveIndex(prevImgIndex)
  }

  const handleDownArrowClick = () => {
    setActiveIndex(nextImgIndex)
  }

  return (
      <>
        <button className='slider__button slider__button-up' onClick={handleUpArrowClick}>
          <FaChevronUp className='arrow'/>
        </button>
        <div className="slider">

          <div className="slider__img slider__img-prev" key={prevImgIndex}>
            {img[prevImgIndex]}
          </div>

          <div className="slider__img" key={activeIndex}>
            {img[activeIndex]}
          </div>

          <div className="slider__img slider__img-next" key={nextImgIndex}>
            {img[nextImgIndex]}
          </div>

        </div>
        <button className='slider__button slider__button-down' onClick={handleDownArrowClick}>
          <FaChevronDown className='arrow'/>
        </button>
      </>

  )
}