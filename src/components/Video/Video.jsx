import React from 'react';
import {Link} from "react-router-dom";

import './Video.scss'

export const Video = () => {

  return (
    <div className='player'>
      <video controls className='player__container' src='/Videos/testvideo.mp4' type="video/mp4"/>
      {/*временная кнопка для удобства*/}
      <Link to='/'>
        <button className='player__button'>X</button>
      </Link>
    </div>
  )
};
