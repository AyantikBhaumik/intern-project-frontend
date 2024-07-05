import Image from 'next/image'
import React from 'react'

function profile() {
  return (
    <div className='profile'>
      <div className='profile-flexbox'>
        <Image
          src="https://i.pinimg.com/564x/9e/5b/c0/9e5bc04372764479079dcbd8f0196318.jpg"
          width={200}
          height={200}
        />
        <h2>username</h2>
      </div>
      <button>Upgrade to Premium Subscription</button>
    </div>
  );
}

export default profile
