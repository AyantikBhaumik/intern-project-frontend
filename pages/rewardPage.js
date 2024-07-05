import Reward from '@/src/components/reward/reward';
import Transaction from '@/src/components/transaction/transaction';
import React from 'react'

function rewardPage() {
  return (
    <div className="transactionHome">
      <Reward rewardName="Reward A" amount="20.00" />
      <Reward rewardName="Reward A" amount="20.00" />
      <Reward rewardName="Reward A" amount="20.00" />
      <Reward rewardName="Reward A" amount="20.00" />
      <Reward rewardName="Reward A" amount="20.00" />
    </div>
  );
}

export default rewardPage
