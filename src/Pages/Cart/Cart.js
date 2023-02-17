import React from 'react'
import "./Cart.css"
import {Link} from "react-router-dom"
import cartimg1 from "../../Assets/compressed-images/cart-image1.png"
import cartimg2 from "../../Assets/compressed-images/cart-image2.jpg"


const Cart = () => {
  const handleLinkClick = () => {
    window.scrollTo(0,0)
  }
  return (
    <>
    <div className="cart-section">
  <h2>Shopping Cart</h2>
  <table className="cart-table">
    <thead>
      <tr>
        <th>Product</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Total</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <div className="cart-item">
            <img src={cartimg1} alt="Shoe"/>
            <div className="cart-item-details">
              <h3>Product Name</h3>
              <p>Size: 8.5</p>
              <button className="cart-button-small">Remove</button>
            </div>
          </div>
        </td>
        <td>$99.99</td>
        <td>
          <input type="number" min="1" value="1"/>
        </td>
        <td>$99.99</td>
      </tr>
      <tr>
        <td>
          <div className="cart-item">
            <img src={cartimg2} alt="Shoe"/>
            <div className="cart-item-details">
              <h3>Product Name</h3>
              <p>Size: 9</p>
              <button className="cart-button-small">Remove</button>
            </div>
          </div>
        </td>
        <td>$129.99</td>
        <td>
          <input type="number" min="1" value="1"/>
        </td>
        <td>$129.99</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td colspan="3">Subtotal</td>
        <td>$229.98</td>
      </tr>
      <tr>
        <td colspan="3">Shipping</td>
        <td>$0.00</td>
      </tr>
      <tr>
        <td colspan="3">Total</td>
        <td>$229.98</td>
      </tr>
    </tfoot>
  </table>
  <div className="cart-buttons">
    <Link className="link" to={'/'} onClick={handleLinkClick}><button  className="cart-button">Continue Shopping</button></Link>
    <Link className="link" to={'/checkout'} onClick={handleLinkClick}><button  className="cart-button">Checkout</button></Link>
  </div>
</div>
    </>
  )
}

export default Cart