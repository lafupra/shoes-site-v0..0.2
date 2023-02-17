import React from 'react'
import "./Men.css"
import MenCard from './MenCard/MenCard'

const Men = () => {
  return (
   <>

   <div className="men-section">
    {/* filter sidebar */}
   <div className="filter-menu">
  <h3>Filter Results</h3>
  <div className="filter-price">
    <h4>Price Range</h4>
    <ul>
      <li><label for="price-1"><input type="checkbox" id="price-1"/> Under $50</label></li>
      <li><label for="price-2"><input type="checkbox" id="price-2"/> $50-$100</label></li>
      <li><label for="price-3"><input type="checkbox" id="price-3"/> $100-$200</label></li>
      <li><label for="price-4"><input type="checkbox" id="price-4"/> Over $200</label></li>
    </ul>
  </div>
  <div className="filter-color">
    <h4>Color</h4>
    <ul>
      <li><label for="color-black"><input type="checkbox" id="color-black"/> Black</label></li>
      <li><label for="color-brown"><input type="checkbox" id="color-brown"/> Brown</label></li>
      <li><label for="color-tan"><input type="checkbox" id="color-tan"/> Tan</label></li>
      <li><label for="color-gray"><input type="checkbox" id="color-gray"/> Gray</label></li>
    </ul>
  </div>
  <button className="filter-button">Apply Filters</button>
</div>

{/* product section */}

<div className="men-products">
     <MenCard/>
     <MenCard/> 
     <MenCard/>
     <MenCard/>
     <MenCard/>
     <MenCard/>
     <MenCard/>
     <MenCard/> 
     <MenCard/>
     <MenCard/>
     <MenCard/>
     <MenCard/>
</div>

   </div>

   </>
  )
}

export default Men