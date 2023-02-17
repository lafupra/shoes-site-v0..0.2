import React from 'react'
import "./Checkout.css"

const CheckOut = () => {
  return (
   <>
   <div className="checkout-section">
  <h2 className="checkout-title">Checkout</h2>
  <form className="checkout-form">
    <div className="form-group">
      <label className="form-label" for="name">Name:</label>
      <input className="form-input" type="text" id="name" name="name" required/>
    </div>
    <div className="form-group">
      <label className="form-label" for="email">Email:</label>
      <input className="form-input" type="email" id="email" name="email" required/>
    </div>
    <div className="form-group">
      <label className="form-label" for="address">Address:</label>
      <input className="form-input" type="text" id="address" name="address" required/>
    </div>
    <div className="form-group">
      <label className="form-label" for="city">City:</label>
      <input className="form-input" type="text" id="city" name="city" required/>
    </div>
    <div className="form-group">
      <label className="form-label" for="state">State:</label>
      <input className="form-input" type="text" id="state" name="state" required/>
    </div>
    <div className="form-group">
      <label className="form-label" for="zip">Zip Code:</label>
      <input className="form-input" type="text" id="zip" name="zip" required/>
    </div>
    <div className="form-group">
      <label className="form-label" for="card-number">Card Number:</label>
      <input className="form-input" type="text" id="card-number" name="card-number" required/>
    </div>
    <div className="form-group">
      <label className="form-label" for="expiration-date">Expiration Date:</label>
      <input className="form-input" type="text" id="expiration-date" name="expiration-date" required/>
    </div>
    <div className="form-group">
      <label className="form-label" for="cvv">CVV:</label>
      <input className="form-input" type="text" id="cvv" name="cvv" required/>
    </div>
    
  
        
  </form>
  <button className="checkout-button" type="submit">Place Order</button>
</div>
   </>
  )
}

export default CheckOut