import React from "react";
import {FaPlay} from "react-icons/fa";

import {createItem} from '../index'
import {IMovieContent} from "../../../types";

import './style.scss'

export const MovieContent = ({activeIndex, onTouchStart, onTouchMove, onTouchEnd}: IMovieContent) => {
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