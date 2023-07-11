import "./Landing.css";
import "../uni.css";

import React from 'react'

function Landing() {
  return (
    <>
    <div className="page Landing flex-c-se-c">
        <div className="bg"></div>
        <h1 className="theme-text">Dealsup</h1>
        <div className="Search-Wrapper flex-r-se-c">
            <input type="text" placeholder="Search product that you want here.."/>
        </div>

        <a className="theme-button" href={"./home"}>Explore More</a>
    </div>
    </>
  )
}

export default Landing