import React from 'react';
import "./Vendors.css";
import "../uni.css";
import { VendorCard } from './Card';
import { _VednorsList, GenerateRamdomVendor } from '../Data/Dealsup';
import { FaSearch } from 'react-icons/fa';

function Vendors() {
  let _RandomVendorList = GenerateRamdomVendor();

  return (
    <div className="page Vendors flex-c-se-c">
      <h1 className='heading theme-text pCase'>VENDORS AT DEALSUP</h1>
      <h2>Explore the food vendors of your choice</h2>
      <div className="Vendors-Wrapper flex-c-se-c">
        <div className="Vendor-Search search-sec flex-r-sb-c">
            <span className="theme-text">Filter by : </span>
            <input type="text" placeholder="City"/> 
            <input type="text" placeholder="Type"/> 
            <input type="text" placeholder="Price"/> 
            <a href={"#"}><FaSearch className="theme-icon icon-medium" /></a>
        </div>
        <div className="Vendor-List flex-r-se-c">
          {/* {_VednorsList.map(({name, thumbnailSrc, serve, description, ratings})=>{
            return <VendorCard name={name} thumbnailSrc={thumbnailSrc} serve={serve} description={description} ratings={ratings} />
          })} */}
          {_RandomVendorList.map(({name, thumbnailSrc, serve, description, ratings})=>{
            return <VendorCard name={name} thumbnailSrc={thumbnailSrc} serve={serve} description={description} ratings={ratings} />
          })}
        </div>
      </div>
    </div>
  )
}

export default Vendors