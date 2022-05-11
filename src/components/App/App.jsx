import React from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import {Slider} from '../Slider/Slider'
import {Video} from '../Video/Video'

import './App.scss';

export const App = () => {

  return (
      <BrowserRouter>
        <Routes>
          {/*временный роут*/}
          <Route path='/' element={<Slider/>}/>
          <Route path='/video/' element={<Video/>}/>
        </Routes>
      </BrowserRouter>
  );
}
