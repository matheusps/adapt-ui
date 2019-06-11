import React, { FC } from 'react'
import Surface from '../Surface'
import { TabsProvider } from './ context'

const Tabs: FC<TabsProps> = ({
  currentTab,
  onChange,
  position,
  fixed,
  children,
}) => {
  return (
    <Surface
      lifting={3}
      width="100%"
      style={{ padding: 0, border: 0, borderRadius: 0 }}
    >
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
