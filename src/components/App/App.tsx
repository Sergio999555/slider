import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import {Slider} from '../Slider'

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
