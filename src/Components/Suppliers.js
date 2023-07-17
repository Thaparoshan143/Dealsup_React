import React from 'react';
import "./Suppliers.css";
import { FaSearch } from 'react-icons/fa';
import { SupplierCard } from './Card';
import { GenerateRamdomVendor } from '../Data/Dealsup';

function Suppliers() {

  let _RandomSupplierList = GenerateRamdomVendor();

  return (
    <div className="page Suppliers flex-c-se-c">
        <h1 className="heading theme-text pCase">Suppliers at Dealsup</h1>
        <h2>Explore the food Suppliers of your choice</h2>
        <div className="Supplier-Wrapper flex-c-se-c">
            <div className="Supplier-Search search-sec flex-r-sb-c">
                <span className="theme-text">Filter by : </span>
                <input type="text" placeholder="City"/> 
                <input type="text" placeholder="Type"/> 
                <input type="text" placeholder="Price"/> 
                <a href={"#"}><FaSearch className="theme-icon icon-medium" /></a>
            </div>
            <div className="Supplier-List flex-r-se-c">
            {/* {_VednorsList.map(({name, thumbnailSrc, serve, description, ratings})=>{
                return <SupplierCard name={name} thumbnailSrc={thumbnailSrc} serve={serve} description={description} ratings={ratings} />
            })} */}
            {_RandomSupplierList.map(({name, thumbnailSrc, serve, description, ratings})=>{
                return <SupplierCard name={name} thumbnailSrc={thumbnailSrc} serve={serve} description={description} ratings={ratings} />
            })}
            </div>
        </div>
    </div>
  )
}

export default Suppliers