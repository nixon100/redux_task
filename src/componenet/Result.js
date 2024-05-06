import React from 'react'
import { useSelector } from 'react-redux'
const Result = () => {
  const tasksList = useSelector((state) => state.Arrive?.tasksList) || []

  return (
    <div className="CartContainer">
    <div className="Header">
      <h3 className="Heading">Shopping Cart</h3>
      <h5 className="Action">Remove all</h5>
    </div>

    <hr />
    <div className="checkout">
      <div className="total">
        <div>
          <div className="Subtotal">Sub-Total</div>
          <div className="items">{tasksList.length > 1 ? `${tasksList.length} items` : `${tasksList.length} item`}</div>
        </div>
        <div className="total-amount"></div>
      </div>
      <button className="button">Checkout</button>
    </div>
  </div>
  )
}

export default Result