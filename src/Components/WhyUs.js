import React from 'react';
import "./WhyUs.css";
import {_WhyUsDescription} from "../Data/Dealsup"

function WhyUs() {
  return (
    <div className="WhyUs page flex-c-se-c">
        <h1 className="theme-text pCase heading">Why Choose Dealsup</h1>
        <p className="WhyUs-Desc">{_WhyUsDescription}</p>
    </div>
  )
}

export default WhyUs