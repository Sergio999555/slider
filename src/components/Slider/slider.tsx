import React, {useState, useEffect} from 'react';
import {FaChevronUp, FaChevronDown} from 'react-icons/fa';

import {movieData} from '../Slider/movieData'
import {MovieContent} from '../Slider/MovieContent/index'
import {MoviesPreview} from "../Slider/MoviesPreview/index";

import './slider.module.scss'

const slideWidth = 15;
const length = movieData.length;
movieData.push(...movieData);

export const createItem = (position: number, index: number) => {
  return ({
    styles: {transform: `translateY(${position * slideWidth}em)`},
    movie: movieData[index].movie,
  });
};

const keys = Array.from(Array(movieData.length).keys());

export const Slider = () => {
  const [items, setItems] = useState(keys);
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const prevClick = (step = 1) => {
    setItems(prev => prev.map((el, i) => prev[(i + step + items.length) % items.length]));
  };

  const nextClick = (step = 1) => {
    setItems((prev) => prev.map((el, i) => prev[(i - step + items.length) % items.length]));
  };

  const minSwipeDistance = 50;

  interface UIEvent {
    targetTouches: {
      pageX: number;
      pageY: number;
      clientX: any;
    }[],
  }

  const onTouchStart = (e: UIEvent) => {
    if (window.innerWidth < 1024) {
      setTouchEnd(null);
      setTouchStart(e.targetTouches[0].clientX);
    }
  };

  const onTouchMove = (e: UIEvent) => setTouchEnd(e.targetTouches[0].clientX);
  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe || isRightSwipe) isLeftSwipe ? nextClick() : prevClick();
  };

  useEffect(() => {
    setActiveIndex((length - (items[0] % length)) % length);
  }, [items]);

  return (
      <div className='slider'>
        <MovieContent activeIndex={activeIndex} onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}/>
        <div className="slider__dots">
          {items.slice(0, length).map((pos, i) => (
              <button key={i} className={i === activeIndex ? 'dot active' : 'dot'}/>
          ))}
        </div>

        <div className="preview">
          <button className="preview__button preview__button-up" onClick={() => prevClick()}>
            <FaChevronUp/>
          </button>
          <div className="preview__img">
            {items.map((pos, i) => <MoviesPreview key={i} idx={i} pos={pos}/>)}
          </div>
          <button className="preview__button preview__button-down" onClick={() => nextClick()}>
            <FaChevronDown/>
          </button>
        </div>
      </div>
  );
};