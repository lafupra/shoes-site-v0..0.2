import React from 'react'
import "./SingleProduct.css"
import {Link} from "react-router-dom"
import cartimg1 from "../../Assets/compressed-images/cart-image1.png"

const SingleProduct = () => {
  return (
    <>
    <div className="single-product-container">
		<div className="product-image">
			<img src={cartimg1} alt="Product Name"/>
		</div>
		<div className="product-details">
			<h2>Product Name</h2>
			<p className="price">$99.99</p>
			<p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum orci felis, a cursus risus sagittis ac. Aenean quis tellus a elit porttitor facilisis.</p>
			<form>
				<label for="size">Size:</label>
				<select id="size" name="size">
					<option value="7">7</option>
					<option value="8">8</option>
					<option value="9">9</option>
					<option value="10">10</option>
				</select>
				<Link className="link"  to={"/cart"}><button type="submit">Add to Cart</button></Link>
			</form>
		</div>
	</div>
    </>
  )
}

export default SingleProduct