import React, { FC, useContext } from 'react'
import Button from '../Button'
import TabsContext from './ context'

interface Props {
  id: string | number
  label: string
  icon?: string
}

const Tab: FC<Props> = ({ id, label }) => {
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
