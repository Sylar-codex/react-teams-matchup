import React from 'react'
import './css/fonts.css';   
import './css/Grid.css';   
import basketball from './img/basketball.svg';

export default function Grid () {
  
  return (
    <><div className="image-container">  
      <div className="item">Image placeholder</div>
      <div className="item">vs</div> 
      <div className="item">Image placeholder</div>
      <br />
    </div>
    <div className="grid-container">
        <div className="item">Pick Team 1</div>
        <div className="item">submit button</div>
        <div className="item">Pick Team 2</div>

        <div className="item">Graph </div>
        <div className="item">Points</div>
        <div className="item">Pick Team 2</div>

        <div className="item">Pick Team 1</div>
        <div className="item">Wins</div>
        <div className="item">Pick Team 2</div>

        <div className="item">Pick Team 1</div>
        <div className="item">Losses</div>
        <div className="item">Pick Team 2</div>

        <div className="item">Pick Team 1</div>
        <div className="item">Year Established</div>
        <div className="item">Pick Team 2</div>

        <div className="item">Pick Team 1</div>
        <div className="item">Championships</div>
        <div className="item">Pick Team 2</div>
        <br />
      </div></>
  )
}