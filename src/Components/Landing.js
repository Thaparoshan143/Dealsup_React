import "./Landing.css";
import "../uni.css";
import { FaSearch, FaShoppingBasket } from 'react-icons/fa';
import { useState } from "react";
import {InfoCard} from "./Card";
import { _OutlineInfo } from "../Data/Dealsup";

function Landing() {

  const [prodName, setProdName] = useState("");

  function updateProdName(name)
  {
    console.log(name);
    setProdName(name);
  }

  function searchProduct()
  {
    let alertMsg = "Searching work on progress. Your product name is : " + prodName;
    alert(alertMsg);
  }

  return (
    <>
    <div className="Landing flex-c-se-c">
        <div className="bg"></div>
        <div className="Search-Section page flex-c-se-c">
          <h1 className="theme-text">Dealsup</h1>
          <div className="Search-Wrapper">
              <div className="flex-r-sb-c">
                  <input type="text" placeholder="Search product that you want here.." onChange={(e)=>updateProdName(e.target.value)}/>
                  <a onClick={searchProduct} className="flex-r-se-c"><FaSearch className="Search-Icon" /></a>
              </div>
          </div>
          <a className="theme-button" href={"#More"}>Explore More</a>
        </div>
        <div className="Explore-More page flex-c-se-c" id="More">
          <h1>What's in Dealsup</h1>
          <div className="More-Info">
            <h3>As Vendor : </h3>
            <p>Seek for the supplier that you want for your product and bid the price for buying.</p>
            <h3>As Suppliers : </h3>
            <p>Seek for the Vendors that you want to deliver your product and set the price for selling.</p>
          </div>
          <div className="flex-r-se-c Outline-Info">
            {_OutlineInfo.map(({title,count})=>{
              return (
                <InfoCard img={<FaShoppingBasket style={{fontSize:"5rem"}} />} title={title} count={count} />
              )
            })}
          </div>
          <p>Ideal marketplace for both buyers and seller to meet their smooth out their business</p>
        </div>
    </div>
    </>
  )
}

export default Landing