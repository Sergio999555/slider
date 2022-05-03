import React, {useState} from "react"
import {FaChevronUp, FaChevronDown, FaPlay} from 'react-icons/fa'

import slide1 from '../../styles/img/slide1.jpeg'
import slide2 from '../../styles/img/slide2.jpeg'
import slide3 from '../../styles/img/slide3.jpeg'
import slide4 from '../../styles/img/slide4.jpeg'
import slide5 from '../../styles/img/slide5.jpeg'
import slide6 from '../../styles/img/slide6.jpeg'

import './Slider.scss'

const img = [
  <img key={slide1} src={slide1} alt=''/>,
  <img key={slide2} src={slide2} alt=''/>,
  <img key={slide3} src={slide3} alt=''/>,
  <img key={slide4} src={slide4} alt=''/>,
  <img key={slide5} src={slide5} alt=''/>,
  <img key={slide6} src={slide6} alt=''/>,

]

const titles = [
  <h3>Love Your Life</h3>,
  <h3>Thieve The Bank</h3>,
  <h3>The Last Witness</h3>,
  <h3>Fight For Life</h3>,
  <h3>The Express</h3>,
  <h3>King Of Skull</h3>,
]

const duration = [
  <span className='duration'>1hr 46min</span>,
  <span className='duration'>30min</span>,
  <span className='duration'>1hr 37min</span>,
  <span className='duration'>2hr 25min</span>,
  <span className='duration'>1hr 52min</span>,
  <span className='duration'>2hr 16min</span>,

]

const descriptions = [
  <span>Streamlab is a long established fact that a reader will be distracted by
    the readable content of a page when Streamlab at its layout Streamlab.</span>,
  <span>Streamlab is a long established fact that a reader will be distracted by
    the readable content of a page when Streamlab at its layout Streamlab.</span>,
  <span>Streamlab is a long established fact that a reader will be distracted by
    the readable content of a page when Streamlab at its layout Streamlab.</span>,
  <span>Streamlab is a long established fact that a reader will be distracted by
    the readable content of a page when Streamlab at its layout Streamlab.</span>,
  <span>Streamlab is a long established fact that a reader will be distracted by
    the readable content of a page when Streamlab at its layout Streamlab.</span>,
  <span>Streamlab is a long established fact that a reader will be distracted by
    the readable content of a page when Streamlab at its layout Streamlab.</span>,
]

export const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const prevImgIndex = activeIndex ? activeIndex - 1 : img.length - 1
  const nextImgIndex = activeIndex === img.length - 1 ? 0 : activeIndex + 1

  const handleUpArrowClick = () => setActiveIndex(prevImgIndex)
  const handleDownArrowClick = () => setActiveIndex(nextImgIndex)

  return (
      <div className='slider'>

        <div className="slider__img-container">
          <div className='slider__description'>
            <div className='title slider__title'>{titles[activeIndex]}</div>
            <div className='slider__text'>{descriptions[activeIndex]}</div>
            <button className='gen-button slider__button'><FaPlay/>play now</button>
          </div>
          <div className="slider__img slider__img-active" key={activeIndex}>{img[activeIndex]}</div>
        </div>

        <div className='preview'>
          <button className='preview__button preview__button-up' onClick={handleUpArrowClick}>
            <FaChevronUp className='preview__button-arrow'/>
          </button>

          <div className='preview__img' onClick={handleUpArrowClick} key={prevImgIndex}>
            <div className='preview__info'>
              <div className='title preview__title'>{titles[prevImgIndex]}</div>
              <div className='preview__duration'>{duration[prevImgIndex]}</div>
              <button className='gen-button preview__button-genre'>Action</button>
            </div>
            <div className='preview__img-prev'>{img[prevImgIndex]}</div>
          </div>

          <div className='preview__img' key={activeIndex}>
            <div className='preview__info'>
              <div className='title preview__title'>{titles[activeIndex]}</div>
              <div className='preview__duration'>{duration[activeIndex]}</div>
              <button className='gen-button preview__button-genre'>Action</button>
            </div>
            <div className='preview__img-active'>{img[activeIndex]}</div>
          </div>

          <div className='preview__img' onClick={handleDownArrowClick} key={nextImgIndex}>
            <div className='preview__info'>
              <div className='title preview__title'>{titles[nextImgIndex]}</div>
              <div className='preview__duration'>{duration[nextImgIndex]}</div>
              <button className='gen-button preview__button-genre'>Action</button>
            </div>
            <div className='preview__img-next'>{img[nextImgIndex]}</div>
          </div>

          <button className='preview__button preview__button-down' onClick={handleDownArrowClick}>
            <FaChevronDown className='preview__button-arrow'/>
          </button>
        </div>

      </div>
  )
}