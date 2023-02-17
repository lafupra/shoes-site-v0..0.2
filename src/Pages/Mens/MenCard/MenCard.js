import React from 'react'
import "./MenCard.css"
import {Link} from "react-router-dom"
import menshoes1 from "../../../Assets/compressed-images/MenCard-shoes11.jpg"

const MenCard = () => {
  const handleLinkClick = () => {
		window.scrollTo(0, 0);
	  };
  return (
    <>
   <div className="product-list-card">
  <div className="product-list-card-image">
  <Link to={'/singleproduct'} onClick={handleLinkClick}> <img src={menshoes1} alt="Professional Shoe"/></Link>
  </div>
  <div className="product-list-card-details">
    <h3 className="product-list-card-title">Professional Shoe</h3>
    <p className="product-list-card-price">$99.99</p>
    <p className="product-list-card-description"> they're both stylish and comfortable.</p>
    <Link to={'/singleproduct'} onClick={handleLinkClick}> <button className="product-list-card-button">Add to Cart</button></Link>
  </div>
</div>
    </>
  )
}

export default MenCard