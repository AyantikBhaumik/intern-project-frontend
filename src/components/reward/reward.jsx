import React from 'react'

const Reward = ({rewardName, amount}) => {
  return (
    <div className="reward">
      <h2>{rewardName}</h2>
      <div className="reward-right">
        <h2>₹{amount}</h2>
      </div>
    </div>
  );
}

export default Reward
