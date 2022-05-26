import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import {Slider} from '../Slider/slider'

import './style.scss';

export const App = () => {

  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Slider />} />
        </Routes>
      </BrowserRouter>
  )
}
