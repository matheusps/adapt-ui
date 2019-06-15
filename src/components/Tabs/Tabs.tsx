import React, { FC } from 'react'
import Surface from '../Surface'
import { TabsProvider } from './ context'

const Tabs: FC<TabsProps> = ({
  activeTab,
  onTabClick,
  position,
  fixed,
  children,
}) => {
  return (
    <Surface lifting="lg" width="100%">
      <TabsProvider
        value={{
          activeTab,
          onTabClick,
        }}
      >
        {children}
      </TabsProvider>
    </Surface>
  )
}

export default Tabs
