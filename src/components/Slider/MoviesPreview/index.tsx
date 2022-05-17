import React from "react";

import {createItem} from '../index'
import {IMoviesPreview} from "../../../types";

import './style.scss'

export const MoviesPreview = ({pos, idx}: IMoviesPreview) => {
  const item = createItem(pos, idx);
  return (
      <div className="preview__slide-item" style={item.styles}>
        <div className="preview__img">
          <div className="preview__info">
            <h3 className="title preview__title">{item.movie.title}</h3>
            <button className="gen-button preview__button-genre">Action</button>
          </div>
          <img src={item.movie.image} alt={item.movie.title}/>
        </div>
      </div>
  );
};