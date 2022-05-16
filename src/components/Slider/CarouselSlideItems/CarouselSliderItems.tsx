import {FaPlay} from "react-icons/fa";
import React from "react";

import {createItem} from '../index'

interface ICarouselSlideItem {
  activeIndex: number,
  onTouchStart: any,
  onTouchMove: any,
  onTouchEnd: any
}

export const CarouselSlideItem = ({activeIndex, onTouchStart, onTouchMove, onTouchEnd}: ICarouselSlideItem) => {
  const item = createItem(0, activeIndex);
  return (
      <div
          className="slider__img-container"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
      >
        <div className="slider__description">
          <div className="title slider__title">{item.movie.title}</div>
          <span className="slider__text">
            Streamlab is a long established fact that a reader will be distracted by the readable content of a page when
            Streamlab at its layout Streamlab.
          </span>
          <button className="gen-button slider__button">
            <FaPlay/>
            play now
          </button>
        </div>
        <div className="slider__img">
          <img src={item.movie.image} alt={item.movie.title}/>
        </div>
      </div>
  );
};

interface ICarouselSlideItems {
  pos: number,
  idx: number
}

export const CarouselSlideItems = ({pos, idx}: ICarouselSlideItems) => {
  const item = createItem(pos, idx);
  return (
      <div className="carousel__slide-item" style={item.styles}>
        <div className="preview__img">
          <div className="preview__info">
            <h3 className="title preview__title">{item.movie.title}</h3>
            <span className="preview__duration">{item.movie.duration}</span>
            <button className="gen-button preview__button-genre">Action</button>
          </div>
          <img src={item.movie.image} alt={item.movie.title}/>
        </div>
      </div>
  );
};