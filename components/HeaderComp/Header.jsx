'use client'
import React, { useState } from 'react'
import TopHeader from './TopHeader'
import BottomHeader from './BottomHeader'

const Header = () => {
  const [user, setUser] = useState(undefined);

  return (
    <div>
      <TopHeader user={user} setUser={setUser} />
      <BottomHeader setUser={setUser} />
    </div>
  )
}

export default Header