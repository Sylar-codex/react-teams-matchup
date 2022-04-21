import React from 'react'
import './css/fonts.css';   
import './css/Grid.css';   
import basketball from './img/basketball.svg';

import HorizontalBarGraph from '@chartiful/react-horizontal-bar-graph'

export default function Grid () {
  
  return (
    <><div className="image-container">
      <div><img src="img/basketball-png.png" class="gallery-img" alt="no team" /></div>
      <div className="item">vs</div>
      <div><img src="img/basketball-png.png" class="gallery-img" alt="no team" /></div>
      <div className="item">submit</div>
      <div className="item">share</div>
      <div className="item">reset</div>

      <div className="grid-divider-dottted"></div>
    </div><div className="grid-container">

        <div className="item">Graph 1</div>
        <div className="item">Current Season</div>
        <div className="item">Graph 2</div>
        <div className="item">Graph 3</div>
        <div className="item">Last 5 Season</div>
        <div className="item">Graph 4</div>
        <div className="item">Graph 6</div>
        <div className="item">All Time</div>
        <div className="item">Graph 7</div>
        <div className="item">Graph 8</div>
        <div className="item">Year Established</div>
        <div className="item">Graph 9</div>
        <div className="item">Graph 10</div>
        <div className="item">Championships</div>
        <div className="item">Graph 11</div>
      </div></>
  )
}