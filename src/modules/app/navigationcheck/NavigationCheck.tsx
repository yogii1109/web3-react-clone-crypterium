import React, { useState } from 'react'
import { Navigation } from '../navigation/Navigation'
import { SideBar } from '../sidebar/SideBar'

export const NavigationCheck: React.FC = () => {
  const [sideBarActive, setSideBarActive] = useState<boolean>(false)

  return (
    <>
      <Navigation sideBarActive={sideBarActive} setSideBarActive={setSideBarActive} />
      {sideBarActive && <SideBar />}
    </>
  )
}
