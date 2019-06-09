import React, { FC, useState } from 'react'
import Surface from '../Surface'
import Button from '../Button'
import { TabsProvider } from './ context'

interface Props {
  currentTab: string | number
  onChange: Function
}

const Tabs: FC<Props> = ({ currentTab, onChange, children }) => {
  return (
    <Surface lifting={3} width="100%" style={{ padding: 0 }}>
      <TabsProvider
        value={{
          currentTab: currentTab,
          onChange: onChange,
        }}
      >
        {children}
      </TabsProvider>
    </Surface>
  )
}

export default Tabs
