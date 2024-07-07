import React from 'react'

const Reward = ({rewardName, amount, rewardType}) => {
  return (
    <div className="reward">
      <div>
        <h2>{rewardName}</h2>
        <h3 className={rewardType==="Premium Reward"? "gold":""}>{rewardType}</h3>
      </div>
      <div className="reward-right">
        <h2>₹{amount}</h2>
      </div>
    </div>
  );
}

export default Reward
