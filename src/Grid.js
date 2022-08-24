import React from 'react'
import './css/fonts.css';   
import './css/Grid.css';    

import HorizontalBarGraph from '@chartiful/react-horizontal-bar-graph'

export default function Grid () {
  
  return (
    <><><div className="grid-container">
      <div className="item"></div>
      <div class="mid-col">Current Season</div>
      <div className="item"></div>
      <div className="item"></div> 
      <div class="mid-col">All Time</div>
      <div className="item"></div>
    </div></></> 
  )
}