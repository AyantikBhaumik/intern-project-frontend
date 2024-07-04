import React from 'react'

function newTransaction() {
  return (
    <form className="newTransaction">
      <h1>New Transaction</h1>
      <input type="text" placeholder="username" />
      <input type="text" placeholder='transaction to'/>
      <input type="text" placeholder="amount"/>
      <input type='text' placeholder='crypto'/>
      <input type='text' placeholder='network'/>
      <button>Perform Transaction</button>
    </form>
  );
}

export default newTransaction
