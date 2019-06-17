import React, { FC, useContext } from 'react'

import { TabsContext } from './context'

const Tab: FC<TabProps> = ({ id, label }) => {
  const { activeTab, onTabClick } = useContext(TabsContext)
  const handleClick = () => {
    onTabClick(id)
  }
  const isActive = activeTab === id

  return (
    <button
      onClick={handleClick}
      style={{ backgroundColor: isActive ? 'blue' : 'pink' }}
    >
      {label}
    </button>
  )
}

export { Tab }
