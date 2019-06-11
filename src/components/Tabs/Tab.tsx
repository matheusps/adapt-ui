import React, { FC, useContext } from 'react'
import Button from '../Button'
import TabsContext from './ context'

const Tab: FC<TabProps> = ({ id, label }) => {
  const { currentTab, onChange } = useContext(TabsContext)
  const handleClick = () => {
    onChange(id)
  }
  return (
    <Button
      onClick={handleClick}
      kind="ghost"
      style={{ backgroundColor: currentTab === id ? 'blue' : 'pink' }}
    >
      {label}
    </Button>
  )
}

export default Tab
