import React from 'react'

const Transaction = ({store, amount, crypto}) => {
  return (
    <div class="container">
      <h2>To: {store}</h2>
      <div class="right-side">
        <h3>₹{amount}</h3>
        <h3>{crypto}</h3>
      </div>
    </div>
  );
}

export default Transaction

